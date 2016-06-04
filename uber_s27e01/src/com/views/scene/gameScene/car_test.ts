module com.views.ui.scene.gameScene {
    export class car1 extends com.views.ui.BasicView {

        /**
         * 按钮
         * @skins 皮肤数组，长度为3 [正常，按下，禁用]
         */
        armature:dragonBones.Armature;
        armature1:dragonBones.Armature;

        isLeftRight:number = 0//0为左  1为右

        constructor() {
            super();
            this.touchEnabled = true;
            this.initCar();
        }

        initCar():void{
            var dragonbonesData = RES.getRes( "carjson" );
            var textureData = RES.getRes( "cartexturejson" );
            var texture = RES.getRes( "cartexturepng" );

            var dragonbonesFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
            this.armature = dragonbonesFactory.buildArmature("Armature");

            this.armature1 = dragonbonesFactory.buildArmature("xg02");


            for(var i in this.armature.display.$children){
                this.armature.display.$children[i].visible = false;
            }

            this.armature.display.$children[0].visible = true;

            this.addChild(this.armature.display);
            this.addChild(this.armature1.display);
            this.armature1.animation.gotoAndPlay("1",-1,-1,0);

            this.armature.display.x = this.width/2;
            this.armature.display.y = this.height/2;

            this.armature1.display.x = this.armature.display.width/2;
            this.armature1.display.y = this.height*3/5;

            this.armature1.display.anchorOffsetX = this.armature1.display.width/2;
            this.armature1.display.anchorOffsetX = this.armature1.display.height/2;

            this.anchorOffsetX = this.width/2;
            this.anchorOffsetY = this.height/2;

            this.scaleX = 0.4;
            this.scaleY = 0.4;

            dragonBones.WorldClock.clock.add( this.armature );
            dragonBones.WorldClock.clock.add( this.armature1 );

            this.addEventListener(egret.Event.ENTER_FRAME, this.dragonbones, this)

            dragonbonesFactory,dragonbonesData,textureData,texture = null;
        }

        setPos(x:number,y:number):void{
            this.x = x;
            this.y = y;
        }
        resetCar(num:number):void{

            this.armature.display.$children[num].visible = true;
        }

        tweenGoTo(tx,lorr):void{
            this.isLeftRight = lorr;
            if(lorr==0){
                this.armature.animation.gotoAndPlay("zuo",-1,-1,1);

            }else{

                this.armature.animation.gotoAndPlay("you",-1,-1,1);
            }
            egret.Tween.get(this).to({x:tx},400);
        }

        protected onRemoveStage(e: egret.Event) {//移除

            super.onRemoveStage(e);
            this.armature = null;
            this.armature1 = null;
            dragonBones.WorldClock.clock.remove(this.armature);
            dragonBones.WorldClock.clock.remove(this.armature1);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.dragonbones, this)

        }

        stopArmature1Animation():void{
            this.armature1.animation.stop();
            dragonBones.WorldClock.clock.remove( this.armature1 );

            this.removeChild(this.armature1.display);
        }

        tweenGoToLeft():void{
            if(this.isLeftRight==0)return;
            var tx = this.x-com.model.DataCenter.instance.configVO.appWidth/4;
            this.armature.animation.gotoAndPlay("zuo",-1,-1,1);
            egret.Tween.get(this).to({x:tx},400);
            this.isLeftRight = 0;
        }

        tweenGoToRight():void{
            if(this.isLeftRight==1)return;
            var tx = this.x+com.model.DataCenter.instance.configVO.appWidth/4;
            this.armature.animation.gotoAndPlay("you",-1,-1,1);
            egret.Tween.get(this).to({x:tx},400);
            this.isLeftRight = 1;
        }



        dragonbones(frameTime:number):void{
            dragonBones.WorldClock.clock.advanceTime(0.01);
        }
    }
}
