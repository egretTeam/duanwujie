module com.views.ui.scene.initScene {
    export class car extends com.views.ui.BasicView {

        car1:egret.Bitmap;
        car2:egret.Bitmap;

        singhcar:egret.Bitmap;

        mark:egret.Bitmap;

        age:number = 0;

        carheightArr:any = [];

        carmask:egret.Rectangle;
        carmaskwidth:number = 0;

        constructor() {
            super();
            this.touchEnabled = true;
            this.initCar();
        }

        initCar():void{

            this.width = com.model.DataCenter.instance.configVO.appWidth;
            this.height = com.model.DataCenter.instance.configVO.appHeight/2;


            this.car1 = new egret.Bitmap();
            this.car1.texture = RES.getRes("initscene.carmarks1");
            this.addChild(this.car1);
            this.car1.visible = false;
            //this.car1.x = -900;
            //this.car1.y = 800;
            //this.car1.visible = false;

            this.car1.x = -165;
            this.car1.y = 340;

            this.mark = new egret.Bitmap();
            this.mark.texture = RES.getRes("initscene.carmarks2");
            this.addChild(this.mark);
            this.mark.x = -165;
            //this.mark.visible = false;
            this.mark.y = 360;

            this.car2 = new egret.Bitmap();
            this.car2.texture = RES.getRes("initscene.car1");
            this.car2.x = 320;
            this.car2.y = 330;
            this.car2.rotation = 180;
            this.car2.visible = false;
            this.car2.anchorOffsetX = this.car2.width/2;
            this.car2.anchorOffsetY = this.car2.height/2;
            this.addChild(this.car2);

            this.carmask = new egret.Rectangle(0,this.mark.height,this.mark.width,this.mark.height);
            this.mark.mask = this.carmask;

            this.singhcar = new egret.Bitmap();
            this.singhcar.texture = RES.getRes("initscene.initcar");
            this.singhcar.x = 315-this.mark.width;
            this.singhcar.y = 360+this.mark.height-this.singhcar.height-10
            this.addChild(this.singhcar);

            this.setCarHeightArr();

            //egret.Tween.get(this.singhcar).to({y:340},1000,egret.Ease.circIn);

            //egret.Tween.get(this.car2,{loop:true}).to({rotation:-180},1200);

            //egret.Tween.get(this.car2).wait(990).call(function(){
            //    this.car2.visible = true;
            //    this.car1.visible = false;
            //    this.mark.visible = true;
            //    egret.Tween.get(this.mark).to({alpha:0},150);
            //    egret.Tween.get(this.car2,{loop:true}).to({rotation:-180},1200);
            //},this);


            this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrames,this);

        }

        protected onRemoveStage(e: egret.Event) {//移除

            egret.Tween.removeAllTweens();
            this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrames,this);
            super.onRemoveStage(e);
            this.car1 = null;
            this.car2 = null;

            this.mark = null;

        }

        setCarHeightArr():void{
            this.carheightArr = [];
            console.log((this.mark.height-this.singhcar.height)/58);

            for(var i = 0;i<=58;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58
            }

            for(var i = 0;i<=14;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58-9
            }

            for(var i = 15;i<=24;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58-5
            }

            for(var i = 25;i<=29;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58-1
            }
            for(var i = 30;i<=33;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58+2
            }

            for(var i = 35;i<=40;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58+3
            }

            for(var i = 41;i<=46;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58+5
            }

            for(var i = 47;i<=53;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58+12
            }
            for(var i = 54;i<=58;i++){
                this.carheightArr[i] = (this.mark.height-this.singhcar.height)/58+14
            }
        }

        onEnterFrames():void{

            if(this.mark.width<=this.carmaskwidth)return;
            this.age++;
            console.log(this.age);
            this.carmaskwidth+=10;
            this.singhcar.x+=10;

            this.singhcar.y-= this.carheightArr[this.age];


            //var singhcar1 = new egret.Bitmap();
            //singhcar1.texture = RES.getRes("initscene.initcar");
            //singhcar1.x = this.singhcar.x;
            //singhcar1.y = this.singhcar.y
            //this.addChild(singhcar1);
            //
            this.carmask = new egret.Rectangle(0,this.mark.height*(1-this.age/58)+this.singhcar.height/2,this.carmaskwidth,this.mark.height);

            this.mark.mask = this.carmask;

            if(this.age==58){
                console.log("success");
                this.car2.visible = true;
                this.mark.visible = true;
                this.singhcar.visible = false;
                egret.Tween.get(this.mark).to({alpha:0},150);
                egret.Tween.get(this.car2,{loop:true}).to({rotation:-180},1200);
            }

        }

        setPos(x:number,y:number):void{
            this.x = x;
            this.y = y;
        }

    }
}
