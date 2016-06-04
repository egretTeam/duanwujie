module com.views.ui.windows {
    export class MaskWindow extends BasicView {
        bg: egret.Bitmap;//背景
        maskSprite: egret.Shape;//遮罩
        containerSprite: egret.Sprite;//背景容器
        maskAlpha: number = 0.5;//遮罩透明值
        skin: string = "";//皮肤名称
        /**
         * 窗口
         * @skin 皮肤
         * @needMask 需要模态遮罩
         */
        constructor(skin: string, alpha:number = 0.5) {
            super();

            this.skin = skin;
            this.maskAlpha = alpha;

            this.maskSprite = new egret.Shape();
            this.addChild(this.maskSprite);

            this.containerSprite = new egret.Sprite();
            this.addChild(this.containerSprite);

            this.bg = new egret.Bitmap();
            this.containerSprite.addChild(this.bg);

            this.maskSprite.touchEnabled = true;
        }

        /**
         * 设置缩放
         * @s 缩放比率
         */
        setScale(s: number) {//设置缩放
            this.containerSprite.scaleX = s;
            this.containerSprite.scaleY = s;
        }

        /**
         * 添加对象
         * @child 显示对象
         */
        addItem(child:egret.DisplayObject) {//添加对象
            this.containerSprite.addChild(child);
        }

        /**
         * 移除对象
         * @child 显示对象
         */
        removeItem(child: egret.DisplayObject) {//移除对象
            this.containerSprite.removeChild(child);
        }

        /**
        * 设置遮罩值
        * @ a 透明度
        */
        setMaskAlpha(a: number) {//设置遮罩值
            this.maskSprite.graphics.beginFill(0x000000, a);
            this.maskSprite.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            this.maskSprite.graphics.endFill();
        }

        protected onAddStage(e: egret.Event) {//添加到场景
            super.onAddStage(e);

            this.setMaskAlpha(this.maskAlpha);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);

            this.maskSprite = null;
            this.bg = null;
        }

        protected initSkin(): void {//初始化皮肤
            this.bg.texture = RES.getRes(this.skin);
        }


    }
} 