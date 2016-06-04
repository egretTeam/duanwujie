var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var mc;
            (function (mc) {
                var Effect = (function (_super) {
                    __extends(Effect, _super);
                    /**
                    * 动画
                    * @prefix 前缀
                    * @totalFrame 总帧数
                    * @frameRate 帧频
                    * @startFrame 开始帧
                    */
                    function Effect(prefix, totalFrame, frameRate, startFrame) {
                        _super.call(this);
                        this.count = 0; //计数
                        this.status = 0; //状态
                        this.prefix = ""; //前缀
                        this.totalFrame = 0; //总帧数
                        this.frameRate = 0; //帧频
                        this.startFrame = 0; //开始帧
                        this.prefix = prefix;
                        this.totalFrame = totalFrame;
                        this.frameRate = frameRate;
                        if (startFrame)
                            this.startFrame = startFrame;
                        this.bg = new egret.Bitmap(RES.getRes("" + this.prefix + "" + this.startFrame));
                        this.addChild(this.bg);
                        this.status = 0;
                        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    }
                    var d = __define,c=Effect,p=c.prototype;
                    p.onRemoveStage = function (e) {
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.bg = null;
                    };
                    p.onEnterFrame = function (e) {
                        this.count++;
                        if (this.count > this.frameRate) {
                            this.count = 0;
                            this.status++;
                            if (this.status <= this.totalFrame) {
                                if (this.bg == null)
                                    return;
                                this.bg.texture = RES.getRes("" + this.prefix + "" + (this.status + this.startFrame));
                            }
                            else {
                                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                                if (this.parent == null)
                                    return;
                                this.parent.removeChild(this);
                            }
                        }
                    };
                    return Effect;
                }(com.views.ui.BasicView));
                mc.Effect = Effect;
                egret.registerClass(Effect,'com.views.ui.mc.Effect');
            })(mc = ui.mc || (ui.mc = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
