var com;
(function (com) {
    var utils;
    (function (utils) {
        var AppUtils = (function () {
            function AppUtils() {
            }
            var d = __define,c=AppUtils,p=c.prototype;
            AppUtils.getFontSize = function (size, rate) {
                var result = 0;
                if (typeof (rate) == "undefined")
                    result = Math.floor(size * com.model.DataCenter.instance.configVO.whRate);
                else
                    result = Math.floor(size * rate);
                return result;
            };
            AppUtils.trace = function (str) {
                console.log("" + str);
            };
            //是否存在指定函数 
            AppUtils.isExitsFunction = function (funcName) {
                try {
                    if (typeof (eval(funcName)) == "function") {
                        return true;
                    }
                }
                catch (e) { }
                return false;
            };
            //是否存在指定变量 
            AppUtils.isExitsVariable = function (variableName) {
                try {
                    if (typeof (variableName) == "undefined") {
                        //alert("value is undefined"); 
                        return false;
                    }
                    else {
                        //alert("value is true"); 
                        return true;
                    }
                }
                catch (e) { }
                return false;
            };
            AppUtils.GetRandomNum = function (Min, Max) {
                var Range = Max - Min;
                var Rand = Math.random();
                return (Min + Math.round(Rand * Range));
            };
            AppUtils.posDistance = function (p1, p2) {
                return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
            };
            return AppUtils;
        }());
        utils.AppUtils = AppUtils;
        egret.registerClass(AppUtils,'com.utils.AppUtils');
    })(utils = com.utils || (com.utils = {}));
})(com || (com = {}));
