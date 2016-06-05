module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Money1Dialog extends LuckDialog{
        constructor() {
            super();
        }   
            
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("money1"));
        }
     
        protected  createContent(): void{
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
