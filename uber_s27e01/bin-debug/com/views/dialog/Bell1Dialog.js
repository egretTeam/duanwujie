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
            var Bell1Dialog = (function (_super) {
                __extends(Bell1Dialog, _super);
                function Bell1Dialog() {
                    _super.call(this);
                    this.bells = [["凤凰传奇", "最炫名族风"], ["凤凰传奇", "最炫名族风"], ["凤凰传奇", "最炫名族风"], ["凤凰传奇", "最炫名族风"], ["凤凰传奇", "最炫名族风"]];
                }
                var d = __define,c=Bell1Dialog,p=c.prototype;
                p.showbelldeitel = function (i) {
                    var Dailog = new dialog.Bell2Dialog();
                    Dailog.setUrl(this.bells[i]);
                    this.jump(Dailog);
                };
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("bell1"));
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
                    else if (new egret.Rectangle(368, 380, 130, 35).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(0);
                    }
                    else if (new egret.Rectangle(368, 470, 130, 35).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(1);
                    }
                    else if (new egret.Rectangle(168, 550, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(2);
                    }
                    else if (new egret.Rectangle(168, 630, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(3);
                    }
                    else if (new egret.Rectangle(168, 720, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(4);
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("bell1");
                };
                return Bell1Dialog;
            }(dialog.LuckDialog));
            dialog.Bell1Dialog = Bell1Dialog;
            egret.registerClass(Bell1Dialog,'com.views.dialog.Bell1Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
