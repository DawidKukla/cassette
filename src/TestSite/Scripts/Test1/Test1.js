"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
const AClass_1 = require("./AClass");
var Test1;
(function (Test1_1) {
    var AClass = AClass_1.AClassModule.AClass;
    class Test1 {
        constructor() {
        }
        Log(msg) {
            var dep = new AClass();
            console.log(msg);
        }
    }
    Test1_1.Test1 = Test1;
    new Test1().Log("Test1");
})(Test1 = exports.Test1 || (exports.Test1 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXVCOztBQUd2QixxQ0FBc0M7QUFFdEMsSUFBYyxLQUFLLENBZWxCO0FBZkQsV0FBYyxPQUFLO0lBQ2YsSUFBTyxNQUFNLEdBQUcscUJBQVksQ0FBQyxNQUFNLENBQUM7SUFDcEM7UUFDSTtRQUVBLENBQUM7UUFFTSxHQUFHLENBQUMsR0FBVTtZQUNqQixJQUFJLEdBQUcsR0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFcEIsQ0FBQztLQUVKO0lBWFksYUFBSyxRQVdqQixDQUFBO0lBQ0QsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxFQWZhLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWVsQiJ9