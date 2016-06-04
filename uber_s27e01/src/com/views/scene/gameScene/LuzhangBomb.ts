module com.views.ui.scene.gameScene {
    export class luzhangBomb extends AbstractItem {
        system:particle.GravityParticleSystem;

         texture:egret.Texture;
         config ;
       
        constructor() {
            super();
        }

        init(): void {
            if(this.texture==null)
                this.texture = RES.getRes("luzhang");
            if(this.config == null)
                this.config = RES.getRes("luzhangjson");
            this.system = new particle.GravityParticleSystem(this.texture,this.config);
            this.system.start(400);
            this.addChild(this.system);
            
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            this.system.stop(true);
            this.removeChild(this.system);
            this.system = null;
        }
        

        getType(): number {
            return com.constants.ItemConstant.BOMB;
        }
    }
}

