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
                    var luzhang = (function (_super) {
                        __extends(luzhang, _super);
                        function luzhang() {
                            _super.call(this);
                        }
                        var d = __define,c=luzhang,p=c.prototype;
                        p.getImageName = function () {
                            return "zhangai";
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
                            return com.constants.ItemConstant.BLOCK;
                        };
                        return luzhang;
                    }(gameScene.AbstractItem));
                    gameScene.luzhang = luzhang;
                    egret.registerClass(luzhang,'com.views.ui.scene.gameScene.luzhang');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
