using Cassette;
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
}