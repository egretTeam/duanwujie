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
            var JdDialog = (function (_super) {
                __extends(JdDialog, _super);
                function JdDialog() {
                    _super.call(this);
                }
                var d = __define,c=JdDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("JD"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 815, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("Jd");
                };
                return JdDialog;
            }(dialog.LuckDialog));
            dialog.JdDialog = JdDialog;
            egret.registerClass(JdDialog,'com.views.dialog.JdDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
