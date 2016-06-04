var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scroller;
            (function (scroller) {
                var ScrollerList = (function (_super) {
                    __extends(ScrollerList, _super);
                    /**
                    * 滑动列表
                    * @width 宽
                    * @height 高
                    * @scrollerBarSkin 底皮肤
                    * @scrollerSliderSkin 滑块皮肤
                    */
                    function ScrollerList(width, height, scrollerBarSkin, scrollerSliderSkin) {
                        _super.call(this, width, height, scrollerBarSkin, scrollerSliderSkin);
                        this.totalWidth = 0; //总宽度
                    }
                    var d = __define,c=ScrollerList,p=c.prototype;
                    /**
                    * 添加元件
                    * @s 元件
                    * @width 元件宽
                    * @height 元件高
                    * @gap 空隔
                    * @hGap 横向空格
                    */
                    p.addItem = function (s, width, height, gap, hGap) {
                        var temp;
                        this.bg.addChild(s);
                        temp = this.totalWidth + width;
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
                    };
                    /**
                    * 移除所有
                    */
                    p.removeAllItems = function () {
                        this.totalWidth = 0;
                        _super.prototype.removeAllItems.call(this);
                    };
                    return ScrollerList;
                }(scroller.ScrollerContainer));
                scroller.ScrollerList = ScrollerList;
                egret.registerClass(ScrollerList,'com.views.ui.scroller.ScrollerList');
            })(scroller = ui.scroller || (ui.scroller = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
