module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Diamonds2Dailog extends LuckDialog{
        constructor() {
            super();
            
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("Diamonds2"));
        }
     
        protected  createContent(): void{

        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,540,300,65).contains(evt.stageX,evt.stageY)){
//                this.jump(new AwardDialog());
                console.log(1);
            }
            else if(new egret.Rectangle(168,459,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new Diamonds3Dailog());              
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("Diamonds3");
        }
	}
}
