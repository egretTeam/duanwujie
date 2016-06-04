var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var UserVO = (function () {
                function UserVO() {
                    /**
                    * cookie
                    */
                    this.cookie = ""; //cookie
                    /**
                    * 分数
                    */
                    this.score = 0; //分数
                    /**
                    * 最高分数
                    */
                    this.topScore = 0; //最高分数
                    /**
                    * 是否第一次
                    */
                    this.isFirst = true; //是否第一次
                    /**
                    * 冲刺等级
                    */
                    this.rushLevel = 0; //冲刺等级
                    /**
                    * 冲刺数
                    */
                    this.rushCount = 0; //冲刺数
                    /**
                    * 冲刺总数
                    */
                    this.rushTotal = 4; //冲刺总数
                    /**
                    * 当前时间
                    */
                    this.currentTime = 0; //当前时间
                    /**
                    * 总时间
                    */
                    this.totalTime = 60; //总时间
                    /**
                    * combo数
                    */
                    this.comboCount = 0; //combo数
                    /**
                    * 操作combo数
                    */
                    this.combo = 0; //操作combo数
                    /**
                    * 分数配置
                    */
                    this.scoreArr = new Array(); //分数配置
                    var score;
                    var i = 0;
                    for (i = 0; i < 11; i++) {
                        score = new localData.ScoreVO();
                        switch (i) {
                            case 0:
                                score.score = 100;
                                score.color = 0;
                                score.baseScore = 100;
                                score.mutiply = 1;
                                break;
                            case 1:
                                score.score = 400;
                                score.color = 0;
                                score.baseScore = 400;
                                score.mutiply = 1;
                                break;
                            case 2:
                                score.score = 700;
                                score.color = 0;
                                score.baseScore = 700;
                                score.mutiply = 1;
                                break;
                            case 3:
                                score.score = 4000;
                                score.color = 1;
                                score.baseScore = 1000;
                                score.mutiply = 4;
                                break;
                            case 4:
                                score.score = 4200;
                                score.color = 1;
                                score.baseScore = 1300;
                                score.mutiply = 4;
                                break;
                            case 5:
                                score.score = 6400;
                                score.color = 1;
                                score.baseScore = 1600;
                                score.mutiply = 4;
                                break;
                            case 6:
                                score.score = 7600;
                                score.color = 1;
                                score.baseScore = 1900;
                                score.mutiply = 4;
                                break;
                            case 7:
                                score.score = 13200;
                                score.color = 2;
                                score.baseScore = 2200;
                                score.mutiply = 6;
                                break;
                            case 8:
                                score.score = 15000;
                                score.color = 2;
                                score.baseScore = 2500;
                                score.mutiply = 6;
                                break;
                            case 9:
                                score.score = 16800;
                                score.color = 2;
                                score.baseScore = 2800;
                                score.mutiply = 6;
                                break;
                            case 10:
                                score.score = 18000;
                                score.color = 2;
                                score.baseScore = 3000;
                                score.mutiply = 6;
                                break;
                            default:
                                break;
                        }
                        this.scoreArr.push(score);
                    }
                }
                var d = __define,c=UserVO,p=c.prototype;
                return UserVO;
            }());
            localData.UserVO = UserVO;
            egret.registerClass(UserVO,'com.model.localData.UserVO');
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
