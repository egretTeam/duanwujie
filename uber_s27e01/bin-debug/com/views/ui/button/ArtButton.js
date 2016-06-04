var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var button;
            (function (button) {
                var ArtButton = (function (_super) {
                    __extends(ArtButton, _super);
                    /**
                    * 美术字按钮
                    * @skins 按钮皮肤，长度为3 [正常，按下，禁用]
                    * @artSkins label皮肤，长度为3 [正常，按下，禁用]
                    */
                    function ArtButton(skins, artSkins) {
                        _super.call(this, skins);
                        this.artSkins = new Array(); //美术字皮肤
                        var i = 0;
                        for (i = 0; i < artSkins.length; i++)
                            this.artSkins.push(artSkins[i]);
                        this.label = new egret.Bitmap(RES.getRes(this.artSkins[0]));
                        this.addChild(this.label);
                        this.label.x = (this.bg.width - this.label.width) / 2;
                        this.label.y = (this.bg.height - this.label.height) / 2;
                    }
                    var d = __define,c=ArtButton,p=c.prototype;
                    d(p, "width"
                        /**
                       * 宽度
                       */
                        ,function () {
                            if (this.bg == null)
                                return 0;
                            return this.bg.width;
                        }
                        /**
                        * 宽度
                        */
                        ,function (value) {
                            this.label.width = value / this.bg.texture._bitmapWidth * this.label.texture._bitmapWidth;
                            this.bg.width = value;
                            this.label.x = (this.bg.width - this.label.width) / 2;
                            this.label.y = (this.bg.height - this.label.height) / 2;
                        }
                    );
                    d(p, "height"
                        /**
                        * 高度
                        */
                        ,function () {
                            if (this.bg == null)
                                return 0;
                            return this.bg.height;
                        }
                        /**
                        * 高度
                        */
                        ,function (value) {
                            this.label.height = value / this.bg.texture._bitmapHeight * this.label.texture._bitmapHeight;
                            this.bg.height = value;
                            this.label.x = (this.bg.width - this.label.width) / 2;
                            this.label.y = (this.bg.height - this.label.height) / 2;
                        }
                    );
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.artSkins = null;
                        this.label = null;
                    };
                    /**
                    * 设置label皮肤
                    * @artSkins label皮肤，长度为3 [正常，按下，禁用]
                    */
                    p.setArtSkin = function (artSkins) {
                        var i = 0;
                        for (i = 0; i < artSkins.length; i++)
                            this.artSkins.push(artSkins[i]);
                        this.setSkin(this.skinIndex);
                    };
                    /**
                    * 设置label偏移
                    * @artSkins label皮肤，长度为3 [正常，按下，禁用]
                    */
                    p.setLabelOffset = function (offsetX, offsetY) {
                        this.label.x = (this.bg.width - this.label.width) / 2 + offsetX;
                        this.label.y = (this.bg.height - this.label.height) / 2 + offsetY;
                    };
                    /**
                    * 设置皮肤
                    * @index 皮肤索引
                    */
                    p.setSkin = function (index) {
                        _super.prototype.setSkin.call(this, index);
                        if (this.label != null)
                            this.label.texture = RES.getRes(this.artSkins[index]);
                    };
                    return ArtButton;
                }(button.Button));
                button.ArtButton = ArtButton;
                egret.registerClass(ArtButton,'com.views.ui.button.ArtButton');
            })(button = ui.button || (ui.button = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
