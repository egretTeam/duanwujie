module com.utils {
	/**
	 *
	 * @author 
	 *
	 */
    export class NetworkUtil {
        static HOSTNAME = document.domain;
        static apiHost = NetworkUtil.HOSTNAME == 'm.muzhibuluo.com' ? 'http://api.m.muzhi.us' : 'http://test.api.muzhibuluo.com';
        static apiPrefix = NetworkUtil.apiHost + '/api/imusic_s12e01';
        static mz_jwt;
        static jssdk;

        
                
        /**
         * 请求用户信息，并把用户信息存入一个全局可用位置
         * 该函数由initScene#constructor调用。
         */
        static requestUser(): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix+'/auth/anonymous/login?t=' + new Date().getTime() + '&gamesRedirectUri=' + encodeURIComponent(location.href.split('#')[0]),function(res) {
                console.log('location.href',location.href);
                if(res.result === 'error') {
                    console.log('login error',res.errmsg);
                    location.href = res.url;
                } else if(res.result === 'unauth') {
                    console.log('login unauth',res.url);
                    location.href = res.url;
                } else {
                    console.log('logined',res);
                    console.log('current wechat user',res.user);
                    console.log('current wechat mz',res.mz_jwt);
                    console.log('current wechat result',res.result);
                    request.setRequestHeader("Authorization","Bearer " + res.mz_jwt);
                    NetworkUtil.mz_jwt=res.mz_jwt;
                    NetworkUtil.getJSSDK();
                }
            },function(res){
                console.log("error: "+res);
            });
            request.send();
        }
        
        
        private static getJSSDK():void {
           var request:egret.HttpRequest= UrlTool.get(NetworkUtil.apiPrefix +'/auth/wechat/jssdk?t=' + new Date().getTime() + '&originalUrl=' + encodeURIComponent(location.href.split('#')[0]),function(res) {
                    var jssdk = res.jssdk;
                    wx.config({
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
                    NetworkUtil.jssdk=jssdk;
                    console.log("请求JSSDK成功： "+jssdk);
                },function(res){
                    console.log("通讯失败： "+res);
                });
           request.setRequestHeader("Authorization","Bearer " + NetworkUtil.mz_jwt);
           request.send();       
        }
        
        /**
         * 从全局位置获取用户信息，并查询。
         * 该函数由initScene#showRankingList调用
         */ 
        static requestRankingList(returnRankingList: Function): void{
//            var collection = new eui.ArrayCollection();
            //TODO 请求排名榜数据，并且在回调函数中拼装结果集，结果集例子如下所示，ranking-排名，name-用户名，score-分数。拼装的结果集，交给本函数的回调returnRankingList。
//              for(var i = 0;i < 20;i++) {
//                collection.addItem({ "ranking": i,"name": "name" + i,"score": i * 100 });
//              }
//            returnRankingList(collection);
            
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getRankList',function(res) {
                console.log("请求排名榜成功： "+res)
                var collection = new eui.ArrayCollection();
                var r=res.rankInfos;
                if(r != null) {
                    for(var i=r.length-1;i>=0;i--){
                        collection.addItem({ "ranking": r.length-i,"name": r[i].name,"score": r[i].score });
                    };
                }
                returnRankingList(collection);
            },function(res) {
                console.log("请求排名失败: " + res);
            });
            request.send();
        }
        
        /**
         * 发送用户得分信息，并且查询排名
         * 该函数由GameScene#showGameOverPanel调用
         */
        static sendScoreNGetRanking(returnRanking:Function,score:number):void{
            //TODO 请求排名数据，并且在回调函数中获取ranking值，交给回调returnRanking
//            var ranking:string="1";
//            returnRanking(ranking);
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/submitScore',function(res) {
                console.log("提及分数成功: "+res);
                var ranking=res.rankInfo.rank;
                returnRanking(ranking);
            },function(res){
                console.log("提及分数失败: " + res);
            });
            var data = { "score": score };
            request.send(data);
            console.log("提及分数: " + data);
        }
        
        /**
         * 获取抽奖结果
         * 该函数由luckScene#init调用
         */ 
        static luckDraw(result:Function):void{
            //TODO 请求抽奖结果，并且在回调函数中获取跳转页面，页面ID定义在com.constants.DialogConstant常量类中，交给回调result
//            var r = com.constants.DialogConstant.JD;
//            result(r);
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/lottery',function(res) {
                console.log("获取抽奖结果成功: " + res);
                //避免结果可能不是boolean异常所以使用==false
                if(res.result == false) {
                    AppUtils.alert(null,res.msg);
                } else {
                    result(res.lottyNum,res.lotteryFlag,res.record);
                } 
                
            },function(res) {
                console.log("获取抽奖结果失败: " + res);
            });
            request.send();
        }
        /**
         * 领取话费和流量
         */ 
        static getPrice(score:number,pn:string,callback:Function):void{
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getPrize',function(res) {
                console.log("领取话费和流量成功: " + res);
                callback(res.msg);

            },function(res) {
                console.log("领取话费和流量失败: " + res);
            });
            request.send({
                "prizeLevel": score,
                "phone": pn,
	            "fromWechat":true});
        }
	}
}
