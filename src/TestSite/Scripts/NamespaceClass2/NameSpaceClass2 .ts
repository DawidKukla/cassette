import {SimpleModule} from "../SimpleModule/SimpleModule";

namespace NamespaceClass2{
    import SimpleModuleClass = SimpleModule.SimpleModuleClass;

    export class NamespaceClass2 {
        constructor(){
            this.Log();
        }
        Log(){
            var dep=new SimpleModuleClass()
            console.log("NamespaceClass2")
        }
    }
    new NamespaceClass2().Log();
}   

