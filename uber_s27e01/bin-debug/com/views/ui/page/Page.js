var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var page;
            (function (page) {
                var Page = (function (_super) {
                    __extends(Page, _super);
                    /**
                    * 分页组件
                    * @barSkin 分页输入背景
                    * @subSkin 减按钮皮肤
                    * @addSkin 加按钮皮肤
                    * @pageType 分页模式 0-页码模式 1-数量模式
                    */
                    function Page(barSkin, subSkin, addSkin, pageType) {
                        _super.call(this);
                        /**
                        * 模式 0-页码模式 1-数量模式
                        */
                        this.pageType = 0; //模式 0-页码模式 1-数量模式
                        /**
                        * 当前页码
                        */
                        this.currentPage = 1; //当前页码
                        /**
                        * 总页码
                        */
                        this.totalPage = 1; //总页码
                        this.pageType = pageType;
                        this.add0 = new com.views.ui.button.Button(subSkin);
                        this.addChild(this.add0);
                        this.bg = new egret.Bitmap(RES.getRes("" + barSkin));
                        this.addChild(this.bg);
                        this.bg.x = this.add0.width;
                        this.bg.y = (this.bg.height - this.add0.height) / 2;
                        this.txt = new egret.TextField();
                        this.addChild(this.txt);
                        this.txt.width = this.bg.width;
                        this.txt.height = this.bg.height;
                        this.txt.x = this.bg.x;
                        this.txt.y = this.bg.y;
                        this.txt.textAlign = egret.HorizontalAlign.CENTER;
                        this.txt.verticalAlign = egret.VerticalAlign.MIDDLE;
                        this.txt.type = egret.TextFieldType.INPUT;
                        this.txt.textColor = 0x000000;
                        this.add1 = new com.views.ui.button.Button(addSkin);
                        this.addChild(this.add1);
                        this.add1.x = this.bg.x + this.bg.width;
                        this.add0.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd0, this);
                        this.add1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd1, this);
                        this.txt.addEventListener(egret.Event.CHANGE, this.onChange, this);
                    }
                    var d = __define,c=Page,p=c.prototype;
                    /**
                    * 设置字体格式
                    * @color 颜色
                    * @size 大小
                    */
                    p.setTextformat = function (color, size) {
                        this.txt.textColor = color;
                        this.txt.size = size;
                    };
                    /**
                    * 初始化
                    * @color 当前页码
                    * @size 总页码
                    */
                    p.init = function (currentPage, totalPage) {
                        this.currentPage = currentPage;
                        this.totalPage = totalPage;
                        this.dis();
                    };
                    /**
                    * 设置背景偏移
                    * @offsetX 偏移x
                    * @offsetY 偏移y
                    */
                    p.setBGOffset = function (offsetX, offsetY) {
                        this.bg.x = this.add0.width + offsetX;
                        this.bg.y = (this.bg.height - this.add0.height) / 2 + offsetY;
                        this.txt.x = this.bg.x;
                        this.txt.y = this.bg.y;
                    };
                    p.onRemoveStage = function (e) {
                        this.add0.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd0, this);
                        this.add1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd1, this);
                        this.txt.removeEventListener(egret.Event.CHANGE, this.onChange, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.add0 = null;
                        this.bg = null;
                        this.txt = null;
                        this.add1 = null;
                    };
                    p.onAdd0 = function (e) {
                        this.currentPage--;
                        if (this.currentPage < 1)
                            this.currentPage = 1;
                        this.dis();
                    };
                    p.onAdd1 = function (e) {
                        this.currentPage++;
                        if (this.currentPage > this.totalPage)
                            this.currentPage = this.totalPage;
                        this.dis();
                    };
                    p.onChange = function (e) {
                        if (this.txt.text == "")
                            this.currentPage = 0;
                        else
                            this.currentPage = parseInt("" + this.txt.text);
                        if (this.currentPage < 1)
                            this.currentPage = 1;
                        else if (this.currentPage > this.totalPage)
                            this.currentPage = this.totalPage;
                        this.dis();
                    };
                    p.dis = function () {
                        if (this.pageType == 0)
                            this.txt.text = "" + this.currentPage + "/" + this.totalPage;
                        else
                            this.txt.text = "" + this.currentPage;
                        this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
                    };
                    /**
                    * 总页码
                    */
                    Page.CHANGE = "CHANGE"; //变化
                    return Page;
                }(ui.BasicView));
                page.Page = Page;
                egret.registerClass(Page,'com.views.ui.page.Page');
            })(page = ui.page || (ui.page = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
