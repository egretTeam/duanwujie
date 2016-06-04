module com.views.ui.scroller {
    export class ScrollerContainer extends BasicView {
        bg: egret.Sprite;//容器
        scroller: VScroller;//滑动条
        orginY: number = 0;//原始y
        status: number = 0;//0-不操作 1-操作
        totalHeight: number = 0;//总高度
        disHeight: number = 0;//显示高度
        disWidth: number = 0;//显示宽度
        /**
        * 滑动容器
        * @width 宽
        * @height 高
        */
        constructor(width: number, height: number, scrollerBarSkin?:string, scrollerSliderSkin?:string) {
            super();

            this.disHeight = height;
            this.disWidth = width;

            this.graphics.beginFill(0x000000, 0.01);
            this.graphics.drawRect(0, 0, width, height);
            this.graphics.endFill();

            this.bg = new egret.Sprite();
            this.addChild(this.bg);
            this.mask = new egret.Rectangle(0, 0, width, height);

            if (com.utils.AppUtils.isExitsVariable(scrollerBarSkin)) {
                this.scroller = new VScroller(scrollerBarSkin, scrollerSliderSkin);
                this.addChild(this.scroller);
                this.scroller.x = width - this.scroller.bar.width;
            }

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        /**
        * 添加元件
        * @s 元件
        * @height 元件高
        * @gap 空隔
        */
        addItem(s:egret.DisplayObject, height: number, gap?:number) {//添加元件
            this.bg.addChild(s);

            s.y = this.totalHeight;
            if (gap)
                s.y += gap;

            this.totalHeight += height;
            if (gap)
                this.totalHeight += gap;
        }

        /**
        * 移除元件
        * @s 元件
        */
        removeItem(s: egret.DisplayObject) {//移除元件
            this.bg.removeChild(s);
        }

        /**
        * 移除所有
        */
        removeAllItems() {//移除所有
            this.totalHeight = 0;
            this.bg.removeChildren();
        }

        /**
        * 设置滑动条位置
        * @offsetX 偏移x
        * @offsetY 偏移y
        */
        setScrollerOffset(offsetX: number, offsetY: number): void {//设置滑动条位置
            this.scroller.x = this.disWidth - this.scroller.bar.width+offsetX;
            this.scroller.y = offsetY;
        }

        /**
        * 设置位置
        * @y 位置
        */
        setPos(y:number) {//设置位置
            this.bg.y = y;
            if (this.bg.y < this.disHeight - this.totalHeight)
                this.bg.y = this.disHeight - this.totalHeight;
            if (this.bg.y > 0)
                this.bg.y = 0;

            if (this.scroller != null)
                this.scroller.setPercent(Math.abs(this.bg.y / (this.disHeight - this.totalHeight)));
        }

        protected onRemoveStage(e:egret.Event):void {//销毁
            this.removeAllItems();
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);            

            super.onRemoveStage(e);

            this.bg = null;
            this.scroller = null;
        }

        private onTouchBegin(e:egret.TouchEvent) {//开始
            this.orginY = e.stageY
            this.status = 1;
        }

        private onTouchMove(e: egret.TouchEvent) {//移动
            if (this.status == 0)
                return;

            this.bg.y += (e.stageY - this.orginY);
            if (this.bg.y < this.disHeight - this.totalHeight)
                this.bg.y = this.disHeight - this.totalHeight;
            if (this.bg.y > 0)
                this.bg.y = 0;
            this.orginY = e.stageY;

            if (this.scroller != null)
                this.scroller.setPercent(Math.abs(this.bg.y / (this.disHeight - this.totalHeight)));
        }

        private onTouchEnd(e: egret.TouchEvent) {//结束
            this.status = 0;
        }
    }
} 