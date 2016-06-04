module com.views.ui.scroller {
    export class HScroller extends BasicView {
        bar: egret.Bitmap;//bar
        protected slider: egret.Bitmap;//滑块
        /**
        * 竖直滑动条
        * @barSkin 底皮肤
        * @sliderSkin 滑块皮肤
        */
        constructor(barSkin:string, sliderSkin:string) {
            super();

            this.bar = new egret.Bitmap(RES.getRes(barSkin));
            this.addChild(this.bar);

            this.slider = new egret.Bitmap(RES.getRes(sliderSkin));
            this.addChild(this.slider);
            this.slider.y = (this.bar.height - this.slider.height) / 2;
        }

        protected onRemoveStage(e: egret.Event): void {//移除
            super.onRemoveStage(e);

            this.bar = null;
            this.slider = null;
        }

        /**
        * 设置百分比
        * @rate 百分比
        */
        setPercent(rate:number): void {//设置百分比
            var x: number = rate * (this.bar.width - this.slider.width);

            this.slider.x = x;
        }
    }
} 