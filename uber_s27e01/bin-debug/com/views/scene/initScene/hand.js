var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var scene;
            (function (scene) {
                var initScene;
                (function (initScene) {
                    var hand = (function (_super) {
                        __extends(hand, _super);
                        function hand() {
                            _super.call(this);
                            this.touchEnabled = true;
                            this.initHand();
                        }
                        var d = __define,c=hand,p=c.prototype;
                        p.initHand = function () {
                            this.round1 = new egret.Shape();
                            this.round1.graphics.beginFill(0x88dbc1);
                            this.round1.graphics.drawCircle(0, 0, 38);
                            this.addChild(this.round1);
                            this.round1.visible = false;
                            this.round1.alpha = .5;
                            this.round2 = new egret.Shape();
                            this.round2.graphics.beginFill(0x88dbc1);
                            this.round2.graphics.drawCircle(0, 0, 30);
                            this.addChild(this.round2);
                            this.round2.alpha = .5;
                            this.round2.visible = false;
                            this.hand = new egret.Bitmap();
                            this.hand.texture = RES.getRes("hand");
                            this.addChild(this.hand);
                            this.visible = false;
                        };
                        p.setLeft = function () {
                            this.scaleX = -1;
                        };
                        p.show = function () {
                            this.alpha = 0;
                            this.visible = true;
                            egret.Tween.get(this).to({ alpha: 1 }, 200).wait(50).call(function () {
                                this.round2.visible = true;
                                this.round1.visible = true;
                                egret.Tween.get(this.round1).to({ scaleX: 1.4, scaleY: 1.4, alpha: 0 }, 200).call(function () {
                                    this.round2.visible = false;
                                    this.round1.scaleX = 1;
                                    this.round1.scaleY = 1;
                                    this.round1.alpha = .5;
                                    this.round1.visible = false;
                                    this.visible = false;
                                }, this);
                            }, this);
                        };
                        p.onRemoveStage = function (e) {
                            _super.prototype.onRemoveStage.call(this, e);
                            this.hand = null;
                            this.round1 = null;
                            this.round2 = null;
                        };
                        p.setPos = function (x, y) {
                            this.x = x;
                            this.y = y;
                        };
                        return hand;
                    }(com.views.ui.BasicView));
                    initScene.hand = hand;
                    egret.registerClass(hand,'com.views.ui.scene.initScene.hand');
                })(initScene = scene.initScene || (scene.initScene = {}));
            })(scene = ui.scene || (ui.scene = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
