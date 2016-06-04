var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var windows;
            (function (windows) {
                var MaskWindow = (function (_super) {
                    __extends(MaskWindow, _super);
                    /**
                     * 窗口
                     * @skin 皮肤
                     * @needMask 需要模态遮罩
                     */
                    function MaskWindow(skin, alpha) {
                        if (alpha === void 0) { alpha = 0.5; }
                        _super.call(this);
                        this.maskAlpha = 0.5; //遮罩透明值
                        this.skin = ""; //皮肤名称
                        this.skin = skin;
                        this.maskAlpha = alpha;
                        this.maskSprite = new egret.Shape();
                        this.addChild(this.maskSprite);
                        this.containerSprite = new egret.Sprite();
                        this.addChild(this.containerSprite);
                        this.bg = new egret.Bitmap();
                        this.containerSprite.addChild(this.bg);
                        this.maskSprite.touchEnabled = true;
                    }
                    var d = __define,c=MaskWindow,p=c.prototype;
                    /**
                     * 设置缩放
                     * @s 缩放比率
                     */
                    p.setScale = function (s) {
                        this.containerSprite.scaleX = s;
                        this.containerSprite.scaleY = s;
                    };
                    /**
                     * 添加对象
                     * @child 显示对象
                     */
                    p.addItem = function (child) {
                        this.containerSprite.addChild(child);
                    };
                    /**
                     * 移除对象
                     * @child 显示对象
                     */
                    p.removeItem = function (child) {
                        this.containerSprite.removeChild(child);
                    };
                    /**
                    * 设置遮罩值
                    * @ a 透明度
                    */
                    p.setMaskAlpha = function (a) {
                        this.maskSprite.graphics.beginFill(0x000000, a);
                        this.maskSprite.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
                        this.maskSprite.graphics.endFill();
                    };
                    p.onAddStage = function (e) {
                        _super.prototype.onAddStage.call(this, e);
                        this.setMaskAlpha(this.maskAlpha);
                    };
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.maskSprite = null;
                        this.bg = null;
                    };
                    p.initSkin = function () {
                        this.bg.texture = RES.getRes(this.skin);
                    };
                    return MaskWindow;
                }(ui.BasicView));
                windows.MaskWindow = MaskWindow;
                egret.registerClass(MaskWindow,'com.views.ui.windows.MaskWindow');
            })(windows = ui.windows || (ui.windows = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
