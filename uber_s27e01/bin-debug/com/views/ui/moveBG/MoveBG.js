var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var moveBG;
            (function (moveBG) {
                var MoveBG = (function (_super) {
                    __extends(MoveBG, _super);
                    /**
                    * 移动背景
                    * @bgName 图片id
                    */
                    function MoveBG(bgName) {
                        _super.call(this);
                        this.bgWidth = 0; //背景宽度
                        this.bg0 = new egret.Bitmap(RES.getRes(bgName));
                        this.addChild(this.bg0);
                        this.bgWidth = this.bg0.width;
                        this.bg1 = new egret.Bitmap(RES.getRes(bgName));
                        this.addChild(this.bg1);
                        this.bg1.x = this.bgWidth;
                        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    }
                    var d = __define,c=MoveBG,p=c.prototype;
                    /**
                     * 设置缩放
                     * @s 缩放比率
                     */
                    p.setScale = function (s) {
                        _super.prototype.setScale.call(this, s);
                        this.bgWidth = this.bg0.width * s;
                    };
                    p.onRemoveStage = function (e) {
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg0 = null;
                        this.bg1 = null;
                    };
                    p.onEnterFrame = function (e) {
                        this.x--;
                        if (this.x <= 0 - this.bgWidth)
                            this.x = 0;
                    };
                    return MoveBG;
                }(ui.BasicView));
                moveBG.MoveBG = MoveBG;
                egret.registerClass(MoveBG,'com.views.ui.moveBG.MoveBG');
            })(moveBG = ui.moveBG || (ui.moveBG = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
