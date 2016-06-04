//使用spritesheet

module com.views.ui.tips {
    export class FadeNum0{
        /*num: Phaser.Sprite;//数字
        time: number = 0;//倒计时
        count: number = 0;//计数
        tempWidth: number = 0;//宽度
        loopEvent: Phaser.TimerEvent = null;//循环事件
        func: Function;//回调*/
        constructor() {
        }

        /*init(time: number, width:number, func:Function) {//初始化
            this.time = time;
            this.count = 0;
            this.tempWidth = width;
            this.func = func;

            this.num = new Phaser.Sprite(this.game, 0, 0, "ktfnumber", 10);
            this.addChild(this.num);
            this.num.frame = this.time;

            this.loopEvent = this.game.time.events.repeat(Phaser.Timer.SECOND, time, this.onDownTime, this);
        }

        destory() {
            if (this.loopEvent != null)
                this.game.time.events.remove(this.loopEvent);
            super.destroy();
        }

        onDownTime() {//倒计时
            this.count++;
            this.num.frame = this.time - this.count;
            if (this.count == this.time) {
                if (this.loopEvent != null)
                    this.game.time.events.remove(this.loopEvent);
                this.func();
            }            
        }*/
    }
} 