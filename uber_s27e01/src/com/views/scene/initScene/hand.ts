module com.views.ui.scene.initScene {
    export class hand extends com.views.ui.BasicView {
        hand:egret.Bitmap;
        round1:egret.Shape;
        round2:egret.Shape;
        constructor() {
            super();
            this.touchEnabled = true;
            this.initHand();
        }

        initHand():void{

            this.round1 = new egret.Shape();
            this.round1.graphics.beginFill(0x88dbc1);
            this.round1.graphics.drawCircle(0,0,38);
            this.addChild(this.round1);
            this.round1.visible = false;

            this.round1.alpha = .5;

            this.round2 = new egret.Shape();
            this.round2.graphics.beginFill(0x88dbc1);
            this.round2.graphics.drawCircle(0,0,30);
            this.addChild(this.round2);
            this.round2.alpha = .5;
            this.round2.visible = false;


            this.hand = new egret.Bitmap();
            this.hand.texture = RES.getRes("hand");
            this.addChild(this.hand);

            this.visible = false;


        }
        setLeft():void{
            this.scaleX = -1;
        }
        show():void{
            this.alpha = 0;
            this.visible = true;
            egret.Tween.get(this).to({alpha:1},200).wait(50).call(function(){
                this.round2.visible = true;
                this.round1.visible = true;
                egret.Tween.get(this.round1).to({scaleX:1.4,scaleY:1.4,alpha:0},200).call(function(){
                    this.round2.visible = false;
                    this.round1.scaleX = 1;
                    this.round1.scaleY = 1;
                    this.round1.alpha = .5;
                    this.round1.visible = false;
                    this.visible = false;
                },this);
            },this);

        }
        protected onRemoveStage(e: egret.Event) {//移除

            super.onRemoveStage(e);
            this.hand = null;
            this.round1 = null;
            this.round2 = null;
        }
        setPos(x:number,y:number):void{
            this.x = x;
            this.y = y;
        }

    }
}
