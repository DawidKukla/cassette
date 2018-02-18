// @reference ~/Scripts

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