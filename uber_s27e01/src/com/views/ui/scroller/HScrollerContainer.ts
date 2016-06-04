module com.views.ui.scroller {
    export class HScrollerContainer extends BasicView {
        bg: egret.Sprite;//容器
        scroller: HScroller = null;//滑动条
        orginX: number = 0;//原始x
        status: number = 0;//0-不操作 1-操作
        totalWidth: number = 0;//总宽度
        disWidth: number = 0;//显示宽度
        itemArr:any = new Array();//
        /**
        * 滑动容器
        * @width 宽
        * @height 高
        * @scrollerBarSkin 滑动条皮肤
        * @scrollerSliderSkin 滑块皮肤
        */
        constructor(width: number, height: number, scrollerBarSkin?:string, scrollerSliderSkin?:string) {
            super();

            this.disWidth = width;

            this.graphics.beginFill(0x000000, 0.01);
            this.graphics.drawRect(0, 0, width, height);
            this.graphics.endFill();

            this.bg = new egret.Sprite();
            this.addChild(this.bg);
            this.mask = new egret.Rectangle(0, 0, width, height);

            if (com.utils.AppUtils.isExitsVariable(scrollerBarSkin)) {
                this.scroller = new HScroller(scrollerBarSkin, scrollerSliderSkin);
                this.addChild(this.scroller);
                this.scroller.y = height - this.scroller.bar.height;
            }            

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        /**
        * 添加元件
        * @s 元件
        * @width 元件宽
        * @gap 空隔
        */
        addItem(s:egret.DisplayObject, width: number, gap?:number) {//添加元件

            this.bg.addChild(s);

            s.x = this.totalWidth;
            if (gap)
                s.x += gap;

            this.totalWidth += width;
            if (gap)
                this.totalWidth += gap;

            this.itemArr.push(s);
        }

        /**
        * 移除元件
        * @s 元件
        */
        removeItem(s: egret.DisplayObject) {//移除元件
            this.bg.removeChild(s);


            for(var i=0;i<=this.itemArr.length-1;i++){
                if(this.itemArr[i]==s){
                    this.itemArr.splice(i,1);
                }
            }
        }

        /**
        * 移除所有
        */
        removeAllItems() {//移除所有
            this.totalWidth = 0;
            this.itemArr = [];
            this.bg.removeChildren();
        }

        /**
        * 设置滑动条位置
        * @offsetX 偏移x
        * @offsetY 偏移y
        */
        setScrollerOffset(offsetX:number, offsetY:number): void {//设置滑动条位置
            this.scroller.x = offsetX;
            this.scroller.y = offsetY;
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
            this.orginX = e.stageX
            this.status = 1;
        }

        private onTouchMove(e: egret.TouchEvent) {//移动

            if (this.status == 0)
                return;

            this.bg.x += (e.stageX - this.orginX);
            if (this.bg.x < this.disWidth - this.totalWidth)
                this.bg.x = this.disWidth - this.totalWidth;
            if (this.bg.x > 0) {
                this.bg.x = 0;                
            }
            this.orginX = e.stageX;

            if(this.scroller!=null)
                this.scroller.setPercent(Math.abs(this.bg.x / (this.disWidth - this.totalWidth)));
        }

        private onTouchEnd(e: egret.TouchEvent) {//结束
            this.status = 0;
        }
    }
} 