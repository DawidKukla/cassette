// @reference ~/Scripts
// @reference ~/Scripts/Test1

module Test2{
    import Test=Test1.Test1;
    export class Test2{
        
        constructor(){
                       
        }
        
        public Log(msg:string){
            console.log(msg);
            let dependency = new Test().Log("Test 1 inside Test2");
        }
             
    } 
    new Test2().Log("Test2");
}