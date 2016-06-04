var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var tips;
            (function (tips) {
                var FadeTips0 = (function (_super) {
                    __extends(FadeTips0, _super);
                    function FadeTips0(s, x, y) {
                        _super.call(this);
                        this.bg = new egret.Bitmap(RES.getRes(s));
                        this.addChild(this.bg);
                        this.x = x;
                        this.y = y;
                        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    }
                    var d = __define,c=FadeTips0,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                    };
                    p.onEnterFrame = function (e) {
                        this.y--;
                        this.alpha -= 0.02;
                        if (this.alpha <= 0) {
                            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                            this.parent.removeChild(this);
                        }
                    };
                    /**
                    * 显示
                    * @p 容器
                    * @s 皮肤
                    * @x x
                    * @y y
                    */
                    FadeTips0.show = function (p, s, x, y) {
                        p.addChild(new FadeTips0(s, x, y));
                    };
                    return FadeTips0;
                }(ui.BasicView));
                tips.FadeTips0 = FadeTips0;
                egret.registerClass(FadeTips0,'com.views.ui.tips.FadeTips0');
            })(tips = ui.tips || (ui.tips = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
