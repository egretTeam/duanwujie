module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
	export class AwardDialog extends Dialog{
    	  public static balance:number = 5;
    	  
    	  text:egret.TextField;
    	
        constructor() {
            super();
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("rise"));
        }
     
        protected  createContent(): void{
            this.text=new egret.TextField();
            this.text.x=370;
            this.text.y = 710;
            this.text.size=30;
            
            this.addChild(this.text);
            this.text.height=50;
            this.update();
            
            var input: egret.TextField = new egret.TextField();
            input.x = 370;
            input.y = 760;
            input.size=30;
            input.text="123";
            input.background=true;
            input.border=true;
            input.type = egret.TextFieldType.INPUT;            
            input.maxChars=11;
            this.addChild(input);
            
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(AwardDialog.balance<=0){
                return;
            }
            if(new egret.Rectangle(240,460,160,160).contains(evt.stageX,evt.stageY)){
                AwardDialog.balance--;
                MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
            }
        }
        
        public update():void{
            this.text.text = '' + AwardDialog.balance;
        }
        
        public showShareArea():void{
            
        }
        
        public close(): void {
            
        }
	}
}
