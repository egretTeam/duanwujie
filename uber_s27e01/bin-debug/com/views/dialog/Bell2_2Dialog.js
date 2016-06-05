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
            var Bell2_2Dialog = (function (_super) {
                __extends(Bell2_2Dialog, _super);
                function Bell2_2Dialog() {
                    _super.call(this);
                }
                var d = __define,c=Bell2_2Dialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("bell2_2"));
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
                    console.log("bell2_2");
                };
                return Bell2_2Dialog;
            }(dialog.LuckDialog));
            dialog.Bell2_2Dialog = Bell2_2Dialog;
            egret.registerClass(Bell2_2Dialog,'com.views.dialog.Bell2_2Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
