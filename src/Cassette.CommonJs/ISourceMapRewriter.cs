using System.IO;

namespace Cassette.CommonJs
{
    public interface ISourceMapRewriter
    {
        MemoryStream Rewrite(MemoryStream stream);
    }
}