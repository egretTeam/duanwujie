var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //egret.Profiler.getInstance().run();
        this.mainView = new com.MainView();
        this.addChild(this.mainView);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
