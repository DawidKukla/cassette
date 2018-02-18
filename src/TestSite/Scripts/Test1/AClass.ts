// @reference ~/Scripts
export module AClassModule{
    export class AClass{
        constructor(){
           
        } 
        
        public Log(msg:string){
            console.log(msg)
        } 
             
    } 
    new AClass().Log("AClass");
}