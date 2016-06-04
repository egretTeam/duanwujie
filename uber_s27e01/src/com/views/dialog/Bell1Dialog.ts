module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Bell1Dialog extends LuckDialog{
        constructor() {
            super();
        }   
        bells = [["凤凰传奇","最炫名族风"],["凤凰传奇","最炫名族风"],["凤凰传奇","最炫名族风"],["凤凰传奇","最炫名族风"],["凤凰传奇","最炫名族风"]];

        showbelldeitel(i:number){
            var Dailog=new Bell2Dialog();
            Dailog.setUrl(this.bells[i]);
            this.jump(Dailog);
            
        }
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("bell1"));
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
            else if(new egret.Rectangle(368,380,130,35).contains(evt.stageX,evt.stageY)){
                this.showbelldeitel(0);
            }
            else if(new egret.Rectangle(368,470,130,35).contains(evt.stageX,evt.stageY)) {
                this.showbelldeitel(1);
            }
            else if(new egret.Rectangle(168,550,300,65).contains(evt.stageX,evt.stageY)) {
                this.showbelldeitel(2);
            }
            else if(new egret.Rectangle(168,630,300,65).contains(evt.stageX,evt.stageY)) {
                this.showbelldeitel(3);
            }
            else if(new egret.Rectangle(168,720,300,65).contains(evt.stageX,evt.stageY)) {
                this.showbelldeitel(4);
            }
            
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("bell1");
        }
	}
}
