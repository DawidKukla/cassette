"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @reference ~/Scripts
var BundleRoot_1 = require("BundleRoot");
BundleRoot_1.BundleRoot;
// @reference ~/Scripts/NamespaceClasses 
var NamespaceClass = NamespaceClass1.NamespaceClass1;
/*When we want import class whitin normal namespace we have to use import and reference tag */
var AFirstModule;
(function (AFirstModule) {
    var AFirst = /** @class */ (function () {
        function AFirst() {
        }
        AFirst.prototype.Log = function (msg) {
            console.log(msg);
            var nameSpaceClass = new NamespaceClass();
        };
        return AFirst;
    }());
    AFirstModule.AFirst = AFirst;
    new AFirst().Log("AFirst");
})(AFirstModule = exports.AFirstModule || (exports.AFirstModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQUZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQXVCO0FBQ3ZCLHlDQUFzQztBQUFDLHVCQUFVLENBQUM7QUFFbEQseUNBQXlDO0FBQ3pDLElBQU8sY0FBYyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUM7QUFDeEQsOEZBQThGO0FBSTlGLElBQWMsWUFBWSxDQWN6QjtBQWRELFdBQWMsWUFBWTtJQUNsQjtRQUVBO1FBRUEsQ0FBQztRQUVNLG9CQUFHLEdBQVYsVUFBVyxHQUFVO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxjQUFjLEdBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUM1QyxDQUFDO1FBRUwsYUFBQztJQUFELENBQUMsQUFYRyxJQVdIO0lBWGdCLG1CQUFNLFNBV3RCLENBQUE7SUFDRCxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDLEVBZGEsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFjekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAcmVmZXJlbmNlIH4vU2NyaXB0c1xyXG5pbXBvcnQge0J1bmRsZVJvb3R9IGZyb20gXCJCdW5kbGVSb290XCI7IEJ1bmRsZVJvb3Q7XHJcblxyXG4vLyBAcmVmZXJlbmNlIH4vU2NyaXB0cy9OYW1lc3BhY2VDbGFzc2VzIFxyXG5pbXBvcnQgTmFtZXNwYWNlQ2xhc3MgPSBOYW1lc3BhY2VDbGFzczEuTmFtZXNwYWNlQ2xhc3MxO1xyXG4vKldoZW4gd2Ugd2FudCBpbXBvcnQgY2xhc3Mgd2hpdGluIG5vcm1hbCBuYW1lc3BhY2Ugd2UgaGF2ZSB0byB1c2UgaW1wb3J0IGFuZCByZWZlcmVuY2UgdGFnICovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBtb2R1bGUgQUZpcnN0TW9kdWxle1xyXG4gICAgICAgIGV4cG9ydCBjbGFzcyBBRmlyc3R7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMb2cobXNnOnN0cmluZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lU3BhY2VDbGFzcz1uZXcgTmFtZXNwYWNlQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICBuZXcgQUZpcnN0KCkuTG9nKFwiQUZpcnN0XCIpO1xyXG59Il19