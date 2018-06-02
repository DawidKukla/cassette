"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @reference ~/Scripts
const BundleRoot_1 = require("BundleRoot");
BundleRoot_1.BundleRoot;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQUZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQXVCO0FBQ3ZCLDJDQUFzQztBQUFDLHVCQUFVLENBQUM7QUFJbEQsSUFBYyxZQUFZLENBY3pCO0FBZEQsV0FBYyxZQUFZO0lBQ2xCO1FBRUE7UUFFQSxDQUFDO1FBRU0sR0FBRyxDQUFDLEdBQVU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixDQUFDO0tBRUo7SUFYZ0IsbUJBQU0sU0FXdEIsQ0FBQTtJQUNELElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLENBQUMsRUFkYSxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEByZWZlcmVuY2Ugfi9TY3JpcHRzXG5pbXBvcnQge0J1bmRsZVJvb3R9IGZyb20gXCJCdW5kbGVSb290XCI7IEJ1bmRsZVJvb3Q7XG5cblxuXG5leHBvcnQgbW9kdWxlIEFGaXJzdE1vZHVsZXtcbiAgICAgICAgZXhwb3J0IGNsYXNzIEFGaXJzdHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgcHVibGljIExvZyhtc2c6c3RyaW5nKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgIH0gXG4gICAgbmV3IEFGaXJzdCgpLkxvZyhcIkFGaXJzdFwiKTtcbn0iXX0=