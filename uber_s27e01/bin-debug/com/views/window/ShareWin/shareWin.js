var com;
(function (com) {
    var views;
    (function (views) {
        var windows;
        (function (windows) {
            var shareWin;
            (function (shareWin_1) {
                var shareWin = (function (_super) {
                    __extends(shareWin, _super);
                    function shareWin() {
                        _super.call(this, "");
                        this.initshareWin();
                    }
                    var d = __define,c=shareWin,p=c.prototype;
                    p.initshareWin = function () {
                        this.shareBit = new egret.Bitmap();
                        this.shareBit.texture = RES.getRes("share_p0");
                        this.shareBit.scaleX = 1.2;
                        this.shareBit.scaleY = 1.2;
                        this.shareBit.x = -this.shareBit.width;
                        this.shareBit.y = 800;
                        this.addChild(this.shareBit);
                        egret.Tween.get(this.shareBit).to({ x: 0, y: 0 }, 800, egret.Ease.quadInOut);
                        this.touchEnabled = true;
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClose, this);
                    };
                    p.onRemoveStage = function (e) {
                        _super.prototype.onRemoveStage.call(this, e);
                        this.shareBit = null;
                        com.views.windows.shareWin.shareWin._instance = null;
                    };
                    p.onClose = function (e) {
                        this.parent.removeChild(this);
                    };
                    /**
                     * 显示
                     * @p 父容器
                     */
                    shareWin.show = function (p) {
                        //var rate = Math.min(com.model.DataCenter.instance.configVO.appWidth * 0.53 / 340, com.model.DataCenter.instance.configVO.appHeight * 0.53 / 370);
                        if (this._instance == null) {
                            this._instance = new shareWin();
                            //this._instance.setScale(rate);
                            //this._instance.containerSprite.x = (com.model.DataCenter.instance.configVO.appWidth - 340 * rate) / 2;;
                            //this._instance.containerSprite.y = (com.model.DataCenter.instance.configVO.appHeight - 370 * rate) / 2;
                            p.addChild(this._instance);
                        }
                    };
                    shareWin._instance = null; //单例
                    return shareWin;
                }(com.views.ui.windows.MaskWindow));
                shareWin_1.shareWin = shareWin;
                egret.registerClass(shareWin,'com.views.windows.shareWin.shareWin');
            })(shareWin = windows.shareWin || (windows.shareWin = {}));
        })(windows = views.windows || (views.windows = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
