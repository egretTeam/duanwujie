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
            return new egret.Bitmap(RES.getRes("share_png"));
        }
     
        protected  createContent(): void{
            
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            this.visible=false;
        }
        
        public showShareArea():void{
            
        }
        
        public close(): void {
        }
        
	}
}
