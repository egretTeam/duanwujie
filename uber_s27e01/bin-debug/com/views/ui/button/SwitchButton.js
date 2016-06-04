var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var button;
            (function (button) {
                var SwitchButton = (function (_super) {
                    __extends(SwitchButton, _super);
                    /**
                    * 开关按钮
                    * @skins0 皮肤0
                    * @skins1 皮肤1
                    */
                    function SwitchButton(skins0, skins1) {
                        _super.call(this, skins0);
                        /**
                        * 状态
                        */
                        this.status = 0; //状态
                        this.skins0 = skins0;
                        this.skins1 = skins1;
                    }
                    var d = __define,c=SwitchButton,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.skins0 = null;
                        this.skins1 = null;
                    };
                    p.onTouchBegin = function (e) {
                        this.status = 1 - this.status;
                        this.skins = this["skins" + this.status];
                        _super.prototype.onTouchBegin.call(this, e);
                    };
                    /**
                     * 设置皮肤
                     * @skins0 皮肤0
                     * @skins1 皮肤1
                     */
                    p.setSkins = function () {
                        this.status = 1 - this.status;
                        this.skins = this["skins" + this.status];
                        this.setSkin(this.status);
                    };
                    return SwitchButton;
                }(button.Button));
                button.SwitchButton = SwitchButton;
                egret.registerClass(SwitchButton,'com.views.ui.button.SwitchButton');
            })(button = ui.button || (ui.button = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
