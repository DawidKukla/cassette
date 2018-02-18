"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
const Test1_1 = require("../Test1/Test1");
const AFirst_1 = require("../AFirst/AFirst");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXVCOztBQUV2QiwwQ0FBcUM7QUFDckMsNkNBQThDO0FBRTlDLElBQWMsS0FBSyxDQWlCbEI7QUFqQkQsV0FBYyxPQUFLO0lBQ1gsSUFBTyxNQUFNLEdBQUcscUJBQVksQ0FBQyxNQUFNLENBQUM7SUFFeEM7UUFFSTtRQUVBLENBQUM7UUFFTSxHQUFHLENBQUMsR0FBVTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksYUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3hELElBQUksSUFBSSxHQUFFLElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUVKO0lBWlksYUFBSyxRQVlqQixDQUFBO0lBQ0QsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxFQWpCYSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFpQmxCIn0=