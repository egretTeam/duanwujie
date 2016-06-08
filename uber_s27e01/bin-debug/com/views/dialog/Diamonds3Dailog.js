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
            var Diamonds3Dailog = (function (_super) {
                __extends(Diamonds3Dailog, _super);
                function Diamonds3Dailog() {
                    _super.call(this);
                }
                var d = __define,c=Diamonds3Dailog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("Diamonds3"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 474, 300, 65).contains(evt.stageX, evt.stageY)) {
                        //办理成功后 + 5
                        dialog.AwardDialog.balance += 5;
                        this.jump(new dialog.AwardDialog());
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("Diamonds3");
                };
                return Diamonds3Dailog;
            }(dialog.LuckDialog));
            dialog.Diamonds3Dailog = Diamonds3Dailog;
            egret.registerClass(Diamonds3Dailog,'com.views.dialog.Diamonds3Dailog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
