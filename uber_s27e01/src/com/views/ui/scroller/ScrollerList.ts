module com.views.ui.scroller {
    export class ScrollerList extends ScrollerContainer {
        totalWidth: number = 0;//总宽度
        
        /**
        * 滑动列表
        * @width 宽
        * @height 高
        * @scrollerBarSkin 底皮肤
        * @scrollerSliderSkin 滑块皮肤
        */
        constructor(width:number, height:number, scrollerBarSkin?:string, scrollerSliderSkin?:string) {
            super(width, height, scrollerBarSkin, scrollerSliderSkin);
        }

        /**
        * 添加元件
        * @s 元件
        * @width 元件宽
        * @height 元件高
        * @gap 空隔
        * @hGap 横向空格
        */
        addItem(s: egret.DisplayObject, width: number, height: number, gap?: number, hGap?: number) {//添加元件  
            var temp;
                      
            this.bg.addChild(s);

            temp = this.totalWidth + width
            if (temp > this.disWidth) {
                this.totalWidth = 0;                
            }
            s.x = this.totalWidth;
                        
            if (this.totalWidth == 0) {
                this.totalHeight += height;
                if (gap)
                    this.totalHeight += gap;
            }
            s.y = this.totalHeight - height;
            if (gap)
                s.y -= gap;

            this.totalWidth += width;
            if (hGap)
                this.totalWidth += hGap;
        }

        /**
        * 移除所有
        */
        removeAllItems() {//移除所有
            this.totalWidth = 0;
            super.removeAllItems();
        }
    }
} 