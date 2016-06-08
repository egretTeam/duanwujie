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
                    com.utils.NetworkUtil.requestUser();
                }
                var d = __define,c=InitScene,p=c.prototype;
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                    dragonBones.WorldClock.clock.remove(this.armature);
                    dragonBones.WorldClock.clock.remove(this.drum);
                    dragonBones.WorldClock.clock.remove(this.titleAmt);
                    egret.Ticker.getInstance().unregister(this.dragonbones, this);
                    this.drum.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.swapDrumStatus, this);
                    this.rankingBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRankingList, this);
                    this.ruleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showRuleList, this);
                };
                p.onConfigComplete = function (e) {
                    console.log("init scene start");
                    this.initInitLayout();
                    this.removeChild(this.loading);
                    console.log("init scene complete");
                };
                p.onAddStage = function () {
                };
                p.initInitLayout = function () {
                    var dragonbonesData = RES.getRes("page1/json");
                    var textureData = RES.getRes("page1/texture");
                    var t = RES.getRes("page1/png");
                    var dragonbonesFactory = new dragonBones.EgretFactory();
                    dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                    dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(t, textureData));
                    //背景
                    this.armature = dragonbonesFactory.buildArmature("armatureName");
                    this.armature.animation.gotoAndPlay("beijing", -1, -1, 0);
                    this.display = this.armature.display;
                    this.addChild(this.display);
                    //            console.log(this.display.x+" "+this.display.y+" "+this.display.anchor)
                    this.display.x = this.display.width / 2;
                    this.display.y = this.display.height / 2 - 100;
                    //标题
                    this.titleAmt = dragonbonesFactory.buildArmature("armatureName");
                    this.addChild(this.titleAmt.display);
                    this.titleAmt.display.x = this.display.width / 2;
                    this.titleAmt.display.y = this.display.height / 2 - 150;
                    this.titleAmt.animation.gotoAndPlay("biaoti", -1, -1, 1);
                    //鼓
                    this.drum = com.utils.AppUtils.loadArmature("drum/json", "drum/texture", "drum/png", "Armature");
                    this.drum.display.x = this.display.width / 5 * 4 + 50;
                    this.drum.display.y = 100;
                    this.drum.animation.gotoAndPlay("kai", -1, -1, 0);
                    this.drum.display.touchEnabled = true;
                    this.drum.display.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swapDrumStatus, this);
                    this.addChild(this.drum.display);
                    var alpha = 0;
                    var yOff = 300;
                    //排行榜
                    this.rankingBtn = new egret.Shape();
                    this.rankingBtn.width = 180;
                    this.rankingBtn.height = 130;
                    this.rankingBtn.x = com.model.DataCenter.instance.configVO.appWidth * 2 / 3 - 20;
                    this.rankingBtn.y = com.model.DataCenter.instance.configVO.appHeight * 2 / 5 + yOff;
                    this.rankingBtn.graphics.beginFill(0x00FF00, alpha);
                    this.rankingBtn.graphics.drawRect(0, 0, this.rankingBtn.width, this.rankingBtn.height);
                    this.rankingBtn.graphics.endFill();
                    this.addChild(this.rankingBtn);
                    this.rankingBtn.touchEnabled = true;
                    this.rankingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRankingList, this);
                    //规则说明
                    this.ruleBtn = new egret.Shape();
                    this.ruleBtn.width = 200;
                    this.ruleBtn.height = 450 + yOff;
                    ;
                    this.ruleBtn.x = 40;
                    this.ruleBtn.y = 0;
                    this.ruleBtn.graphics.beginFill(0x00FF00, alpha);
                    this.ruleBtn.graphics.drawRect(0, 0, this.ruleBtn.width, this.ruleBtn.height);
                    this.ruleBtn.graphics.endFill();
                    this.addChild(this.ruleBtn);
                    this.ruleBtn.touchEnabled = true;
                    this.ruleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRuleList, this);
                    //开始游戏
                    this.startBtn = new egret.Shape();
                    this.startBtn.width = 280;
                    this.startBtn.height = 150;
                    this.startBtn.x = com.model.DataCenter.instance.configVO.appWidth * 1 / 3 - 20;
                    this.startBtn.y = com.model.DataCenter.instance.configVO.appHeight * 5 / 9 - 40 + yOff;
                    this.startBtn.graphics.beginFill(0x00FF00, alpha);
                    this.startBtn.graphics.drawRect(0, 0, this.startBtn.width, this.startBtn.height);
                    this.startBtn.graphics.endFill();
                    this.startBtn.touchEnabled = true;
                    this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
                    this.addChild(this.startBtn);
                    dragonBones.WorldClock.clock.add(this.drum);
                    dragonBones.WorldClock.clock.add(this.armature);
                    dragonBones.WorldClock.clock.add(this.titleAmt);
                    egret.Ticker.getInstance().register(this.dragonbones, this);
                };
                p.dragonbones = function (advancedTime) {
                    dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                };
                /**
                 * 开始游戏
                 */
                p.startGame = function (evt) {
                    console.log('+++++++++++++++++++++++++', com.MainView.instance.stage.stageWidth);
                    com.MainView.instance.changeScene(com.constants.SceneConstants.TEACH);
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
                    this.ruleBtn.touchEnabled = false;
                    this.rankingBtn.touchEnabled = false;
                    this.startBtn.touchEnabled = false;
                    this.drum.display.touchEnabled = false;
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
                    var list = new eui.List();
                    list.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5]);
                    list.x = 100;
                    list.y = 200;
                    list.width = 300;
                    list.height = 500;
                    var exml = "<e:Scroller xmlns:e=\"http://ns.egret.com/eui\">\n                <e:List id=\"list\" width=\"330\" height=\"350\">\n                    <e:itemRendererSkinName>\n                        <e:Skin states=\"up,down,disabled\" height=\"50\">\n                            <e:Label text=\"{data.ranking}\" textColor=\"0x64470C\" left=\"0\"/>\n                            <e:Label text=\"{data.name}\" textColor=\"0x64470C\" horizontalCenter=\"0\"/>\n                            <e:Label text=\"{data.score}\" textColor=\"0x64470C\" right=\"0\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                </e:List>\n            </e:Scroller>";
                    var clazz = EXML.parse(exml);
                    this.scroller = new clazz();
                    this.addChild(this.scroller);
                    var list = this.scroller.list;
                    com.utils.NetworkUtil.requestRankingList(function (collection) {
                        list.dataProvider = collection;
                    });
                    this.scroller.x = this.infoPage.width / 3 - 50;
                    this.scroller.y = 360;
                };
                p.hideRankingPage = function (evt) {
                    this.removeChild(this.scroller);
                    this.hidePage(evt);
                };
                p.hidePage = function (evt) {
                    this.ruleBtn.touchEnabled = true;
                    this.rankingBtn.touchEnabled = true;
                    this.startBtn.touchEnabled = true;
                    this.drum.display.touchEnabled = true;
                    this.removeChild(this.infoPage);
                    this.removeChild(this.close1Btn);
                    this.removeChild(this.close2Btn);
                    if (this.scroller != null && this.contains(this.scroller))
                        this.removeChild(this.scroller);
                    this.close1Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                    this.close2Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePage, this);
                };
                p.swapDrumStatus = function (evt) {
                    this.playing = !this.playing;
                    if (this.playing) {
                        this.drum.animation.gotoAndPlay("kai", -1, -1, 0);
                        com.MainView.instance.playBackgroundMusic();
                    }
                    else {
                        this.drum.animation.gotoAndPlay("guan", -1, -1, 1);
                        com.MainView.instance.stopBackgroundMusic();
                    }
                };
                return InitScene;
            }(scene.AbstractScene));
            scene.InitScene = InitScene;
            egret.registerClass(InitScene,'com.views.scene.InitScene');
        })(scene = views.scene || (views.scene = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
