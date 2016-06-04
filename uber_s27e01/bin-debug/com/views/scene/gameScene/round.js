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
                    var round = (function (_super) {
                        __extends(round, _super);
                        function round() {
                            _super.call(this);
                        }
                        var d = __define,c=round,p=c.prototype;
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
                            this.armature.animation.gotoAndPlay("zongzi", -1, -1, -0);
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
                            return com.constants.ItemConstant.SCORE;
                        };
                        return round;
                    }(gameScene.AbstractItem));
                    gameScene.round = round;
                    egret.registerClass(round,'com.views.ui.scene.gameScene.round');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
