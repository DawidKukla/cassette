using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Cassette.Utilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Cassette.CommonJs
{
  public class CommonJsWriter : ICommonJsWriter
  {
    private readonly CommonJsSettings _settings;
    const string SOURCE_MAP_DATA_START = "//# sourceMappingURL=data:application/json;base64,";

    public CommonJsWriter(CommonJsSettings settings)
    {
      _settings = settings;
    }

    public void WriteToStream(Stream stream, IEnumerable<IAsset> assets)
    {
      var requireShim = this.GetType().Assembly.GetManifestResourceStream("Cassette.CommonJs.Resources.require-shim.js").ReadToEnd();

      var writer = new StreamWriter(stream);
      writer.Write("var require = ");
      writer.Write(requireShim);

      writer.Write("(this, {");
      _settings.Globals.WriteCollection(writer, (w, g) => writer.WriteFormat("\"{0}\": \"{1}\"", g.Key, g.Value));

      writer.Write("}, [");
      assets.WriteCollection(writer, this.WriteAsset);
      writer.Write("]);");

      writer.Flush();
      stream.Position = 0;
    }

    private void WriteAsset(StreamWriter writer, IAsset asset)
    {
      writer.Write("{");
      writer.WriteLine();
      writer.Write("  path: ");

      string path = asset.Path;
      var externalAsset = asset as ExternalModuleAsset;
      if (externalAsset != null)
      {
        path = externalAsset.ModuleName;
      }

      writer.JavaScriptStringEncodeQuoted(path);
      writer.Write(",");
      writer.WriteLine();

      writer.Write("  body: function (require, module, exports) {{ // start {0}", asset.Path);
      writer.WriteLine();

      
      using (var reader = new StreamReader(asset.OpenStream()))
      {
        string line;
        while ((line = reader.ReadLine()) != null)
        {
          
          if (line.StartsWith(SOURCE_MAP_DATA_START))
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
          }
          writer.Write(line);
          writer.WriteLine();
        }
      }

      writer.WriteLine();
      writer.WriteFormat("  }}, // end {0}", asset.Path);  // end body
      writer.WriteLine();

      writer.Write("  refs: {");
      writer.WriteLine();

      asset.References.WriteCollection(writer, (w, r) =>
      {
        var relativePath = FileUtility.ServerPathToCommonJsPath(r.FromAssetPath, r.ToPath);

        writer.Write("    ");
        writer.JavaScriptStringEncodeQuoted(relativePath);
        writer.Write(": ");
        writer.JavaScriptStringEncodeQuoted(r.ToPath);
      });

      writer.Write("  }"); // end refs
      
      writer.WriteLine();
      writer.Write("}");
    }
  }
}
