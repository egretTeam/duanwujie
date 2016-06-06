module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Bell1Dialog extends LuckDialog{
        private bells;
        constructor() {
            super();
            this.bells = com.constants.Bell.Bells;
        }   
        channel: egret.SoundChannel;

        showbelldeitel(i:number){
            var nextDialog=new Bell2Dialog();
            nextDialog.setData(com.constants.Bell.Bells[i]);
            this.jump(nextDialog);
            
        }
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("bell1"));
        }
     
        protected  createContent(): void{
        }

        /**
         * 播放音乐的方法，url为 数组this.bells[n].url
         */ 
        private play(url:string):void{
            com.utils.AppUtils.playSound(url,this.onLoadComplete);
        }

         onLoadComplete(event: egret.Event): void {
            var loader: egret.URLLoader = <egret.URLLoader>event.target;
            //获取加载到的 Sound 对象
            var sound: egret.Sound = <egret.Sound>loader.data;
            if(this.channel!=null){
                this.channel.stop();
            }
            this.channel= sound.play(0,1);
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
