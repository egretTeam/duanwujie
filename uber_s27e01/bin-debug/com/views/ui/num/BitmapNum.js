var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var num;
            (function (num) {
                var BitmapNum = (function (_super) {
                    __extends(BitmapNum, _super);
                    /**
                    * 位图数字
                    * @prefix 前缀
                    * @gap 间隔
                    */
                    function BitmapNum(prefix, gap) {
                        _super.call(this);
                        this.numArr = new Array(); //数字数组
                        this.gap = 0; //间隔
                        this.prefix = ""; //前缀
                        /**
                        * 显示宽度
                        */
                        this.disWidth = 0; //显示宽度
                        /**
                        * 显示高度
                        */
                        this.disHeight = 0; //显示高度
                        this.prefix = prefix;
                        this.gap = gap;
                    }
                    var d = __define,c=BitmapNum,p=c.prototype;
                    /**
                    * 初始化
                    * @n 数字
                    */
                    p.init = function (n) {
                        var bmp;
                        var s = "" + n;
                        var i = 0;
                        this.clearNum();
                        for (i = 0; i < s.length; i++) {
                            bmp = new egret.Bitmap(RES.getRes("" + this.prefix + "" + s.substr(i, 1)));
                            this.addChild(bmp);
                            if (i > 0)
                                bmp.x = this.numArr[i - 1].x + this.numArr[i - 1].width + this.gap;
                            this.numArr.push(bmp);
                            this.disWidth = bmp.x + bmp.width;
                            this.disHeight = bmp.height;
                        }
                    };
                    p.onRemoveStage = function (e) {
                        this.clearNum();
                        _super.prototype.onRemoveStage.call(this, e);
                    };
                    p.clearNum = function () {
                        var i = 0;
                        for (i = 0; i < this.numArr.length; i++)
                            this.removeChild(this.numArr[i]);
                        this.disWidth = 0;
                        this.disHeight = 0;
                        this.numArr = new Array();
                    };
                    return BitmapNum;
                }(ui.BasicView));
                num.BitmapNum = BitmapNum;
                egret.registerClass(BitmapNum,'com.views.ui.num.BitmapNum');
            })(num = ui.num || (ui.num = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
