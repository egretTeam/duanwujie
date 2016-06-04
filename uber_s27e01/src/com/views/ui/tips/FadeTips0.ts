module com.views.ui.tips {
    export class FadeTips0 extends BasicView{
        bg: egret.Bitmap;//背景
        constructor(s: string, x: number, y: number) {
            super();

            this.bg = new egret.Bitmap(RES.getRes(s));
            this.addChild(this.bg);

            this.x = x;
            this.y = y;

            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

            super.onRemoveStage(e);

            this.bg = null;
        }

        private onEnterFrame(e: egret.Event) {//每帧监听
            this.y--;
            this.alpha -= 0.02;
            if (this.alpha <= 0) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                this.parent.removeChild(this);
            }
        }

        /**
        * 显示
        * @p 容器
        * @s 皮肤
        * @x x
        * @y y
        */
        static show(p:BasicView, s: string, x: number, y: number) {//显示
            p.addChild(new FadeTips0(s, x, y));
        }
    }
} 