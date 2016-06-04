var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var tab;
            (function (tab) {
                var TabBar = (function (_super) {
                    __extends(TabBar, _super);
                    function TabBar(btnArr) {
                        _super.call(this);
                        this.btnArr = new Array(); //按钮数组
                        this._selectedIndex = 0; //选择索引
                        var i = 0;
                        for (i = 0; i < btnArr.length; i++) {
                            this.addChild(btnArr[i]);
                            btnArr[i].x = btnArr[i].width * i;
                            btnArr[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onItemClick, this);
                            this.btnArr.push(btnArr[i]);
                        }
                        this.selectedIndex = 0;
                    }
                    var d = __define,c=TabBar,p=c.prototype;
                    d(p, "selectedIndex"
                        /**
                        * 获取索引
                        * @value 索引值
                        */
                        ,function () {
                            return this._selectedIndex;
                        }
                        /**
                        * 设置索引
                        * @value 索引值
                        */
                        ,function (value) {
                            var i = 0;
                            this._selectedIndex = value;
                            for (i = 0; i < this.btnArr.length; i++) {
                                if (i == this._selectedIndex)
                                    this.btnArr[i].setEnable(false);
                                else
                                    this.btnArr[i].setEnable(true);
                            }
                            this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
                        }
                    );
                    p.onRemoveStage = function (e) {
                        var i = 0;
                        for (i = 0; i < this.btnArr.length; i++)
                            this.btnArr[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onItemClick, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.btnArr = null;
                    };
                    p.onItemClick = function (e) {
                        var i = 0;
                        for (i = 0; i < this.btnArr.length; i++) {
                            if (this.btnArr[i] == e.currentTarget) {
                                this.selectedIndex = i;
                                break;
                            }
                        }
                    };
                    /**
                    * 变化
                    */
                    TabBar.CHANGE = "CHANGE"; //变化
                    return TabBar;
                }(ui.BasicView));
                tab.TabBar = TabBar;
                egret.registerClass(TabBar,'com.views.ui.tab.TabBar');
            })(tab = ui.tab || (ui.tab = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
