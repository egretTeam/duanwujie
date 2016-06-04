module com.views.ui.loading {
    export class LoaderLoading extends BasicView {
        txt: egret.TextField;//文本
        mc: egret.MovieClip;//MovieClip
        dataJSON: string = "";//配置文件
        groupName: string = "";//组名称
        func: Function = null;//回调
        /**
         * 进度条
         * @loadingSkin 进度皮肤
         * @loadingJson 进度皮肤配置
         * @dataJSON 配置文件
         * @groupName 组名称
         */
        constructor(dataJSON: string, groupName: string, func?: Function, loadingSkin?: string, loadingJson?: string) {
            super();

            if (!(com.utils.AppUtils.isExitsVariable(loadingSkin))) {
                loadingSkin = "MZloadingImg";
                loadingJson = "MZloadingJson";
            }

            var data = RES.getRes(loadingJson);
            var txtr = RES.getRes(loadingSkin);
            var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);

            this.dataJSON = dataJSON;
            this.groupName = groupName;
            this.func = func;

            this.mc = new egret.MovieClip( mcFactory.generateMovieClipData( "mzloading" ) );
            this.mc.play(-1);
            this.addChild(this.mc);

            this.txt = new egret.TextField();
            this.addChild(this.txt);
            this.txt.textAlign = egret.HorizontalAlign.CENTER;
            this.txt.stroke = 1;
            this.txt.textColor = 0x000000
            this.txt.strokeColor = 0xffffff;
            this.txt.y = 120;
            this.txt.size = 20;
            this.txt.width = 2*this.mc.width
            this.txt.x = 0 - this.mc.width / 2;

            this.x = (com.model.DataCenter.instance.configVO.appWidth - this.mc.width) / 2;
            this.y = (com.model.DataCenter.instance.configVO.appHeight - this.mc.height) / 2;

            com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, this.onConfigComplete.bind(this));
            com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE, this.onComplete.bind(this));
            com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS, this.onProgress.bind(this));
            com.controller.ResManager.instance.loadJSON(dataJSON);

        }
        /**
         * 设置loading
         * @p 百分数
         */
        setPercent(p: number) {//设置loading
            this.txt.text = "LOADING..." + Math.floor(p) + "%";
        }

        protected onRemoveStage(e: egret.Event) {//移除
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE);
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);

            super.onRemoveStage(e);

            this.mc = null;
            this.txt = null;
            this.func = null;
        }

        private onConfigComplete(e: com.model.localData.event.Event): void {//配置加载成功
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE);
            com.controller.ResManager.instance.loadGroup(this.groupName);
            console.log(this.groupName);
        }

        private onComplete(e: com.model.localData.event.Event): void {//资源加载成功
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);
            if(this.func!=null)
                this.func(e);
        }

        private onProgress(e: com.model.localData.event.Event): void {//资源加载过程
            this.setPercent(e.data["loaded"]/e.data["total"]*100.0);
        }
    }
}