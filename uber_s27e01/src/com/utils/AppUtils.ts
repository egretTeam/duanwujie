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
        
        static loadArmature(json:string,texture:string,png:string,armatureName:string):dragonBones.Armature{
            var dragonbonesData = RES.getRes(json);
            var textureData = RES.getRes(texture);
            var t = RES.getRes(png);
            var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(t,textureData));
            
            return dragonbonesFactory.buildArmature(armatureName);
        }

        static checkPhoneNo(n:any): boolean {
            var pn=n+'';
            if(pn.length != 11) {
                AppUtils.alert(null,"手机号码长度必须为11位");
                return false;
            }
            
            switch(pn.substring(0,3)) {
                case "133":
                case "153":
                case "180":
                case "189":
                case "181":
                case "170":
                case "171":
                case "173":
                case "177":
                case "149":
                    break;
                default:
                    AppUtils.alert(null,"必须为电信用户");
                return false;
            }

            
            return true;
        }
        static alert(stage: egret.Stage,msg:string):void{
            if(stage==null) {
                stage = MainView.instance.stage;
            }
               
           var t:egret.TextField=new egret.TextField();
           t.y = com.model.DataCenter.instance.configVO.appHeight / 3;
           t.width = com.model.DataCenter.instance.configVO.appWidth;
           t.height=60;
           console.log(stage.width,egret.HorizontalAlign.CENTER)
           t.verticalAlign=egret.VerticalAlign.MIDDLE;
           t.textAlign=egret.HorizontalAlign.CENTER;
           
           t.text=msg;
           t.textColor=0xFFFFFF;
           t.size=30;
           t.background=true;
           t.backgroundColor=0x000000;
           stage.addChild(t);
           
           var timer:egret.Timer=new egret.Timer(1500,1);
           timer.addEventListener(egret.TimerEvent.TIMER,function(){
                stage.removeChild(t);
            },this);
           timer.start();
           
        }
        
        static playSound(url:string,callback:Function): void {
            //创建 URLLoader 对象
            var loader: egret.URLLoader = new egret.URLLoader();
            //设置加载方式为声音
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE,callback,this);
            var request: egret.URLRequest = new egret.URLRequest(url);
            //开始加载
            loader.load(request);
        }

    }
} 