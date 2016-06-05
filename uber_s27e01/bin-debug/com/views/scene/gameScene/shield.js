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
                        p.getImageName = function () {
                            return "logo";
                        };
                        p.dragonbones = function (advancedTime) {
                            dragonBones.WorldClock.clock.advanceTime(advancedTime / 5000);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
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
