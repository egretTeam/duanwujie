var com;
(function (com) {
    var controller;
    (function (controller) {
        var ResManager = (function () {
            function ResManager() {
                this.jsonArr = new Array(); //json数组
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            }
            var d = __define,c=ResManager,p=c.prototype;
            /**
             * 初始化
             */
            p.init = function () {
                var url = "resource/resource.json?v=0";
                this.loadJSON(url);
            };
            /**
             * 加载组
             * @group 组名称
             */
            p.loadGroup = function (group) {
                RES.loadGroup(group);
            };
            /**
             * 加载json
             * @url url
             */
            p.loadJSON = function (url) {
                var i = 0;
                for (i = 0; i < this.jsonArr.length; i++) {
                    if (this.jsonArr[i] == url) {
                        controller.EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, url));
                        return;
                    }
                }
                console.log("success");
                this.jsonArr.push(url);
                RES.loadConfig(url, "resource/");
            };
            /**
             * 加载单个资源
             * @url url
             */
            p.loadRes = function (url, func, parent) {
                RES.getResByUrl("" + com.model.DataCenter.instance.configVO.resURL + "" + url, function (_data, _url) {
                    func(_data, url);
                }, parent);
            };
            p.onConfigComplete = function (event) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, event.currentTarget));
            };
            p.onResourceLoadComplete = function (event) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.COMPLETE, "" + event.groupName));
            };
            p.onResourceLoadError = function (event) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.ERROR, "" + event.groupName));
            };
            p.onResourceProgress = function (event) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.PROGRESS, { name: event.groupName, loaded: event.itemsLoaded, total: event.itemsTotal }));
            };
            p.onLoadRes = function () {
            };
            d(ResManager, "instance"
                /**
                 * 单例
                 */
                ,function () {
                    if (this._instance == null)
                        this._instance = new ResManager();
                    return this._instance;
                }
            );
            return ResManager;
        }());
        controller.ResManager = ResManager;
        egret.registerClass(ResManager,'com.controller.ResManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
