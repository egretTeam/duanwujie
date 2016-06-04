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
                    var car = (function (_super) {
                        __extends(car, _super);
                        function car() {
                            _super.call(this);
                            this.hasShield = false;
                            this.isLeftRight = 0; //0为左  1为右
                            this.touchEnabled = true;
                            this.initCar();
                        }
                        var d = __define,c=car,p=c.prototype;
                        p.broken = function () {
                            this.boatArmature.animation.gotoAndPlay("game over", -1, -1, 1);
                        };
                        p.initCar = function () {
                            var dragonbonesData = RES.getRes("boatjson");
                            var textureData = RES.getRes("boattexturejson");
                            var texture = RES.getRes("boattexturepng");
                            var dragonbonesFactory = new dragonBones.EgretFactory();
                            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
                            this.boatArmature = dragonbonesFactory.buildArmature("chuanyidong");
                            this.shieldArmature = dragonbonesFactory.buildArmature("fanghuzhao");
                            this.addChild(this.boatArmature.display);
                            this.boatArmature.display.x = 0;
                            this.boatArmature.display.y = 0;
                            this.boatArmature.animation.gotoAndPlay("move", -1, -1, 0);
                            this.scaleX = 0.6;
                            this.scaleY = 0.6;
                            dragonBones.WorldClock.clock.add(this.boatArmature);
                            egret.Ticker.getInstance().register(this.dragonbones, this);
                            this.boatArmature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.resetBoat, this);
                            dragonbonesFactory, dragonbonesData, textureData, texture = null;
                        };
                        p.setShield = function (hasShield) {
                            this.hasShield = hasShield;
                            if (this.hasShield) {
                                this.addChild(this.shieldArmature.display);
                                this.shieldArmature.display.x = 0;
                                this.shieldArmature.display.y = 0;
                                this.shieldArmature.animation.gotoAndPlay("fanghuzhao", -1, -1, 0);
                                dragonBones.WorldClock.clock.add(this.shieldArmature);
                            }
                            else {
                                dragonBones.WorldClock.clock.remove(this.shieldArmature);
                                if (this.contains(this.shieldArmature.display))
                                    this.removeChild(this.shieldArmature.display);
                            }
                        };
                        p.setPos = function (x, y) {
                            this.x = x;
                            this.y = y;
                        };
                        p.resetCar = function (num) {
                            //            this.boatArmature.display.$children[num].visible = true;
                        };
                        p.tweenGoTo = function (tx, lorr) {
                            this.isLeftRight = lorr;
                            if (lorr == 0) {
                                this.left();
                            }
                            else {
                                this.right();
                            }
                            egret.Tween.get(this).to({ x: tx }, 400);
                        };
                        p.left = function () {
                            this.boatArmature.animation.gotoAndPlay("zuozhuan", -1, 3, 1);
                        };
                        p.right = function () {
                            this.boatArmature.animation.gotoAndPlay("youzhuan", -1, 3, 1);
                        };
                        p.resetBoat = function (evt) {
                            if (evt.animationName != "move") {
                                this.boatArmature.animation.gotoAndPlay("move", -1, -1, 0);
                            }
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
                            this.boatArmature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.resetBoat, this);
                            this.boatArmature = null;
                            dragonBones.WorldClock.clock.remove(this.boatArmature);
                            dragonBones.WorldClock.clock.remove(this.shieldArmature);
                            egret.Ticker.getInstance().unregister(this.dragonbones, this);
                        };
                        p.stopArmature1Animation = function () {
                            this.boatArmature.animation.stop();
                            dragonBones.WorldClock.clock.remove(this.boatArmature);
                            this.setShield(false);
                            this.removeChild(this.boatArmature.display);
                        };
                        p.tweenGoToLeft = function () {
                            if (this.isLeftRight == 0)
                                return;
                            var tx = this.x - com.model.DataCenter.instance.configVO.appWidth / 4;
                            this.left();
                            egret.Tween.get(this).to({ x: tx }, 400);
                            this.isLeftRight = 0;
                        };
                        p.tweenGoToRight = function () {
                            if (this.isLeftRight == 1)
                                return;
                            var tx = this.x + com.model.DataCenter.instance.configVO.appWidth / 4;
                            this.right();
                            egret.Tween.get(this).to({ x: tx }, 400);
                            this.isLeftRight = 1;
                        };
                        p.dragonbones = function (advancedTime) {
                            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
                        };
                        return car;
                    }(com.views.ui.BasicView));
                    gameScene.car = car;
                    egret.registerClass(car,'com.views.ui.scene.gameScene.car');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
