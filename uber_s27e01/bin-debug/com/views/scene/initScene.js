var com;
(function (com) {
    var views;
    (function (views) {
        var scene;
        (function (scene) {
            var InitScene = (function (_super) {
                __extends(InitScene, _super);
                function InitScene() {
                    _super.call(this);
                    this.playing = true;
                    this.loading = new com.views.ui.loading.LoaderLoading("resource/resource.json?v=0", "gameScene", this.onConfigComplete.bind(this));
                    this.addChild(this.loading);
                }
                var d = __define,c=InitScene,p=c.prototype;
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                    dragonBones.WorldClock.clock.remove(this.armature);
                    dragonBones.WorldClock.clock.remove(this.drum);
                    egret.Ticker.getInstance().unregister(this.dragonbones, this);
                    this.drum.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.swapDrumStatus, this);
                    this.rankingBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRankingList, this);
                    this.ruleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRuleList, this);
                };
                p.onConfigComplete = function (e) {
                    this.initInitLayout();
                    this.removeChild(this.loading);
                };
                p.initInitLayout = function () {
                    //背景
                    this.armature = com.utils.AppUtils.loadArmature("page1/json", "page1/texture", "page1/png", "armatureName");
                    this.armature.animation.gotoAndPlay("newAnimation", -1, -1, 1);
                    this.display = this.armature.display;
                    this.addChild(this.display);
                    //            console.log(this.display.x+" "+this.display.y+" "+this.display.anchor)
                    this.display.x = this.display.width / 2;
                    this.display.y = this.display.height / 4 + 56;
                    //鼓
                    this.drum = com.utils.AppUtils.loadArmature("drum/json", "drum/texture", "drum/png", "Armature");
                    this.drum.display.x = this.display.width / 5 * 4;
                    this.drum.display.y = 100;
                    this.drum.animation.gotoAndPlay("kai", -1, -1, 0);
                    this.drum.display.touchEnabled = true;
                    this.drum.display.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swapDrumStatus, this);
                    this.addChild(this.drum.display);
                    //排行榜
                    this.rankingBtn = new egret.Shape();
                    this.rankingBtn.width = 180;
                    this.rankingBtn.height = 130;
                    this.rankingBtn.x = this.stage.width * 2 / 3 - 20;
                    this.rankingBtn.y = this.stage.height * 2 / 5;
                    this.rankingBtn.graphics.beginFill(0x00FF00, 0);
                    this.rankingBtn.graphics.drawRect(0, 0, this.rankingBtn.width, this.rankingBtn.height);
                    this.rankingBtn.graphics.endFill();
                    this.addChild(this.rankingBtn);
                    this.rankingBtn.touchEnabled = true;
                    this.rankingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRankingList, this);
                    //规则说明
                    this.ruleBtn = new egret.Shape();
                    this.ruleBtn.width = 200;
                    this.ruleBtn.height = 500;
                    this.ruleBtn.x = 40;
                    this.ruleBtn.y = 0;
                    this.ruleBtn.graphics.beginFill(0x00FF00, 0);
                    this.ruleBtn.graphics.drawRect(0, 0, this.ruleBtn.width, this.ruleBtn.height);
                    this.ruleBtn.graphics.endFill();
                    this.addChild(this.ruleBtn);
                    this.ruleBtn.touchEnabled = true;
                    this.ruleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRuleList, this);
                    //开始游戏
                    this.startBtn = new egret.Shape();
                    this.startBtn.width = 280;
                    this.startBtn.height = 150;
                    this.startBtn.x = this.stage.width * 1 / 3 - 20;
                    this.startBtn.y = this.stage.height * 5 / 9 - 40;
                    this.startBtn.graphics.beginFill(0x00FF00, 0);
                    this.startBtn.graphics.drawRect(0, 0, this.startBtn.width, this.startBtn.height);
                    this.startBtn.graphics.endFill();
                    this.startBtn.touchEnabled = true;
                    this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
                    this.addChild(this.startBtn);
                    dragonBones.WorldClock.clock.add(this.drum);
                    dragonBones.WorldClock.clock.add(this.armature);
                    egret.Ticker.getInstance().register(this.dragonbones, this);
                };
                p.dragonbones = function (advancedTime) {
                    dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                };
                /**
                 * 开始游戏
                 */
                p.startGame = function (evt) {
                    com.MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
                };
                p.showPage = function (evt, pageName) {
                    this.infoPage = new egret.Bitmap(RES.getRes(pageName));
                    this.infoPage.x = 0;
                    this.infoPage.y = -100;
                    this.close1Btn = new egret.Bitmap(RES.getRes("close1"));
                    this.close2Btn = new egret.Bitmap(RES.getRes("close2"));
                    this.close1Btn.touchEnabled = true;
                    this.close2Btn.touchEnabled = true;
                    this.close1Btn.x = this.infoPage.width * 4 / 5 + 20;
                    this.close1Btn.y = this.infoPage.height / 6 - 40;
                    this.close2Btn.x = this.infoPage.width / 3 - 40;
                    this.close2Btn.y = this.infoPage.height * 2 / 3 + 50;
                    this.close1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                    this.close2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                    this.addChild(this.infoPage);
                    this.addChild(this.close1Btn);
                    this.addChild(this.close2Btn);
                };
                /**
                 * 弹出规则页
                 */
                p.showRuleList = function (evt) {
                    this.showPage(evt, "rule");
                };
                /**
                 * 弹出排名
                 */
                p.showRankingList = function (evt) {
                    this.showPage(evt, "page1Bg");
                };
                p.hidePage = function (evt) {
                    this.removeChild(this.infoPage);
                    this.removeChild(this.close1Btn);
                    this.removeChild(this.close2Btn);
                    this.close1Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                    this.close2Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                };
                p.swapDrumStatus = function (evt) {
                    this.playing = !this.playing;
                    if (this.playing)
                        this.drum.animation.gotoAndPlay("kai", -1, -1, 0);
                    else
                        this.drum.animation.gotoAndPlay("guan", -1, -1, 1);
                };
                return InitScene;
            }(scene.AbstractScene));
            scene.InitScene = InitScene;
            egret.registerClass(InitScene,'com.views.scene.InitScene');
        })(scene = views.scene || (views.scene = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
