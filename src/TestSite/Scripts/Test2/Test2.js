"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
const Test1_1 = require("../Test1/Test1");
const AFirst_1 = require("../AFirst/AFirst");
/*import {Circular1Module} from "../Circular1/Circular1"
Circular1Module;*/
var Test2;
(function (Test2_1) {
    var AFirst = AFirst_1.AFirstModule.AFirst;
    class Test2 {
        constructor() {
        }
        Log(msg) {
            console.log(msg);
            let dep1 = new Test1_1.Test1.Test1().Log("Test 1 inside Test2");
            let dep2 = new AFirst().Log("AFirst inside Test2");
        }
    }
    Test2_1.Test2 = Test2;
    new Test2().Log("Test2");
})(Test2 = exports.Test2 || (exports.Test2 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXVCOztBQUV2QiwwQ0FBcUM7QUFDckMsNkNBQThDO0FBQzlDO2tCQUNrQjtBQUNsQixJQUFjLEtBQUssQ0FrQmxCO0FBbEJELFdBQWMsT0FBSztJQUNYLElBQU8sTUFBTSxHQUFHLHFCQUFZLENBQUMsTUFBTSxDQUFDO0lBRXhDO1FBRUk7UUFFQSxDQUFDO1FBRU0sR0FBRyxDQUFDLEdBQVU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQixJQUFJLElBQUksR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksR0FBRSxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FFSjtJQWJZLGFBQUssUUFhakIsQ0FBQTtJQUNELElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUMsRUFsQmEsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBa0JsQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEByZWZlcmVuY2Ugfi9TY3JpcHRzXHJcblxyXG5pbXBvcnQge1Rlc3QxfSBmcm9tIFwiLi4vVGVzdDEvVGVzdDFcIjtcclxuaW1wb3J0IHtBRmlyc3RNb2R1bGV9IGZyb20gXCIuLi9BRmlyc3QvQUZpcnN0XCI7XHJcbi8qaW1wb3J0IHtDaXJjdWxhcjFNb2R1bGV9IGZyb20gXCIuLi9DaXJjdWxhcjEvQ2lyY3VsYXIxXCJcclxuQ2lyY3VsYXIxTW9kdWxlOyovXHJcbmV4cG9ydCBtb2R1bGUgVGVzdDJ7XHJcbiAgICAgICAgaW1wb3J0IEFGaXJzdCA9IEFGaXJzdE1vZHVsZS5BRmlyc3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3Qye1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExvZyhtc2c6c3RyaW5nKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBkZXAxID0gbmV3IFRlc3QxLlRlc3QxKCkuTG9nKFwiVGVzdCAxIGluc2lkZSBUZXN0MlwiKTtcclxuICAgICAgICAgICAgbGV0IGRlcDI9IG5ldyBBRmlyc3QoKS5Mb2coXCJBRmlyc3QgaW5zaWRlIFRlc3QyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgfSBcclxuICAgIG5ldyBUZXN0MigpLkxvZyhcIlRlc3QyXCIpO1xyXG59Il19