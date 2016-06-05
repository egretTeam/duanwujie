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
            var AwardDialog = (function (_super) {
                __extends(AwardDialog, _super);
                function AwardDialog() {
                    _super.call(this);
                }
                var d = __define,c=AwardDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("rise"));
                };
                p.createContent = function () {
                    this.text = new egret.TextField();
                    this.text.x = 370;
                    this.text.y = 710;
                    this.text.size = 30;
                    this.addChild(this.text);
                    this.text.height = 50;
                    this.update();
                    var input = new egret.TextField();
                    input.x = 370;
                    input.y = 760;
                    input.size = 30;
                    input.text = "123";
                    input.background = true;
                    input.border = true;
                    input.type = egret.TextFieldType.INPUT;
                    input.maxChars = 11;
                    this.addChild(input);
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (AwardDialog.balance <= 0) {
                        return;
                    }
                    if (new egret.Rectangle(240, 460, 160, 160).contains(evt.stageX, evt.stageY)) {
                        AwardDialog.balance--;
                        com.MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
                    }
                };
                p.update = function () {
                    this.text.text = '' + AwardDialog.balance;
                };
                p.showShareArea = function () {
                };
                p.close = function () {
                };
                AwardDialog.balance = 5;
                return AwardDialog;
            }(dialog.Dialog));
            dialog.AwardDialog = AwardDialog;
            egret.registerClass(AwardDialog,'com.views.dialog.AwardDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
