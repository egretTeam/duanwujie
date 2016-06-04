module com.views.ui.button{
    export class ScaleButton extends com.views.ui.button.Button {
        /**
        * 状态
        */
        status = 0;//状态
        private oldX: number = 0;//旧x
        private oldY: number = 0;//旧y
        /**
        * 开关按钮
        * @skins0 皮肤0
        * @skins1 皮肤1
        */
        constructor(skins: Array<string>) {
            super(skins);

            this.anchorOffsetX = this.bg.width/2;
            this.anchorOffsetY = this.bg.height / 2
        }

        protected onTouchBegin(e: egret.TouchEvent) {//点击
            this.setScale(0.8)
            super.onTouchBegin(e);
        }

        protected onTouchEnd(e: egret.TouchEvent) {//点击
            this.setScale(1);
            super.onTouchEnd(e);
        }
    }
} 