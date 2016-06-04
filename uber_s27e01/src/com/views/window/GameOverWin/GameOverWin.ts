module com.views.windows.gameOverWin {
    export class GameOverWin extends com.views.ui.windows.MaskWindow {

        title:egret.TextField;
        score:egret.TextField;
        highestScore:egret.TextField;

        shareBtn:egret.Shape;//分享按钮
        againBtn:egret.Shape;//再玩一次按钮

        shareBtnText:egret.TextField;//分享按钮文字
        againBtnText:egret.TextField;//再玩一次按钮文字

        awardArr:any = new Array();

        static _instance: GameOverWin = null;//单例
        constructor() {
            super("");
            this.initGameOverWin();
        }
        initGameOverWin():void{


            this.title = new egret.TextField();
            this.title.fontFamily = "Microsoft YaHei"
            this.title.textColor = 0xffffff;
            this.title.size = 50;
            this.title.text = "游戏结束";
            this.title.bold = true;
            this.title.x = 0;
            this.title.y = 80;
            this.title.width = com.model.DataCenter.instance.configVO.appWidth;
            this.title.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.title);

            this.score = new egret.TextField();
            //this.score.fontFamily = "Microsoft YaHei"
            this.score.textColor = 0x88dbc1;
            this.score.size = 130;
            this.score.text = "21";
            this.score.bold = true;
            this.score.x = 0;
            this.score.y = 170;
            this.score.width = com.model.DataCenter.instance.configVO.appWidth;
            this.score.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.score);

            this.highestScore = new egret.TextField();
            this.highestScore.fontFamily = "Microsoft YaHei"
            this.highestScore.textColor = 0xffffff;
            this.highestScore.size = 28;
            this.highestScore.text = "最高分：48";
            this.highestScore.bold = true;
            this.highestScore.x = 0;
            this.highestScore.y = 320;
            this.highestScore.width = com.model.DataCenter.instance.configVO.appWidth;
            this.highestScore.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.highestScore);

            this.shareBtn = this.btnFactory();
            this.againBtn = this.btnFactory();

            this.shareBtn.x = 30;
            this.shareBtn.y = com.model.DataCenter.instance.configVO.appHeight*8.5/10;


            this.againBtn.x = com.model.DataCenter.instance.configVO.appWidth-this.againBtn.width-30 ;
            this.againBtn.y = com.model.DataCenter.instance.configVO.appHeight*8.5/10;


            this.shareBtnText = this.btnTextFactory();
            this.againBtnText = this.btnTextFactory();

            this.shareBtnText.x = 85;
            this.shareBtnText.y = com.model.DataCenter.instance.configVO.appHeight*8.5/10+25;
            this.shareBtnText.text = "炫耀成绩";
            this.shareBtnText.bold = true;



            this.againBtnText.x = com.model.DataCenter.instance.configVO.appWidth-this.againBtn.width+25;
            this.againBtnText.y = com.model.DataCenter.instance.configVO.appHeight*8.5/10+25;
            this.againBtnText.text = "再玩一次";
            this.againBtnText.bold = true;

            this.addChild(this.againBtnText);
            this.addChild(this.shareBtnText);
            this.addChild(this.againBtn);
            this.addChild(this.shareBtn);

            this.againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.againCallBack,this);
            this.againBtnText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.againCallBack,this);

            this.shareBtnText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.shareCallBack,this);
            this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.shareCallBack,this);

        }
        shareCallBack():void{
            com.views.windows.shareWin.shareWin.show(MainView.instance);
        }
        setGameOverMsg(score:number,highscore:string):void{
            this.highestScore.text = "最高分："+highscore;
            this.score.text = score+"";

            if(score<20){
                this.gameEnding1(0);
            }else{
                this.gameEnding2();
            }
            if(wx) {
                    var shareObj = {
                        title: '玩极速优步，瓜分千万乘车券', // 分享标题
                        desc: '我开的优步达到了'+score+'分！成功瓜分了一张乘车券！你再不来就派光了！', // 分享描述
                        link: location.href, // 分享链接
                        imgUrl: "http://" + location.hostname + "/2016/q1/biz/uber_s27e01/resource/assets/icon.jpg", // 分享图标
                    }
                    var bodyMenuShareTimeline = new BodyMenuShareTimeline();
                    bodyMenuShareTimeline.title = shareObj.title;
                    bodyMenuShareTimeline.link = shareObj.link;
                    bodyMenuShareTimeline.imgUrl = shareObj.imgUrl;
                    bodyMenuShareTimeline.success = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享朋友圈成功", "share", "分享", 1]);
                    }
                    bodyMenuShareTimeline.cancel = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享朋友圈取消", "share", "分享", 1]);
                    }
                    bodyMenuShareTimeline.fail = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享朋友圈失败", "share", "分享", 1]);
                    }
                    wx.onMenuShareTimeline(bodyMenuShareTimeline);

                    var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
                    bodyMenuShareAppMessage.title = shareObj.title;
                    bodyMenuShareAppMessage.desc = shareObj.desc;
                    bodyMenuShareAppMessage.link = shareObj.link;
                    bodyMenuShareAppMessage.imgUrl = shareObj.imgUrl;
                    bodyMenuShareAppMessage.success = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享给朋友成功", "share", "分享", 1]);
                    }
                    bodyMenuShareAppMessage.cancel = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享给朋友取消", "share", "分享", 1]);
                    }
                    bodyMenuShareAppMessage.fail = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享给朋友失败", "share", "分享", 1]);
                    }
                    wx.onMenuShareAppMessage(bodyMenuShareAppMessage);

                    var bodyMenuShareQQ = new BodyMenuShareQQ();
                    bodyMenuShareQQ.title = shareObj.title;
                    bodyMenuShareQQ.desc = shareObj.desc;
                    bodyMenuShareQQ.link = shareObj.link;
                    bodyMenuShareQQ.imgUrl = shareObj.imgUrl;
                    bodyMenuShareQQ.success = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到QQ成功", "share", "分享", 1]);
                    }
                    bodyMenuShareQQ.cancel = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到QQ取消", "share", "分享", 1]);
                    }
                    bodyMenuShareQQ.fail = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到QQ失败", "share", "分享", 1]);
                    }
                    wx.onMenuShareQQ(bodyMenuShareQQ);

                    var bodyMenuShareWeibo = new BodyMenuShareWeibo();
                    bodyMenuShareWeibo.title = shareObj.title;
                    bodyMenuShareWeibo.desc = shareObj.desc;
                    bodyMenuShareWeibo.link = shareObj.link;
                    bodyMenuShareWeibo.imgUrl = shareObj.imgUrl;
                    bodyMenuShareWeibo.success = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到微博成功", "share", "分享", 1]);
                    }
                    bodyMenuShareWeibo.cancel = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到微博取消", "share", "分享", 1]);
                    }
                    bodyMenuShareWeibo.fail = function() {
                        var _czc = window["_czc"];
                        _czc && _czc.push(["_trackEvent", "分享到微博失败", "share", "分享", 1]);
                    }
                    wx.onMenuShareWeibo(bodyMenuShareWeibo);
            }
        }
        againCallBack():void{
            this.onClose();
            MainView.instance.changeScene(1);
        }

        btnFactory():egret.Shape{
            var Btn = new egret.Shape();
            Btn.graphics.beginFill(0xffffff);
            Btn.graphics.drawRoundRect(0, 0, 250, 80,15,15);
            Btn.graphics.endFill();
            Btn.touchEnabled = true;
            return Btn;
        }

        btnTextFactory():egret.TextField{
            var BtnText = new egret.TextField();
            BtnText.fontFamily = "Microsoft YaHei"
            BtnText.textColor = 0x404040;
            BtnText.size = 35;
            BtnText.touchEnabled = true;
            BtnText.bold = true;
            return BtnText;
        }

        gameEnding3():void{

            for(var i = 0;this.awardArr.length-1>=i;i++){
                this.removeChild(this.awardArr[i]);
                this.awardArr[i] = null;
            }
            this.awardArr = [];

            var awardbar = new egret.Shape();
            awardbar.graphics.beginFill(0xffffff);
            awardbar.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, 250);
            awardbar.graphics.endFill();
            awardbar.y = 520;
            this.awardArr.push(awardbar);
            this.addChild(awardbar);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x404040;
            awardText.size = 35;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 570;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.text = "恭喜你获得5元uber优惠券";
            awardText.bold = true;
            awardText.textColor = 0x21A1AB;
            this.awardArr.push(awardText);
            this.addChild(awardText);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x404040;
            awardText.size = 35;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 650;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.text = "奖品已发送至您的uber账户中";
            awardText.bold = true;
            awardText.textColor = 0x404040;
            this.awardArr.push(awardText);
            this.addChild(awardText);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x404040;
            awardText.size = 35;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 700;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.text = "请在uber乘客端的优惠中查看";
            awardText.textColor = 0x404040;
            awardText.bold = true;
            this.awardArr.push(awardText);
            this.addChild(awardText);

            this.removeChild(this.againBtnText);
            this.removeChild(this.shareBtnText);
            this.removeChild(this.againBtn);
            this.removeChild(this.shareBtn);

            this.addChild(this.againBtn);
            this.addChild(this.shareBtn);
            this.addChild(this.againBtnText);
            this.addChild(this.shareBtnText);



        }


        gameEnding1(type:number):void{

            for(var i = 0;this.awardArr.length-1>=i;i++){
                this.removeChild(this.awardArr[i]);
                this.awardArr[i] = null;
            }
            this.awardArr = [];

            var awardbar = new egret.Shape();
            awardbar.graphics.beginFill(0x404040);
            awardbar.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, 500);
            awardbar.graphics.endFill();
            awardbar.y = 600;

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x404040;
            awardText.size = 40;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 650;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.bold = true;

            switch(type){
                case 0:{
                    awardText.text = "成绩达到20分以上才能抽奖";
                    awardText.textColor = 0xffffff;
                    break;
                }
                case 1:{
                    awardText.text = "很遗憾你未在这次抽奖中中奖";
                    awardText.textColor = 0xde6644;
                    break;
                }
            }

            this.awardArr.push(awardbar);
            this.awardArr.push(awardText);
            this.addChild(awardbar);
            this.addChild(awardText);


            this.removeChild(this.againBtnText);
            this.removeChild(this.shareBtnText);
            this.removeChild(this.againBtn);
            this.removeChild(this.shareBtn);

            this.addChild(this.againBtn);
            this.addChild(this.shareBtn);
            this.addChild(this.againBtnText);
            this.addChild(this.shareBtnText);
        }

        gameEnding2():void{

            for(var i = 0;this.awardArr.length-1>=i;i++){
                this.removeChild(this.awardArr[i]);
                this.awardArr[i] = null;
            }
            this.awardArr = [];

            var awardbar = new egret.Shape();
            awardbar.graphics.beginFill(0x404040);
            awardbar.graphics.drawRect(0, 0, com.model.DataCenter.instance.configVO.appWidth, 700);
            awardbar.graphics.endFill();

            awardbar.graphics.beginFill(0xffffff);
            awardbar.graphics.lineStyle(2,0x999999,1,true)
            awardbar.graphics.drawRoundRect(60, 110, com.model.DataCenter.instance.configVO.appWidth-120, 80,10,10);
            awardbar.graphics.endFill();

            awardbar.graphics.beginFill(0x88dbc1);
            awardbar.graphics.lineStyle(0,0x88dbc1)
            awardbar.graphics.drawRoundRect(60, 220, com.model.DataCenter.instance.configVO.appWidth-120, 80,10,10);
            awardbar.graphics.endFill();
            awardbar.y = 480;
            this.awardArr.push(awardbar);
            this.addChild(awardbar);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x21A1AB;
            awardText.size = 35;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 510;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.text = "恭喜你获得一次抽奖机会";
            awardText.bold = true;
            this.awardArr.push(awardText);
            this.addChild(awardText);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x999999;
            awardText.size = 35;
            awardText.height=50;
            awardText.textHeight = 50;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth-110;
            awardText.x = 58;
            awardText.y = 615;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.type = egret.TextFieldType.INPUT;
            awardText.text = "输入手机号";
            awardText.bold = true;
            awardText.maxChars = 13;
            this.awardArr.push(awardText);
            this.addChild(awardText);
            awardText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
                if(this.text=="输入手机号"){
                    this.text = "";
                }
                this.textColor = 0x404040;
            },awardText);

            var awardText = new egret.TextField();
            awardText.fontFamily = "Microsoft YaHei"
            awardText.textColor = 0x404040;
            awardText.size = 35;
            awardText.height = 80;
            awardText.bold = true;
            awardText.width = com.model.DataCenter.instance.configVO.appWidth;
            awardText.y = 725;
            awardText.textAlign = egret.HorizontalAlign.CENTER;
            awardText.text = "提交并领取";
            awardText.touchEnabled = true;
            this.awardArr.push(awardText);
            this.addChild(awardText);
            awardText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
                this.gameEnding1(1);
                console.log(this.awardArr[2].text);
            },this);

            this.removeChild(this.againBtnText);
            this.removeChild(this.shareBtnText);
            this.removeChild(this.againBtn);
            this.removeChild(this.shareBtn);

            this.addChild(this.againBtn);
            this.addChild(this.shareBtn);
            this.addChild(this.againBtnText);
            this.addChild(this.shareBtnText);


        }

        private onClose(e?: egret.TouchEvent): void {//关闭
            this.parent.removeChild(this);

        }

        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
            com.views.windows.gameOverWin.GameOverWin._instance = null
        }

        /**
         * 显示
         * @p 父容器
         */
        static show(p: com.views.ui.BasicView,score:number,highscore:string): void {//显示
            //var rate = Math.min(com.model.DataCenter.instance.configVO.appWidth * 0.53 / 340, com.model.DataCenter.instance.configVO.appHeight * 0.53 / 370);

            if (this._instance == null) {
                this._instance = new GameOverWin();
                //this._instance.setScale(rate);
                //this._instance.containerSprite.x = (com.model.DataCenter.instance.configVO.appWidth - 340 * rate) / 2;;
                //this._instance.containerSprite.y = (com.model.DataCenter.instance.configVO.appHeight - 370 * rate) / 2;
                p.addChild(this._instance);
                this._instance.setGameOverMsg(score,highscore);
            }
        }
    }
}