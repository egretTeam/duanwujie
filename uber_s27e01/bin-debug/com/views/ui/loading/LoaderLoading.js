var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var loading;
            (function (loading) {
                var LoaderLoading = (function (_super) {
                    __extends(LoaderLoading, _super);
                    /**
                     * 进度条
                     * @loadingSkin 进度皮肤
                     * @loadingJson 进度皮肤配置
                     * @dataJSON 配置文件
                     * @groupName 组名称
                     */
                    function LoaderLoading(dataJSON, groupName, func, loadingSkin, loadingJson) {
                        _super.call(this);
                        this.dataJSON = ""; //配置文件
                        this.groupName = ""; //组名称
                        this.func = null; //回调
                        if (!(com.utils.AppUtils.isExitsVariable(loadingSkin))) {
                            loadingSkin = "MZloadingImg";
                            loadingJson = "MZloadingJson";
                        }
                        var data = RES.getRes(loadingJson);
                        var txtr = RES.getRes(loadingSkin);
                        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                        this.dataJSON = dataJSON;
                        this.groupName = groupName;
                        this.func = func;
                        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("mzloading"));
                        this.mc.play(-1);
                        this.addChild(this.mc);
                        this.txt = new egret.TextField();
                        this.addChild(this.txt);
                        this.txt.textAlign = egret.HorizontalAlign.CENTER;
                        this.txt.stroke = 1;
                        this.txt.textColor = 0x000000;
                        this.txt.strokeColor = 0xffffff;
                        this.txt.y = 120;
                        this.txt.size = 20;
                        this.txt.width = 2 * this.mc.width;
                        this.txt.x = 0 - this.mc.width / 2;
                        this.x = (com.model.DataCenter.instance.configVO.appWidth - this.mc.width) / 2;
                        this.y = (com.model.DataCenter.instance.configVO.appHeight - this.mc.height) / 2;
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE, this.onConfigComplete.bind(this));
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE, this.onComplete.bind(this));
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS, this.onProgress.bind(this));
                        com.controller.ResManager.instance.loadJSON(dataJSON);
                    }
                    var d = __define,c=LoaderLoading,p=c.prototype;
                    /**
                     * 设置loading
                     * @p 百分数
                     */
                    p.setPercent = function (p) {
                        this.txt.text = "LOADING..." + Math.floor(p) + "%";
                    };
                    p.onRemoveStage = function (e) {
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE);
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);
                        _super.prototype.onRemoveStage.call(this, e);
                        this.mc = null;
                        this.txt = null;
                        this.func = null;
                    };
                    p.onConfigComplete = function (e) {
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.CONFIG_COMPLETE);
                        com.controller.ResManager.instance.loadGroup(this.groupName);
                        console.log(this.groupName);
                    };
                    p.onComplete = function (e) {
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
                        com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);
                        if (this.func != null)
                            this.func(e);
                    };
                    p.onProgress = function (e) {
                        this.setPercent(e.data["loaded"] / e.data["total"] * 100.0);
                    };
                    return LoaderLoading;
                }(ui.BasicView));
                loading.LoaderLoading = LoaderLoading;
                egret.registerClass(LoaderLoading,'com.views.ui.loading.LoaderLoading');
            })(loading = ui.loading || (ui.loading = {}));
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
