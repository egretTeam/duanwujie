var com;
(function (com) {
    var views;
    (function (views) {
        var dialog;
        (function (dialog) {
            /**
             *
             * @author
             *
             */
            var Bell1Dialog = (function (_super) {
                __extends(Bell1Dialog, _super);
                function Bell1Dialog() {
                    _super.call(this);
                    this.checking = false;
                    this.bells = com.constants.Bell.Bells;
                }
                var d = __define,c=Bell1Dialog,p=c.prototype;
                p.showbelldeitel = function (i) {
                    var nextDialog = new dialog.Bell2Dialog();
                    nextDialog.setData(com.constants.Bell.Bells[i]);
                    this.jump(nextDialog);
                };
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("bell1"));
                };
                p.createContent = function () {
                    var bellbuttom1 = new egret.Bitmap();
                    this.bellbuttom1 = bellbuttom1;
                    this.bellbuttom1.texture = RES.getRes("playbellbuttom");
                    this.bellbuttom1.x = 135;
                    this.bellbuttom1.y = 380;
                    this.addChild(this.bellbuttom1);
                    var bellbuttom2 = new egret.Bitmap();
                    this.bellbuttom2 = bellbuttom2;
                    this.bellbuttom2.texture = RES.getRes("playbellbuttom");
                    this.bellbuttom2.x = 135;
                    this.bellbuttom2.y = 465;
                    this.addChild(this.bellbuttom2);
                    var bellbuttom3 = new egret.Bitmap();
                    this.bellbuttom3 = bellbuttom3;
                    this.bellbuttom3.texture = RES.getRes("playbellbuttom");
                    this.bellbuttom3.x = 135;
                    this.bellbuttom3.y = 550;
                    this.addChild(this.bellbuttom3);
                    var bellbuttom4 = new egret.Bitmap();
                    this.bellbuttom4 = bellbuttom4;
                    this.bellbuttom4.texture = RES.getRes("playbellbuttom");
                    this.bellbuttom4.x = 135;
                    this.bellbuttom4.y = 635;
                    this.addChild(this.bellbuttom4);
                    var bellbuttom5 = new egret.Bitmap();
                    this.bellbuttom5 = bellbuttom5;
                    this.bellbuttom5.texture = RES.getRes("playbellbuttom");
                    this.bellbuttom5.x = 135;
                    this.bellbuttom5.y = 720;
                    this.addChild(this.bellbuttom5);
                    var stopbellbuttom = new egret.Bitmap();
                    this.stopbellbuttom = stopbellbuttom;
                    this.stopbellbuttom.texture = RES.getRes("stopbellbuttom");
                    this.stopbellbuttom.x = -100;
                    this.stopbellbuttom.y = -100;
                    this.addChild(this.stopbellbuttom);
                    this.stopbellbuttom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopbell, this);
                    this.stopbellbuttom.touchEnabled = true;
                    var text1 = new egret.TextField();
                    this.text1 = text1;
                    this.text1.text = "歌曲：贝加尔湖畔\n歌手：穆萨";
                    this.text1.size = 20;
                    this.text1.textColor = 0x000000;
                    this.text1.x = 203;
                    this.text1.y = 380;
                    this.addChild(this.text1);
                    var text2 = new egret.TextField();
                    this.text2 = text2;
                    this.text2.text = "歌曲：风吹麦浪\n歌手：天天+小辉";
                    this.text2.size = 20;
                    this.text2.textColor = 0x000000;
                    this.text2.x = 203;
                    this.text2.y = 465;
                    this.addChild(this.text2);
                    var text3 = new egret.TextField();
                    this.text3 = text3;
                    this.text3.text = "歌曲：我们都爱过\n歌手：天天";
                    this.text3.size = 20;
                    this.text3.textColor = 0x000000;
                    this.text3.x = 203;
                    this.text3.y = 550;
                    this.addChild(this.text3);
                    var text4 = new egret.TextField();
                    this.text4 = text4;
                    this.text4.text = "歌曲：稳稳的幸福\n歌手：王美捷";
                    this.text4.size = 20;
                    this.text4.textColor = 0x000000;
                    this.text4.x = 203;
                    this.text4.y = 635;
                    this.addChild(this.text4);
                    var text5 = new egret.TextField();
                    this.text5 = text5;
                    this.text5.text = "歌曲：故乡\n歌手：东霓";
                    this.text5.size = 20;
                    this.text5.textColor = 0x000000;
                    this.text5.x = 203;
                    this.text5.y = 720;
                    this.addChild(this.text5);
                };
                /**
                 * 播放音乐的方法，url为 数组this.bells[n].url
                 */
                p.play = function (url) {
                    var self = this;
                    com.utils.AppUtils.playSound(url, function (event) {
                        self.onLoadComplete(event);
                    });
                };
                p.onLoadComplete = function (event) {
                    var loader = event.target;
                    //获取加载到的 Sound 对象
                    var sound = loader.data;
                    if (this.channel != null) {
                        this.channel.stop();
                    }
                    this.channel = sound.play(0, 1);
                };
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.stopbell = function (e) {
                    this.channel.stop();
                    this.stopbellbuttom.x = -100;
                    this.stopbellbuttom.y = -100;
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 815, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                    else if (new egret.Rectangle(368, 380, 130, 35).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(0);
                    }
                    else if (new egret.Rectangle(368, 470, 130, 35).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(1);
                    }
                    else if (new egret.Rectangle(368, 550, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(2);
                    }
                    else if (new egret.Rectangle(368, 630, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(3);
                    }
                    else if (new egret.Rectangle(368, 720, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.showbelldeitel(4);
                    }
                    else if (new egret.Rectangle(135, 380, 50, 40).contains(evt.stageX, evt.stageY)) {
                        this.play("http://dl.118100.cn/res/V/2130/mp3/50/14/21/2130501421040800.mp3?ts=8853");
                        this.stopbellbuttom.x = 135;
                        this.stopbellbuttom.y = 380;
                    }
                    else if (new egret.Rectangle(135, 465, 50, 40).contains(evt.stageX, evt.stageY)) {
                        this.play("http://dl.118100.cn/res/V/2130/mp3/50/14/30/2130501430040800.mp3?ts=7787");
                        this.stopbellbuttom.x = 135;
                        this.stopbellbuttom.y = 465;
                    }
                    else if (new egret.Rectangle(135, 550, 50, 40).contains(evt.stageX, evt.stageY)) {
                        this.play("http://dl.118100.cn/res/V/2130/mp3/50/22/59/2130502259040800.mp3?ts=32463");
                        this.stopbellbuttom.x = 135;
                        this.stopbellbuttom.y = 550;
                    }
                    else if (new egret.Rectangle(135, 635, 50, 40).contains(evt.stageX, evt.stageY)) {
                        this.play("http://dl.118100.cn/res/V/2130/mp3/50/35/92/2130503592040800.mp3?ts=16276");
                        this.stopbellbuttom.x = 135;
                        this.stopbellbuttom.y = 635;
                    }
                    else if (new egret.Rectangle(135, 720, 50, 40).contains(evt.stageX, evt.stageY)) {
                        this.play("http://dl.118100.cn/res/V/2130/mp3/50/35/93/2130503593040800.mp3?ts=18816");
                        this.stopbellbuttom.x = 135;
                        this.stopbellbuttom.y = 720;
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("bell1");
                };
                return Bell1Dialog;
            }(dialog.LuckDialog));
            dialog.Bell1Dialog = Bell1Dialog;
            egret.registerClass(Bell1Dialog,'com.views.dialog.Bell1Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
