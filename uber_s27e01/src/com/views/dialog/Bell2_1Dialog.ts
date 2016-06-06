module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Bell2_1Dialog extends LuckDialog{
        
        private code:number;
        private pn:number;
        constructor(code:number,pn:number) {
            super();
            this.code=code;
            this.pn=pn;
        }   
            
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("bell2_1"));
        }
     
        protected  createContent(): void{
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,480,300,65).contains(evt.stageX,evt.stageY)) {
                var page=this;
                com.utils.NetworkUtil.openCrbt(this.code,this.pn,function(res) {
                    page.jump(new Bell2_1_1Dialog());
                });
                
            }
            else if(new egret.Rectangle(168,545,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new AwardDialog());
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("bell2_1");
        }
	}
}
