var com;
(function (com) {
    var model;
    (function (model) {
        var localData;
        (function (localData) {
            var ConfigVO = (function () {
                function ConfigVO() {
                    /**
                    * 宽
                    */
                    this.appWidth = 0; //宽
                    /**
                    * 高
                    */
                    this.appHeight = 0; //高
                    /**
                    * 帧频
                    */
                    this.frameRate = 30; //帧频
                    /**
                    * 宽高调整比率
                    */
                    this.whRate = 1; //宽高调整比率
                    /**
                    * 充撑宽高调整比率
                    */
                    this.allWHRate = 1; //充撑宽高调整比率
                    /**
                    * dpi比率
                    */
                    this.dpiRate = 1; //dpi比率
                    /**
                    * 是否pc
                    */
                    this.isPC = false; //是否pc
                    /**
                    * 是否支持touch事件
                    */
                    this.canTouch = false; //是否支持touch事件
                    /**
                    * 是否支持分享
                    */
                    this.canShare = false; //是否支持分享
                    /**
                    * 是否android声音
                    */
                    this.isAndroidSound = false; //是否android声音
                    /**
                     * 资源路径
                     */
                    this.resURL = ""; //资源路径
                }
                var d = __define,c=ConfigVO,p=c.prototype;
                return ConfigVO;
            }());
            localData.ConfigVO = ConfigVO;
            egret.registerClass(ConfigVO,'com.model.localData.ConfigVO');
        })(localData = model.localData || (model.localData = {}));
    })(model = com.model || (com.model = {}));
})(com || (com = {}));
