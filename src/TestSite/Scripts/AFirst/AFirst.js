"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @reference ~/Scripts
const BundleRoot_1 = require("../../BundleRoot");
try {
    BundleRoot_1.BundleRoot;
}
catch (e) { }
var AFirstModule;
(function (AFirstModule) {
    class AFirst {
        constructor() {
        }
        Log(msg) {
            console.log(msg);
        }
    }
    AFirstModule.AFirst = AFirst;
    new AFirst().Log("AFirst");
})(AFirstModule = exports.AFirstModule || (exports.AFirstModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQUZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQXVCO0FBQ3ZCLGlEQUEyQztBQUMzQyxJQUFJO0lBQUMsdUJBQVUsQ0FBQztDQUFDO0FBQUEsT0FBTyxDQUFDLEVBQUUsR0FBRTtBQUU3QixJQUFjLFlBQVksQ0FjekI7QUFkRCxXQUFjLFlBQVk7SUFDbEI7UUFFQTtRQUVBLENBQUM7UUFFTSxHQUFHLENBQUMsR0FBVTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLENBQUM7S0FFSjtJQVhnQixtQkFBTSxTQVd0QixDQUFBO0lBQ0QsSUFBSSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxFQWRhLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBY3pCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHJlZmVyZW5jZSB+L1NjcmlwdHNcbmltcG9ydCB7QnVuZGxlUm9vdH0gZnJvbSBcIi4uLy4uL0J1bmRsZVJvb3RcIlxudHJ5IHtCdW5kbGVSb290O31jYXRjaCAoZSkge31cblxuZXhwb3J0IG1vZHVsZSBBRmlyc3RNb2R1bGV7XG4gICAgICAgIGV4cG9ydCBjbGFzcyBBRmlyc3R7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHB1YmxpYyBMb2cobXNnOnN0cmluZyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICB9IFxuICAgIG5ldyBBRmlyc3QoKS5Mb2coXCJBRmlyc3RcIik7XG59Il19