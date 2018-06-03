using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace Cassette.CommonJs
{
    public class SourceMapRewriter
    {
        const string SOURCE_MAP_DATA_START = "//# sourceMappingURL=data:application/json;base64,";
        readonly CompositeSourceMap compositeSourceMap = new CompositeSourceMap();

        public MemoryStream Rewrite(MemoryStream stream)
        {
            var rewritedStream = new MemoryStream();

            var counter = 1;
            var offset = 0;

            var writer = new StreamWriter(rewritedStream);
            using (var reader = new StreamReader(stream))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    if (line.EndsWith(CommonJsWriter.LOCAL_REQUIRE_SCRIPT_START))
                    {
                        offset = counter;
                        writer.WriteLine(line);
                    }
                    else if (line.StartsWith(SOURCE_MAP_DATA_START))
                    {
                        var data = Convert.FromBase64String(line.Substring(SOURCE_MAP_DATA_START.Length,
                            line.Length - SOURCE_MAP_DATA_START.Length));
                        var decodedString = Encoding.UTF8.GetString(data);
                        var sourceMap = JsonConvert.DeserializeObject<SourceMap>(decodedString);

                        compositeSourceMap.sections.Add(new Section
                        {
                            offset = new Offset { line = offset, column = 0 },
                            map = sourceMap
                        });

                        RemoveMap(writer);
                    }
                    else
                    {
                        writer.WriteLine(line);
                    }

                    counter++;
                }

                if (compositeSourceMap.sections.Any())
                {
                    var lastSection = compositeSourceMap.sections.Last();

                    compositeSourceMap.version = lastSection.map.version;
                    compositeSourceMap.file = lastSection.map.file;
                    compositeSourceMap.sections.Select(x => x.map).ToList()
                        .ForEach(m => { m.file = lastSection.map.file; });

                    var newMapData =
                        Convert.ToBase64String(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(compositeSourceMap)));
                    writer.WriteLine(SOURCE_MAP_DATA_START + newMapData);
                }
            }

            writer.Flush();
            rewritedStream.Position = 0;
            return rewritedStream;
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

        class SourceMap
        {
            public int version { get; set; }
            public string file { get; set; }
            public List<string> sources { get; set; }
            public List<object> names { get; set; }
            public string mappings { get; set; }
            public List<string> sourcesContent { get; set; }
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
            public List<Section> sections { get; set; }
        }
    }
}