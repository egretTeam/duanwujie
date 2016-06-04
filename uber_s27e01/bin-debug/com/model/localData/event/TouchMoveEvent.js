var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var TouchMoveEvent = (function (_super) {
                    __extends(TouchMoveEvent, _super);
                    function TouchMoveEvent(_type, _data) {
                        _super.call(this, _type, _data);
                    }
                    var d = __define,c=TouchMoveEvent,p=c.prototype;
                    TouchMoveEvent.TouchMoveEvent_START = "TouchMoveEvent_START"; //开始移动
                    TouchMoveEvent.TouchMoveEvent_MOVE = "TouchMoveEvent_MOVE"; //移动
                    TouchMoveEvent.TouchMoveEvent_END = "TouchMoveEvent_END"; //结束移动
                    return TouchMoveEvent;
                }(com.model.localData.event.Event));
                event.TouchMoveEvent = TouchMoveEvent;
                egret.registerClass(TouchMoveEvent,'com.model.localData.event.TouchMoveEvent');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
