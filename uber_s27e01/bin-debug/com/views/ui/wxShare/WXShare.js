var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var wxShare;
            (function (wxShare) {
                var WXShare = (function (_super) {
                    __extends(WXShare, _super);
                    function WXShare() {
                        _super.call(this);
                        /*var rate = com.model.DataCenter.instance.configVO.whRate;
                        var style = { font: Math.floor(60 * com.model.DataCenter.instance.configVO.whRate) + "px Microsoft YaHei ", fill: "#ffffff", align: "center", wordWrap: true};
            
                        this.bmd = new Phaser.BitmapData(this.game, "bmd", com.model.DataCenter.instance.configVO.appWidth, com.model.DataCenter.instance.configVO.appHeight);
                        this.bmd.fill(0, 0, 0, 0.7);
                        this.bmd.add(this);
                        this.bmd.update(0, 0, this.bmd.width, this.bmd.height);
            
                        this.arrow = new Phaser.Sprite(this.game, 0, 0, "arron_rt");
                        this.arrow.scale.set(rate);
                        this.arrow.x = com.model.DataCenter.instance.configVO.appWidth - this.arrow.width;
                        this.addChild(this.arrow);
            
                        this.txt = new Phaser.Text(this.game, 0, 0, "呐，一个人玩游戏多闷，\r分享给朋友，钱多多，大家赚！", style);
                        this.txt.x = (com.model.DataCenter.instance.configVO.appWidth - this.txt.width) / 2;
                        this.txt.y = 103 * rate;
                        this.addChild(this.txt);
            
                        this.inputEnabled = true;
                        this.input.priorityID = 2;
            
                        setTimeout(this.addTouchEnd.bind(this), 100); */
                    }
                    var d = __define,c=WXShare,p=c.prototype;
                    return WXShare;
                }(ui.BasicView));
                wxShare.WXShare = WXShare;
                egret.registerClass(WXShare,'com.views.ui.wxShare.WXShare');
            })(wxShare = ui.wxShare || (ui.wxShare = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
