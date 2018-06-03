// @reference ~/Scripts
import {BundleRoot} from "BundleRoot"; BundleRoot;

// @reference ~/Scripts/NamespaceClasses 
import NamespaceClass = NamespaceClass1.NamespaceClass1;
/*When we want import class whitin normal namespace we have to use import and reference tag */



export module AFirstModule{
        export class AFirst{
        
        constructor(){
                       
        } 
        
        public Log(msg:string){
            console.log(msg);
            var nameSpaceClass=new NamespaceClass();
        }
             
    } 
    new AFirst().Log("AFirst");
}