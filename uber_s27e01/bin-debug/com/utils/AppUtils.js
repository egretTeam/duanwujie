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
            AppUtils.loadArmature = function (json, texture, png, armatureName) {
                var dragonbonesData = RES.getRes(json);
                var textureData = RES.getRes(texture);
                var t = RES.getRes(png);
                var dragonbonesFactory = new dragonBones.EgretFactory();
                dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(t, textureData));
                return dragonbonesFactory.buildArmature(armatureName);
            };
            AppUtils.checkPhoneNo = function (n) {
                var pn = n + '';
                if (pn.length != 11) {
                    AppUtils.alert(null, "手机号码长度必须为11位");
                    return false;
                }
                switch (pn.substring(0, 3)) {
                    case "133":
                    case "153":
                    case "180":
                    case "189":
                    case "181":
                    case "170":
                    case "171":
                    case "173":
                    case "177":
                    case "149":
                        break;
                    default:
                        AppUtils.alert(null, "必须为电信用户");
                        return false;
                }
                return true;
            };
            AppUtils.alert = function (stage, msg) {
                if (stage == null) {
                    stage = com.MainView.instance.stage;
                }
                var t = new egret.TextField();
                t.y = com.model.DataCenter.instance.configVO.appHeight / 3;
                t.width = com.model.DataCenter.instance.configVO.appWidth;
                t.width = stage.width;
                t.height = 60;
                console.log(stage.width, egret.HorizontalAlign.CENTER);
                t.verticalAlign = egret.VerticalAlign.MIDDLE;
                t.textAlign = egret.HorizontalAlign.CENTER;
                t.text = msg;
                t.textColor = 0xFFFFFF;
                t.size = 30;
                t.background = true;
                t.backgroundColor = 0x000000;
                stage.addChild(t);
                var timer = new egret.Timer(1500, 1);
                timer.addEventListener(egret.TimerEvent.TIMER, function () {
                    stage.removeChild(t);
                }, this);
                timer.start();
            };
            AppUtils.playSound = function (url, callback) {
                //创建 URLLoader 对象
                var loader = new egret.URLLoader();
                //设置加载方式为声音
                loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
                //添加加载完成侦听
                loader.addEventListener(egret.Event.COMPLETE, callback, this);
                var request = new egret.URLRequest(url);
                //开始加载
                loader.load(request);
            };
            return AppUtils;
        }());
        utils.AppUtils = AppUtils;
        egret.registerClass(AppUtils,'com.utils.AppUtils');
    })(utils = com.utils || (com.utils = {}));
})(com || (com = {}));
