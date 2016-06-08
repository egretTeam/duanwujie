module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Diamonds3Dailog extends LuckDialog{
        constructor() {
            super();
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("Diamonds3"));
        }
     
        protected  createContent(): void{
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,474,300,65).contains(evt.stageX,evt.stageY)) {
                //办理成功后 + 5
                AwardDialog.balance += 5;
                this.jump(new AwardDialog());
            }

        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("Diamonds3");
        }
	}
}
