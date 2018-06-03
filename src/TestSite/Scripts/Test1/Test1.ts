// @reference ~/Scripts


import {AClassModule} from "./AClass";
import {BClassModule} from "./BClass ";

export module Test1{
    import AClass = AClassModule.AClass;
    import BClass = BClassModule.BClass;
    export class Test1{
        constructor(){
           
        }  
        
        public Log(msg:string){
            var dep=new AClass();
            var dep1=new BClass();
            var x1=1;
            var x1=1;
            var x1=1;
            var x1=1;
            var x1=1;
            console.log(msg)
            
        } 
             
    } 
    new Test1().Log("Test1");
}