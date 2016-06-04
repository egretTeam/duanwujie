class Main extends egret.DisplayObjectContainer {
    private mainView: com.MainView;//主场景
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {//添加到场景
        //egret.Profiler.getInstance().run();

        this.mainView = new com.MainView();
        this.addChild(this.mainView);
        
       
    }
}


