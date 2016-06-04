/// <reference path="../model/localData/event/Event.ts"/>
/// <reference path="../model/localData/event/EventVO.ts"/>
var com;
(function (com) {
    var controller;
    (function (controller) {
        var EventManager = (function () {
            function EventManager() {
                this.eventArr = new Array();
            }
            var d = __define,c=EventManager,p=c.prototype;
            p.addEventListener = function (_target, _type, _func) {
                this.eventArr.push(new com.model.localData.event.EventVO(_target, _type, _func));
            };
            p.removeEventListener = function (_target, _type) {
                var i = 0;
                for (i = 0; i < this.eventArr.length; i++) {
                    if (this.eventArr[i].target == _target) {
                        if (this.eventArr[i].type == _type) {
                            this.eventArr.splice(i, 1);
                            i--;
                        }
                    }
                }
            };
            p.dispatchEvent = function (e) {
                var i = 0;
                for (i = 0; i < this.eventArr.length; i++) {
                    if (this.eventArr[i].type == e.type)
                        this.eventArr[i].func(e);
                }
            };
            d(EventManager, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new EventManager();
                    return this._instance;
                }
            );
            return EventManager;
        }());
        controller.EventManager = EventManager;
        egret.registerClass(EventManager,'com.controller.EventManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
