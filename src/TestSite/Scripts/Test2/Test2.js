"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
var Test1_1 = require("../Test1/Test1");
var AFirst_1 = require("../AFirst/AFirst");
/*import {Circular1Module} from "../Circular1/Circular1"
Circular1Module;*/
var Test2;
(function (Test2_1) {
    var AFirst = AFirst_1.AFirstModule.AFirst;
    var Test2 = /** @class */ (function () {
        function Test2() {
        }
        Test2.prototype.Log = function (msg) {
            console.log(msg);
            var dep1 = new Test1_1.Test1.Test1().Log("Test 1 inside Test2");
            var dep2 = new AFirst().Log("AFirst inside Test2");
        };
        return Test2;
    }());
    Test2_1.Test2 = Test2;
    new Test2().Log("Test2");
})(Test2 = exports.Test2 || (exports.Test2 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXVCOztBQUV2Qix3Q0FBcUM7QUFDckMsMkNBQThDO0FBQzlDO2tCQUNrQjtBQUNsQixJQUFjLEtBQUssQ0FrQmxCO0FBbEJELFdBQWMsT0FBSztJQUNYLElBQU8sTUFBTSxHQUFHLHFCQUFZLENBQUMsTUFBTSxDQUFDO0lBRXhDO1FBRUk7UUFFQSxDQUFDO1FBRU0sbUJBQUcsR0FBVixVQUFXLEdBQVU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQixJQUFJLElBQUksR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksR0FBRSxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFTCxZQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSxhQUFLLFFBYWpCLENBQUE7SUFDRCxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixDQUFDLEVBbEJhLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWtCbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAcmVmZXJlbmNlIH4vU2NyaXB0c1xyXG5cclxuaW1wb3J0IHtUZXN0MX0gZnJvbSBcIi4uL1Rlc3QxL1Rlc3QxXCI7XHJcbmltcG9ydCB7QUZpcnN0TW9kdWxlfSBmcm9tIFwiLi4vQUZpcnN0L0FGaXJzdFwiO1xyXG4vKmltcG9ydCB7Q2lyY3VsYXIxTW9kdWxlfSBmcm9tIFwiLi4vQ2lyY3VsYXIxL0NpcmN1bGFyMVwiXHJcbkNpcmN1bGFyMU1vZHVsZTsqL1xyXG5leHBvcnQgbW9kdWxlIFRlc3Qye1xyXG4gICAgICAgIGltcG9ydCBBRmlyc3QgPSBBRmlyc3RNb2R1bGUuQUZpcnN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0MntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMb2cobXNnOnN0cmluZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZGVwMSA9IG5ldyBUZXN0MS5UZXN0MSgpLkxvZyhcIlRlc3QgMSBpbnNpZGUgVGVzdDJcIik7XHJcbiAgICAgICAgICAgIGxldCBkZXAyPSBuZXcgQUZpcnN0KCkuTG9nKFwiQUZpcnN0IGluc2lkZSBUZXN0MlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICBuZXcgVGVzdDIoKS5Mb2coXCJUZXN0MlwiKTtcclxufSJdfQ==