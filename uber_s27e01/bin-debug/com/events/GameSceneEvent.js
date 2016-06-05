var com;
(function (com) {
    var events;
    (function (events) {
        var GameSceneEvent = (function (_super) {
            __extends(GameSceneEvent, _super);
            function GameSceneEvent(_type, _data) {
                _super.call(this, _type, _data);
            }
            var d = __define,c=GameSceneEvent,p=c.prototype;
            return GameSceneEvent;
        }(com.model.localData.event.Event));
        events.GameSceneEvent = GameSceneEvent;
        egret.registerClass(GameSceneEvent,'com.events.GameSceneEvent');
    })(events = com.events || (com.events = {}));
})(com || (com = {}));
