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
                        p.getImageName = function () {
                            return "zongzi";
                        };
                        p.dragonbones = function (advancedTime) {
                            dragonBones.WorldClock.clock.advanceTime(advancedTime / 5000);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
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
