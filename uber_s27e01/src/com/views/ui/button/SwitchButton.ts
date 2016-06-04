module com.views.ui.button {
    export class SwitchButton extends Button {
        skins0: Array<string>;//皮肤0
        skins1: Array<string>;//皮肤1
        /**
        * 状态
        */
        status = 0;//状态
        /**
        * 开关按钮
        * @skins0 皮肤0
        * @skins1 皮肤1
        */
        constructor(skins0: Array<string>, skins1:Array<string>) {
            super(skins0);

            this.skins0 = skins0;
            this.skins1 = skins1;
        }

        protected onRemoveStage(e: egret.Event) {//移除 
            super.onRemoveStage(e);

            this.skins0 = null;
            this.skins1 = null;
        }

        protected onTouchBegin(e: egret.TouchEvent) {//点击
            this.status = 1 - this.status;

            this.skins = this["skins" + this.status];

            super.onTouchBegin(e);
        }
        /**
         * 设置皮肤
         * @skins0 皮肤0
         * @skins1 皮肤1
         */
        setSkins():void{
            this.status = 1 - this.status;
            this.skins = this["skins" + this.status];
            this.setSkin(this.status);
        }
    }
} 