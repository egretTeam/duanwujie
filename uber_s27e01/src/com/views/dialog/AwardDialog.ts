module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
	export class AwardDialog extends Dialog{
    	  public static balance:number = 5;
    	  
    	  text:egret.TextField;
    	  private riseAmt:dragonBones.Armature;
    	  private rise;
    	
        constructor() {
            super();
        }   
        
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("rise"));
        }
     
        protected  createContent(): void{
            this.text=new egret.TextField();
            this.text.x=360;
            this.text.y = 681;
            this.text.size=30;
            
            this.addChild(this.text);
            this.text.height=50;
            this.update();
            
            this.riseAmt= com.utils.AppUtils.loadArmature("award/json","award/texture","award/png","zongzidonghua");
            this.rise=this.riseAmt.display;
            this.rise.x=320;
            this.rise.y=440;
            this.riseAmt.animation.gotoAndPlay("1dianjiqian",-1,-1,0);

            this.bg.touchEnabled = false;

            this.rise.touchEnabled = true;
            this.rise.addEventListener(egret.TouchEvent.TOUCH_TAP,this.customTouchHandler,this);
            
            this.addChild(this.rise);
            
            dragonBones.WorldClock.clock.add(this.riseAmt);
            egret.Ticker.getInstance().register(this.dragonbones,this);
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            this.rise.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.customTouchHandler,this);
            dragonBones.WorldClock.clock.remove(this.riseAmt);
            egret.Ticker.getInstance().unregister(this.dragonbones,this);
        }
        
        dragonbones(advancedTime: number): void {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(AwardDialog.balance<=0){
                com.utils.AppUtils.alert(this.stage,"抽奖次数已用完");
                return;
            }
            AwardDialog.balance--;
            
            this.riseAmt.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.goToNextPage,this);
            
            this.riseAmt.animation.gotoAndPlay("2dianjihou",-1,-1,1);
        }
        
        private goToNextPage(): void {
            MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
            this.riseAmt.removeEventListener(dragonBones.AnimationEvent.COMPLETE,this.goToNextPage,this);
        }
        
        public update():void{
            this.text.text = '' + AwardDialog.balance;
        }
        
        
        public close(): void {
            
        }
	}
}
