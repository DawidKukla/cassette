using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Cassette;
using Cassette.BundleProcessing;
using Cassette.IO;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace TestSite
{
    public class CassetteConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            bundles.AddPerSubDirectory<ScriptBundle>("Scripts", new FileSearch
            {
                Pattern = "*.js;*.min.js;",
                Exclude = new Regex("Circular.*|BundleRoot.*") // Optional
            });
            bundles.Add<ScriptBundle>("BundleRoot",new List<string>{"~/BundleRoot.js"});
            bundles.AddPerSubDirectory<StylesheetBundle>("Content");
            /*foreach (var scriptBundle in bundles.OfType<ScriptBundle>())
            {
                if (scriptBundle.Path != "~/BundleRoot")
                {
                    scriptBundle.Assets.Add(new ResourceAsset("TestSite.BundleRoot.js", GetType().Assembly));
                }
            }*/
        }
        
        
    }
    public class ParseJavaScriptNotTypeScriptReferences : ParseJavaScriptReferences
    {
        protected override bool ShouldAddReference(string referencePath)
        {
            return !referencePath.EndsWith(".ts", StringComparison.OrdinalIgnoreCase); // Will exclude TypeScript files from being served
        }
    }
    
    public class InsertIntoPipelineParseJavaScriptNotTypeScriptReferences : IBundlePipelineModifier<ScriptBundle>
    {
        public IBundlePipeline<ScriptBundle> Modify(IBundlePipeline<ScriptBundle> pipeline)
        {
            var positionOfJavaScriptReferenceParser = pipeline.IndexOf<ParseJavaScriptReferences>();

            pipeline.RemoveAt(positionOfJavaScriptReferenceParser);
            pipeline.Insert<ParseJavaScriptNotTypeScriptReferences>(positionOfJavaScriptReferenceParser);
            return pipeline;
        }
    }
    
    
    
}