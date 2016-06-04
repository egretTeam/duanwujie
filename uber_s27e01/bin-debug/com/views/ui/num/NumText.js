var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var num;
            (function (num_1) {
                var NumText = (function (_super) {
                    __extends(NumText, _super);
                    function NumText() {
                        _super.call(this);
                        this.num = 0; //数字
                        this.targetNum = 0; //目标数字
                        this.count = 0; //计数
                        this.step = 0; //步进值
                        this.total = 10; //总计数
                        this.txt = new egret.TextField();
                        this.addChild(this.txt);
                    }
                    var d = __define,c=NumText,p=c.prototype;
                    /**
                    * 设置数字
                    * @num 数字
                    */
                    p.setNum = function (num) {
                        this.targetNum = num;
                        this.step = (this.targetNum - this.num) / this.total;
                        if (!(this.hasEventListener(egret.Event.ENTER_FRAME)))
                            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    };
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.txt = null;
                    };
                    p.onEnterFrame = function (e) {
                        this.count++;
                        if (this.count >= this.total) {
                            this.count = 0;
                            this.num = this.targetNum;
                            this.dis();
                            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                            return;
                        }
                        this.num += this.step;
                        this.dis();
                    };
                    p.dis = function () {
                        this.txt.text = "" + Math.floor(this.num);
                    };
                    return NumText;
                }(ui.BasicView));
                num_1.NumText = NumText;
                egret.registerClass(NumText,'com.views.ui.num.NumText');
            })(num = ui.num || (ui.num = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
