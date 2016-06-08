module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class DiamondsDailog extends LuckDialog{
        private phonenum: com.views.text.CText;
        private odernum: com.views.text.CText;
        private oderbtn1: egret.Bitmap;
        private oderbtn2: egret.Bitmap;
        private odertext: egret.TextField;
        private checking: Boolean = false;
        private checkbox1: egret.Bitmap;
        private checkbox2: egret.Bitmap;
        private checkbox: Boolean = true;
        constructor() {
            super();
        }   
        requstVerification(): void {
            if(!com.utils.AppUtils.checkPhoneNo(this.phonenum.getInput()))
                return;
            if(!this.checking) {
                this.checking = true;
                var page = this;
                //获取钻石会员验证码
                com.utils.NetworkUtil.memberRandomCode(parseInt(this.phonenum.getInput()),function(res) {
                    if(res.success == false) {
                        com.utils.AppUtils.alert(page.stage,res.msg);
                        page.checking = false;
                    } else {
                        page.addChild(page.oderbtn2);
                        page.addChild(page.odertext);
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
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("Diamonds"));
        }

     
        protected  createContent(): void{
            //手机号码输入框
            this.phonenum = new com.views.text.CText;
            this.phonenum.x = 170;
            this.phonenum.y = 520;
            this.phonenum.width = 300;
            this.phonenum.restrict = "0-9"
            this.phonenum.maxChars = 11;
            this.phonenum.setLabel("请输入天翼手机号码");
            this.addChild(this.phonenum);
            //验证码输入框
            this.odernum = new com.views.text.CText;
            this.odernum.x = 170;
            this.odernum.y = 580;
            this.odernum.width = 150;
            this.odernum.restrict = "0-9"
            this.odernum.setLabel("请输入验证码");
            this.addChild(this.odernum);
            //验证码按钮
            this.oderbtn1 = new egret.Bitmap(RES.getRes("oderbtn1"));
            this.oderbtn1.x = 0;
            this.oderbtn1.y = -40;
            this.addChild(this.oderbtn1);    

            //灰色验证码按钮
            this.oderbtn2 = new egret.Bitmap(RES.getRes("oderbtn2"));
            this.oderbtn2.x = 0;
            this.oderbtn2.y = -40;
            this.odertext = new egret.TextField();
            this.odertext.x = 345;
            this.odertext.y = 595;
            this.odertext.size = 20;
            
            //勾选框
            this.checkbox1 = new egret.Bitmap(RES.getRes("checkbox1"));
            this.checkbox1.x = 0;
            this.checkbox1.y = -100;
            this.addChild(this.checkbox1);
            
            
 
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,815,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new AwardDialog());
            }
            else if(new egret.Rectangle(168,733,300,65).contains(evt.stageX,evt.stageY)){
                if(!com.utils.AppUtils.checkPhoneNo(this.phonenum.getInput())) 
                    return;
                this.jump(new Diamonds2Dailog(this.phonenum.getInput(),this.odernum.getInput()));              
            }
            else if(new egret.Rectangle(340,580,120,40).contains(evt.stageX,evt.stageY)){
                this.requstVerification();
            }
            else if(new egret.Rectangle(240,655,200,20).contains(evt.stageX,evt.stageY)){
                window.location.href = "http://m.118100.cn/others/vip/notices"
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("weipinhui");
        }
	}
}
