// @reference ~/Scripts


import {AClassModule} from "./AClass";

export module Test1{
    import AClass = AClassModule.AClass;
    export class Test1{
        constructor(){
           
        }   
        
        public Log(msg:string){
            var dep=new AClass();
            console.log(msg)
             
        }  
        public X(){}
              
    } 
    new Test1().Log("Test1");
}