module com.views.ui.button {
    export class ArtButton extends Button {
        private artSkins: Array<string> = new Array();//美术字皮肤
        private label: egret.Bitmap;//label
        /**
        * 美术字按钮
        * @skins 按钮皮肤，长度为3 [正常，按下，禁用]
        * @artSkins label皮肤，长度为3 [正常，按下，禁用]
        */
        constructor(skins:string[], artSkins:string[]) {
            super(skins);

            var i = 0;

            for (i = 0; i < artSkins.length; i++)
                this.artSkins.push(artSkins[i]);

            this.label = new egret.Bitmap(RES.getRes(this.artSkins[0]));
            this.addChild(this.label);
            this.label.x = (this.bg.width - this.label.width) / 2;
            this.label.y = (this.bg.height - this.label.height) / 2;
        }

        /**
       * 宽度
       */
        public get width(): number {//宽度
            if(this.bg==null)return 0;
            return this.bg.width;
        }
        
        /**
        * 高度
        */
        public get height(): number {//高度
            if(this.bg==null)return 0;
            return this.bg.height;
        }

        /**
        * 宽度
        */
        public set width(value: number) {//宽度
            this.label.width = value / this.bg.texture._bitmapWidth * this.label.texture._bitmapWidth;
            this.bg.width = value;
            this.label.x = (this.bg.width - this.label.width) / 2;
            this.label.y = (this.bg.height - this.label.height) / 2;
        }

        /**
        * 高度
        */
        public set height(value: number) {//高度
            this.label.height = value / this.bg.texture._bitmapHeight * this.label.texture._bitmapHeight;
            this.bg.height = value;
            this.label.x = (this.bg.width - this.label.width) / 2;
            this.label.y = (this.bg.height - this.label.height) / 2;
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);

            this.artSkins = null;
            this.label = null;
        }

        /**
        * 设置label皮肤
        * @artSkins label皮肤，长度为3 [正常，按下，禁用]
        */
        setArtSkin(artSkins: string[]): void {//设置label皮肤
            var i = 0;

            for (i = 0; i < artSkins.length; i++)
                this.artSkins.push(artSkins[i]);
            this.setSkin(this.skinIndex);
        }

        /**
        * 设置label偏移
        * @artSkins label皮肤，长度为3 [正常，按下，禁用]
        */
        setLabelOffset(offsetX:number, offsetY:number) {//设置label偏移
            this.label.x = (this.bg.width - this.label.width) / 2+offsetX;
            this.label.y = (this.bg.height - this.label.height) / 2+offsetY;
        }

        /**
        * 设置皮肤
        * @index 皮肤索引
        */
        protected setSkin(index: number) {//设置皮肤
            super.setSkin(index);

            if(this.label!=null)
                this.label.texture = RES.getRes(this.artSkins[index]);
        }
    }
} 