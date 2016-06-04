var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var EventVO = (function () {
                    function EventVO(_target, _type, _func) {
                        this.target = _target;
                        this.type = _type;
                        this.func = _func;
                    }
                    var d = __define,c=EventVO,p=c.prototype;
                    return EventVO;
                }());
                event.EventVO = EventVO;
                egret.registerClass(EventVO,'com.model.localData.event.EventVO');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
