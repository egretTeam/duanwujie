var com;
(function (com) {
    var controller;
    (function (controller) {
        var WindowManager = (function () {
            function WindowManager() {
                this.hasWin = false; //是否有窗口
                this.winCount = 0; //窗口数
            }
            var d = __define,c=WindowManager,p=c.prototype;
            p.setWin = function () {
                this.hasWin = true;
                this.winCount++;
            };
            p.closeWin = function () {
                this.winCount--;
                if (this.winCount <= 0) {
                    this.winCount = 0;
                    this.hasWin = false;
                }
            };
            d(WindowManager, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new WindowManager();
                    return this._instance;
                }
            );
            return WindowManager;
        }());
        controller.WindowManager = WindowManager;
        egret.registerClass(WindowManager,'com.controller.WindowManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
