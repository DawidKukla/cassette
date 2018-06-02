// @reference ~/Scripts

import {Circular1Module} from "../Circular1/Circular1";

export module Circular2Module{
        import Circular1 = Circular1Module.Circular1;

    export class Circular2{
        
        constructor(){
                     new Circular1();  
        } 
        
    } 
    
}