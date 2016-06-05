module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Money1Dialog extends LuckDialog{
        private phonenum: com.views.text.CText;
        constructor() {
            super();
        }   
            
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("money1"));
        }
        checkphonenum(): string {
            var pn = this.phonenum.getInput();
            if(pn == null) {
                return "请输入手机号码"     
            }
            console.log("12345")
            if(pn.length != 11) {
                return "手机号码长度必须为11位";
            }

            switch(pn.substring(0,3)) {
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
        }
     
        protected  createContent(): void{
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
                var msg = this.checkphonenum();
                if(msg != null) {
                    com.utils.AppUtils.alert(this.stage,msg)
                    return;
                }
                this.jump(new Money2Dialog());
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("money1");
        }
	}
}
