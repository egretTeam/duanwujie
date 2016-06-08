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
            var ShareDialog = (function (_super) {
                __extends(ShareDialog, _super);
                function ShareDialog() {
                    _super.call(this);
                }
                var d = __define,c=ShareDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("share_png"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    this.visible = false;
                };
                p.showShareArea = function () {
                };
                p.close = function () {
                };
                return ShareDialog;
            }(dialog.Dialog));
            dialog.ShareDialog = ShareDialog;
            egret.registerClass(ShareDialog,'com.views.dialog.ShareDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
