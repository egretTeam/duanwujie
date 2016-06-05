var com;
(function (com) {
    var utils;
    (function (utils) {
        var dataLoader;
        (function (dataLoader) {
            var DataLoader = (function () {
                function DataLoader() {
                }
                var d = __define,c=DataLoader,p=c.prototype;
                p.getData = function (cmd, url, data) {
                    this.cmd = cmd;
                    this.url = url;
                    $.get(url, this.onGetStatus.bind(this));
                };
                p.sendData = function (cmd, url, data) {
                    this.cmd = cmd;
                    this.url = url;
                    $.ajax({
                        type: "GET",
                        url: url,
                        data: data,
                        dataType: "jsonp",
                        async: !0,
                        cache: !1,
                        success: this.onStatus.bind(this),
                        error: this.onError.bind(this)
                    });
                };
                p.getScript = function (cmd, url) {
                    this.cmd = cmd;
                    this.url = url;
                    $.getScript(url, this.onScriptSuccess.bind(this));
                };
                p.onGetStatus = function (data) {
                    com.controller.EventManager.instance.dispatchEvent(new dataLoader.DataLoaderEvent(dataLoader.DataLoaderEvent.COMPLETE, { cmd: this.cmd, data: data }));
                };
                p.onStatus = function (data) {
                    com.controller.EventManager.instance.dispatchEvent(new dataLoader.DataLoaderEvent(dataLoader.DataLoaderEvent.COMPLETE, { cmd: this.cmd, data: data }));
                };
                p.onError = function (data) {
                    com.controller.EventManager.instance.dispatchEvent(new dataLoader.DataLoaderEvent(dataLoader.DataLoaderEvent.ERROR, { cmd: this.cmd, data: null }));
                };
                p.onScriptSuccess = function (response, status) {
                    alert("页面加载成功");
                };
                return DataLoader;
            }());
            dataLoader.DataLoader = DataLoader;
            egret.registerClass(DataLoader,'com.utils.dataLoader.DataLoader');
        })(dataLoader = utils.dataLoader || (utils.dataLoader = {}));
    })(utils = com.utils || (com.utils = {}));
})(com || (com = {}));
