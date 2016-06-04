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
            var WeipinhuiDialog = (function (_super) {
                __extends(WeipinhuiDialog, _super);
                function WeipinhuiDialog() {
                    _super.call(this);
                }
                var d = __define,c=WeipinhuiDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("weipinhui"));
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
                    console.log("weipinhui");
                };
                return WeipinhuiDialog;
            }(dialog.LuckDialog));
            dialog.WeipinhuiDialog = WeipinhuiDialog;
            egret.registerClass(WeipinhuiDialog,'com.views.dialog.WeipinhuiDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
