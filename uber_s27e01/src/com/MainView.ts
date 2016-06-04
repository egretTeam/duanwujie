module com {
    export class MainView extends com.views.ui.BasicView{
        scene: com.views.ui.BasicView;//场景
        loading:com.views.ui.loading.LoaderLoading;
        static instance: MainView;//单例

        private shareLoader: egret.HttpRequest;

        constructor() {
            super();

            MainView.instance = this;

        }

        /**
         * 更换场景
         * @index 场景索引 0-初始场景 1-游戏场景
         */
        changeScene(index: number) {
            if (this.scene != null)
                this.removeChild(this.scene);
            switch (index) {
                case 0://初始场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.InitScene());
                    break;
                case 1://初始场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.GameScene());
                    break;

                case 2://初始场景
                    this.scene = <com.views.ui.BasicView>(new com.views.scene.TeachScene());
                    break;
                default:
                    break;
            }
            this.addChild(this.scene);
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