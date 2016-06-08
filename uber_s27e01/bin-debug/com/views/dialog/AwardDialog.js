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
                    this.text.x = 360;
                    this.text.y = 681;
                    this.text.size = 30;
                    this.addChild(this.text);
                    this.text.height = 50;
                    this.update();
                    this.riseAmt = com.utils.AppUtils.loadArmature("award/json", "award/texture", "award/png", "zongzidonghua");
                    this.rise = this.riseAmt.display;
                    this.rise.x = 320;
                    this.rise.y = 440;
                    this.riseAmt.animation.gotoAndPlay("1dianjiqian", -1, -1, 1);
                    this.bg.touchEnabled = false;
                    this.rise.touchEnabled = true;
                    this.rise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.customTouchHandler, this);
                    this.addChild(this.rise);
                    dragonBones.WorldClock.clock.add(this.riseAmt);
                    egret.Ticker.getInstance().register(this.dragonbones, this);
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                    this.rise.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.customTouchHandler, this);
                    dragonBones.WorldClock.clock.remove(this.riseAmt);
                    egret.Ticker.getInstance().unregister(this.dragonbones, this);
                };
                p.dragonbones = function (advancedTime) {
                    dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                };
                p.customTouchHandler = function (evt) {
                    if (AwardDialog.balance <= 0) {
                        com.utils.AppUtils.alert(this.stage, "对不起，您今天的抽奖机会用完了！");
                        return;
                    }
                    //            AwardDialog.balance--;
                    this.riseAmt.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.goToNextPage, this);
                    this.riseAmt.animation.gotoAndPlay("2dianjihou", -1, -1, 1);
                };
                p.goToNextPage = function () {
                    var ra = this.riseAmt;
                    var page = this;
                    com.utils.NetworkUtil.luckDraw(function (res) {
                        if (AwardDialog.balance > 0) {
                            AwardDialog.balance = res.lotteryNum;
                            com.MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
                            com.views.scene.luckScene.getInstance().goToPage(parseInt(res.record.score), res.record);
                            ra.removeEventListener(dragonBones.AnimationEvent.COMPLETE, page.goToNextPage, page);
                        }
                        else {
                            com.utils.AppUtils.alert(page.stage, res.msg);
                            page.riseAmt.animation.gotoAndPlay("1dianjiqian", -1, -1, 1);
                        }
                    });
                    //            MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
                };
                p.update = function () {
                    this.text.text = '' + AwardDialog.balance;
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
