module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class LostDialog extends LuckDialog{
        constructor() {
            super();
        }   
            
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("lost"));
        }
     
        protected  createContent(): void{
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,480,300,65).contains(evt.stageX,evt.stageY)) {
                this.jump(new AwardDialog());
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("lost");
        }
	}
}
