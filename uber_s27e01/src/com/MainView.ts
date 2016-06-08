module com {
    export class MainView extends com.views.ui.BasicView{
        scene: com.views.ui.BasicView;//场景
        loading:com.views.ui.loading.LoaderLoading;
        static instance: MainView;//单例

        private shareLoader: egret.HttpRequest;

        constructor() {
            super();

            MainView.instance = this;
            this.init();

        }

        /**
         * 更换场景
         * @index 场景索引 0-初始场景 1-游戏场景
         */
        changeScene(index: number) {
            if (this.scene != null)
                this.removeChild(this.scene);
            if(this.contains(this.loading))
                this.removeChild(this.loading);
            switch (index) {
                case com.constants.SceneConstants.INIT://初始场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.InitScene());
                    break;
                case com.constants.SceneConstants.GAME://游戏场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.GameScene());
                    break;
                case com.constants.SceneConstants.TEACH://教学场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.TeachScene());
                    break;
                case com.constants.SceneConstants.LUCK://教学场景
                    this.scene = <com.views.ui.BasicView>com.views.scene.luckScene.getInstance();
                    break;
                default:
                    break;
            }
            this.addChild(this.scene);
        }
        public mz_jwt: string = '';
        private init(): void {
            var request = new egret.HttpRequest(),
                self = this,
                url: string = '/auth/wechat/login?t=' + new Date().getTime() + '&gamesRedirectUri=' + encodeURIComponent(location.href.split('#')[0]);
            function done(event: egret.Event) {
                var request = <egret.HttpRequest>event.currentTarget,
                    data: any = JSON.parse(request.response);
                if(data.result === 'success') {
                    self.mz_jwt = data['mz_jwt'];
                    com.utils.NetworkUtil.mz_jwt = data['mz_jwt'];
                    self.getJSSDK();
                } else {
                    window.location.href = data.url;
                }
            }
            function error() {
                console.log('网络异常，请稍后再试');
            }
            function removeEvent() {
                request.removeEventListener(egret.Event.COMPLETE,done,self);
                request.removeEventListener(egret.IOErrorEvent.IO_ERROR,error,self);
            }
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(url,egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE,done,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,error,this);
        }
        music:egret.Sound;
        channel:egret.SoundChannel

        public playBackgroundMusic(): void {
            //鼓点音乐
            if(this.music ==null)
                this.music = RES.getRes("bgm_mp3");
            this.channel = this.music.play(0);
        } 
        
        public stopBackgroundMusic(): void {
            if(this.channel!=null){
                this.channel.stop();
            }
        }
        
        private getJSSDK() {
            var url: string = '/auth/wechat/jssdk?t=' + new Date().getTime() + '&originalUrl=' + encodeURIComponent(location.href.split('#')[0]),
                request = new egret.HttpRequest(),
                self = this;

            function done(event: egret.Event) {
                var request = <egret.HttpRequest>event.currentTarget,
                    data: any = JSON.parse(request.response),
                    jssdk = data.jssdk,
                    domain = document.domain;

                window['wx'].config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: jssdk.appId, // 必填，公众号的唯一标识
                    timestamp: jssdk.timestamp, // 必填，生成签名的时间戳
                    nonceStr: jssdk.nonceStr,   // 必填，生成签名的随机串
                    signature: jssdk.signature, // 必填，签名，见附录1
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });

                window['wx'].ready(function() {
                    //com.views.scene.InitScene.playBackgroundMusic();
                    //分享给朋友
                    window['wx'].onMenuShareAppMessage({
                        title:'史上最难龙舟，我排名前100，你敢挑战我吗？',
                        desc: '描述',
                        link: window.location.href,
                        imgUrl: 'http://' + domain + '/2016/biz/imusic_s12e01/resource/assets/share_icon.jpg',
                        trigger: function(res) {
                            window['_czc'].push(["_trackEvent","点击弹出分享给朋友","click",'startup',1]);
                        },
                        success: function(res) {
                            window['_czc'].push(["_trackEvent","分享给朋友","click",'startup',1]);
                        },
                        cancel: function(res) {
                            window['_czc'].push(["_trackEvent","取消分享给朋友","click",'startup',1]);
                        },
                        fail: function(res) {
                            window['_czc'].push(["_trackEvent","分享到朋友失败","click",'startup',1]);
                        }
                    });
                    //分享到朋友圈
                    window['wx'].onMenuShareTimeline({
                        title: '史上最难龙舟，我排名前100，你敢挑战我吗？',
                        desc: '描述',
                        link: window.location.href,
                        imgUrl: 'http://' + domain + '/2016/biz/imusic_s12e01/resource/assets/share_icon.jpg',
                        trigger: function(res) {
                            window['_czc'].push(["_trackEvent","点击弹出分享到朋友圈","click",'startup',1]);
                        },
                        success: function(res) {
                            window['_czc'].push(["_trackEvent","分享给朋友","click",'startup',1]);
                        },
                        cancel: function(res) {
                            window['_czc'].push(["_trackEvent","取消分享到朋友圈","click",'startup',1]);
                        },
                        fail: function(res) {
                            window['_czc'].push(["_trackEvent","分享到朋友圈失败","click",'startup',1]);
                        }
                    });
                });
            }
            function error() {
                console.log('网络异常，请稍后再试');
            }
            function removeEvent() {
                request.removeEventListener(egret.Event.COMPLETE,done,self);
                request.removeEventListener(egret.IOErrorEvent.IO_ERROR,error,self);
            }
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(url,egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE,done,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,error,this);
        }

        protected onAddStage(e: egret.Event) {//添加到场景
            com.model.DataCenter.instance.configVO.appWidth = this.stage.stageWidth;
            com.model.DataCenter.instance.configVO.appHeight = this.stage.stageHeight;

            com.controller.ResManager.instance.init();
            com.controller.TimerManager.instance.init();

            this.loading = new com.views.ui.loading.LoaderLoading("resource/resource.json?v=0","preload",this.onConfigComplete.bind(this));

            this.shareLoader = new egret.HttpRequest();
            this.shareLoader.responseType = egret.HttpResponseType.TEXT;
            this.shareLoader.open('/auth/wechat/jssdk?t='+new Date().getTime()+'&originalUrl='+encodeURIComponent(location.href.split('#')[0]),egret.HttpMethod.GET);
            this.shareLoader.send();
            this.shareLoader.addEventListener(egret.Event.COMPLETE,this.onGetShareComplete,this);
            console.log(this.shareLoader);

        }

        private onGetShareComplete(event: egret.Event): void {

            var request = <egret.HttpRequest>event.currentTarget;
            console.log("get data : ",request.response);

            var data = JSON.parse(request.response);

            console.log(data.result,data.jssdk);

            if(data["result"] && data["jssdk"]) {
                if(data["jssdk"]!= null) {
                    var bodyConfig: BodyConfig = new BodyConfig();
                    bodyConfig.appId = data["jssdk"]["appId"];
                    bodyConfig.timestamp = data["jssdk"]["timestamp"];
                    bodyConfig.nonceStr = data["jssdk"]["nonceStr"];
                    bodyConfig.signature = data["jssdk"]["signature"];
                    bodyConfig.jsApiList = ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"];
                    bodyConfig.debug = false;
                    console.log(window.location.hostname);
                    if(wx) {
                        wx.config(bodyConfig);
                        wx.ready(function() {
                            var shareObj = {
                                title: '玩极速优步，瓜分千万乘车券', // 分享标题
                                desc: '极速优步，看看你的优步能跑多远！', // 分享描述
                                link: window.location.href, // 分享链接
                                imgUrl: "http://" + window.location.hostname + "/2016/q1/biz/uber_s27e01/resource/assets/icon.jpg", // 分享图标
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
                            //自动播放
                            MainView.instance.playBackgroundMusic();
                        });
                    }
                } else {
                    alert("网络错误: getWechatSign");
                }
            }
        }

        onConfigComplete(e: com.model.localData.event.LoaderEvent) {//配置加载完成
            this.changeScene(0);
        }
    }
} 