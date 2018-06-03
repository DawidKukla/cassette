using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace Cassette.CommonJs
{
    public class SourceMapRewriter : ISourceMapRewriter
    {
        const string SOURCE_MAP_DATA_START = "//# sourceMappingURL=data:application/json;base64,";
        CompositeSourceMap _compositeSourceMap;

        public MemoryStream Rewrite(MemoryStream stream)
        {
            var rewritedStream = new MemoryStream();
            _compositeSourceMap= new CompositeSourceMap();
            
            var counter = 1;
            var lineOffset = 0;

            var writer = new StreamWriter(rewritedStream);
            using (var reader = new StreamReader(stream))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    if (line.EndsWith(CommonJsWriter.LOCAL_REQUIRE_SCRIPT_START))
                    {
                        lineOffset = MarkOffset(counter, writer, line);
                    }
                    else if (line.StartsWith(SOURCE_MAP_DATA_START))
                    {
                        ExtractMap(line, lineOffset);
                        RemoveMap(writer);
                    }
                    else
                    {
                        writer.WriteLine(line);
                    }

                    counter++;
                }

                WriteCompositeMap(writer);
            }

            writer.Flush();
            rewritedStream.Position = 0;
            return rewritedStream;
        }

        void WriteCompositeMap(StreamWriter writer)
        {
            if (!_compositeSourceMap.sections.Any()) return;
            RewriteOrginalFileNameUsingLastSection();
            var serializedSourceMap = SerializeToJSON();
            var newMapData = EncodeBase64(serializedSourceMap);
            writer.WriteLine(SOURCE_MAP_DATA_START + newMapData);
        }

        string EncodeBase64(string serializedSourceMap)
        {
            var newMapData =
                Convert.ToBase64String(Encoding.UTF8.GetBytes(serializedSourceMap));
            return newMapData;
        }

        string SerializeToJSON()
        {
            var serializedSourceMap = JsonConvert.SerializeObject(_compositeSourceMap);
            return serializedSourceMap;
        }

        void RewriteOrginalFileNameUsingLastSection()
        {
            var lastSection = _compositeSourceMap.sections.Last();

            _compositeSourceMap.version = lastSection.map.version;
            _compositeSourceMap.file = lastSection.map.file;
            _compositeSourceMap.sections.Select(x => x.map).ToList()
                .ForEach(m => { m.file = lastSection.map.file; });
        }

        void ExtractMap(string line, int lineOffset)
        {
            var data = Convert.FromBase64String(line.Substring(SOURCE_MAP_DATA_START.Length,
                line.Length - SOURCE_MAP_DATA_START.Length));
            var decodedString = Encoding.UTF8.GetString(data);
            var sourceMap = JsonConvert.DeserializeObject<SourceMap>(decodedString);

            _compositeSourceMap.sections.Add(new Section
            {
                offset = new Offset { line = lineOffset, column = 0 },
                map = sourceMap
            });
        }

        int MarkOffset(int counter, StreamWriter writer, string line)
        {
            var lineOffset = counter;
            writer.WriteLine(line);
            return lineOffset;
        }

        static void RemoveMap(StreamWriter writer)
        {
            writer.WriteLine("");
        }

        class Offset
        {
            public int line { get; set; }
            public int column { get; set; }
        }

        [SuppressMessage("ReSharper", "ClassNeverInstantiated.Local")]
        class SourceMap
        {
            public int version { get; set; }
            public string file { get; set; }
            public List<string> sources { get; set; } = new List<string>();
            public List<object> names { get; set; } = new List<object>();
            public string mappings { get; set; }
            public List<string> sourcesContent { get; set; } = new List<string>();
        }

        class Section
        {
            public Offset offset { get; set; }
            public SourceMap map { get; set; }
        }

        class CompositeSourceMap
        {
            public int version { get; set; }
            public string file { get; set; }
            public List<Section> sections { get; } = new List<Section>();
        }
    }
}