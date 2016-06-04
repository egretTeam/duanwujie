module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
	export class ShareDialog extends Dialog{
        constructor() {
            super();
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("gameover"));
        }
     
        protected  createContent(): void{
            
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
//            console.log(evt.stageX+" "+evt.stageY)
            if(this.getAwardArea().contains(evt.stageX,evt.stageY)) {
                this.close();    
            } else if(this.getShareArea().contains(evt.stageX,evt.stageY)) {
                this.showShareArea();
            } else if(this.getTryAgainArea().contains(evt.stageX,evt.stageY)) {
               MainView.instance.changeScene(com.constants.SceneConstants.GAME);
            }
        }
        
        public showShareArea():void{
            
        }
        
        public close(): void {
        }
        
        private getAwardArea():egret.Rectangle{
            return new egret.Rectangle(170,565,280,60);
        }
        private getShareArea(): egret.Rectangle {
            return new egret.Rectangle(170,680,280,60);
        }
        private getTryAgainArea(): egret.Rectangle {
            return new egret.Rectangle(170,760,280,60);
        }
	}
}
