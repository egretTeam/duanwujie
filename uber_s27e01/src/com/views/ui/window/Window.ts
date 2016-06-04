module com.views.ui.windows {
    export class Window extends BasicView {
        bg: egret.Bitmap;//背景
        /**
         * 窗口
         * @skin 皮肤
         * @needMask 需要模态遮罩
         */
        constructor(skin:string) {
            super();
            
            this.bg = new egret.Bitmap(RES.getRes(skin));
            this.addChild(this.bg);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);

            this.bg = null;
        }
    }
} 