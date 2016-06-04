module com.utils {
    export class AppUtils {
        static getFontSize(size:number, rate?:number):number {//获取字体大小
            var result = 0;

            if (typeof (rate) == "undefined")
                result = Math.floor(size * com.model.DataCenter.instance.configVO.whRate);
            else 
                result = Math.floor(size * rate);

            return result;
        }
        static trace(str:string) {//输出
            console.log(""+str);
        }

        //是否存在指定函数 
        static isExitsFunction(funcName) {
            try {
                if (typeof (eval(funcName)) == "function") {
                    return true;
                }
            } catch (e) { }
            return false;
        }
        //是否存在指定变量 
        static isExitsVariable(variableName) {
            try {
                if (typeof (variableName) == "undefined") {
                    //alert("value is undefined"); 
                    return false;
                } else {
                    //alert("value is true"); 
                    return true;
                }
            } catch (e) { }
            return false;
        }

        static GetRandomNum(Min,Max):number
        {
            var Range = Max - Min;
            var Rand = Math.random();
            return(Min + Math.round(Rand * Range));
        }
        static posDistance(p1,p2):number{
            return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));
        }
    }
} 