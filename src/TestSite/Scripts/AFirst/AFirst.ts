// @reference ~/Scripts
import {BundleRoot} from "../../BundleRoot"
try {BundleRoot;}catch (e) {}

export module AFirstModule{
        export class AFirst{
        
        constructor(){
                       
        } 
        
        public Log(msg:string){
            console.log(msg);
            
        }
             
    } 
    new AFirst().Log("AFirst");
}