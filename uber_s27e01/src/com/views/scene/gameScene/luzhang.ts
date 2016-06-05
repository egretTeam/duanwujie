module com.views.ui.scene.gameScene {
    export class luzhang extends AbstractItem{
        constructor() {
            super();
        }
        protected getImageName(): string {
            return "zhangai"
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
