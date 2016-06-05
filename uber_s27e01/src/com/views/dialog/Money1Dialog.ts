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
                this.jump(new Money2Dialog());
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("money1");
        }
	}
}
