var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scroller;
            (function (scroller) {
                var HScroller = (function (_super) {
                    __extends(HScroller, _super);
                    /**
                    * 竖直滑动条
                    * @barSkin 底皮肤
                    * @sliderSkin 滑块皮肤
                    */
                    function HScroller(barSkin, sliderSkin) {
                        _super.call(this);
                        this.bar = new egret.Bitmap(RES.getRes(barSkin));
                        this.addChild(this.bar);
                        this.slider = new egret.Bitmap(RES.getRes(sliderSkin));
                        this.addChild(this.slider);
                        this.slider.y = (this.bar.height - this.slider.height) / 2;
                    }
                    var d = __define,c=HScroller,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bar = null;
                        this.slider = null;
                    };
                    /**
                    * 设置百分比
                    * @rate 百分比
                    */
                    p.setPercent = function (rate) {
                        var x = rate * (this.bar.width - this.slider.width);
                        this.slider.x = x;
                    };
                    return HScroller;
                }(ui.BasicView));
                scroller.HScroller = HScroller;
                egret.registerClass(HScroller,'com.views.ui.scroller.HScroller');
            })(scroller = ui.scroller || (ui.scroller = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
