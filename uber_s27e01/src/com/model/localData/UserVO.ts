module com.model.localData {
    export class UserVO {
        /**
        * cookie
        */
        cookie: string = "";//cookie
        /**
        * 分数
        */
        score: number = 0;//分数
        /**
        * 最高分数
        */
        topScore: number = 0;//最高分数
        /**
        * 是否第一次
        */
        isFirst: boolean = true;//是否第一次
        /**
        * 冲刺等级
        */
        rushLevel: number = 0;//冲刺等级
        /**
        * 冲刺数
        */
        rushCount: number = 0;//冲刺数
        /**
        * 冲刺总数
        */
        rushTotal: number = 4;//冲刺总数
        /**
        * 当前时间
        */
        currentTime: number = 0;//当前时间
        /**
        * 总时间
        */
        totalTime: number = 60;//总时间
        /**
        * combo数
        */
        comboCount: number = 0;//combo数
        /**
        * 操作combo数
        */
        combo: number = 0;//操作combo数
        /**
        * 分数配置
        */
        scoreArr: Array<ScoreVO> = new Array();//分数配置
        constructor() {
            var score: ScoreVO;
            var i: number = 0;

            for (i = 0; i < 11; i++) {
                score = new ScoreVO();
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
    }
} 