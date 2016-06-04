var com;
(function (com) {
    var controller;
    (function (controller) {
        var TimerManager = (function () {
            function TimerManager() {
                this.timer = new egret.Timer(1000, 60); //定时器
                this.count = 0; //计数
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
            }
            var d = __define,c=TimerManager,p=c.prototype;
            /**
            * 初始化
            */
            p.init = function () {
                this.timer.start();
            };
            p.onTimer = function (e) {
                this.count++;
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TimerEvent(com.model.localData.event.TimerEvent.TIMER, null));
            };
            p.onTimerComplete = function (e) {
                controller.EventManager.instance.dispatchEvent(new com.model.localData.event.TimerEvent(com.model.localData.event.TimerEvent.TIMER, null));
                this.timer.stop();
                this.timer.reset();
                this.timer.start();
            };
            d(TimerManager, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new TimerManager();
                    return this._instance;
                }
            );
            return TimerManager;
        }());
        controller.TimerManager = TimerManager;
        egret.registerClass(TimerManager,'com.controller.TimerManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
