var com;
(function (com) {
    var views;
    (function (views) {
        var scene;
        (function (scene) {
            /**
             *
             * @author
             *
             */
            var AbstractScene = (function (_super) {
                __extends(AbstractScene, _super);
                function AbstractScene() {
                    _super.apply(this, arguments);
                }
                var d = __define,c=AbstractScene,p=c.prototype;
                return AbstractScene;
            }(com.views.ui.BasicView));
            scene.AbstractScene = AbstractScene;
            egret.registerClass(AbstractScene,'com.views.scene.AbstractScene');
        })(scene = views.scene || (views.scene = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
