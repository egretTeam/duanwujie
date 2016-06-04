module com.views.scene {
    export class InitScene extends com.views.ui.BasicView {
        bg: egret.Shape;//背景
        car:com.views.ui.scene.initScene.car;
        loading:com.views.ui.loading.LoaderLoading;

        title:egret.TextField;

        minititle:egret.TextField;

        beginBtn:egret.Shape;//开始按钮

        beginBtnText:egret.TextField;

        bottomText:egret.TextField;
        constructor() {
            super();

            this.loading = new com.views.ui.loading.LoaderLoading("resource/resource.json?v=0","gameScene",this.onConfigComplete.bind(this));
            this.addChild(this.loading);

        }

        protected onRemoveStage(e: egret.Event) {//移除


            super.onRemoveStage(e);

            this.bg = null;
            this.car = null;
            this.loading = null;
            this.title = null;
            this.minititle = null;
            this.beginBtn = null;
            this.beginBtnText = null;
            this.bottomText = null;

        }
        onConfigComplete(e: com.model.localData.event.LoaderEvent) {//配置加载完成
            this.initInitLayout();
            this.removeChild(this.loading);
        }
        private initInitLayout():void{
            this.bg = new egret.Shape();
            this.bg.graphics.beginFill(0x5096C8);
            this.bg.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, com.model.DataCenter.instance.configVO.appHeight);
            this.bg.graphics.endFill();
            this.addChild(this.bg);

            var sound:egret.Sound = RES.getRes("bgmusic")
            var channel:egret.SoundChannel = sound.play(0);


            this.car = new com.views.ui.scene.initScene.car();
            this.car.setPos(0,200);
            this.addChild(this.car);

            this.title = new egret.TextField();
            this.title.fontFamily = "Microsoft YaHei";
            this.title.textColor = 0x88dbc1;
            this.title.size = 90;
            this.title.width = com.model.DataCenter.instance.configVO.appWidth;
            this.title.textAlign = egret.HorizontalAlign.CENTER;
            this.title.text = "测试";
            this.title.x = 0;
            this.title.y = 30;
            this.addChild(this.title);

            this.minititle = new egret.TextField();
            this.minititle.fontFamily = "Microsoft YaHei"
            this.minititle.textColor = 0xffffff;
            this.minititle.size = 30;
            this.minititle.text = "轻触屏幕换线，两辆车必须避开所有的路";
            this.minititle.textHeight = 40
            this.minititle.x = 45;
            this.minititle.width = com.model.DataCenter.instance.configVO.appWidth*7/8
            this.minititle.y = 150;
            this.minititle.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.minititle);

            this.minititle = new egret.TextField();
            this.minititle.fontFamily = "Microsoft YaHei"
            this.minititle.textColor = 0xffffff;
            this.minititle.size = 30;
            this.minititle.text = "障，不能错过任何绿圈。";
            this.minititle.textHeight = 40
            this.minititle.x = 45;
            this.minititle.width = com.model.DataCenter.instance.configVO.appWidth*7/8
            this.minititle.y = 190;
            this.minititle.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.minititle);

            this.beginBtn = new egret.Shape();
            this.beginBtn.graphics.beginFill(0x88dbc1);
            this.beginBtn.graphics.drawRoundRect(0, 0, 300, 100,30,30);
            this.beginBtn.x = com.model.DataCenter.instance.configVO.appWidth/2-150;
            this.beginBtn.y = com.model.DataCenter.instance.configVO.appHeight*8/10+60;
            this.beginBtn.graphics.endFill();
            this.addChild(this.beginBtn);


            this.beginBtnText = new egret.TextField();
            this.beginBtnText.fontFamily = "Microsoft YaHei"
            this.beginBtnText.textColor = 0x5096C8;
            this.beginBtnText.size = 50;
            this.beginBtnText.text = "游戏教程";
            this.beginBtnText.bold = true;
            this.beginBtnText.x = com.model.DataCenter.instance.configVO.appWidth/2-100;
            this.beginBtnText.y = com.model.DataCenter.instance.configVO.appHeight*8/10+85
            this.addChild(this.beginBtnText);



            egret.Tween.get(this.beginBtnText,{loop:true}).to({x:com.model.DataCenter.instance.configVO.appWidth/2-90},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-110},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-90},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-110},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-90},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-110},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-100},100).wait(1200);
            egret.Tween.get(this.beginBtn,{loop:true}).to({x:com.model.DataCenter.instance.configVO.appWidth/2-140},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-160},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-140},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-160},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-140},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-160},100).to({x:com.model.DataCenter.instance.configVO.appWidth/2-150},100).wait(1200);


            egret.setTimeout(function(){

                this.beginBtn.touchEnabled = true;
                this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
                    MainView.instance.changeScene(2);
                },this);

                this.beginBtnText.touchEnabled = true;

                this.beginBtnText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
                    MainView.instance.changeScene(2);
                },this);
            },this,850);


            this.bottomText = new egret.TextField();
            this.bottomText.fontFamily = "Microsoft YaHei"
            this.bottomText.textColor = 0xffffff;
            this.bottomText.width = com.model.DataCenter.instance.configVO.appWidth;
            this.bottomText.size = 25;
            this.bottomText.text = "技术支持：拇指部落";
            this.bottomText.y = com.model.DataCenter.instance.configVO.appHeight*27/28;
            this.bottomText.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.bottomText);

        }

    }
}