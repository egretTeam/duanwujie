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
    	  private againgame:egret.Bitmap;
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
            this.riseAmt.animation.gotoAndPlay("1dianjiqian",-1,-1,1);
            
            this.rise.touchEnabled = true;
            this.rise.addEventListener(egret.TouchEvent.TOUCH_TAP,this.customTouchHandler,this);
            this.addChild(this.rise);
            
            //再来一次按钮
            this.againgame = new egret.Bitmap(RES.getRes("againgame"));
            this.againgame.x = 0;
            this.againgame.y = 0;
            this.againgame.touchEnabled = true;
            this.againgame.addEventListener(egret.TouchEvent.TOUCH_TAP,this.againgameTouchHandler,this);
            this.addChild(this.againgame);
            

            this.bg.touchEnabled = false;

           
            
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
                com.utils.AppUtils.alert(this.stage,"对不起，您今天的抽奖机会用完了！");
                return;
                }  
//            AwardDialog.balance--;
            
            this.riseAmt.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.goToNextPage,this);
            
            this.riseAmt.animation.gotoAndPlay("2dianjihou",-1,-1,1);
        }
        protected againgameTouchHandler(evt: egret.TouchEvent) {
            MainView.instance.changeScene(com.constants.SceneConstants.INIT);
        }
        
        private goToNextPage(): void {
            var ra=this.riseAmt;
            var page=this;
            com.utils.NetworkUtil.luckDraw(function(res){
                if(AwardDialog.balance>0){
                    AwardDialog.balance = res.lotteryNum;
                    MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
                    if(res.record == null || res.success == false)
                        com.views.scene.luckScene.getInstance().goToPage(-1,null);
                    else
                        com.views.scene.luckScene.getInstance().goToPage(parseInt(res.record.score),res.record);
                    ra.removeEventListener(dragonBones.AnimationEvent.COMPLETE,page.goToNextPage,page);
                }else{
                    com.utils.AppUtils.alert(page.stage,res.msg);
                    page.riseAmt.animation.gotoAndPlay("1dianjiqian",-1,-1,1);
//                    MainView.instance.changeScene(com.constants.SceneConstants.LUCK);                                                                                           //测试用
//                    com.views.scene.luckScene.getInstance().goToPage(com.constants.DialogConstant.BELL,null);                                                                   //测试用
                }
            });
            
            
//            MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
        }
        
        public update():void{
            this.text.text = '' + AwardDialog.balance;
        }
        
        
        public close(): void {
            
        }
	}
}
