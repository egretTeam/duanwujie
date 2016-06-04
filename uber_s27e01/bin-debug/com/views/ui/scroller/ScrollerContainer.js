var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scroller;
            (function (scroller) {
                var ScrollerContainer = (function (_super) {
                    __extends(ScrollerContainer, _super);
                    /**
                    * 滑动容器
                    * @width 宽
                    * @height 高
                    */
                    function ScrollerContainer(width, height, scrollerBarSkin, scrollerSliderSkin) {
                        _super.call(this);
                        this.orginY = 0; //原始y
                        this.status = 0; //0-不操作 1-操作
                        this.totalHeight = 0; //总高度
                        this.disHeight = 0; //显示高度
                        this.disWidth = 0; //显示宽度
                        this.disHeight = height;
                        this.disWidth = width;
                        this.graphics.beginFill(0x000000, 0.01);
                        this.graphics.drawRect(0, 0, width, height);
                        this.graphics.endFill();
                        this.bg = new egret.Sprite();
                        this.addChild(this.bg);
                        this.mask = new egret.Rectangle(0, 0, width, height);
                        if (com.utils.AppUtils.isExitsVariable(scrollerBarSkin)) {
                            this.scroller = new scroller.VScroller(scrollerBarSkin, scrollerSliderSkin);
                            this.addChild(this.scroller);
                            this.scroller.x = width - this.scroller.bar.width;
                        }
                        this.touchEnabled = true;
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                    }
                    var d = __define,c=ScrollerContainer,p=c.prototype;
                    /**
                    * 添加元件
                    * @s 元件
                    * @height 元件高
                    * @gap 空隔
                    */
                    p.addItem = function (s, height, gap) {
                        this.bg.addChild(s);
                        s.y = this.totalHeight;
                        if (gap)
                            s.y += gap;
                        this.totalHeight += height;
                        if (gap)
                            this.totalHeight += gap;
                    };
                    /**
                    * 移除元件
                    * @s 元件
                    */
                    p.removeItem = function (s) {
                        this.bg.removeChild(s);
                    };
                    /**
                    * 移除所有
                    */
                    p.removeAllItems = function () {
                        this.totalHeight = 0;
                        this.bg.removeChildren();
                    };
                    /**
                    * 设置滑动条位置
                    * @offsetX 偏移x
                    * @offsetY 偏移y
                    */
                    p.setScrollerOffset = function (offsetX, offsetY) {
                        this.scroller.x = this.disWidth - this.scroller.bar.width + offsetX;
                        this.scroller.y = offsetY;
                    };
                    /**
                    * 设置位置
                    * @y 位置
                    */
                    p.setPos = function (y) {
                        this.bg.y = y;
                        if (this.bg.y < this.disHeight - this.totalHeight)
                            this.bg.y = this.disHeight - this.totalHeight;
                        if (this.bg.y > 0)
                            this.bg.y = 0;
                        if (this.scroller != null)
                            this.scroller.setPercent(Math.abs(this.bg.y / (this.disHeight - this.totalHeight)));
                    };
                    p.onRemoveStage = function (e) {
                        this.removeAllItems();
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                        this.scroller = null;
                    };
                    p.onTouchBegin = function (e) {
                        this.orginY = e.stageY;
                        this.status = 1;
                    };
                    p.onTouchMove = function (e) {
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
                    };
                    p.onTouchEnd = function (e) {
                        this.status = 0;
                    };
                    return ScrollerContainer;
                }(ui.BasicView));
                scroller.ScrollerContainer = ScrollerContainer;
                egret.registerClass(ScrollerContainer,'com.views.ui.scroller.ScrollerContainer');
            })(scroller = ui.scroller || (ui.scroller = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
