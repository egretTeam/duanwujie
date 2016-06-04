/// <reference path="localData/UserVO.ts"/>
/// <reference path="localData/ConfigVO.ts"/>
var com;
(function (com) {
    var model;
    (function (model) {
        var DataCenter = (function () {
            function DataCenter() {
                this.userVO = new com.model.localData.UserVO(); //用户变量
                this.configVO = new com.model.localData.ConfigVO(); //配置变量
            }
            var d = __define,c=DataCenter,p=c.prototype;
            d(DataCenter, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new DataCenter();
                    return this._instance;
                }
            );
            return DataCenter;
        }());
        model.DataCenter = DataCenter;
        egret.registerClass(DataCenter,'com.model.DataCenter');
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
