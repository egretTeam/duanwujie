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
                    var luzhangBomb = (function (_super) {
                        __extends(luzhangBomb, _super);
                        function luzhangBomb() {
                            _super.call(this);
                        }
                        var d = __define,c=luzhangBomb,p=c.prototype;
                        p.init = function () {
                            if (this.texture == null)
                                this.texture = RES.getRes("luzhang");
                            if (this.config == null)
                                this.config = RES.getRes("luzhangjson");
                            this.system = new particle.GravityParticleSystem(this.texture, this.config);
                            this.system.start(400);
                            this.addChild(this.system);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
                            this.system.stop(true);
                            this.removeChild(this.system);
                            this.system = null;
                        };
                        p.getType = function () {
                            return com.constants.ItemConstant.BOMB;
                        };
                        return luzhangBomb;
                    }(gameScene.AbstractItem));
                    gameScene.luzhangBomb = luzhangBomb;
                    egret.registerClass(luzhangBomb,'com.views.ui.scene.gameScene.luzhangBomb');
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
