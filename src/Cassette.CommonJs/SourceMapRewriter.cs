using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;

namespace Cassette.CommonJs
{
   public  class SourceMapRewriter
   {
        const string ASSET_START = "// start";
        const string ASSET_END = "// end";
        const string SOURCE_MAP_DATA_START = "//# sourceMappingURL=data:application/json;base64,";
        
        public  MemoryStream Rewrite(MemoryStream stream)
        {
            var rewritedStream = new MemoryStream();
            var newSourceMapLines = new LinkedList<string>();
            var newSourceContent = new List<string>();
            var newSources = new List<string>();
            var counter = 1;
            var startIndex = 1;
            var endIndex = 1;
            var sourceMapIndex = 1;
            var insideScript = false;
            var insideRequireManifest = true;
            var gap = 0;
            JToken mapJsonOject = null;
            StreamWriter writer = new StreamWriter(rewritedStream);
            using (StreamReader reader = new StreamReader(stream))
            {
                string line;
                while((line = reader.ReadLine()) != null)  
                {
                    if (line.Contains(ASSET_START))
                    {
                        insideScript = true;
                        gap++;
                        if (insideRequireManifest)
                        {
                            Enumerable.Range(0,gap).ToList().ForEach(x=>newSourceMapLines.AddLast(""));
                            insideRequireManifest = false;
                            gap = 0;
                        }
                        writer.WriteLine(line);
                       
                    }

                    else if (line.Contains(ASSET_END))
                    {
                        insideScript = false;
                        writer.WriteLine(line);
                       
                    }
                    else if (line.StartsWith(SOURCE_MAP_DATA_START))
                    {
                        byte[] data = Convert.FromBase64String(line.Substring(SOURCE_MAP_DATA_START.Length,line.Length-SOURCE_MAP_DATA_START.Length));
                        string decodedString = Encoding.UTF8.GetString(data);
                        mapJsonOject = JToken.Parse(decodedString);
                        var sourceMapLines = new List<string>(mapJsonOject["mappings"].Value<string>().Split(';'));
                        Enumerable.Range(0,gap).ToList().ForEach(x=>newSourceMapLines.AddLast(""));
                        gap = 0;
                        sourceMapLines.ForEach(l=>newSourceMapLines.AddLast(l));
                        newSources.Add(mapJsonOject["sources"].Value<JArray>()[0].ToString());
                        newSourceContent.Add(mapJsonOject["sourcesContent"].Value<JArray>()[0].ToString());
                        writer.WriteLine("");
                    }
                    else
                    {
                        if (!insideScript)
                        {
                            gap++;
                        }
                        writer.WriteLine(line);
                    }
                    
                    

                    counter++;
                }

                if (mapJsonOject!=null)
                {
                    mapJsonOject["mappings"].Replace(new JValue(string.Join(";",newSourceMapLines)));
                    mapJsonOject["sources"].Replace(new JArray(newSources.Select(JToken.FromObject)));
                    mapJsonOject["sourcesContent"].Replace(new JArray(newSourceContent.Select(JToken.FromObject)));
                    var newMapData = Convert.ToBase64String(Encoding.UTF8.GetBytes(mapJsonOject.ToString()));
                    writer.WriteLine(SOURCE_MAP_DATA_START + newMapData);
                }
               
            }
            writer.Flush();
            rewritedStream.Position = 0;
            return rewritedStream;
        }

       public void X()
       {
           /*if (line.StartsWith(SOURCE_MAP_DATA_START))
           {
               byte[] data = Convert.FromBase64String(line.Substring(SOURCE_MAP_DATA_START.Length,line.Length-SOURCE_MAP_DATA_START.Length));
               string decodedString = Encoding.UTF8.GetString(data);
               var mapJsonOject = JToken.Parse(decodedString);
               var lines =new LinkedList<string>(mapJsonOject["mappings"].Value<string>().Split(';'));
               foreach (var i in Enumerable.Range(1,60))
               {
                   lines.AddFirst("");
               }
               mapJsonOject["mappings"].Replace(new JValue(string.Join(";",lines)));
               var newMapData = Convert.ToBase64String(Encoding.UTF8.GetBytes(mapJsonOject.ToString()));
               line = SOURCE_MAP_DATA_START + newMapData;
           }*/
       }
    }
}