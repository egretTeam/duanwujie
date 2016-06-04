module com.views.ui.num {
    export class NumText extends BasicView {
        txt: egret.TextField;//文本
        num: number = 0;//数字
        targetNum: number = 0;//目标数字
        count: number = 0;//计数
        step: number = 0;//步进值
        total: number = 10;//总计数
        constructor() {
            super();

            this.txt = new egret.TextField();
            this.addChild(this.txt);
        } 

        /**
        * 设置数字
        * @num 数字
        */
        setNum(num:number) {//设置数字
            this.targetNum = num;
            this.step = (this.targetNum - this.num) / this.total;

            if (!(this.hasEventListener(egret.Event.ENTER_FRAME)))
                this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        protected onRemoveStage(e: egret.Event): void {//移除
            super.onRemoveStage(e);

            this.txt = null;
        }

        private onEnterFrame(e: egret.Event) {//动画
            this.count++;

            if (this.count >= this.total) {
                this.count = 0;
                this.num = this.targetNum;
                this.dis();

                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                return;
            }

            this.num += this.step;
            this.dis();
        }

        private dis() {//显示
            this.txt.text = "" + Math.floor(this.num);
        }
    }
} 