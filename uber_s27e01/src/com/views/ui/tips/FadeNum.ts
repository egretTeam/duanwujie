module com.views.ui.tips {
    export class FadeNum{
        /*num: Phaser.Sprite;//数字
        time: number = 0;//倒计时
        count: number = 0;//计数
        tempWidth: number = 0;//宽度
        loopEvent: Phaser.TimerEvent;//循环事件
        func: Function;//回调*/
        constructor() {
        }

        /*init(time: number, width:number, func:Function) {//初始化
            this.time = time;
            this.count = 0;
            this.tempWidth = width;
            this.func = func;

            this.num = new Phaser.Sprite(this.game, 0, 0, "" + (time - 1));
            this.addChild(this.num);
            this.num.visible = false;

            this.loopEvent = this.game.time.events.repeat(Phaser.Timer.SECOND, time, this.onDownTime, this);
        }

        onDownTime() {//倒计时
            this.count++;
            if (this.count < this.time) {
                this.num.loadTexture("" + (this.time - this.count), 1);
                this.num.x = (this.tempWidth - this.num.width) / 2;
                this.num.visible = true;
            }
            else if (this.count == this.time) {
                this.num.loadTexture("go", 1);
                this.num.x = (this.tempWidth - this.num.width) / 2;
                this.func();
            }            
        }*/
    }
} 