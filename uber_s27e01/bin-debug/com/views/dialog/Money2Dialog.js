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
            var Money2Dialog = (function (_super) {
                __extends(Money2Dialog, _super);
                function Money2Dialog() {
                    _super.call(this);
                }
                var d = __define,c=Money2Dialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("money2"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 480, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("money2");
                };
                return Money2Dialog;
            }(dialog.LuckDialog));
            dialog.Money2Dialog = Money2Dialog;
            egret.registerClass(Money2Dialog,'com.views.dialog.Money2Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
