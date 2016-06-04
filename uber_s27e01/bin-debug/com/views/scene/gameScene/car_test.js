var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scene;
            (function (scene) {
                var gameScene;
                (function (gameScene) {
                    var car1 = (function (_super) {
                        __extends(car1, _super);
                        function car1() {
                            _super.call(this);
                            this.isLeftRight = 0; //0为左  1为右
                            this.touchEnabled = true;
                            this.initCar();
                        }
                        var d = __define,c=car1,p=c.prototype;
                        p.initCar = function () {
                            var dragonbonesData = RES.getRes("carjson");
                            var textureData = RES.getRes("cartexturejson");
                            var texture = RES.getRes("cartexturepng");
                            var dragonbonesFactory = new dragonBones.EgretFactory();
                            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
                            this.armature = dragonbonesFactory.buildArmature("Armature");
                            this.armature1 = dragonbonesFactory.buildArmature("xg02");
                            for (var i in this.armature.display.$children) {
                                this.armature.display.$children[i].visible = false;
                            }
                            this.armature.display.$children[0].visible = true;
                            this.addChild(this.armature.display);
                            this.addChild(this.armature1.display);
                            this.armature1.animation.gotoAndPlay("1", -1, -1, 0);
                            this.armature.display.x = this.width / 2;
                            this.armature.display.y = this.height / 2;
                            this.armature1.display.x = this.armature.display.width / 2;
                            this.armature1.display.y = this.height * 3 / 5;
                            this.armature1.display.anchorOffsetX = this.armature1.display.width / 2;
                            this.armature1.display.anchorOffsetX = this.armature1.display.height / 2;
                            this.anchorOffsetX = this.width / 2;
                            this.anchorOffsetY = this.height / 2;
                            this.scaleX = 0.4;
                            this.scaleY = 0.4;
                            dragonBones.WorldClock.clock.add(this.armature);
                            dragonBones.WorldClock.clock.add(this.armature1);
                            this.addEventListener(egret.Event.ENTER_FRAME, this.dragonbones, this);
                            dragonbonesFactory, dragonbonesData, textureData, texture = null;
                        };
                        p.setPos = function (x, y) {
                            this.x = x;
                            this.y = y;
                        };
                        p.resetCar = function (num) {
                            this.armature.display.$children[num].visible = true;
                        };
                        p.tweenGoTo = function (tx, lorr) {
                            this.isLeftRight = lorr;
                            if (lorr == 0) {
                                this.armature.animation.gotoAndPlay("zuo", -1, -1, 1);
                            }
                            else {
                                this.armature.animation.gotoAndPlay("you", -1, -1, 1);
                            }
                            egret.Tween.get(this).to({ x: tx }, 400);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
                            this.armature = null;
                            this.armature1 = null;
                            dragonBones.WorldClock.clock.remove(this.armature);
                            dragonBones.WorldClock.clock.remove(this.armature1);
                            this.removeEventListener(egret.Event.ENTER_FRAME, this.dragonbones, this);
                        };
                        p.stopArmature1Animation = function () {
                            this.armature1.animation.stop();
                            dragonBones.WorldClock.clock.remove(this.armature1);
                            this.removeChild(this.armature1.display);
                        };
                        p.tweenGoToLeft = function () {
                            if (this.isLeftRight == 0)
                                return;
                            var tx = this.x - com.model.DataCenter.instance.configVO.appWidth / 4;
                            this.armature.animation.gotoAndPlay("zuo", -1, -1, 1);
                            egret.Tween.get(this).to({ x: tx }, 400);
                            this.isLeftRight = 0;
                        };
                        p.tweenGoToRight = function () {
                            if (this.isLeftRight == 1)
                                return;
                            var tx = this.x + com.model.DataCenter.instance.configVO.appWidth / 4;
                            this.armature.animation.gotoAndPlay("you", -1, -1, 1);
                            egret.Tween.get(this).to({ x: tx }, 400);
                            this.isLeftRight = 1;
                        };
                        p.dragonbones = function (frameTime) {
                            dragonBones.WorldClock.clock.advanceTime(0.01);
                        };
                        return car1;
                    }(com.views.ui.BasicView));
                    gameScene.car1 = car1;
                    egret.registerClass(car1,'com.views.ui.scene.gameScene.car1');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
