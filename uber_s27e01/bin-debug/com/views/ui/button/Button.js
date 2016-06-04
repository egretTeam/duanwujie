var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var button;
            (function (button) {
                var Button = (function (_super) {
                    __extends(Button, _super);
                    /**
                    * 按钮
                    * @skins 皮肤数组，长度为3 [正常，按下，禁用]
                    */
                    function Button(skins) {
                        _super.call(this);
                        this.skins = new Array(); //皮肤数组
                        this.enable = true; //可用状态
                        this.skinIndex = 0; //皮肤索引
                        var i = 0;
                        for (i = 0; i < skins.length; i++)
                            this.skins.push(skins[i]);
                        this.bg = new egret.Bitmap();
                        this.addChild(this.bg);
                        this.setSkin(0);
                        this.touchEnabled = true;
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.onTouchEnd, this);
                        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
                    }
                    var d = __define,c=Button,p=c.prototype;
                    /**
                    * 设置可用
                    * @b 是否可用
                    */
                    p.setEnable = function (b) {
                        this.enable = b;
                        if (!this.enable)
                            this.setSkin(2);
                        else
                            this.setSkin(0);
                    };
                    d(p, "width"
                        /**
                        * 宽度
                        */
                        ,function () {
                            if (this.bg == null) {
                                return 0;
                            }
                            else
                                return this.bg.width;
                        }
                        /**
                        * 宽度
                        */
                        ,function (value) {
                            this.bg.width = value;
                        }
                    );
                    d(p, "height"
                        /**
                        * 高度
                        */
                        ,function () {
                            if (this.bg == null) {
                                return 0;
                            }
                            else
                                return this.bg.height;
                        }
                        /**
                        * 高度
                        */
                        ,function (value) {
                            this.bg.height = value;
                        }
                    );
                    /**
                    * 设置按钮皮肤
                    * @skins 按钮皮肤，长度为3 [正常，按下，禁用]
                    */
                    p.setButtonSkin = function (skins) {
                        var i = 0;
                        this.skins = new Array();
                        for (i = 0; i < skins.length; i++)
                            this.skins.push(skins[i]);
                        this.setSkin(this.skinIndex);
                    };
                    p.onRemoveStage = function (e) {
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                        this.removeEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.onTouchEnd, this);
                        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                        this.skins = null;
                    };
                    /**
                    * 开始点击
                    * @e 点击事件
                    */
                    p.onTouchBegin = function (e) {
                        if (!(this.enable)) {
                            e.preventDefault();
                        }
                        else {
                            this.setSkin(1);
                        }
                    };
                    /**
                    * 结束点击
                    * @e 点击事件
                    */
                    p.onTouchEnd = function (e) {
                        if (!(this.enable))
                            e.preventDefault();
                        else
                            this.setSkin(0);
                    };
                    /**
                    * 设置皮肤
                    * @index 皮肤索引
                    */
                    p.setSkin = function (index) {
                        this.bg.texture = RES.getRes(this.skins[index]);
                        this.skinIndex = index;
                    };
                    return Button;
                }(ui.BasicView));
                button.Button = Button;
                egret.registerClass(Button,'com.views.ui.button.Button');
            })(button = ui.button || (ui.button = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
