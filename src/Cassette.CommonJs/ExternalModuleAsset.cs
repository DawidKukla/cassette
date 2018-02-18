﻿using Cassette.IO;

namespace Cassette.CommonJs
{
  internal class ExternalModuleAsset : FileAsset, IModuleAsset
  {
    public ExternalModuleAsset(string moduleName, IFile sourceFile, Bundle parentBundle) : base(sourceFile, parentBundle)
    {
      this.ModuleName = moduleName;
    }

    public string ModuleName { get; set; }
  }
}