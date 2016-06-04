var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var event;
            (function (event) {
                var Event = (function () {
                    function Event(_type, _data) {
                        this.data = _data;
                        this.type = _type;
                    }
                    var d = __define,c=Event,p=c.prototype;
                    return Event;
                }());
                event.Event = Event;
                egret.registerClass(Event,'com.model.localData.event.Event');
            })(event = localData.event || (localData.event = {}));
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
