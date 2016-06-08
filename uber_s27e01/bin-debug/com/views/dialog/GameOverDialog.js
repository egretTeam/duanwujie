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
                    this.sharing = false;
                }
                var d = __define,c=GameOverDialog,p=c.prototype;
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("gameover"));
                };
                p.createContent = function () {
                    this.scorePanel = new egret.TextField;
                    this.scorePanel.x = 340;
                    this.scorePanel.y = 410;
                    this.scorePanel.size = 25;
                    this.scorePanel.width = 250;
                    this.scorePanel.textColor = 0x64470C;
                    this.highestScorePanel = new egret.TextField;
                    this.highestScorePanel.x = 340;
                    this.highestScorePanel.y = 455;
                    this.highestScorePanel.size = 25;
                    this.highestScorePanel.width = 250;
                    this.highestScorePanel.textColor = 0x64470C;
                    this.rankingPanel = new egret.TextField;
                    this.rankingPanel.x = 340;
                    this.rankingPanel.y = 500;
                    this.rankingPanel.size = 25;
                    this.rankingPanel.width = 250;
                    this.rankingPanel.textColor = 0x64470C;
                    //            var hs: string = egret.localStorage.getItem("highestScore");
                    //            this.highestScorePanel.text = hs==null?0+"":hs;
                    this.shareDialog = new dialog.ShareDialog();
                    this.shareDialog.visible = false;
                    this.addChild(this.shareDialog);
                    this.addChild(this.highestScorePanel);
                    this.addChild(this.scorePanel);
                    this.addChild(this.rankingPanel);
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
                    //            this.addChild(this.shareDialog);
                    this.shareDialog.visible = true;
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
