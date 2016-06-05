module com.views.text {
	/**
	 *
	 * @author 
	 *
	 */
	export class CText extends egret.TextField{
    	private input:string;
    	label:string="请输入内容";
    	removeHandle:Function;
    	addHandle:Function;
    	
		public constructor() {
    		super();
    		this.init();

            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
            this.addEventListener(egret.FocusEvent.FOCUS_IN,this.focusIn,this);
            this.addEventListener(egret.FocusEvent.FOCUS_OUT,this.focusOut,this);
		}
		
		private init():void{
		    this.type=egret.TextFieldType.INPUT;
		    this.size=30;
		    this.textColor=0xFFFFFF;
		    this.border=true;
		    this.background=true;
		    this.backgroundColor=0xFFFFFF;
		    
		}
		
        protected focusIn() {
            if(this.text == this.label){
                this.text="";
                this.textColor = 0x000000;
            }
		}
		
        protected focusOut() {
            if(this.text == "") {
                this.text = this.label;
                this.textColor = 0xFFFFFF;
            }
        }
		
        private onRemoveFromStage():void{
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
            this.removeEventListener(egret.FocusEvent.FOCUS_IN,this.focusIn,this);
            this.removeEventListener(egret.FocusEvent.FOCUS_OUT,this.focusOut,this);
            this.onRemoveStage();
        }
        
        protected onRemoveStage(): void {
            if(this.removeHandle!=null)
                this.removeHandle();
        }
        
        protected onAddStage(): void {
            if(this.addHandle != null)
                this.addHandle();
        }
        
		
		public getInput():string{
		    return this.input;
		}
		
	}
}
