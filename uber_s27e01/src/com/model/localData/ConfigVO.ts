module com.model.localData {
    export class ConfigVO {
        /**
        * 宽
        */
        appWidth: number = 0;//宽
        /**
        * 高
        */
        appHeight: number = 0;//高
        /**
        * 帧频
        */
        frameRate: number = 30;//帧频
        /**
        * 宽高调整比率
        */
        whRate: number = 1;//宽高调整比率
        /**
        * 充撑宽高调整比率
        */
        allWHRate: number = 1;//充撑宽高调整比率
        /**
        * dpi比率
        */
        dpiRate: number = 1;//dpi比率
        /**
        * 是否pc
        */
        isPC: boolean = false;//是否pc
        /**
        * 是否支持touch事件
        */
        canTouch: boolean = false;//是否支持touch事件
        /**
        * 是否支持分享
        */
        canShare: boolean = false;//是否支持分享
        /**
        * 是否android声音
        */
        isAndroidSound: boolean = false;//是否android声音
        /**
         * 资源路径
         */
        resURL:string = "";//资源路径
        constructor() {
        }
    }
} 