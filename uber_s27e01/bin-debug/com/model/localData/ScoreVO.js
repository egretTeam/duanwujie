var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var ScoreVO = (function () {
                function ScoreVO() {
                    /**
                    * 分数
                    */
                    this.score = 0; //分数
                    /**
                    * 颜色
                    */
                    this.color = 0; //颜色
                    /**
                    * 基础分
                    */
                    this.baseScore = 0; //基础分
                    /**
                    * 乘数
                    */
                    this.mutiply = 0; //乘数
                }
                var d = __define,c=ScoreVO,p=c.prototype;
                return ScoreVO;
            }());
            localData.ScoreVO = ScoreVO;
            egret.registerClass(ScoreVO,'com.model.localData.ScoreVO');
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
