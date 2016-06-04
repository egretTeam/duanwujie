var com;
(function (com) {
    var constants;
    (function (constants) {
        /**
         *
         * @author
         *
         */
        var SceneConstants = (function () {
            function SceneConstants() {
            }
            var d = __define,c=SceneConstants,p=c.prototype;
            SceneConstants.INIT = 0;
            SceneConstants.GAME = 1;
            SceneConstants.TEACH = 2;
            SceneConstants.LUCK = 3;
            return SceneConstants;
        }());
        constants.SceneConstants = SceneConstants;
        egret.registerClass(SceneConstants,'com.constants.SceneConstants');
    })(constants = com.constants || (com.constants = {}));
})(com || (com = {}));
