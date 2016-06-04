module com.views.ui.scene.gameScene {
    export class luzhang extends AbstractItem{
        constructor() {
            super();
        }

        init():void{
            this.item = this.armature.display;
            this.addChild(this.item);

            //this.tweenGoToBottom();
            this.item.anchorOffsetX = this.width / 2;
            this.item.anchorOffsetY = this.height / 2;
            this.item.x = this.width / 2;
            this.item.y = this.height / 2;
//            this.scaleX = .8;
//            this.scaleY = .8;

            this.armature.animation.gotoAndPlay("zhangai",-1,-1,-0);

//            dragonBones.WorldClock.clock.add(this.armature);
//
//            egret.Ticker.getInstance().register(this.dragonbones,this);
            
            //this.tweenGoToBottom();
//            this.anchorOffsetX = this.width/2;
//            this.anchorOffsetY = this.height*3/4;
//            this.scaleX = 1.2;
//            this.scaleY = 1.2;


        }
        dragonbones(advancedTime: number): void {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 5000);
        }
        protected onRemoveStage(e: egret.Event) {//移除

            super.onRemoveStage(e);
//            dragonBones.WorldClock.clock.remove(this.armature);
//            egret.Ticker.getInstance().unregister(this.dragonbones,this);
        }

        getType(): number {
            return com.constants.ItemConstant.BLOCK;
        }
    }
}
