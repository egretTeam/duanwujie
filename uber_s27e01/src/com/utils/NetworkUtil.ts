module com.utils {
	/**
	 *
	 * @author 
	 *
	 */
    export class NetworkUtil {
        static HOSTNAME = document.domain;
        static apiHost = (NetworkUtil.HOSTNAME == 'm.muzhibuluo.com') ? 'http://api.m.muzhi.us' : 'http://test.api.m.muzhi.us';
        static apiPrefix = NetworkUtil.apiHost + '/api/imusic_s12e01';
        static mz_jwt;
        static jssdk;

        
                
        /**
         * 请求用户信息，并把用户信息存入一个全局可用位置
         * 该函数由initScene#constructor调用。
         */
        static requestUser(): void {
            var request: egret.HttpRequest = UrlTool.post('/auth/anonymous/login?t=' + new Date().getTime() + '&gamesRedirectUri=' + encodeURIComponent(location.href.split('#')[0]),function(event:egret.Event) {
                console.log('location.href',location.href);
                var res=JSON.parse(event.currentTarget.response);
                console.log(event)
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
                    NetworkUtil.mz_jwt = res.mz_jwt;
//                    NetworkUtil.getJSSDK();
                }
            },function(event:egret.Event){
                var res = JSON.parse(event.currentTarget.response);
                console.log("error: ");
                console.log(res);
            });
            request.send();
        }
        
        
//        private static getJSSDK():void {
//            var request: egret.HttpRequest = UrlTool.post('/auth/wechat/jssdk?t=' + new Date().getTime() + '&originalUrl=' + encodeURIComponent(location.href.split('#')[0]),function(event:egret.Event) {
//                var res = JSON.parse(event.currentTarget.response);
//                var jssdk = res.jssdk;
//                console.log("获取jssdk： ",res);
//                   if(jssdk==null){
//                        AppUtils.alert(null,"请使用微信客户端打开本应用")
//                        return;
//                   }
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
//                    NetworkUtil.jssdk=jssdk;
//                    console.log("请求JSSDK成功： "+jssdk);
//                },function(event:egret.Event){
//                    var res = JSON.parse(event.currentTarget.response);
//                    console.log("通讯失败： ");
//                    console.log(res);
//                });
//           request.send();       
//        }
        
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
            
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getRankList',function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("请求排名榜成功： ")
                var collection = new eui.ArrayCollection();
                var r=res.rankInfos;
                if(r != null) {
                    for(var i=0,len=r.length-1;i<len;i++){
                        var name = r[i].name;
                        if(name.length>10)
                            name=name.substring(0,6)+'...';
                        collection.addItem({ "ranking": i+1,"name": name,"score": r[i].score });
                    };
                }
                returnRankingList(collection);
            },function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("请求排名失败: ");
                console.log(res);
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
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/submitScore',function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("提交分数成功: ");
                console.log(res);
                returnRanking(res);
            },function(event:egret.Event){
                var res = JSON.parse(event.currentTarget.response);
                console.log("提交分数失败: ");
                console.log(res);
            });
//            var data = new FormData();
//            data.append( "score",score );
            request.send("score="+score);
            console.log("提交分数: " + score);
        }
        
        /**
         * 获取抽奖结果
         * 该函数由luckScene#init调用
         */ 
        static luckDraw(result:Function):void{
            //TODO 请求抽奖结果，并且在回调函数中获取跳转页面，页面ID定义在com.constants.DialogConstant常量类中，交给回调result
//            var r = com.constants.DialogConstant.JD;
//            result(r);
            
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/lottery',function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("获取抽奖结果成功: " );
                console.log(res);
                //避免结果可能不是boolean异常所以使用==false
                result(res);
                
            },function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("获取抽奖结果失败: ");
                console.log(res);
                });
            request.send();
        }
        /**
         * 领取话费和流量
         */ 
        static getPrice(score:string,pn:number,callback:Function):void{
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getPrize',function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取话费和流量成功: ");
                console.log(res);
                if(!res.sucess)
                    callback(res.msg);

            },function(event:egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取话费和流量失败: " );
                console.log(res);
                });
            

//            var data = new FormData();
//            data.append("prizeLevel",score);
//            data.append("phone",pn);
//            data.append("fromWechat",true);
            request.send("prizeLevel=" + score + "&phone=" + pn + "&fromWechat=" + true);
        }
        
        /**
         * 领取钻石会员
         */
        static getMember(code: string,pn: number,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getMember',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取钻石会员成功: ");
                console.log(res);
                if(!res.sucess)
                    callback(res.msg);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取钻石会员失败: ");
                console.log(res);
                });

//            var data = new FormData();
//            data.append("code",code);
//            data.append("phone",pn);
//            data.append("fromWechat",true);
//            request.send(data);
                
            request.send("code="+code+"&phone="+pn+"&fromWechat="+true);
        }
        
        /**
         * 发送钻石会员验证码
         */
        static memberRandomCode(pn: number,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/memberRandomCode',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("发送钻石会员验证码成功: ");
                console.log(res);
                if(!res.sucess)
                    callback(res.msg);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("发送钻石会员验证码失败: ");
                console.log(res);
                });

//            var data = new FormData()
//            data.append("phone",pn);
//            data.append("fromWechat",true);
//            request.send(data);
                
            request.send("phone=" + pn + "&fromWechat="+true);
        }
        
        /**
         * 发送音乐盒验证码
         */
        static musicRandomCode(pn: number,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/musicRandomCode',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("发送音乐盒验证码成功: ");
                console.log(res);
                callback(res);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("发送音乐盒验证码失败: ");
                console.log(res);
                });

//            var data = new FormData();
//            data.append("phone",pn);
//            data.append("fromWechat",true);
//            request.send(data);
            

            var data = new FormData();
            request.send("phone="+pn+"&fromWechat="+true);
        }
        
        
        /**
         * 查询是否彩铃用户
         */
        static iscrbtuser(pn: number,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/iscrbtuser',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("查询是否彩铃用户成功: ");
                console.log(res);
                callback(res);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("查询是否彩铃用户失败: ");
                console.log(res);
                });

//            var data = new FormData();
//            data.append("phone",pn);
            request.send("phone="+pn);
        }
        
        /**
         * 开通彩铃
         */
        static openCrbt(pn: number,code:number,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/openCrbt',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("开通彩铃成功: ");
                console.log(res);
                callback(res);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("开通彩铃失败: ");
                console.log(res);
                });

            request.send("phone="+pn+"&fromWechat="+true+"&code="+code);
        }
        

        /**
         * 领取彩铃
         */
        static getRingtone(pn: number,crbtId: string,callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/getRingtone',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取彩铃成功: ");
                console.log(res);
                callback(res);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("领取彩铃失败: ");
                console.log(res);
                });

//            var data = new FormData();
//            data.append("phone",pn);
//            data.append("fromWechat",true);
//            data.append("crbtId",crbtId);
//            request.send(data);
            
            request.send("phone="+pn+"&fromWechat="+true+"&crbtId="+crbtId);
        }
        
        /**
          * 查询音乐盒
          */
        static songs(callback: Function): void {
            var request: egret.HttpRequest = UrlTool.post(NetworkUtil.apiPrefix + '/songs',function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("查询音乐盒成功: ");
                console.log(res);
                callback(res.data);
            },function(event: egret.Event) {
                var res = JSON.parse(event.currentTarget.response);
                console.log("查询音乐盒失败: ");
                console.log(res);
                });
            request.send("fromWechat="+true);
        }

	}
}
