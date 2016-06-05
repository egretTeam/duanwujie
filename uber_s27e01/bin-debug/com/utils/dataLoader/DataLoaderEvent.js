var com;
(function (com) {
    var utils;
    (function (utils) {
        var dataLoader;
        (function (dataLoader) {
            var DataLoaderEvent = (function (_super) {
                __extends(DataLoaderEvent, _super);
                function DataLoaderEvent(_type, _data) {
                    _super.call(this, _type, _data);
                }
                var d = __define,c=DataLoaderEvent,p=c.prototype;
                DataLoaderEvent.COMPLETE = "COMPLETE"; //加载完成
                DataLoaderEvent.ERROR = "ERROR"; //加载失败
                return DataLoaderEvent;
            }(com.model.localData.event.Event));
            dataLoader.DataLoaderEvent = DataLoaderEvent;
            egret.registerClass(DataLoaderEvent,'com.utils.dataLoader.DataLoaderEvent');
        })(dataLoader = utils.dataLoader || (utils.dataLoader = {}));
    })(utils = com.utils || (com.utils = {}));
})(com || (com = {}));
