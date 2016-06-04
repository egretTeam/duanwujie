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
                    var shield = (function (_super) {
                        __extends(shield, _super);
                        function shield() {
                            _super.call(this);
                        }
                        var d = __define,c=shield,p=c.prototype;
                        p.init = function () {
                            this.item = this.armature.display;
                            this.addChild(this.item);
                            //this.tweenGoToBottom();
                            this.item.anchorOffsetX = this.width / 2;
                            this.item.anchorOffsetY = this.height / 2;
                            this.item.x = this.width / 2;
                            this.item.y = this.height / 2;
                            //            this.scaleX = .8;
                            //            this.scaleY = .8;
                            this.armature.animation.gotoAndPlay("logo", -1, -1, -0);
                            //            dragonBones.WorldClock.clock.add(this.armature);
                            //
                            //            egret.Ticker.getInstance().register(this.dragonbones,this);
                        };
                        p.dragonbones = function (advancedTime) {
                            dragonBones.WorldClock.clock.advanceTime(advancedTime / 5000);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
                            //            dragonBones.WorldClock.clock.remove(this.armature);
                            //            egret.Ticker.getInstance().unregister(this.dragonbones,this);
                        };
                        p.getType = function () {
                            return com.constants.ItemConstant.SHILED;
                        };
                        return shield;
                    }(gameScene.AbstractItem));
                    gameScene.shield = shield;
                    egret.registerClass(shield,'com.views.ui.scene.gameScene.shield');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
