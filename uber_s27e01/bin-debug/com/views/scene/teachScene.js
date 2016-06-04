var com;
(function (com) {
    var views;
    (function (views) {
        var scene;
        (function (scene) {
            var TeachScene = (function (_super) {
                __extends(TeachScene, _super);
                function TeachScene() {
                    _super.call(this);
                    this.luzhangRoundArr = [];
                    this.initTeachLayout();
                }
                var d = __define,c=TeachScene,p=c.prototype;
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                    egret.Tween.removeAllTweens();
                    this.bg = null;
                    this.title = null;
                    this.minititle = null;
                    this.beginBtn = null;
                    this.beginBtnText = null;
                    this.bottomText = null;
                    this.line1 = null;
                    this.line2 = null;
                    this.line3 = null;
                    this.carLeft = null;
                    this.carRight = null;
                    this.handRight = null;
                    this.luzhangRoundArr = [];
                };
                p.initTeachLayout = function () {
                    this.bg = new egret.Shape();
                    this.bg.graphics.beginFill(0x5096C8);
                    this.bg.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, com.model.DataCenter.instance.configVO.appHeight);
                    this.bg.graphics.endFill();
                    this.addChild(this.bg);
                    this.line1 = new egret.Bitmap();
                    this.line1.texture = RES.getRes("initscene.line2");
                    this.line1.x = com.model.DataCenter.instance.configVO.appWidth / 4 - this.line1.width / 2;
                    this.line1.y = com.model.DataCenter.instance.configVO.appHeight - this.line1.height;
                    this.addChild(this.line1);
                    this.line2 = new egret.Bitmap();
                    this.line2.texture = RES.getRes("initscene.line1");
                    this.line2.x = com.model.DataCenter.instance.configVO.appWidth / 2 - this.line1.width / 2;
                    this.line2.y = com.model.DataCenter.instance.configVO.appHeight - this.line1.height;
                    this.addChild(this.line2);
                    this.line3 = new egret.Bitmap();
                    this.line3.texture = RES.getRes("initscene.line2");
                    this.line3.x = com.model.DataCenter.instance.configVO.appWidth * 3 / 4 - this.line1.width / 2;
                    this.line3.y = com.model.DataCenter.instance.configVO.appHeight - this.line1.height;
                    this.addChild(this.line3);
                    this.teachAni();
                    this.teachTopBottom = new egret.Shape();
                    this.teachTopBottom.graphics.beginFill(0x5096C8);
                    this.teachTopBottom.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, 200);
                    this.teachTopBottom.graphics.endFill();
                    this.teachTopBottom.graphics.beginFill(0x5096C8);
                    this.teachTopBottom.graphics.drawRect(0, com.model.DataCenter.instance.configVO.appHeight - 200, com.model.DataCenter.instance.configVO.appWidth, 300);
                    this.teachTopBottom.graphics.endFill();
                    this.addChild(this.teachTopBottom);
                    this.carLeft = new com.views.ui.scene.gameScene.car();
                    this.addChildAt(this.carLeft, 10);
                    this.carLeft.setPos(com.model.DataCenter.instance.configVO.appWidth * 3 / 8, com.model.DataCenter.instance.configVO.appHeight * 7.5 / 10);
                    this.carRight = new com.views.ui.scene.gameScene.car();
                    this.addChildAt(this.carRight, 10);
                    this.carRight.setPos(com.model.DataCenter.instance.configVO.appWidth * 5 / 8, com.model.DataCenter.instance.configVO.appHeight * 7.5 / 10);
                    this.handRight = new com.views.ui.scene.initScene.hand();
                    this.addChild(this.handRight);
                    this.handRight.x = com.model.DataCenter.instance.configVO.appWidth - this.handRight.width;
                    this.handRight.y = com.model.DataCenter.instance.configVO.appHeight - this.handRight.height;
                    this.handLeft = new com.views.ui.scene.initScene.hand();
                    this.addChild(this.handLeft);
                    this.handLeft.setLeft();
                    this.handLeft.x = this.handLeft.width;
                    this.handLeft.y = com.model.DataCenter.instance.configVO.appHeight - this.handLeft.height;
                    this.title = new egret.TextField();
                    this.title.fontFamily = "Microsoft YaHei";
                    this.title.textColor = 0x88dbc1;
                    this.title.size = 90;
                    this.title.width = com.model.DataCenter.instance.configVO.appWidth;
                    this.title.textAlign = egret.HorizontalAlign.CENTER;
                    this.title.text = "游戏教程";
                    this.title.x = 0;
                    this.title.y = 30;
                    this.addChild(this.title);
                    this.minititle = new egret.TextField();
                    this.minititle.fontFamily = "Microsoft YaHei";
                    this.minititle.textColor = 0xffffff;
                    this.minititle.size = 30;
                    this.minititle.text = "轻触屏幕换线，两辆车必须避开所有的路";
                    this.minititle.textHeight = 40;
                    this.minititle.x = 45;
                    this.minititle.width = com.model.DataCenter.instance.configVO.appWidth * 7 / 8;
                    this.minititle.y = 150;
                    this.minititle.textAlign = egret.HorizontalAlign.CENTER;
                    this.addChild(this.minititle);
                    this.minititle = new egret.TextField();
                    this.minititle.fontFamily = "Microsoft YaHei";
                    this.minititle.textColor = 0xffffff;
                    this.minititle.size = 30;
                    this.minititle.text = "障，不能错过任何绿圈。";
                    this.minititle.textHeight = 40;
                    this.minititle.x = 45;
                    this.minititle.width = com.model.DataCenter.instance.configVO.appWidth * 7 / 8;
                    this.minititle.y = 190;
                    this.minititle.textAlign = egret.HorizontalAlign.CENTER;
                    this.addChild(this.minititle);
                    this.beginBtn = new egret.Shape();
                    this.beginBtn.graphics.beginFill(0x88dbc1);
                    this.beginBtn.graphics.drawRoundRect(0, 0, 300, 100, 30, 30);
                    this.beginBtn.x = com.model.DataCenter.instance.configVO.appWidth / 2 - 150;
                    this.beginBtn.y = com.model.DataCenter.instance.configVO.appHeight * 8 / 10 + 60;
                    this.beginBtn.graphics.endFill();
                    this.addChild(this.beginBtn);
                    this.beginBtnText = new egret.TextField();
                    this.beginBtnText.fontFamily = "Microsoft YaHei";
                    this.beginBtnText.textColor = 0x404040;
                    this.beginBtnText.size = 50;
                    this.beginBtnText.text = "开始游戏";
                    this.beginBtnText.bold = true;
                    this.beginBtnText.x = com.model.DataCenter.instance.configVO.appWidth / 2 - 100;
                    this.beginBtnText.y = com.model.DataCenter.instance.configVO.appHeight * 8 / 10 + 85;
                    this.addChild(this.beginBtnText);
                    egret.Tween.get(this.beginBtnText, { loop: true }).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 90 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 110 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 90 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 110 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 90 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 110 }, 100).wait(1200);
                    egret.Tween.get(this.beginBtn, { loop: true }).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 140 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 160 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 140 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 160 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 140 }, 100).to({ x: com.model.DataCenter.instance.configVO.appWidth / 2 - 160 }, 100).wait(1200);
                    egret.setTimeout(function () {
                        this.beginBtn.touchEnabled = true;
                        this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                            egret.Tween.removeAllTweens();
                            com.MainView.instance.changeScene(1);
                        }, this);
                        this.beginBtnText.touchEnabled = true;
                        this.beginBtnText.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                            egret.Tween.removeAllTweens();
                            com.MainView.instance.changeScene(1);
                        }, this);
                    }, this, 850);
                    this.bottomText = new egret.TextField();
                    this.bottomText.fontFamily = "Microsoft YaHei";
                    this.bottomText.textColor = 0xffffff;
                    this.bottomText.width = com.model.DataCenter.instance.configVO.appWidth;
                    this.bottomText.size = 25;
                    this.bottomText.text = "技术支持：拇指部落";
                    this.bottomText.y = com.model.DataCenter.instance.configVO.appHeight * 27 / 28;
                    this.bottomText.textAlign = egret.HorizontalAlign.CENTER;
                    this.addChild(this.bottomText);
                };
                p.luzhangFactory = function (num) {
                    var luzhang = new com.views.ui.scene.gameScene.luzhang();
                    luzhang.setPos((1 + num * 2) / 8 * com.model.DataCenter.instance.configVO.appWidth, -100);
                    return luzhang;
                };
                p.roundFactory = function (num) {
                    var round = new com.views.ui.scene.gameScene.round();
                    round.setPos((1 + num * 2) / 8 * com.model.DataCenter.instance.configVO.appWidth, -100);
                    return round;
                };
                p.teachAni = function () {
                    var luzhang = this.luzhangFactory(2);
                    this.addChild(luzhang);
                    egret.Tween.get(luzhang, { loop: true }).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight + 50 }, 2800).
                        to({ y: -100, x: 7 / 8 * com.model.DataCenter.instance.configVO.appWidth }, 1).wait(400).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight + 50 }, 2800);
                    var round = this.roundFactory(3);
                    this.addChild(round);
                    egret.Tween.get(round, { loop: true }).wait(800).call(function () {
                        egret.setTimeout(function () {
                            if (this.carRight == null)
                                return;
                            this.carRight.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth * 7 / 8, 1);
                        }, this, 300);
                        this.handRight.show();
                    }, this).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight * 7.1 / 10 }, 2000).
                        to({ y: -100, x: 5 / 8 * com.model.DataCenter.instance.configVO.appWidth }, 1).
                        wait(1200).
                        call(function () {
                        egret.setTimeout(function () {
                            if (this.carRight == null)
                                return;
                            this.carRight.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth * 5 / 8, 0);
                        }, this, 300);
                        this.handRight.show();
                    }, this).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight * 7.1 / 10 }, 2000);
                    var luzhang1 = this.luzhangFactory(0);
                    this.addChild(luzhang1);
                    egret.Tween.get(luzhang1, { loop: true }).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight + 50 }, 2800).
                        to({ y: -100, x: 3 / 8 * com.model.DataCenter.instance.configVO.appWidth }, 1).
                        call(function () {
                        egret.setTimeout(function () {
                            if (this.carLeft == null)
                                return;
                            this.carLeft.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth * 1 / 8, 0);
                        }, this, 300);
                        this.handLeft.show();
                    }, this).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight + 50 }, 2800);
                    var round1 = this.roundFactory(1);
                    this.addChild(round1);
                    egret.Tween.get(round1, { loop: true }).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight * 7.1 / 10 }, 2000).
                        to({ y: -100, x: 1 / 8 * com.model.DataCenter.instance.configVO.appWidth }, 1).
                        wait(800).
                        to({ y: com.model.DataCenter.instance.configVO.appHeight * 7.1 / 10 }, 2000).
                        to({ y: -100, x: 3 / 8 * com.model.DataCenter.instance.configVO.appWidth }, 1).
                        wait(800).
                        call(function () {
                        egret.setTimeout(function () {
                            if (this.carLeft == null)
                                return;
                            this.carLeft.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth * 3 / 8, 1);
                        }, this, 300);
                        this.handLeft.show();
                    }, this);
                };
                return TeachScene;
            }(com.views.ui.BasicView));
            scene.TeachScene = TeachScene;
            egret.registerClass(TeachScene,'com.views.scene.TeachScene');
        })(scene = views.scene || (views.scene = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
