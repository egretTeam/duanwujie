var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scroller;
            (function (scroller) {
                var HScrollerContainer = (function (_super) {
                    __extends(HScrollerContainer, _super);
                    /**
                    * 滑动容器
                    * @width 宽
                    * @height 高
                    * @scrollerBarSkin 滑动条皮肤
                    * @scrollerSliderSkin 滑块皮肤
                    */
                    function HScrollerContainer(width, height, scrollerBarSkin, scrollerSliderSkin) {
                        _super.call(this);
                        this.scroller = null; //滑动条
                        this.orginX = 0; //原始x
                        this.status = 0; //0-不操作 1-操作
                        this.totalWidth = 0; //总宽度
                        this.disWidth = 0; //显示宽度
                        this.itemArr = new Array(); //
                        this.disWidth = width;
                        this.graphics.beginFill(0x000000, 0.01);
                        this.graphics.drawRect(0, 0, width, height);
                        this.graphics.endFill();
                        this.bg = new egret.Sprite();
                        this.addChild(this.bg);
                        this.mask = new egret.Rectangle(0, 0, width, height);
                        if (com.utils.AppUtils.isExitsVariable(scrollerBarSkin)) {
                            this.scroller = new scroller.HScroller(scrollerBarSkin, scrollerSliderSkin);
                            this.addChild(this.scroller);
                            this.scroller.y = height - this.scroller.bar.height;
                        }
                        this.touchEnabled = true;
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                    }
                    var d = __define,c=HScrollerContainer,p=c.prototype;
                    /**
                    * 添加元件
                    * @s 元件
                    * @width 元件宽
                    * @gap 空隔
                    */
                    p.addItem = function (s, width, gap) {
                        this.bg.addChild(s);
                        s.x = this.totalWidth;
                        if (gap)
                            s.x += gap;
                        this.totalWidth += width;
                        if (gap)
                            this.totalWidth += gap;
                        this.itemArr.push(s);
                    };
                    /**
                    * 移除元件
                    * @s 元件
                    */
                    p.removeItem = function (s) {
                        this.bg.removeChild(s);
                        for (var i = 0; i <= this.itemArr.length - 1; i++) {
                            if (this.itemArr[i] == s) {
                                this.itemArr.splice(i, 1);
                            }
                        }
                    };
                    /**
                    * 移除所有
                    */
                    p.removeAllItems = function () {
                        this.totalWidth = 0;
                        this.itemArr = [];
                        this.bg.removeChildren();
                    };
                    /**
                    * 设置滑动条位置
                    * @offsetX 偏移x
                    * @offsetY 偏移y
                    */
                    p.setScrollerOffset = function (offsetX, offsetY) {
                        this.scroller.x = offsetX;
                        this.scroller.y = offsetY;
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
                        this.orginX = e.stageX;
                        this.status = 1;
                    };
                    p.onTouchMove = function (e) {
                        if (this.status == 0)
                            return;
                        this.bg.x += (e.stageX - this.orginX);
                        if (this.bg.x < this.disWidth - this.totalWidth)
                            this.bg.x = this.disWidth - this.totalWidth;
                        if (this.bg.x > 0) {
                            this.bg.x = 0;
                        }
                        this.orginX = e.stageX;
                        if (this.scroller != null)
                            this.scroller.setPercent(Math.abs(this.bg.x / (this.disWidth - this.totalWidth)));
                    };
                    p.onTouchEnd = function (e) {
                        this.status = 0;
                    };
                    return HScrollerContainer;
                }(ui.BasicView));
                scroller.HScrollerContainer = HScrollerContainer;
                egret.registerClass(HScrollerContainer,'com.views.ui.scroller.HScrollerContainer');
            })(scroller = ui.scroller || (ui.scroller = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
