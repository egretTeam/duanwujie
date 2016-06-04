var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scroller;
            (function (scroller) {
                var VScroller = (function (_super) {
                    __extends(VScroller, _super);
                    /**
                    * 竖直滑动条
                    * @barSkin 底皮肤
                    * @sliderSkin 滑块皮肤
                    */
                    function VScroller(barSkin, sliderSkin) {
                        _super.call(this);
                        this.bar = new egret.Bitmap(RES.getRes(barSkin));
                        this.addChild(this.bar);
                        this.slider = new egret.Bitmap(RES.getRes(sliderSkin));
                        this.addChild(this.slider);
                        this.slider.x = (this.bar.width - this.slider.width) / 2;
                    }
                    var d = __define,c=VScroller,p=c.prototype;
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
                        var y = rate * (this.bar.height - this.slider.height);
                        this.slider.y = y;
                    };
                    return VScroller;
                }(ui.BasicView));
                scroller.VScroller = VScroller;
                egret.registerClass(VScroller,'com.views.ui.scroller.VScroller');
            })(scroller = ui.scroller || (ui.scroller = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
