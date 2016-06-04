/**
 * 物品抽象类，可以用于表示得分物品、奖励物品、障碍物等。
 * @author 蔡羽
 *
 */
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
                    var AbstractItem = (function (_super) {
                        __extends(AbstractItem, _super);
                        function AbstractItem() {
                            _super.call(this);
                            this.gap = 10;
                            this.isEnd = false;
                            this.isHit = false;
                            var dragonbonesData = RES.getRes("items/json");
                            var textureData = RES.getRes("items/texture");
                            var texture = RES.getRes("items/png");
                            var dragonbonesFactory = new dragonBones.EgretFactory();
                            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
                            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
                            this.armature = dragonbonesFactory.buildArmature("Armature");
                            this.init();
                        }
                        var d = __define,c=AbstractItem,p=c.prototype;
                        p.init = function () { };
                        ;
                        p.getType = function () {
                            return -1;
                        };
                        p.setPos = function (x, y) {
                            this.x = x;
                            this.y = y;
                        };
                        p.reset = function () {
                            this.isEnd = false;
                            this.isHit = false;
                            this.init();
                        };
                        p.roundEnd = function () {
                            if (!this.isHit) {
                                this.isEnd = true;
                                //对象池回收本对象
                                ClassPool.getInstance().reclaim(this);
                            }
                        };
                        p.update = function () {
                            if (this.isEnd)
                                return;
                            this.y += this.gap;
                            if (this.y >= com.model.DataCenter.instance.configVO.appHeight - 50) {
                                this.roundEnd();
                            }
                        };
                        return AbstractItem;
                    }(com.views.ui.BasicView));
                    gameScene.AbstractItem = AbstractItem;
                    egret.registerClass(AbstractItem,'com.views.ui.scene.gameScene.AbstractItem',["com.views.ui.scene.gameScene.Item"]);
                })(gameScene = scene.gameScene || (scene.gameScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
