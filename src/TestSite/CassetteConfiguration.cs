using System;
using Cassette;
using Cassette.BundleProcessing;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace TestSite
{
    public class CassetteConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            bundles.AddPerSubDirectory<ScriptBundle>("Scripts");
            bundles.AddPerSubDirectory<StylesheetBundle>("Content");
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