var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var windows;
            (function (windows) {
                var Window = (function (_super) {
                    __extends(Window, _super);
                    /**
                     * 窗口
                     * @skin 皮肤
                     * @needMask 需要模态遮罩
                     */
                    function Window(skin) {
                        _super.call(this);
                        this.bg = new egret.Bitmap(RES.getRes(skin));
                        this.addChild(this.bg);
                    }
                    var d = __define,c=Window,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                    };
                    return Window;
                }(ui.BasicView));
                windows.Window = Window;
                egret.registerClass(Window,'com.views.ui.windows.Window');
            })(windows = ui.windows || (ui.windows = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
