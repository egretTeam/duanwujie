module com.views.ui.tips {
    export class FadeTips extends BasicView{
        txt: egret.TextField;//文本数组
        constructor(s: String, x: number, y: number, w:number, color:number) {
            super();

            this.txt = new egret.TextField();
            this.addChild(this.txt);
            this.txt.size = Math.floor(60*com.model.DataCenter.instance.configVO.whRate);
            this.txt.textColor = color;
            this.txt.bold = true;
            this.txt.strokeColor = 0x000000;
            this.txt.width = w;
            this.txt.textAlign = egret.HorizontalAlign.CENTER;
            this.txt.text = "" + s;
            this.txt.stroke = 3;

            this.x = x;
            this.y = y;

            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

            super.onRemoveStage(e);

            this.txt = null;
        }

        private onEnterFrame(e: egret.Event) {//每帧监听
            this.y--;
            this.alpha -= 0.02;
            if (this.alpha <= 0) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                if(this.parent)
                    this.parent.removeChild(this);
            }
        }

        /**
        * 显示
        * @p 容器
        * @s 文本
        * @x x
        * @y y
        */
        static show(p: BasicView, s: String, x: number, y: number, w: number, color: number) {//显示
            p.addChild(new FadeTips(s, x, y, w, color));
        }
    }
} 