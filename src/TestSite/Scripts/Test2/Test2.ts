///<reference path="../Test1/Test1.ts"/>
// @reference ~/Scripts
// @reference ~/Scripts/Test1


module Test2{
    import Test=Test1.Test1;
    export class Test2{
        
        constructor(){
            console.log("Test2")
            let dependency = new Test();
        } 
        
        
             
    } 
    new Test2();
}