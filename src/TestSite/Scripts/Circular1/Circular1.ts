// @reference ~/Scripts

import {Circular2Module} from "Scripts/Circular2/Circular2";

export module Circular1Module{
        import Circular2 = Circular2Module.Circular2;

    export class Circular1{
        
        constructor(){
                    new Circular2();   
        } 
        
    } 
    
}