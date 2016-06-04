module com.views.windows.shareWin {
    export class shareWin extends com.views.ui.windows.MaskWindow {


        shareBit:egret.Bitmap;
        static _instance: shareWin = null;//单例
        constructor() {
            super("");
            this.initshareWin();
        }
        initshareWin():void{

            this.shareBit = new egret.Bitmap();
            this.shareBit.texture = RES.getRes("share_p0");
            this.shareBit.scaleX = 1.2;
            this.shareBit.scaleY = 1.2;
            this.shareBit.x = -this.shareBit.width;
            this.shareBit.y = 800;
            this.addChild(this.shareBit);

            egret.Tween.get(this.shareBit).to({x:0,y:0},800,egret.Ease.quadInOut)

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onClose,this);
        }
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            this.shareBit = null;
            com.views.windows.shareWin.shareWin._instance = null
        }

        private onClose(e?: egret.TouchEvent): void {//关闭
            this.parent.removeChild(this);
        }

        /**
         * 显示
         * @p 父容器
         */
        static show(p: com.views.ui.BasicView): void {//显示
            //var rate = Math.min(com.model.DataCenter.instance.configVO.appWidth * 0.53 / 340, com.model.DataCenter.instance.configVO.appHeight * 0.53 / 370);

            if (this._instance == null) {
                this._instance = new shareWin();
                //this._instance.setScale(rate);
                //this._instance.containerSprite.x = (com.model.DataCenter.instance.configVO.appWidth - 340 * rate) / 2;;
                //this._instance.containerSprite.y = (com.model.DataCenter.instance.configVO.appHeight - 370 * rate) / 2;
                p.addChild(this._instance);
            }
        }
    }
}