var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var tips;
            (function (tips) {
                var FadeTips = (function (_super) {
                    __extends(FadeTips, _super);
                    function FadeTips(s, x, y, w, color) {
                        _super.call(this);
                        this.txt = new egret.TextField();
                        this.addChild(this.txt);
                        this.txt.size = Math.floor(60 * com.model.DataCenter.instance.configVO.whRate);
                        this.txt.textColor = color;
                        this.txt.bold = true;
                        this.txt.strokeColor = 0x000000;
                        this.txt.width = w;
                        this.txt.textAlign = egret.HorizontalAlign.CENTER;
                        this.txt.text = "" + s;
                        this.txt.stroke = 3;
                        this.x = x;
                        this.y = y;
                        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    }
                    var d = __define,c=FadeTips,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.txt = null;
                    };
                    p.onEnterFrame = function (e) {
                        this.y--;
                        this.alpha -= 0.02;
                        if (this.alpha <= 0) {
                            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                            if (this.parent)
                                this.parent.removeChild(this);
                        }
                    };
                    /**
                    * 显示
                    * @p 容器
                    * @s 文本
                    * @x x
                    * @y y
                    */
                    FadeTips.show = function (p, s, x, y, w, color) {
                        p.addChild(new FadeTips(s, x, y, w, color));
                    };
                    return FadeTips;
                }(ui.BasicView));
                tips.FadeTips = FadeTips;
                egret.registerClass(FadeTips,'com.views.ui.tips.FadeTips');
            })(tips = ui.tips || (ui.tips = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
