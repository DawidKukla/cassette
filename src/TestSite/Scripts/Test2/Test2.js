"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
var Test1_1 = require("../Test1/Test1");
var AFirst_1 = require("../AFirst/AFirst");
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
//# sourceMappingURL=Test2.js.map