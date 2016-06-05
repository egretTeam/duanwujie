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
            var LuckDialog = (function (_super) {
                __extends(LuckDialog, _super);
                function LuckDialog() {
                    _super.apply(this, arguments);
                }
                var d = __define,c=LuckDialog,p=c.prototype;
                p.yOffset = function () {
                    return 50;
                };
                return LuckDialog;
            }(dialog.Dialog));
            dialog.LuckDialog = LuckDialog;
            egret.registerClass(LuckDialog,'com.views.dialog.LuckDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
