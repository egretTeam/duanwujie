module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Money1Dialog extends LuckDialog{
        private phonenum: com.views.text.CText;
        private text: egret.TextField;
        score:number;
        
        constructor(record){
            super();
            this.score= parseInt(record.score)
            if(this.text != null){
                if(this.score==5){
                    this.text.text="2元天翼话费";
                } else if(this.score == 6) {
                    this.text.text = "60M天翼流量 ";
                }else{
                    com.utils.AppUtils.alert(this.stage,"后台错误，请重新抽奖");
                }
                
            }
        }
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("money1"));
        }
     
        protected  createContent(): void{
            //文本信息
            this.text = new egret.TextField();
            this.text.x = 170;
            this.text.y = 340;
            this.text.width = 300;
            this.text.size=25;
            this.text.textColor = 0x64470C;
            this.text.height=50;
            this.addChild(this.text);
            
            //手机号码输入框
            this.phonenum = new com.views.text.CText;
            this.phonenum.x = 170;
            this.phonenum.y = 400;
            this.phonenum.width = 300;
            this.phonenum.restrict = "0-9"
            this.phonenum.maxChars = 11;
            this.phonenum.setLabel("请输入天翼手机号码");
            this.addChild(this.phonenum)
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,480,300,65).contains(evt.stageX,evt.stageY)) {
                com.utils.NetworkUtil.getPrice(this.score,this.phonenum.getInput(),function(res) {
                    this.jump(new Money2Dialog());
                });
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("money1");
        }
	}
}
