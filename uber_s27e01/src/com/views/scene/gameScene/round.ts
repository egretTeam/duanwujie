module com.views.ui.scene.gameScene {
    export class round extends AbstractItem {
        constructor() {
            super();

        }

        protected getImageName(): string {
            return "zongzi"
        }

        dragonbones(advancedTime: number): void {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 5000);
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }


        getType(): number {
            return com.constants.ItemConstant.SCORE;
        }
    }


}
