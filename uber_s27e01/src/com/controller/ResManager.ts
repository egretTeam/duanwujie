module com.controller {
    export class ResManager {
        private jsonArr: Array<string> = new Array();//json数组
        private static _instance: ResManager;//单例
        constructor() {
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }

        /**
         * 初始化
         */
        init() {//初始化
            var url: string = "resource/resource.json?v=0";

            this.loadJSON(url);
        }

        /**
         * 加载组
         * @group 组名称
         */
        loadGroup(group:string) {//加载组
            RES.loadGroup(group);
        }

        /**
         * 加载json
         * @url url
         */
        loadJSON(url: string): void {//加载json
            var i = 0;
            for (i = 0; i < this.jsonArr.length; i++) {
                if (this.jsonArr[i] == url) {
                    EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, url));
                    return;
                }
            }
            console.log("success");
            this.jsonArr.push(url);
            RES.loadConfig(url, "resource/");
        }

        /**
         * 加载单个资源
         * @url url
         */
        loadRes(url: string, func:Function, parent:any) {//加载单个资源
            RES.getResByUrl("" + com.model.DataCenter.instance.configVO.resURL + "" + url, function (_data, _url) {
                func(_data, url);
            }, parent);
        }

        private onConfigComplete(event: RES.ResourceEvent): void {//配置文件加载完成
            EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, event.currentTarget));
        }

        private onResourceLoadComplete(event: RES.ResourceEvent): void {//组资源加载完成
            EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.COMPLETE, "" + event.groupName));
        }

        private onResourceLoadError(event: RES.ResourceEvent): void {//资源组加载出错
            EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.ERROR, "" + event.groupName));
        }

        private onResourceProgress(event: RES.ResourceEvent): void {//组加载进度
            EventManager.instance.dispatchEvent(new com.model.localData.event.LoaderEvent(com.model.localData.event.LoaderEvent.PROGRESS, { name:event.groupName, loaded:event.itemsLoaded, total:event.itemsTotal}));
        }

        private onLoadRes() {

        }

        /**
         * 单例
         */
        static get instance(): ResManager {//单例
            if (this._instance == null)
                this._instance = new ResManager();

            return this._instance;
        }
    }
} 