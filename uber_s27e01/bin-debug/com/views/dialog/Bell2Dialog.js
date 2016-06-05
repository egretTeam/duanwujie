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
            var Bell2Dialog = (function (_super) {
                __extends(Bell2Dialog, _super);
                function Bell2Dialog() {
                    _super.call(this);
                    this.checking = false;
                }
                var d = __define,c=Bell2Dialog,p=c.prototype;
                p.setUrl = function (bellinfo) {
                    this.singer = bellinfo[0];
                    this.singertext.text = this.singer;
                    this.bellname = bellinfo[1];
                    this.bellnametext.text = this.bellname;
                };
                p.checkphonenum = function () {
                    var pn = this.phonenum.getInput();
                    if (pn == null) {
                        return "请输入手机号码";
                    }
                    if (pn.length != 11) {
                        return "手机号码长度必须为11位";
                    }
                    switch (pn.substring(0, 3)) {
                        case "133":
                        case "153":
                        case "180":
                        case "189":
                        case "181":
                        case "170":
                        case "171":
                        case "173":
                        case "177":
                        case "149":
                            break;
                        default:
                            return "必须为电信用户";
                    }
                    return null;
                };
                p.requstVerification = function () {
                    var msg = this.checkphonenum();
                    if (msg != null) {
                        com.utils.AppUtils.alert(this.stage, msg);
                        return;
                    }
                    if (!this.checking) {
                        this.checking = true;
                        this.oderbtn2 = new egret.Bitmap(RES.getRes("oderbtn2"));
                        this.oderbtn2.x = 0;
                        this.oderbtn2.y = -100;
                        this.addChild(this.oderbtn2);
                        this.odertext = new egret.TextField();
                        this.odertext.x = 345;
                        this.odertext.y = 535;
                        this.odertext.size = 20;
                        this.addChild(this.odertext);
                        var i = 60;
                        this.odertext.text = "已发送：" + i;
                        var timer = new egret.Timer(1000, i + 1);
                        timer.addEventListener(egret.TimerEvent.TIMER, function () {
                            this.odertext.text = "已发送：" + i--;
                        }, this);
                        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                            this.removeChild(this.oderbtn2);
                            this.removeChild(this.odertext);
                            this.checking = false;
                        }, this);
                        timer.start();
                    }
                };
                p.getuser = function () {
                    if (this.user == null) {
                        this.user = new com.model.localData.UserVO();
                        this.user.iscrbtuser = false;
                    }
                    return this.user;
                };
                p.oder = function () {
                    if (this.getuser().iscrbtuser) {
                        this.jump(new dialog.Bell2_2Dialog());
                    }
                    else {
                        this.jump(new dialog.Bell2_1Dialog());
                    }
                };
                p.getImage = function () {
                    return new egret.Bitmap(RES.getRes("bell2"));
                };
                p.createContent = function () {
                    //歌手名
                    this.singertext = new egret.TextField();
                    this.singertext.x = 275;
                    this.singertext.y = 345;
                    this.singertext.size = 30;
                    //歌曲名
                    this.bellnametext = new egret.TextField();
                    this.bellnametext.x = 275;
                    this.bellnametext.y = 380;
                    this.bellnametext.size = 30;
                    this.addChild(this.singertext);
                    this.addChild(this.bellnametext);
                    //手机号码输入框
                    this.phonenum = new com.views.text.CText;
                    this.phonenum.x = 170;
                    this.phonenum.y = 440;
                    this.phonenum.width = 300;
                    this.phonenum.restrict = "0-9";
                    this.phonenum.maxChars = 11;
                    this.phonenum.setLabel("请输入天翼手机号码");
                    this.addChild(this.phonenum);
                    //验证码输入框
                    this.odernum = new com.views.text.CText;
                    this.odernum.x = 170;
                    this.odernum.y = 520;
                    this.odernum.width = 150;
                    this.odernum.restrict = "0-9";
                    this.odernum.setLabel("请输入验证码");
                    this.addChild(this.odernum);
                    //验证码按钮
                    this.oderbtn1 = new egret.Bitmap(RES.getRes("oderbtn1"));
                    this.oderbtn1.x = 0;
                    this.oderbtn1.y = -100;
                    this.addChild(this.oderbtn1);
                };
                //点击验证码按钮事件
                p.onRemoveStage = function (e) {
                    _super.prototype.onRemoveStage.call(this, e);
                };
                p.customTouchHandler = function (evt) {
                    if (new egret.Rectangle(168, 700, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.jump(new dialog.AwardDialog());
                    }
                    else if (new egret.Rectangle(168, 615, 300, 65).contains(evt.stageX, evt.stageY)) {
                        this.oder();
                    }
                    else if (new egret.Rectangle(340, 520, 120, 40).contains(evt.stageX, evt.stageY)) {
                        this.requstVerification();
                    }
                };
                p.close = function () {
                    this.jump(new dialog.AwardDialog());
                    console.log("Bell2");
                };
                return Bell2Dialog;
            }(dialog.LuckDialog));
            dialog.Bell2Dialog = Bell2Dialog;
            egret.registerClass(Bell2Dialog,'com.views.dialog.Bell2Dialog');
        })(dialog = views.dialog || (views.dialog = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
