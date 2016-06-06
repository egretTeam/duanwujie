module com.utils {
	/**
	 *
	 * @author 
	 *
	 */
    export class NetworkUtil {

        /**
         * 请求用户信息，并把用户信息存入一个全局可用位置
         * 该函数由initScene#constructor调用。
         */
        static requestUser(): void {
            
            
        }
        
        /**
         * 从全局位置获取用户信息，并查询。
         * 该函数由initScene#showRankingList调用
         */ 
        static requestRankingList(returnRankingList: Function): void{
            var collection = new eui.ArrayCollection();
            //TODO 请求排名榜数据，并且在回调函数中拼装结果集，结果集例子如下所示，ranking-排名，name-用户名，score-分数。拼装的结果集，交给本函数的回调returnRankingList。
              for(var i = 0;i < 20;i++) {
                collection.addItem({ "ranking": i,"name": "name" + i,"score": i * 100 });
              }
            returnRankingList(collection);
        }
        
        /**
         * 发送用户得分信息，并且查询排名
         * 该函数由GameScene#showGameOverPanel调用
         */
        static sendScoreNGetRanking(returnRanking:Function,score:number):void{
            //TODO 请求排名数据，并且在回调函数中获取ranking值，交给回调returnRanking
            var ranking:string="1";
            returnRanking(ranking);
        }
        
        /**
         * 获取抽奖结果
         * 该函数由luckScene#init调用
         */ 
        static luckDraw(result:Function):void{
            //TODO 请求抽奖结果，并且在回调函数中获取跳转页面，页面ID定义在com.constants.DialogConstant常量类中，交给回调result
            var r = com.constants.DialogConstant.JD;
            result(r);
        }
        
        
	}
}
