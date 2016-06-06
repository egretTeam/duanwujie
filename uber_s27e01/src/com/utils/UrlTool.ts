module com.utils {
	/**
	 *
	 * @author 
	 *
	 */
	export class UrlTool {
        
		
        static post(url: string,onLoadComplete: Function,onLoadError: Function) {
            console.log("POST: "+url); 
            var request: egret.HttpRequest = new egret.HttpRequest;
            request.open(url,egret.HttpMethod.POST);
            if(NetworkUtil.mz_jwt!=null)
                request.setRequestHeader("Authorization","Bearer " + NetworkUtil.mz_jwt);
            else
                console.log("mz_jwt is null")
            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            request.addEventListener(egret.Event.COMPLETE,onLoadComplete,this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,onLoadError,this);
            return request;
//            loader.addEventListener(egret.Event.COMPLETE,onLoadComplete,this);
//            loader.addEventListener(egret.IOErrorEvent.IO_ERROR,onLoadError,this);
    	}
    	
//        static get(url: string,onLoadComplete: Function,onLoadError: Function) {
//            console.log("GET: " + url);
//
//            var request: egret.HttpRequest = new egret.HttpRequest;
//            request.open(url,egret.HttpMethod.GET);
//            if(NetworkUtil.mz_jwt != null)
//                request.setRequestHeader("Authorization","Bearer " + NetworkUtil.mz_jwt);
//            else
//                console.log("mz_jwt is null")
//            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded1");
//            request.addEventListener(egret.Event.COMPLETE,onLoadComplete,this);
//            request.addEventListener(egret.IOErrorEvent.IO_ERROR,onLoadError,this);
//            
//            var xmlhttp = new XMLHttpRequest();
//            
//            return request;
//        }
    	
    	private init():void{

//            var HOSTNAME = document.domain;
//            var ICONSTR,LINKSTR,DESCSTR,TITLE;
//            var apiHost;
//            if(HOSTNAME == 'm.muzhibuluo.com') {
//                apiHost = 'http://api.m.muzhi.us';
//            } else {
//                apiHost = 'http://test.api.muzhibuluo.com';
//            }
//            var apiPrefix = apiHost + '/api/imusic_s12e01/';
//
//            Zepto.post('/auth/anonymous/login?t=' + new Date().getTime() + '&gamesRedirectUri=' + encodeURIComponent(location.href.split('#')[0]),function(res) {
//                console.log('location.href',location.href);
//                if(res.result === 'error') {
//                    console.log('login error',res.errmsg);
//                    location.href = res.url;
//                } else if(res.result === 'unauth') {
//                    console.log('login unauth',res.url);
//                    location.href = res.url;
//                } else {
//                    console.log('logined',res);
//                    console.log('current wechat user',res.user);
//                    $(document).on('ajaxBeforeSend',function(e,xhr,options) {
//                        xhr.setRequestHeader("Authorization","Bearer " + res.mz_jwt);
//                    })
//                    getJSSDK();
//                }
//            })
//            function getJSSDK() {
//                Zepto.get('/auth/wechat/jssdk?t=' + new Date().getTime() + '&originalUrl=' + encodeURIComponent(location.href.split('#')[0]),function(res) {
//                    var jssdk = res.jssdk;
//                    wx.config({
//                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//                        appId: jssdk.appId, // 必填，公众号的唯一标识
//                        timestamp: jssdk.timestamp, // 必填，生成签名的时间戳
//                        nonceStr: jssdk.nonceStr,   // 必填，生成签名的随机串
//                        signature: jssdk.signature, // 必填，签名，见附录1
//                        jsApiList: [
//                            'onMenuShareTimeline',
//                            'onMenuShareAppMessage',
//                            'onMenuShareQQ',
//                            'onMenuShareWeibo'
//                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//                    });
//                    ICONSTR = 'http://' + HOSTNAME + '/2016/q1/biz/imusic_s12e01/images双击查看原图pic.jpg';
//                    LINKSTR = HOSTNAME + '/2016/q1/biz/imusic_s12e01/startup.html';
//                    DESCSTR = '套路知多少，你来考一考！识破套路，赢取kindel、话费以及租房礼包大奖哦~';
//                    TITLE = "城里套路深 我要回农村……";
//                    MZ.wechat.init({
//                        title: TITLE,
//                        desc: DESCSTR,
//                        link: LINKSTR,
//                        imgUrl: ICONSTR
//                    })
//                })
    	}
	}
}
