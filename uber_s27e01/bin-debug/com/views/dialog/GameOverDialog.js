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
            var GameOverDialog = (function (_super) {
                __extends(GameOverDialog, _super);
                function GameOverDialog() {
                    _super.call(this);
                }
                var d = __define,c=GameOverDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("gameover"));
                };
                p.createContent = function () {
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    //            console.log(evt.stageX+" "+evt.stageY)
                    if (this.getAwardArea().contains(evt.stageX, evt.stageY)) {
                        this.close();
                    }
                    else if (this.getShareArea().contains(evt.stageX, evt.stageY)) {
                        this.showShareArea();
                    }
                    else if (this.getTryAgainArea().contains(evt.stageX, evt.stageY)) {
                        com.MainView.instance.changeScene(com.constants.SceneConstants.GAME);
                    }
                };
                p.showShareArea = function () {
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                };
                p.getAwardArea = function () {
                    return new egret.Rectangle(170, 565, 280, 60);
                };
                p.getShareArea = function () {
                    return new egret.Rectangle(170, 680, 280, 60);
                };
                p.getTryAgainArea = function () {
                    return new egret.Rectangle(170, 760, 280, 60);
                };
                return GameOverDialog;
            }(dialog.Dialog));
            dialog.GameOverDialog = GameOverDialog;
            egret.registerClass(GameOverDialog,'com.views.dialog.GameOverDialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
