var com;
(function (com) {
    var controller;
    (function (controller) {
        var TouchManager = (function () {
            function TouchManager() {
                this.x = 0; //x
                this.y = 0; //y
                this.time = 0; //时间戳
                this.canTouch = false; //是否可以用触摸事件
                this.timerID = -1; //定时器id
                this.noMoveCount = 0; //没有移动次数
                this.moveTimeout = 10; //移动停止
            }
            var d = __define,c=TouchManager,p=c.prototype;
            p.init = function (stage, isPC) {
                if (isPC) {
                    stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
                    stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
                    stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this);
                }
                else {
                    document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
                    document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
                    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
                    document.addEventListener("mousemove", this.onTouchStart0.bind(this), false);
                }
            };
            p.onTouchStart = function (e) {
                var touch = e["targetTouches"][0];
                var rate = com.model.DataCenter.instance.configVO.dpiRate;
                this.canTouch = true;
                this.clearTimer();
                this.x = touch.pageX * rate;
                this.y = touch.pageY * rate;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: touch.pageX * rate, y: touch.pageY * rate }));
            };
            p.onTouchEnd = function (e) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
            };
            p.onTouchMove = function (e) {
                var touch = e["targetTouches"][0];
                var rate = com.model.DataCenter.instance.configVO.dpiRate;
                this.x = touch.pageX * rate;
                this.y = touch.pageY * rate;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: touch.pageX * rate, y: touch.pageY * rate }));
            };
            p.onTouchStart0 = function (e) {
                var rate;
                if (this.canTouch)
                    return;
                rate = com.model.DataCenter.instance.configVO.dpiRate;
                this.noMoveCount = 0;
                this.x = e.pageX * rate;
                this.y = e.pageY * rate;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: this.x, y: this.y }));
                this.clearTimer();
                this.timerID = setInterval(this.onTouchMove0.bind(this), 20);
            };
            p.onTouchMove0 = function (e) {
                var rate;
                var time;
                var tempX, tempY;
                if (this.canTouch) {
                    this.clearTimer();
                    return;
                }
                this.noMoveCount++;
                rate = com.model.DataCenter.instance.configVO.dpiRate;
                /*tempX = this.game.input.activePointer.x;
                tempY = this.game.input.activePointer.y;*/
                if (tempX != this.x || tempY != this.y) {
                    this.noMoveCount = 0;
                    this.x = tempX;
                    this.y = tempY;
                    controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: this.x, y: this.y }));
                }
                else {
                    if (this.noMoveCount >= this.moveTimeout) {
                        this.clearTimer();
                        controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
                    }
                }
            };
            p.onMouseDown = function (e) {
                this.x = e.stageX;
                this.y = e.stageY;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: this.x, y: this.y }));
            };
            p.onMouseUp = function (e) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
            };
            p.onMouseMove = function (e) {
                this.x = e.stageX;
                this.y = e.stageY;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: this.x, y: this.y }));
            };
            p.clearTimer = function () {
                if (this.timerID != -1)
                    clearTimeout(this.timerID);
                this.timerID = -1;
            };
            d(TouchManager, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new TouchManager();
                    return this._instance;
                }
            );
            return TouchManager;
        }());
        controller.TouchManager = TouchManager;
        egret.registerClass(TouchManager,'com.controller.TouchManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
