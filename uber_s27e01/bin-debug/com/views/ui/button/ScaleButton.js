var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var button;
            (function (button) {
                var ScaleButton = (function (_super) {
                    __extends(ScaleButton, _super);
                    /**
                    * 开关按钮
                    * @skins0 皮肤0
                    * @skins1 皮肤1
                    */
                    function ScaleButton(skins) {
                        _super.call(this, skins);
                        /**
                        * 状态
                        */
                        this.status = 0; //状态
                        this.oldX = 0; //旧x
                        this.oldY = 0; //旧y
                        this.anchorOffsetX = this.bg.width / 2;
                        this.anchorOffsetY = this.bg.height / 2;
                    }
                    var d = __define,c=ScaleButton,p=c.prototype;
                    p.onTouchBegin = function (e) {
                        this.setScale(0.8);
                        _super.prototype.onTouchBegin.call(this, e);
                    };
                    p.onTouchEnd = function (e) {
                        this.setScale(1);
                        _super.prototype.onTouchEnd.call(this, e);
                    };
                    return ScaleButton;
                }(com.views.ui.button.Button));
                button.ScaleButton = ScaleButton;
                egret.registerClass(ScaleButton,'com.views.ui.button.ScaleButton');
            })(button = ui.button || (ui.button = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
