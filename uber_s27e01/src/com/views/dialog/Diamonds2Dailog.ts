module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class DiamondsDailog extends LuckDialog{
        constructor() {
            super();
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("Diamonds"));
        }
     
        protected  createContent(): void{
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,815,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new AwardDialog());
            }
            else if(new egret.Rectangle(168,733,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new Diamonds2Dailog());              
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("weipinhui");
        }
	}
}
