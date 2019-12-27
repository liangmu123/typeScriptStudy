var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("one day");
    };
    return Site;
}());
var obj = new Site();
obj.name();
