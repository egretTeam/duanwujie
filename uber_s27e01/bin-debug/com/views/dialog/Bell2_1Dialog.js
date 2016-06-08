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
            var Bell2_1Dialog = (function (_super) {
                __extends(Bell2_1Dialog, _super);
                function Bell2_1Dialog(code, pn) {
                    _super.call(this);
                    this.code = code;
                    this.pn = pn;
                }
                var d = __define,c=Bell2_1Dialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("bell2_1"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 480, 300, 65).contains(evt.stageX, evt.stageY)) {
                        var page = this;
                        com.utils.NetworkUtil.openCrbt(this.code, this.pn, function (res) {
                            page.jump(new dialog.Bell2_1_1Dialog());
                        });
                    }
                    else if (new egret.Rectangle(168, 545, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("bell2_1");
                };
                return Bell2_1Dialog;
            }(dialog.LuckDialog));
            dialog.Bell2_1Dialog = Bell2_1Dialog;
            egret.registerClass(Bell2_1Dialog,'com.views.dialog.Bell2_1Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
