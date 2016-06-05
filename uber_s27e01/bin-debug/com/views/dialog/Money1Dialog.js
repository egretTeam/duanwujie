var com;
(function (com) {
    var views;
    (function (views) {
        var dialog;
        (function (dialog) {
            /**
             *
             * @author
             *
             */
            var Money1Dialog = (function (_super) {
                __extends(Money1Dialog, _super);
                function Money1Dialog() {
                    _super.call(this);
                }
                var d = __define,c=Money1Dialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("money1"));
                };
                p.createContent = function () {
                    //手机号码输入框
                    this.phonenum = new com.views.text.CText;
                    this.phonenum.x = 170;
                    this.phonenum.y = 400;
                    this.phonenum.width = 300;
                    this.phonenum.restrict = "0-9";
                    this.phonenum.maxChars = 11;
                    this.phonenum.setLabel("请输入天翼手机号码");
                    this.addChild(this.phonenum);
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 480, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.Money2Dialog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("money1");
                };
                return Money1Dialog;
            }(dialog.LuckDialog));
            dialog.Money1Dialog = Money1Dialog;
            egret.registerClass(Money1Dialog,'com.views.dialog.Money1Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
