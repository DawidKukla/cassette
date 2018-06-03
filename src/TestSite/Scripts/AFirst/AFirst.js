"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @reference ~/Scripts
var BundleRoot_1 = require("BundleRoot");
BundleRoot_1.BundleRoot;
var AFirstModule;
(function (AFirstModule) {
    var AFirst = /** @class */ (function () {
        function AFirst() {
        }
        AFirst.prototype.Log = function (msg) {
            console.log(msg);
        };
        return AFirst;
    }());
    AFirstModule.AFirst = AFirst;
    new AFirst().Log("AFirst");
})(AFirstModule = exports.AFirstModule || (exports.AFirstModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQUZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQXVCO0FBQ3ZCLHlDQUFzQztBQUFDLHVCQUFVLENBQUM7QUFJbEQsSUFBYyxZQUFZLENBY3pCO0FBZEQsV0FBYyxZQUFZO0lBQ2xCO1FBRUE7UUFFQSxDQUFDO1FBRU0sb0JBQUcsR0FBVixVQUFXLEdBQVU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixDQUFDO1FBRUwsYUFBQztJQUFELENBQUMsQUFYRyxJQVdIO0lBWGdCLG1CQUFNLFNBV3RCLENBQUE7SUFDRCxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDLEVBZGEsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFjekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAcmVmZXJlbmNlIH4vU2NyaXB0c1xuaW1wb3J0IHtCdW5kbGVSb290fSBmcm9tIFwiQnVuZGxlUm9vdFwiOyBCdW5kbGVSb290O1xuXG5cblxuZXhwb3J0IG1vZHVsZSBBRmlyc3RNb2R1bGV7XG4gICAgICAgIGV4cG9ydCBjbGFzcyBBRmlyc3R7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHB1YmxpYyBMb2cobXNnOnN0cmluZyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICB9IFxuICAgIG5ldyBBRmlyc3QoKS5Mb2coXCJBRmlyc3RcIik7XG59Il19