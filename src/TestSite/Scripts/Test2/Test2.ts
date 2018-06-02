// @reference ~/Scripts

import {Test1} from "../Test1/Test1";
import {AFirstModule} from "../AFirst/AFirst";

export module Test2{
        import AFirst = AFirstModule.AFirst;

    export class Test2{
        
        constructor(){
                        
        } 
        
        public Log(msg:string){
            console.log(msg);
            
            let dep1 = new Test1.Test1().Log("Test 1 inside Test2");
            let dep2= new AFirst().Log("AFirst inside Test2");
        }
             
    } 
    new Test2().Log("Test2");
}