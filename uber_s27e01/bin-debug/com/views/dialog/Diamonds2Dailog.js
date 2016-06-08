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
            var Diamonds2Dailog = (function (_super) {
                __extends(Diamonds2Dailog, _super);
                function Diamonds2Dailog(pn, code) {
                    _super.call(this);
                    this.pn = pn;
                    this.code = code;
                }
                var d = __define,c=Diamonds2Dailog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("Diamonds2"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 540, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                    else if (new egret.Rectangle(168, 459, 300, 65).contains(evt.stageX, evt.stageY)) {
                        var page = this;
                        com.utils.NetworkUtil.getMember(this.code, parseInt(this.pn), function (res) {
                            if (res.success == false) {
                                com.utils.AppUtils.alert(page.stage, res.msg);
                            }
                            else
                                page.jump(new dialog.Diamonds3Dailog());
                        });
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("Diamonds3");
                };
                return Diamonds2Dailog;
            }(dialog.LuckDialog));
            dialog.Diamonds2Dailog = Diamonds2Dailog;
            egret.registerClass(Diamonds2Dailog,'com.views.dialog.Diamonds2Dailog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
