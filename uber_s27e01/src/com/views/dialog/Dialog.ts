module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export abstract class Dialog extends com.views.ui.BasicView{
        protected bg:egret.Bitmap;
        
        constructor() {
            super();
            this.init();
		}

		protected abstract getImage():egret.Bitmap;
		
        private init(): void {
            this.bg = this.getImage();
            this.addChild(this.bg);
            this.bg.y=-100;

            this.createContent();
            
            this.bg.touchEnabled=true;
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
            
        }

        protected abstract createContent():void;
        
        private touchHandler(evt:egret.TouchEvent){
            if(evt.stageX > 515 && evt.stageX<560&&evt.stageY>230&&evt.stageY<275){
                this.close();
            }else
                this.customTouchHandler(evt);
        }
        
        public close():void{
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
        }
        
        protected onRemoveStage(e: egret.Event) {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
            this.removeChild(this.bg);
            super.onRemoveStage(e);
        }
        
        protected jump(next:Dialog):void{
            this.parent.addChild(next);
            this.parent.removeChild(this);
        }
	}
}
