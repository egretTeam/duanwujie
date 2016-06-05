module com.views.text {
	/**
	 *
	 * @author 
	 *
	 */
	export class CText extends egret.TextField{
        private input:string;
    	private label:string="请输入内容";
    	removeHandle:Function;
    	addHandle:Function;
    	applyModifyHandle:Function;
        focusOutHandle: Function;
        focusInHandle: Function;
        defaultTextColor: number = 0x000000;
        defaultLabelColor: number = 0x888888;
    	
		public constructor() {
    		super();
    		this.init();

            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
            this.addEventListener(egret.FocusEvent.FOCUS_IN,this.focusIn,this);
            this.addEventListener(egret.FocusEvent.FOCUS_OUT,this.focusOut,this);
            this.addEventListener(egret.Event.CHANGE,this.modified,this);
		}
		
		private init():void{
		    this.type=egret.TextFieldType.INPUT;
		    this.size=20;
            this.textColor = this.defaultLabelColor;
		    this.border=true;
		    this.background=true;
		    this.backgroundColor=0xFFFFFF;
		    this.text=this.label;
            this.height = 50;
            this.width = 200;
            this.textAlign = egret.HorizontalAlign.CENTER; 
            this.verticalAlign = egret.VerticalAlign.MIDDLE;
		}
		
		setLabel(label:string):void{
            this.label = label;
            if(this.input == null || this.input == "")
                this.text = this.label;
		}
		
		
        protected modified() {
            if(this.text == this.label) {
                this.input="";
            }else
                this.input=this.text;
            if(this.applyModifyHandle!=null)
                this.applyModifyHandle(this.input);
        }
		
        protected focusIn() {
            if(this.input==null||this.input == ""){
                this.text="";
                this.textColor = this.defaultTextColor;
            }
            if(this.focusInHandle!=null)
                this.focusInHandle(this.input);
		}
		
        protected focusOut() {
            if(this.text == "" || this.text == this.label) {
                this.textColor = this.defaultLabelColor;
                this.text = this.label;
            }else{
                this.input=this.text;
            }
            if(this.focusOutHandle != null)
                this.focusOutHandle(this.input);
        }
		
        private onRemoveFromStage():void{
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
            this.removeEventListener(egret.FocusEvent.FOCUS_IN,this.focusIn,this);
            this.removeEventListener(egret.FocusEvent.FOCUS_OUT,this.focusOut,this);
            this.removeEventListener(egret.Event.CHANGE,this.modified,this);
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

        setInput(input: string): void {
            this.input = input;
            this.text = input;
        }
	}
}
