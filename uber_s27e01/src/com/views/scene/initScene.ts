module com.views.scene {
    export class InitScene extends AbstractScene {
        loading:com.views.ui.loading.LoaderLoading;
        //骨架
        private armature: dragonBones.Armature;
        private drum: dragonBones.Armature;
        private display;
        private playing:Boolean=true;
        private rankingBtn: egret.Shape;
        private close1Btn: egret.Bitmap;
        private close2Btn: egret.Bitmap;
        private infoPage: egret.Bitmap;
        private startBtn: egret.Shape;
        private ruleBtn: egret.Shape;
        private music:egret.Sound;
        private channel:egret.SoundChannel;
        private scroller;
        private titleAmt:dragonBones.Armature;

        constructor() {
            super();

            this.loading = new com.views.ui.loading.LoaderLoading("resource/resource.json?v=0","gameScene",this.onConfigComplete.bind(this));
            this.addChild(this.loading);

            com.utils.NetworkUtil.requestUser();
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            dragonBones.WorldClock.clock.remove(this.armature);
            dragonBones.WorldClock.clock.remove(this.drum);
            dragonBones.WorldClock.clock.remove(this.titleAmt);
            egret.Ticker.getInstance().unregister(this.dragonbones,this);
            this.drum.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.swapDrumStatus,this);
            this.rankingBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.showRankingList,this);
            this.ruleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.showRuleList,this);
            
            
        }
        onConfigComplete(e: com.model.localData.event.LoaderEvent) {//配置加载完成
            console.log("init scene start");
            //鼓点音乐
            this.music = RES.getRes("bgm_mp3");
            this.initInitLayout();
            this.removeChild(this.loading);
            
            this.channel = this.music.play(0);
            console.log("init scene complete");
        }
        
        protected onAddStage():void{
        }
        private initInitLayout(): void {
            var dragonbonesData = RES.getRes("page1/json");
            var textureData = RES.getRes("page1/texture");
            var t = RES.getRes("page1/png");
            var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(t,textureData));
            //背景
            this.armature = dragonbonesFactory.buildArmature("armatureName");
            
            this.armature.animation.gotoAndPlay("beijing",-1,-1,0);
            this.display = this.armature.display;
            this.addChild(this.display);
            
//            console.log(this.display.x+" "+this.display.y+" "+this.display.anchor)
            this.display.x=this.display.width/2;
            this.display.y = this.display.height / 2-100;
            

            //标题
            this.titleAmt = dragonbonesFactory.buildArmature("armatureName");
            this.addChild(this.titleAmt.display);
            this.titleAmt.display.x = this.display.width / 2;
            this.titleAmt.display.y = this.display.height /2-100;
            this.titleAmt.animation.gotoAndPlay("biaoti",-1,-1,1);

            //鼓
            this.drum = com.utils.AppUtils.loadArmature("drum/json","drum/texture","drum/png","Armature");
            this.drum.display.x = this.display.width / 5*4;
            this.drum.display.y = 100;
            this.drum.animation.gotoAndPlay("kai",-1,-1,0);

            this.drum.display.touchEnabled=true;
            this.drum.display.addEventListener(egret.TouchEvent.TOUCH_TAP,this.swapDrumStatus,this);
            this.addChild(this.drum.display);
            

            var alpha=0;
            var yOff=20;
            
            //排行榜
            this.rankingBtn=new egret.Shape();
            this.rankingBtn.width = 180;
            this.rankingBtn.height = 130;
            this.rankingBtn.x = this.stage.width * 2 / 3 - 20;
            this.rankingBtn.y = this.stage.height * 2 / 5+yOff;
            
            this.rankingBtn.graphics.beginFill(0x00FF00,alpha);
            this.rankingBtn.graphics.drawRect(0,0,this.rankingBtn.width,this.rankingBtn.height);
            this.rankingBtn.graphics.endFill();
            
            this.addChild(this.rankingBtn);
            
            this.rankingBtn.touchEnabled=true;
            this.rankingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRankingList,this);
            
            //规则说明
            this.ruleBtn = new egret.Shape();
            this.ruleBtn.width = 200;
            this.ruleBtn.height = 500 + yOff;;
            this.ruleBtn.x = 40;
            this.ruleBtn.y = 0;

            this.ruleBtn.graphics.beginFill(0x00FF00,alpha);
            this.ruleBtn.graphics.drawRect(0,0,this.ruleBtn.width,this.ruleBtn.height);
            this.ruleBtn.graphics.endFill();

            this.addChild(this.ruleBtn);

            this.ruleBtn.touchEnabled = true;
            this.ruleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRuleList,this);
            
            //开始游戏
            this.startBtn = new egret.Shape();
            this.startBtn.width = 280;
            this.startBtn.height = 150;
            this.startBtn.x = this.stage.width * 1 / 3 -20;
            this.startBtn.y = this.stage.height * 5 / 9 - 40 + yOff;

            this.startBtn.graphics.beginFill(0x00FF00,alpha);
            this.startBtn.graphics.drawRect(0,0,this.startBtn.width,this.startBtn.height);
            this.startBtn.graphics.endFill();
            
            this.startBtn.touchEnabled = true;
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
            this.addChild(this.startBtn);
            
            
            dragonBones.WorldClock.clock.add(this.drum);
            dragonBones.WorldClock.clock.add(this.armature);
            dragonBones.WorldClock.clock.add(this.titleAmt);
            egret.Ticker.getInstance().register(this.dragonbones,this);
            
        }
        dragonbones(advancedTime: number): void {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }
        /**
         * 开始游戏
         */ 
        private startGame(evt: egret.TouchEvent): void {
            MainView.instance.changeScene(com.constants.SceneConstants.TEACH);
        }

        private showPage(evt: egret.TouchEvent,pageName:string): void {
            this.infoPage = new egret.Bitmap(RES.getRes(pageName));
            this.infoPage.x = 0;
            this.infoPage.y = -100;

            this.close1Btn = new egret.Bitmap(RES.getRes("close1"));
            this.close2Btn = new egret.Bitmap(RES.getRes("close2"));

            this.close1Btn.touchEnabled = true;
            this.close2Btn.touchEnabled = true;

            this.close1Btn.x = this.infoPage.width * 4 / 5 + 20;
            this.close1Btn.y = this.infoPage.height / 6 - 40;

            this.close2Btn.x = this.infoPage.width / 3 - 40;
            this.close2Btn.y = this.infoPage.height * 2 / 3+50;


            this.close1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hidePage,this);
            this.close2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hidePage,this);

            this.addChild(this.infoPage);
            this.addChild(this.close1Btn);
            this.addChild(this.close2Btn);
            
            this.ruleBtn.touchEnabled=false;
            this.rankingBtn.touchEnabled=false;
            this.startBtn.touchEnabled = false;
            this.drum.display.touchEnabled = false;

        }

        /**
         * 弹出规则页
         */
        private showRuleList(evt: egret.TouchEvent): void {
            this.showPage(evt,"rule");
        }
        /**
         * 弹出排名
         */ 
        private showRankingList(evt: egret.TouchEvent): void {
            this.showPage(evt,"page1Bg");

            var list = new eui.List();
            list.dataProvider = new eui.ArrayCollection([1,2,3,4,5]);
            list.x=100;
            list.y=200;
            list.width=300;
            list.height=500;
            
            
            var exml =
                `<e:Scroller xmlns:e="http://ns.egret.com/eui">
                <e:List id="list" width="330" height="350">
                    <e:itemRendererSkinName>
                        <e:Skin states="up,down,disabled" height="50">
                            <e:Label text="{data.ranking}" textColor="0x64470C" left="0"/>
                            <e:Label text="{data.name}" textColor="0x64470C" horizontalCenter="0"/>
                            <e:Label text="{data.score}" textColor="0x64470C" right="0"/>
                        </e:Skin>
                    </e:itemRendererSkinName>
                </e:List>
            </e:Scroller>`;

            var clazz = EXML.parse(exml);
            this.scroller = new clazz();
            this.addChild(this.scroller);
            var list: eui.List = this.scroller.list;
            
            com.utils.NetworkUtil.requestRankingList(function(collection){
               list.dataProvider = collection;
            });
            
            this.scroller.x = this.infoPage.width/3-50;
            this.scroller.y=360;

        }
        private hideRankingPage(evt: egret.TouchEvent):void{
            this.removeChild(this.scroller);
            this.hidePage(evt);
        }
        
        private hidePage(evt: egret.TouchEvent): void {
            this.ruleBtn.touchEnabled = true;
            this.rankingBtn.touchEnabled = true;
            this.startBtn.touchEnabled = true;
            this.drum.display.touchEnabled=true;
            
            this.removeChild(this.infoPage);
            this.removeChild(this.close1Btn);
            this.removeChild(this.close2Btn);
            if(this.scroller != null && this.contains(this.scroller))
                this.removeChild(this.scroller);
                

            this.close1Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.hidePage,this);
            this.close2Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.hidePage,this);
        }
        
        
        
        private swapDrumStatus(evt: egret.TouchEvent ):void{
            this.playing=!this.playing;
            if(this.playing){
                this.drum.animation.gotoAndPlay("kai",-1,-1,0);
                this.channel = this.music.play(0);
            }else{
                this.drum.animation.gotoAndPlay("guan",-1,-1,1);
                this.channel.stop();
            }
        }
    }
}