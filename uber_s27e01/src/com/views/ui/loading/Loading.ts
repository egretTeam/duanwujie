module com.views.ui.loading {
    export class Loading extends BasicView {
        bg: egret.Bitmap;//背景
        loading: egret.Bitmap;//loading
        txt: egret.TextField;//文本
        maskShape: egret.Shape;//遮罩
        /**
        * 进度条
        * @barSkin 进度底
        * @loadingSkin loading条
        */
        constructor(barSkin:string, loadingSkin:string) {
            super();

            this.bg = new egret.Bitmap(RES.getRes(barSkin));
            this.addChild(this.bg);

            this.loading = new egret.Bitmap(RES.getRes(loadingSkin));
            this.addChild(this.loading);
            this.loading.x = (this.bg.width - this.loading.width) / 2;
            this.loading.y = (this.bg.height - this.loading.height) / 2;

            this.txt = new egret.TextField();
            this.txt.width = this.loading.width;
            this.addChild(this.txt);
            this.txt.y = this.loading.y + this.loading.height;
            this.txt.textAlign = egret.HorizontalAlign.CENTER;
            this.txt.stroke = 1;
            this.txt.strokeColor = 0x000000;

            this.maskShape = new egret.Shape();
            this.maskShape.graphics.beginFill(0, 0.01);
            this.maskShape.graphics.drawRect(0, 0, this.loading.width, this.loading.height);
            this.maskShape.graphics.endFill();
            this.addChild(this.maskShape);
        }

        /**
        * 设置loading
        * @p 百分数
        */
        setLoading(p: number) {//设置loading
            this.txt.text = "LOADING..." + Math.floor(p) + "%";
            this.maskShape.width = (p / 100.0) * this.loading.width;
            this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (p / 100.0), this.loading.height)
        }

        /**
        * 设置百分比
        * @p 百分数
        */
        setPercent(p: number) {//设置百分比
            this.txt.text = ""+Math.floor(p) + "%";
            this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (p / 100.0), this.loading.height)
        }

        /**
        * 设置个数比
        * @c 当前个数
        * @t 总个数
        */
        setCurrent(c:number, t:number) {//设置百分比
            this.txt.text = "" + Math.floor(c/t*100) + "%";
            this.maskShape.width = (c/t) * this.loading.width;
            this.loading.mask = new egret.Rectangle(0, 0, this.loading.width*(c/t), this.loading.height)
        }

        /**
        * 设置个数比
        * @c 当前个数
        * @t 总个数
        */
        setCurrentNoTxt(c: number, t: number) {//设置百分比
            this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (c / t), this.loading.height)
        }

        /**
        * 设置偏移
        * @x x
        * @y y
        */
        setOffset(x:number, y:number) {//设置偏移
            this.loading.x = (this.bg.width - this.loading.width) / 2+x;
            this.loading.y = (this.bg.height - this.loading.height) / 2+y;
        }

        /**
        * 宽度
        */
        public get width(): number {
            return this.bg.width;
        }

        /**
        * 宽度
        * @value 宽度
        */
        public set width(value: number) {
            
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);

            this.bg = null;
            this.loading = null;
            this.txt = null;
            this.maskShape = null;
        }
    }
} 