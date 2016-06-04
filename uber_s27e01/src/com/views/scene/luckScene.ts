module com.views.scene{
    export class luckScene extends AbstractScene {
       private backgroud:egret.Bitmap;
       private weipinhui:egret.Bitmap;
       private JD: egret.Bitmap;
       private Diamonds:egret.Bitmap;
       private Diamonds2:egret.Bitmap;
       private Diamonds3: egret.Bitmap;
       private bell1: egret.Bitmap;
       private bell2: egret.Bitmap;
       private bell2_1: egret.Bitmap;
       private bell2_1_1: egret.Bitmap;
       private bell2_2: egret.Bitmap;
       private money1: egret.Bitmap;
       private money2: egret.Bitmap;
        constructor() {
            super();
            this.init();
        }
        init():void{
            //背景
            this.backgroud = new egret.Bitmap(RES.getRes("backgroud"))
            this.backgroud.x = 0;
            this.backgroud.y = -150;
            this.addChild(this.backgroud);
//            
//            //唯品会口令
//            this.weipinhui = new egret.Bitmap(RES.getRes("weipinhui"))
//            this.weipinhui.x = 0;
//            this.weipinhui.y = -100;
//            this.addChild(this.weipinhui);
//            
//            //JD口令
//            this.JD = new egret.Bitmap(RES.getRes("JD"))
//            this.JD.x = 0;
//            this.JD.y = -100;
//            this.addChild(this.JD);
//            
//            //钻石会员第1页
//            this.Diamonds = new egret.Bitmap(RES.getRes("Diamonds"))
//            this.Diamonds.x = 0;
//            this.Diamonds.y = -100;
//            this.addChild(this.Diamonds);
            
            //钻石会员第2页
//            this.Diamonds2 = new egret.Bitmap(RES.getRes("Diamonds2"))
//            this.Diamonds2.x = 0;
//            this.Diamonds2.y = -100;
//            this.addChild(this.Diamonds2);
           
            //钻石会员第3页
//            this.Diamonds3 = new egret.Bitmap(RES.getRes("Diamonds3"))
//            this.Diamonds3.x = 0;
//            this.Diamonds3.y = -100;
//            this.addChild(this.Diamonds3);
            
            //彩铃第1页
//            this.bell1 = new egret.Bitmap(RES.getRes("bell1"))
//            this.bell1.x = 0;
//            this.bell1.y = -100;
//            this.addChild(this.bell1);
            
            //彩铃第2页
//            this.bell2 = new egret.Bitmap(RES.getRes("bell2"))
//            this.bell2.x = 0;
//            this.bell2.y = -100;
//            this.addChild(this.bell2);
            
            //彩铃第2-1页
//            this.bell2_1 = new egret.Bitmap(RES.getRes("bell2_1"))
//            this.bell2_1.x = 0;
//            this.bell2_1.y = -100;
//            this.addChild(this.bell2_1);
            
            //彩铃第2-1-1页
//            this.bell2_1_1 = new egret.Bitmap(RES.getRes("bell2_1_1"))
//            this.bell2_1_1.x = 0;
//            this.bell2_1_1.y = -100;
//            this.addChild(this.bell2_1_1);
            
            //彩铃第2-2页
//            this.bell2_2 = new egret.Bitmap(RES.getRes("bell2_2"))
//            this.bell2_2.x = 0;
//            this.bell2_2.y = -100;
//            this.addChild(this.bell2_2);
            
            //话费流量1页
//            this.money1 = new egret.Bitmap(RES.getRes("money1"))
//            this.money1.x = 0;
//            this.money1.y = -100;
//            this.addChild(this.money1);
            
            //话费流量2页
            this.money2 = new egret.Bitmap(RES.getRes("money2"))
            this.money2.x = 0;
            this.money2.y = -100;
            this.addChild(this.money2);
            
        }
    }
    
}










//
//module com.views.scene {
//    export class luckScene extends AbstractScene {
//        loading:com.views.ui.loading.LoaderLoading;
//        //骨架
//        private armature: dragonBones.Armature;
//        private drum: dragonBones.Armature;
//        private display;
//        private playing:Boolean=true;
//        private rankingBtn: egret.Shape;
//        private close1Btn: egret.Bitmap;
//        private close2Btn: egret.Bitmap;
//        private rankingList: egret.Bitmap;
//        private startBtn: egret.Shape;
//
//        constructor() {
//            super();
//
//            this.loading = new com.views.ui.loading.LoaderLoading("resource/resource.json?v=0","gameScene",this.onConfigComplete.bind(this));
//            this.addChild(this.loading);
//
//        }
//
//        protected onRemoveStage(e: egret.Event) {//移除
//            super.onRemoveStage(e);
//            dragonBones.WorldClock.clock.remove(this.armature);
//            dragonBones.WorldClock.clock.remove(this.drum);
//            egret.Ticker.getInstance().unregister(this.dragonbones,this);
//            this.drum.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.swapDrumStatus,this);
//            this.rankingBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.showRankingList,this);
//            
//            
//        }
//        onConfigComplete(e: com.model.localData.event.LoaderEvent) {//配置加载完成
//            this.initInitLayout();
//            this.removeChild(this.loading);
//        }
//        private initInitLayout(): void {
//            //背景
//            this.armature = com.utils.AppUtils.loadArmature("page1/json","page1/texture","page1/png","armatureName");
//            
//            this.armature.animation.gotoAndPlay("newAnimation",-1,-1,1);
//            this.display = this.armature.display;
//            this.addChild(this.display);
//            
////            console.log(this.display.x+" "+this.display.y+" "+this.display.anchor)
//            this.display.x=this.display.width/2;
//            this.display.y = this.display.height / 4+56;
//
//            //鼓
//            this.drum = com.utils.AppUtils.loadArmature("drum/json","drum/texture","drum/png","Armature");
//            this.drum.display.x = this.display.width / 5*4;
//            this.drum.display.y = 100;
//            this.drum.animation.gotoAndPlay("kai",-1,-1,0);
//
//            this.drum.display.touchEnabled=true;
//            this.drum.display.addEventListener(egret.TouchEvent.TOUCH_TAP,this.swapDrumStatus,this);
//            this.addChild(this.drum.display);
//
//
//            //排行榜
//            this.rankingBtn=new egret.Shape();
//            this.rankingBtn.width = 180;
//            this.rankingBtn.height = 130;
//            this.rankingBtn.x = this.stage.width * 2 / 3 - 20;
//            this.rankingBtn.y = this.stage.height * 2 / 5;
//            
//            this.rankingBtn.graphics.beginFill(0x00FF00,0);
//            this.rankingBtn.graphics.drawRect(0,0,this.rankingBtn.width,this.rankingBtn.height);
//            this.rankingBtn.graphics.endFill();
//            
//            this.addChild(this.rankingBtn);
//            
//            this.rankingBtn.touchEnabled=true;
//            this.rankingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRankingList,this);
//            
//            //开始游戏
//            this.startBtn = new egret.Shape();
//            this.startBtn.width = 280;
//            this.startBtn.height = 150;
//            this.startBtn.x = this.stage.width * 1 / 3 -20;
//            this.startBtn.y = this.stage.height * 5 / 9 - 40;
//
//            this.startBtn.graphics.beginFill(0x00FF00,0);
//            this.startBtn.graphics.drawRect(0,0,this.startBtn.width,this.startBtn.height);
//            this.startBtn.graphics.endFill();
//            
//            this.startBtn.touchEnabled = true;
//            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
//            this.addChild(this.startBtn);
//            
//            
//            dragonBones.WorldClock.clock.add(this.drum);
//            dragonBones.WorldClock.clock.add(this.armature);
//            egret.Ticker.getInstance().register(this.dragonbones,this);
//            
//        }
//        dragonbones(advancedTime: number): void {
//            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
//        }
//        /**
//         * 开始游戏
//         */ 
//        private startGame(evt: egret.TouchEvent): void {
//            MainView.instance.changeScene(com.constants.SceneConstants.TEACH);
//        }
//        /**
//         * 弹出排名
//         */ 
//        private showRankingList(evt: egret.TouchEvent): void {
//            this.rankingList = new egret.Bitmap(RES.getRes("page1Bg"));
//            this.rankingList.x=0;
//            this.rankingList.y=-100;
//            
//            this.close1Btn = new egret.Bitmap(RES.getRes("close1"));
//            this.close2Btn = new egret.Bitmap(RES.getRes("close2"));
//            
//            this.close1Btn.touchEnabled = true;
//            this.close2Btn.touchEnabled = true;
//            
//            this.close1Btn.x = this.rankingList.width * 4 / 5+20;
//            this.close1Btn.y = this.rankingList.height /6-40;
//
//            this.close2Btn.x = this.rankingList.width / 3-40;
//            this.close2Btn.y = this.rankingList.height *2/ 3 ;
//            
//            
//            this.close1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hideRankingList,this);
//            this.close2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hideRankingList,this);
//            
//            this.addChild(this.rankingList);
//            this.addChild(this.close1Btn);
//            this.addChild(this.close2Btn);
//            
//        }
//        
//        private hideRankingList(evt: egret.TouchEvent): void {
//
//            this.removeChild(this.rankingList);
//            this.removeChild(this.close1Btn);
//            this.removeChild(this.close2Btn);
//            
//            this.close1Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.hideRankingList,this);
//            this.close2Btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.hideRankingList,this);
//
//
//        }
//        
//        
//        private swapDrumStatus(evt: egret.TouchEvent ):void{
//            console.log("状态： "+this.playing);
//            this.playing=!this.playing;
//            if(this.playing)
//                this.drum.animation.gotoAndPlay("kai",-1,-1,0);
//            else
//                this.drum.animation.gotoAndPlay("guan",-1,-1,1);
//        }
//    }
//} 
