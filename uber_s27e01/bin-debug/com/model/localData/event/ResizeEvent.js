var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var ResizeEvent = (function (_super) {
                    __extends(ResizeEvent, _super);
                    function ResizeEvent(_type, _data) {
                        _super.call(this, _type, _data);
                    }
                    var d = __define,c=ResizeEvent,p=c.prototype;
                    ResizeEvent.RESIZE = "ResizeEvent_RESIZE"; //尺寸变化
                    return ResizeEvent;
                }(com.model.localData.event.Event));
                event.ResizeEvent = ResizeEvent;
                egret.registerClass(ResizeEvent,'com.model.localData.event.ResizeEvent');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
