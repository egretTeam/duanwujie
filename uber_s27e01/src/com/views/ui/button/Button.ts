module com.views.ui.button {
    export class Button extends BasicView {
        bg: egret.Bitmap;//背景
        skins: Array<string> = new Array();//皮肤数组
        enable: boolean = true;//可用状态
        skinIndex: number = 0;//皮肤索引
        /**
        * 按钮
        * @skins 皮肤数组，长度为3 [正常，按下，禁用]
        */
        constructor(skins:Array<string>) {
            super();

            var i = 0;

            for (i = 0; i < skins.length; i++)
                this.skins.push(skins[i]);
            
            this.bg = new egret.Bitmap();
            this.addChild(this.bg);

            this.setSkin(0);

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.onTouchEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
        }

        /**
        * 设置可用
        * @b 是否可用
        */
        setEnable(b: boolean) {//设置可用
            this.enable = b;
            if (!this.enable)
                this.setSkin(2);
            else
                this.setSkin(0);
        }

        /**
        * 宽度
        */
        public get width(): number {//宽度

                if(this.bg==null){
                    return 0;
                }else  return this.bg.width;

        }

        /**
        * 宽度
        */
        public set width(value:number) {//宽度
            this.bg.width = value;
        }

        
        /**
        * 高度
        */
        public get height(): number {//高度
            if(this.bg==null){
                return 0;
            }else  return this.bg.height;
        }

        /**
        * 高度
        */
        public set height(value: number) {//高度
            this.bg.height = value;
        }

        /**
        * 设置按钮皮肤
        * @skins 按钮皮肤，长度为3 [正常，按下，禁用]
        */
        setButtonSkin(skins: string[]): void {//设置按钮皮肤
            var i = 0;

            this.skins = new Array();
            for (i = 0; i < skins.length; i++)
                this.skins.push(skins[i]);
            this.setSkin(this.skinIndex);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.onTouchEnd, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);

            super.onRemoveStage(e);

            this.bg = null;
            this.skins = null;
        }

        /**
        * 开始点击
        * @e 点击事件
        */
        protected onTouchBegin(e: egret.TouchEvent) {//开始点击
            if (!(this.enable)) {
                e.preventDefault();
            }
            else {
                this.setSkin(1);
            }
        }

        /**
        * 结束点击
        * @e 点击事件
        */
        protected onTouchEnd(e: egret.TouchEvent) {//结束点击
            if (!(this.enable))
                e.preventDefault();
            else
                this.setSkin(0);
        }

        /**
        * 设置皮肤
        * @index 皮肤索引
        */
        protected setSkin(index:number) {//设置皮肤
            this.bg.texture = RES.getRes(this.skins[index]);
            this.skinIndex = index;
        }
    }
} 