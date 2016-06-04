var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var TimerEvent = (function (_super) {
                    __extends(TimerEvent, _super);
                    function TimerEvent(_type, _data) {
                        _super.call(this, _type, _data);
                    }
                    var d = __define,c=TimerEvent,p=c.prototype;
                    TimerEvent.TIMER = "TimerEvent_TIMER"; //计时
                    return TimerEvent;
                }(com.model.localData.event.Event));
                event.TimerEvent = TimerEvent;
                egret.registerClass(TimerEvent,'com.model.localData.event.TimerEvent');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
