// @reference ~/Scripts

import {Test1} from "../Test1/Test1";

export module Test2{
        export class Test2{
        
        constructor(){
                       
        } 
        
        public Log(msg:string){
            console.log(msg);
            let dependency = new Test1.Test1().Log("Test 1 inside Test2");
        }
             
    } 
    new Test2().Log("Test2");
}