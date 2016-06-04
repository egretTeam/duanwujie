module com.views.ui.moveBG {
    export class MoveBG extends BasicView {
        bg0: egret.Bitmap;//bg0
        bg1: egret.Bitmap;//bg1
        bgWidth: number = 0;//背景宽度
        /**
        * 移动背景
        * @bgName 图片id
        */
        constructor(bgName:string) {
            super();

            this.bg0 = new egret.Bitmap(RES.getRes(bgName));
            this.addChild(this.bg0);
            this.bgWidth = this.bg0.width;

            this.bg1 = new egret.Bitmap(RES.getRes(bgName));
            this.addChild(this.bg1);
            this.bg1.x = this.bgWidth;

            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        /**
         * 设置缩放
         * @s 缩放比率
         */
        setScale(s: number) {//设置缩放
            super.setScale(s);

            this.bgWidth = this.bg0.width * s;
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

            super.onRemoveStage(e);

            this.bg0 = null;
            this.bg1 = null;
        }

        private onEnterFrame(e: egret.Event) {//每帧事件
            this.x--;
            if (this.x <= 0 - this.bgWidth)
                this.x = 0;
        }
    }
} 