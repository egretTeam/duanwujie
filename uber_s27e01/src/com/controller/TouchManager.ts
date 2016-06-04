module com.controller {
    declare var $;
    export class TouchManager{
        x: number = 0;//x
        y: number = 0;//y
        time: number = 0;//时间戳
        canTouch: boolean = false;//是否可以用触摸事件
        timerID: number = -1;//定时器id
        noMoveCount = 0;//没有移动次数
        moveTimeout: number = 10;//移动停止
        private static _instance: TouchManager;//单例
        constructor() {

        }

        init(stage:egret.Stage, isPC:boolean) {//初始化
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
        }

        onTouchStart(e: Event) {//开始移动
            var touch = e["targetTouches"][0];
            var rate = com.model.DataCenter.instance.configVO.dpiRate;
            
            this.canTouch = true;
            this.clearTimer();
            this.x = touch.pageX * rate;
            this.y = touch.pageY * rate;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: touch.pageX * rate, y: touch.pageY * rate }));
        }

        onTouchEnd(e: Event) {//移动结束
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
        }

        onTouchMove(e: Event) {//移动
            var touch = e["targetTouches"][0];
            var rate = com.model.DataCenter.instance.configVO.dpiRate;

            this.x = touch.pageX * rate;
            this.y = touch.pageY * rate;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: touch.pageX * rate, y: touch.pageY * rate}));
        }

        onTouchStart0(e) {//开始
            var rate;

            if (this.canTouch)
                return;

            rate = com.model.DataCenter.instance.configVO.dpiRate;
            this.noMoveCount = 0;
            this.x = e.pageX * rate;
            this.y = e.pageY * rate;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: this.x, y: this.y }));

            this.clearTimer();
            this.timerID = setInterval(this.onTouchMove0.bind(this), 20);
        }

        onTouchMove0(e) {//移动
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
                EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: this.x, y: this.y }));
            }
            else {
                if (this.noMoveCount >= this.moveTimeout) {
                    this.clearTimer();
                    EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
                }
            }
        }

        onMouseDown(e:egret.TouchEvent) {//开始
            this.x = e.stageX;
            this.y = e.stageY;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_START, { x: this.x, y: this.y }));
        }

        onMouseUp(e: egret.TouchEvent) {//结束
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_END, { x: this.x, y: this.y }));
        }

        onMouseMove(e: egret.TouchEvent) {//移动
            this.x = e.stageX;
            this.y = e.stageY;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TouchMoveEvent(com.model.localData.event.TouchMoveEvent.TouchMoveEvent_MOVE, { x: this.x, y: this.y }));
        }

        clearTimer() {//移除定时器
            if (this.timerID != -1)
                clearTimeout(this.timerID);
            this.timerID = -1;
        }

        static get instance(): TouchManager {//单例
            if (this._instance == null)
                this._instance = new TouchManager();

            return this._instance;
        }
    }
} 