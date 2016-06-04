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
                }
                var d = __define,c=Bell2Dialog,p=c.prototype;
                p.setUrl = function (bellinfo) {
                    this.singer = bellinfo[0];
                    this.singertext.text = this.singer;
                    this.bellname = bellinfo[1];
                    this.bellnametext.text = this.bellname;
                };
                //需要调用接口实例化该user   
                p.requstVerification = function () {
                    this.user = new com.model.localData.UserVO();
                    return false;
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
                    this.singertext = new egret.TextField();
                    this.singertext.x = 275;
                    this.singertext.y = 345;
                    this.singertext.size = 30;
                    this.bellnametext = new egret.TextField();
                    this.bellnametext.x = 275;
                    this.bellnametext.y = 380;
                    this.bellnametext.size = 30;
                    this.addChild(this.singertext);
                    this.addChild(this.bellnametext);
                };
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
