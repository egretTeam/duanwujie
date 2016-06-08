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
            var Dialog = (function (_super) {
                __extends(Dialog, _super);
                function Dialog() {
                    _super.call(this);
                    this.init();
                }
                var d = __define,c=Dialog,p=c.prototype;
                p.init = function () {
                    this.bg = this.getImage();
                    this.addChild(this.bg);
                    this.bg.y = -100;
                    this.bg.touchEnabled = true;
                    this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
                    this.createContent();
                };
                p.yOffset = function () {
                    return 0;
                };
                p.touchHandler = function (evt) {
                    console.log(evt.stageX + " " + evt.stageY);
                    if (evt.stageX > 515 && evt.stageX < 560 && evt.stageY + this.yOffset() > 230 && evt.stageY + this.yOffset() < 275) {
                        this.close();
                    }
                    else
                        this.customTouchHandler(evt);
                };
                p.close = function () {
                    console.log("dialog close");
                };
                p.customTouchHandler = function (evt) {
                };
                p.onRemoveStage = function (e) {
                    this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
                    this.removeChild(this.bg);
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.jump = function (next) {
                    this.parent.addChild(next);
                    this.parent.removeChild(this);
                };
                return Dialog;
            }(com.views.ui.BasicView));
            dialog.Dialog = Dialog;
            egret.registerClass(Dialog,'com.views.dialog.Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
