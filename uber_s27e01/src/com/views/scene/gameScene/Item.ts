module com.views.ui.scene.gameScene {
    export interface Item {
       /**
        * 初始化
        */ 
       init();
       
       getType():number;
    }
}
