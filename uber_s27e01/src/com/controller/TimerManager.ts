module com.controller {
    export class TimerManager {
        private timer: egret.Timer = new egret.Timer(1000, 60);//定时器
        count: number = 0;//计数
        private static _instance: TimerManager;//单例
        constructor() {
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);            
        }

        /**
        * 初始化
        */
        init(){//初始化
            this.timer.start();
        }

        private onTimer(e:egret.Timer) {//计时器
            this.count++;
            EventManager.instance.dispatchEvent(new com.model.localData.event.TimerEvent(com.model.localData.event.TimerEvent.TIMER, null));
        }

        private onTimerComplete(e: egret.TimerEvent) {//计时结束
            EventManager.instance.dispatchEvent(new com.model.localData.event.TimerEvent(com.model.localData.event.TimerEvent.TIMER, null));

            this.timer.stop();
            this.timer.reset();
            this.timer.start();
        }

        static get instance(): TimerManager {//单例
            if (this._instance == null)
                this._instance = new TimerManager();

            return this._instance;
        }
    }
}