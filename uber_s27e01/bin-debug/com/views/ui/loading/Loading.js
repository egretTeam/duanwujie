var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var loading;
            (function (loading) {
                var Loading = (function (_super) {
                    __extends(Loading, _super);
                    /**
                    * 进度条
                    * @barSkin 进度底
                    * @loadingSkin loading条
                    */
                    function Loading(barSkin, loadingSkin) {
                        _super.call(this);
                        this.bg = new egret.Bitmap(RES.getRes(barSkin));
                        this.addChild(this.bg);
                        this.loading = new egret.Bitmap(RES.getRes(loadingSkin));
                        this.addChild(this.loading);
                        this.loading.x = (this.bg.width - this.loading.width) / 2;
                        this.loading.y = (this.bg.height - this.loading.height) / 2;
                        this.txt = new egret.TextField();
                        this.txt.width = this.loading.width;
                        this.addChild(this.txt);
                        this.txt.y = this.loading.y + this.loading.height;
                        this.txt.textAlign = egret.HorizontalAlign.CENTER;
                        this.txt.stroke = 1;
                        this.txt.strokeColor = 0x000000;
                        this.maskShape = new egret.Shape();
                        this.maskShape.graphics.beginFill(0, 0.01);
                        this.maskShape.graphics.drawRect(0, 0, this.loading.width, this.loading.height);
                        this.maskShape.graphics.endFill();
                        this.addChild(this.maskShape);
                    }
                    var d = __define,c=Loading,p=c.prototype;
                    /**
                    * 设置loading
                    * @p 百分数
                    */
                    p.setLoading = function (p) {
                        this.txt.text = "LOADING..." + Math.floor(p) + "%";
                        this.maskShape.width = (p / 100.0) * this.loading.width;
                        this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (p / 100.0), this.loading.height);
                    };
                    /**
                    * 设置百分比
                    * @p 百分数
                    */
                    p.setPercent = function (p) {
                        this.txt.text = "" + Math.floor(p) + "%";
                        this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (p / 100.0), this.loading.height);
                    };
                    /**
                    * 设置个数比
                    * @c 当前个数
                    * @t 总个数
                    */
                    p.setCurrent = function (c, t) {
                        this.txt.text = "" + Math.floor(c / t * 100) + "%";
                        this.maskShape.width = (c / t) * this.loading.width;
                        this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (c / t), this.loading.height);
                    };
                    /**
                    * 设置个数比
                    * @c 当前个数
                    * @t 总个数
                    */
                    p.setCurrentNoTxt = function (c, t) {
                        this.loading.mask = new egret.Rectangle(0, 0, this.loading.width * (c / t), this.loading.height);
                    };
                    /**
                    * 设置偏移
                    * @x x
                    * @y y
                    */
                    p.setOffset = function (x, y) {
                        this.loading.x = (this.bg.width - this.loading.width) / 2 + x;
                        this.loading.y = (this.bg.height - this.loading.height) / 2 + y;
                    };
                    d(p, "width"
                        /**
                        * 宽度
                        */
                        ,function () {
                            return this.bg.width;
                        }
                        /**
                        * 宽度
                        * @value 宽度
                        */
                        ,function (value) {
                        }
                    );
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                        this.loading = null;
                        this.txt = null;
                        this.maskShape = null;
                    };
                    return Loading;
                }(ui.BasicView));
                loading.Loading = Loading;
                egret.registerClass(Loading,'com.views.ui.loading.Loading');
            })(loading = ui.loading || (ui.loading = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
