// @reference ~/Scripts


import {AClassModule} from "./AClass";

export module Test1{
    import AClass = AClassModule.AClass;
    export class Test1{
        constructor(){
           
        }  
        
        public Log(msg:string){
            var dep=new AClass();
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