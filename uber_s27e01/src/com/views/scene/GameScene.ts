module com.views.scene {
    export class GameScene extends AbstractScene{
        carLeft:com.views.ui.scene.gameScene.car;//车子左边
        carRight:com.views.ui.scene.gameScene.car;//车子右边
        loading:com.views.ui.loading.LoaderLoading;
        static SCORE_STEP:number=1;

        scoreLabel:egret.TextField;
        cloud:egret.Bitmap;

        score:number = 0;
        spScore:number = 0;

        age:number = 0;
        /**
         * logo盾牌出现频率
         */ 
        spDuration:number=20;
        spCount:number=0;

        timeGap:number = 35;
        lOrRMovrGap:number = 9;

        levelChange:boolean = false;

        luZhangBomb:com.views.ui.scene.gameScene.luzhangBomb;

        leftArr:any = new Array();
        rightArr:any = new Array();
        gameOverdialog: com.views.dialog.GameOverDialog;

        gameOver:boolean = false;

        constructor() {
            super();
            this.initGameLayout();
        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);

            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.bg = null;
            this.carLeft = null;
            this.carRight = null;
            this.loading = null;
            this.cloud = null;

        }
        onConfigComplete(e: com.model.localData.event.LoaderEvent) {//配置加载完成
            this.initGameLayout();
        }
        private initGameLayout():void{
            this.bg = new egret.Shape();
            this.bg.graphics.beginFill(0x5096C8);
            this.bg.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, com.model.DataCenter.instance.configVO.appHeight);
            this.bg.graphics.endFill();
            this.addChild(this.bg);

            //绘制赛道
            this.bg.graphics.beginFill(0x80A6FC);
            this.bg.graphics.drawRect(com.model.DataCenter.instance.configVO.appWidth / 4 - 3,0,6,com.model.DataCenter.instance.configVO.appHeight);
            this.bg.graphics.endFill();

            this.bg.graphics.beginFill(0xFFA680);
            this.bg.graphics.drawRect(com.model.DataCenter.instance.configVO.appWidth / 2 - 3,0,6,com.model.DataCenter.instance.configVO.appHeight);
            this.bg.graphics.endFill();

            this.bg.graphics.beginFill(0x80A6FF);
            this.bg.graphics.drawRect(com.model.DataCenter.instance.configVO.appWidth * 3 / 4 - 3,0,6,com.model.DataCenter.instance.configVO.appHeight);
            this.bg.graphics.endFill();

            var carnum:number = com.utils.AppUtils.GetRandomNum(0,7);

            this.carLeft = new com.views.ui.scene.gameScene.car()
            this.addChildAt(this.carLeft,10);
            this.carLeft.setPos(com.model.DataCenter.instance.configVO.appWidth/8,com.model.DataCenter.instance.configVO.appHeight*8.5/10);

            this.carRight = new com.views.ui.scene.gameScene.car()
            this.addChildAt(this.carRight,10);
            this.carRight.setPos(com.model.DataCenter.instance.configVO.appWidth*5/8,com.model.DataCenter.instance.configVO.appHeight*8.5/10);

            this.carLeft.resetCar(carnum);
            this.carRight.resetCar(carnum);

            this.touchEnabled = true;

            //云层
            var cloudImg = RES.getRes("cloud");
            this.cloud=new egret.Bitmap();
            this.cloud.texture=cloudImg;
            this.cloud.x=0;
            this.cloud.y = -this.cloud.height;
            this.addChildAt(this.cloud,11);
            var tw=egret.Tween.get(this.cloud,{ loop: false });
            tw.to({ y: 0 },15000,egret.Ease.sineIn);
            
            var panelBg=RES.getRes("scorePanel");
            var scorePanel=new egret.Bitmap();
            scorePanel.texture=panelBg;
            scorePanel.x = (com.model.DataCenter.instance.configVO.appWidth - scorePanel.width)/2;
            scorePanel.y=0;
            this.addChildAt(scorePanel,12);
            
            this.scoreLabel = new egret.TextField;
            this.scoreLabel.textColor  = 0xf8f8f8;
            this.scoreLabel.text = 0+"";
            this.scoreLabel.width = 80;
            this.scoreLabel.anchorOffsetX = 40;
            this.scoreLabel.size = 45;
            this.scoreLabel.x = com.model.DataCenter.instance.configVO.appWidth / 2 + com.model.DataCenter.instance.configVO.appWidth/10;
            this.scoreLabel.y = 35;
            this.scoreLabel.width = com.model.DataCenter.instance.configVO.appWidth/2;
            this.scoreLabel.textAlign = egret.HorizontalAlign.LEFT;
            this.addChildAt(this.scoreLabel,13);

            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin,this);
           this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
            
//            var timer:egret.Timer = new egret.Timer(100,0);
//            timer.addEventListener(egret.TimerEvent.TIMER,this.onEnterFrame, this);
//            timer.start();

        }
        onEnterFrame(e:egret.Event):void{
            if(this.gameOver)return;
            this.age++;

            if(this.age%300==0){
                if(this.timeGap>11){
                    this.timeGap-=1;
                    this.lOrRMovrGap+=1.5;
                    this.levelChange = true;
                }
            }

            if((this.age%(this.timeGap|0))==0){

                if(this.levelChange){
                    this.levelChange = false;
                    return;
                }

                //left
                this.create(this.leftArr,0,1);
                //right
                this.create(this.rightArr,2,3);

            }

            //检查左侧赛道
            this.check(this.leftArr,this.carLeft,-350,-180);
           
            //检查右侧赛道
            this.check(this.rightArr,this.carRight,0,140);


        }
        
        create(items,s:number,e:number):void{
            switch(com.utils.AppUtils.GetRandomNum(0,2)) {
                case 0: {
                    var luzhangs = this.luzhangFactory(com.utils.AppUtils.GetRandomNum(s,e));
                    items.push(luzhangs);
                    this.addChildAt(luzhangs,5);
                    break
                }
                case 1: {
                    this.spCount++;
                    if(this.spCount % this.spDuration == 0) {
                        var sp = this.shieldFactory(com.utils.AppUtils.GetRandomNum(s,e));
                        items.push(sp);
                        this.addChildAt(sp,5);
                    } else {
                        var rounds = this.roundFactory(com.utils.AppUtils.GetRandomNum(s,e));
                        items.push(rounds);
                        this.addChildAt(rounds,5);
                    }
                    break;
                }

            }
        }
        /**
         * 检查运动状态
         */ 
        check(items,car: com.views.ui.scene.gameScene.car,rx:number,lx:number) {
            for(var i = 0;i < items.length ;i++) {
                if(items[i] == null) continue;
                items[i].update();

                if(this.age % 3 == 0) {
                if(items[i].y >= com.model.DataCenter.instance.configVO.appHeight - 10) {
                    if(this.contains(items[i]))
                        this.removeChild(items[i]);
                    items.splice(i,1);
                    continue;}
                if(items[i].isHit || items[i].isEnd) {
                    if(this.contains(items[i]))
                        this.removeChild(items[i]);
                    items.splice(i,1);
                    continue;
                }
                var clx = car.x;
                var cly = car.y;
                var lax = items[i].x;
                var lay = items[i].y;
                if(com.utils.AppUtils.posDistance({ x: clx,y: cly },{ x: lax,y: lay }) < 40) {
                    switch(items[i].getType()){
                        case com.constants.ItemConstant.BLOCK:{
                            this.luZhangBomb = new com.views.ui.scene.gameScene.luzhangBomb();
                            this.luZhangBomb.x = car.isLeftRight?lx:rx;
                            this.luZhangBomb.y = 450;
                            this.addChild(this.luZhangBomb);
                            if(car.hasShield) {
                                car.setShield(false);
                            }else{
                                console.log("gameOver");
                                car.broken();
                                this.gameOverCallFunc();
                            }
                            break;
                        } 
                        case com.constants.ItemConstant.SCORE:{
                            this.score += GameScene.SCORE_STEP;
                            this.scoreLabel.text = this.score + "";
                            break;
                        } case com.constants.ItemConstant.SHILED: {
                            this.score += GameScene.SCORE_STEP;
                            car.setShield(true);
                            this.scoreLabel.text = this.score + "";
                        }
                    }
                    if(this.contains(items[i]))
                        this.removeChild(items[i]);
                    items.splice(i,1);
                }
                }
            }
        } 
        
        gameOverCallFunc():void{
            if(this.gameOver)return;
            this.gameOver = true;
            console.log(egret.localStorage.getItem("highestScore"));

            this.carLeft.stopArmature1Animation();
            this.carRight.stopArmature1Animation();

            if(parseInt(egret.localStorage.getItem("highestScore"))<this.score||egret.localStorage.getItem("highestScore")==null){
                egret.localStorage.setItem("highestScore",this.score+"");
            }
            this.showGameOverPanel();
            //MainView.instance.changeScene(com.constants.SceneConstants.LUCK);
        }

        showGameOverPanel():void{
            this.gameOverdialog = new com.views.dialog.GameOverDialog();
            
            this.gameOverdialog.scorePanel.text = this.score + '';

            var godialog: com.views.dialog.GameOverDialog = this.gameOverdialog;
            com.utils.NetworkUtil.sendScoreNGetRanking(function(res) {
                if(res.rankInfo!=null){
                    var ranking = res.rankInfo.rank;
                    godialog.rankingPanel.text = ranking;
                    godialog.highestScorePanel.text = res.historyMaxScore;
                }
                com.views.dialog.AwardDialog.balance=parseInt(res.lotteryNum);
            },this.score);
            this.addChild(this.gameOverdialog);
        }
        
        luzhangFactory(num:number):com.views.ui.scene.gameScene.luzhang{
//            var luzhang = new com.views.ui.scene.gameScene.luzhang();
            var luzhang = ClassPool.getInstance().getBlock();
            luzhang.reset();
            luzhang.setPos((1+num*2)/8*com.model.DataCenter.instance.configVO.appWidth,0);
            luzhang.gap = this.lOrRMovrGap;
            return luzhang;

        }
        roundFactory(num:number):com.views.ui.scene.gameScene.round{
//            var round = new com.views.ui.scene.gameScene.round();
            var round = ClassPool.getInstance().getScore();
            round.reset();
            round.setPos((1+num*2)/8*com.model.DataCenter.instance.configVO.appWidth,0);
            round.gap = this.lOrRMovrGap;
            return round;
        }
        shieldFactory(num: number): com.views.ui.scene.gameScene.shield {
//            var shield = new com.views.ui.scene.gameScene.shield();
            var shield = ClassPool.getInstance().getShield();
            shield.reset();
            shield.setPos((1 + num * 2) / 8 * com.model.DataCenter.instance.configVO.appWidth,0);
            shield.gap = this.lOrRMovrGap;
            return shield;
        }

        onTouchBegin(e: egret.TouchEvent):void{
            if(this.gameOver)return;
            this.setChildIndex(this.cloud,7);
            this.setChildIndex(this.scoreLabel,7);
            if(e.stageX<com.model.DataCenter.instance.configVO.appWidth/2){

                if(this.carLeft.isLeftRight==0){
                    this.carLeft.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth*3/8,1)
                }else{
                    this.carLeft.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth*1/8,0);
                }

            }else{

                if(this.carRight.isLeftRight==0){
                    this.carRight.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth*7/8,1)
                }else{
                    this.carRight.tweenGoTo(com.model.DataCenter.instance.configVO.appWidth*5/8,0);
                }

            }
        }
    }
}