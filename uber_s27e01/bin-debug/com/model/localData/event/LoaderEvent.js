var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var LoaderEvent = (function (_super) {
                    __extends(LoaderEvent, _super);
                    function LoaderEvent(_type, _data) {
                        _super.call(this, _type, _data);
                    }
                    var d = __define,c=LoaderEvent,p=c.prototype;
                    /**
                     * 配置加载完成
                     */
                    LoaderEvent.CONFIG_COMPLETE = "LoaderEvent_CONFIG_COMPLETE"; //配置加载完成
                    /**
                     * 加载完成
                     */
                    LoaderEvent.COMPLETE = "LoaderEvent_COMPLETE"; //加载完成
                    /**
                     * 加载失败
                     */
                    LoaderEvent.ERROR = "LoaderEvent_ERROR"; //加载失败
                    /**
                     * 加载过程
                     */
                    LoaderEvent.PROGRESS = "LoaderEvent_PROGRESS"; //加载过程
                    return LoaderEvent;
                }(com.model.localData.event.Event));
                event.LoaderEvent = LoaderEvent;
                egret.registerClass(LoaderEvent,'com.model.localData.event.LoaderEvent');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
