module com.views.ui.scene.gameScene {
    export class car extends com.views.ui.BasicView {

        private boatArmature: dragonBones.Armature;
        private shieldArmature: dragonBones.Armature;
        public hasShield:Boolean=false;

        isLeftRight:number = 0//0为左  1为右

        constructor() {
            super();
            this.touchEnabled = true;
            this.initCar();
        }
        broken():void{
            this.boatArmature.animation.gotoAndPlay("game over",-1,-1,1);
        }
        initCar():void{

            var dragonbonesData = RES.getRes("boatjson");
            var textureData = RES.getRes("boattexturejson");
            var texture = RES.getRes("boattexturepng");
            
            var dragonbonesFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
            this.boatArmature = dragonbonesFactory.buildArmature("chuanyidong");
            this.shieldArmature = dragonbonesFactory.buildArmature("fanghuzhao");

            this.addChild(this.boatArmature.display);

            this.boatArmature.display.x = 0;
            this.boatArmature.display.y = 0;
            this.boatArmature.animation.gotoAndPlay("move",-1,-1,0);

            this.scaleX = 0.6;
            this.scaleY = 0.6;

            dragonBones.WorldClock.clock.add(this.boatArmature);

            egret.Ticker.getInstance().register(this.dragonbones,this);


            this.boatArmature.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.resetBoat,this);
            
            dragonbonesFactory,dragonbonesData,textureData,texture = null;
        }
        
        public setShield(hasShield:Boolean):void{
            this.hasShield=hasShield;
            
            if(this.hasShield){
                this.addChild(this.shieldArmature.display);
                this.shieldArmature.display.x = 0;
                this.shieldArmature.display.y = 0;
                this.shieldArmature.animation.gotoAndPlay("fanghuzhao",-1,-1,0);
                dragonBones.WorldClock.clock.add(this.shieldArmature);
            } else {
                dragonBones.WorldClock.clock.remove(this.shieldArmature);
                if(this.contains(this.shieldArmature.display))
                    this.removeChild(this.shieldArmature.display);
            }
        }

        setPos(x:number,y:number):void{
            this.x = x;
            this.y = y;
        }
        resetCar(num:number):void{

//            this.boatArmature.display.$children[num].visible = true;
        }

        tweenGoTo(tx,lorr):void{
            this.isLeftRight = lorr;
            if(lorr==0){
                this.left();
            }else{
                this.right();
            }
            egret.Tween.get(this).to({ x: tx },400);

        }
        
        left(){
            this.boatArmature.animation.gotoAndPlay("zuozhuan",-1,3,1);
        }
        right(){
            this.boatArmature.animation.gotoAndPlay("youzhuan",-1,3,1);
        }
        
        resetBoat(evt: dragonBones.AnimationEvent):void{
            if(evt.animationName!="move"){
                this.boatArmature.animation.gotoAndPlay("move",-1,-1,0);
            }
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            this.boatArmature.removeEventListener(dragonBones.AnimationEvent.COMPLETE,this.resetBoat,this);
            this.boatArmature = null;
            dragonBones.WorldClock.clock.remove(this.boatArmature);
            dragonBones.WorldClock.clock.remove(this.shieldArmature);
            egret.Ticker.getInstance().unregister(this.dragonbones,this);
        }

        stopArmature1Animation():void{
            this.boatArmature.animation.stop();
            dragonBones.WorldClock.clock.remove( this.boatArmature );
            this.setShield(false);
            this.removeChild(this.boatArmature.display);
        }

        tweenGoToLeft():void{
            if(this.isLeftRight==0)return;
            var tx = this.x-com.model.DataCenter.instance.configVO.appWidth/4;
            this.left();
            egret.Tween.get(this).to({x:tx},400);
            this.isLeftRight = 0;
        }

        tweenGoToRight():void{
            if(this.isLeftRight==1)return;
            var tx = this.x+com.model.DataCenter.instance.configVO.appWidth/4;
            this.right();
            egret.Tween.get(this).to({x:tx},400);
            this.isLeftRight = 1;
        }



        dragonbones(advancedTime: number): void {
                dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }
    }
}
