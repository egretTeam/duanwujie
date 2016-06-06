module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Bell2Dialog extends LuckDialog{
        private phonenum: com.views.text.CText;
        private odernum: com.views.text.CText;
        private oderbtn1: egret.Bitmap;
        private oderbtn2: egret.Bitmap;
        private odertext: egret.TextField;
        private checking: Boolean = false;
        private bellId:string;
        user: com.model.localData.UserVO;
        
        constructor() {
            super();
        }   
        singer:string;
        bellname:string;
        singertext:egret.TextField;
        bellnametext: egret.TextField;
        setData(bellinfo):void{
            this.singer = bellinfo.singer;
            this.singertext.text = this.singer;
            this.bellname = bellinfo.name;
            this.bellnametext.text = this.bellname;
            this.bellId=bellinfo.bellId;
        }  
        
        /**
         * 请求验证码
         */ 
        requstVerification(): void {
            if(!com.utils.AppUtils.checkPhoneNo(this.phonenum.getInput()))
                return;
            if(!this.checking) {
                this.checking = true;

                var page=this;
                //发送音乐盒验证码
                com.utils.NetworkUtil.musicRandomCode(parseInt(this.phonenum.getInput()),function(res){
                    if(res.success == false) {
                        com.utils.AppUtils.alert(page.stage,res.msg);
                        page.checking=false;
                    } else {
                        page.addChild(this.oderbtn2);
                        page.addChild(this.odertext);
                        var i = 60;
                        page.odertext.text = "已发送：" + i;
                        var timer: egret.Timer = new egret.Timer(1000,i + 1);
                        timer.addEventListener(egret.TimerEvent.TIMER,function() {
                            page.odertext.text = "已发送：" + i--;
                        },page);
                        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function() {
                            page.removeChild(page.oderbtn2);
                            page.removeChild(page.odertext);
                            page.checking = false;
                        },page);
                        timer.start();
                    }
                    });
            }
        }
        getuser(): com.model.localData.UserVO{
            if(this.user ==null){
                this.user = new com.model.localData.UserVO();
                this.user.iscrbtuser = false;   
            }
            return this.user;            
        }
        /**
         * 预订
         */ 
        oder():void{
            if(!com.utils.AppUtils.checkPhoneNo(this.phonenum.getInput()))
                return;
            var page=this;
            com.utils.NetworkUtil.iscrbtuser(parseInt(this.phonenum.getInput()),function(res){
                if(res.success == false) {
                    com.utils.AppUtils.alert(page.stage,res.msg);
                }else{
                    if(res.iscrbtuser == false) {
                        //开通彩铃
                        page.jump(new Bell2_1Dialog(page.getCode(),page.getPhoneNo()));
                        
                    } else {
                        //领取彩铃
                        com.utils.NetworkUtil.getRingtone(page.getPhoneNo(),page.bellId,function(res){
                            if(res.success == false) {
                                com.utils.AppUtils.alert(page.stage,res.msg);
                            }else
                                page.jump(new Bell2_2Dialog())
                        });
                    }
                }
            });   
        }
        getCode(): number {
            return parseInt(this.odernum.getInput());
        }
        getPhoneNo():number{
            return parseInt(this.phonenum.getInput());
        }
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("bell2"));
        }
     
        protected  createContent(): void{
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
            this.phonenum.restrict = "0-9"
            this.phonenum.maxChars = 11;
            this.phonenum.setLabel("请输入天翼手机号码");
            this.addChild(this.phonenum);
            //验证码输入框
            this.odernum = new com.views.text.CText;
            this.odernum.x = 170;
            this.odernum.y = 520;
            this.odernum.width = 150;
            this.odernum.restrict = "0-9"
            this.odernum.setLabel("请输入验证码");
            this.addChild(this.odernum);
            //验证码按钮
            this.oderbtn1 = new egret.Bitmap(RES.getRes("oderbtn1"));
            this.oderbtn1.x = 0;    
            this.oderbtn1.y = -100;
            this.addChild(this.oderbtn1);     
            //灰色验证码按钮
            this.oderbtn2 = new egret.Bitmap(RES.getRes("oderbtn2"));
            this.oderbtn2.x = 0;
            this.oderbtn2.y = -100;
            
            this.odertext = new egret.TextField();
            this.odertext.x = 345;
            this.odertext.y = 535;
            this.odertext.size = 20;
        }
            //点击验证码按钮事件
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,700,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new AwardDialog());
            }
            else if(new egret.Rectangle(168,615,300,65).contains(evt.stageX,evt.stageY)){
                this.oder(); 
            }
            else if(new egret.Rectangle(340,520,120,40).contains(evt.stageX,evt.stageY)) {
                this.requstVerification();
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("Bell2");
        }
	}
}
