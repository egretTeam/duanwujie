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
            var DiamondsDailog = (function (_super) {
                __extends(DiamondsDailog, _super);
                function DiamondsDailog() {
                    _super.call(this);
                }
                var d = __define,c=DiamondsDailog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("Diamonds"));
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
                    else if (new egret.Rectangle(168, 733, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.Diamonds2Dailog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("weipinhui");
                };
                return DiamondsDailog;
            }(dialog.LuckDialog));
            dialog.DiamondsDailog = DiamondsDailog;
            egret.registerClass(DiamondsDailog,'com.views.dialog.DiamondsDailog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
