
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/socket/socket.js",
	"libs/modules/particle/particle.js",
	"libs/modules/weixinapi/weixinapi.js",
	"libs/modules/dragonBones/dragonBones.js",
	"bin-debug/com/constants/ItemConstant.js",
	"bin-debug/com/model/localData/event/Event.js",
	"bin-debug/com/model/localData/event/EventVO.js",
	"bin-debug/com/controller/EventManager.js",
	"bin-debug/com/controller/ResManager.js",
	"bin-debug/com/controller/SoundManager.js",
	"bin-debug/com/controller/TimerManager.js",
	"bin-debug/com/controller/TouchManager.js",
	"bin-debug/com/controller/WindowManager.js",
	"bin-debug/com/events/GameSceneEvent.js",
	"bin-debug/com/views/ui/BasicView.js",
	"bin-debug/com/MainView.js",
	"bin-debug/com/model/localData/UserVO.js",
	"bin-debug/com/model/localData/ConfigVO.js",
	"bin-debug/com/model/DataCenter.js",
	"bin-debug/com/model/localData/event/LoaderEvent.js",
	"bin-debug/com/model/localData/event/ResizeEvent.js",
	"bin-debug/com/model/localData/event/TimerEvent.js",
	"bin-debug/com/model/localData/event/TouchMoveEvent.js",
	"bin-debug/com/model/localData/ScoreVO.js",
	"bin-debug/com/model/localData/SoundVO.js",
	"bin-debug/com/utils/AppUtils.js",
	"bin-debug/com/utils/ClassPool.js",
	"bin-debug/com/utils/dataLoader/DataLoader.js",
	"bin-debug/com/utils/dataLoader/DataLoaderEvent.js",
	"bin-debug/com/views/scene/gameScene/AbstractItem.js",
	"bin-debug/com/views/scene/gameScene/car.js",
	"bin-debug/com/views/scene/gameScene/car_test.js",
	"bin-debug/com/views/scene/gameScene/Item.js",
	"bin-debug/com/views/scene/gameScene/luzhang.js",
	"bin-debug/com/views/scene/gameScene/LuzhangBomb.js",
	"bin-debug/com/views/scene/gameScene/round.js",
	"bin-debug/com/views/scene/gameScene/shield.js",
	"bin-debug/com/views/scene/GameScene.js",
	"bin-debug/com/views/scene/initScene/car.js",
	"bin-debug/com/views/scene/initScene/hand.js",
	"bin-debug/com/views/scene/initScene.js",
	"bin-debug/com/views/scene/teachScene.js",
	"bin-debug/com/views/ui/button/Button.js",
	"bin-debug/com/views/ui/button/ArtButton.js",
	"bin-debug/com/views/ui/button/ScaleButton.js",
	"bin-debug/com/views/ui/button/SwitchButton.js",
	"bin-debug/com/views/ui/loading/LoaderLoading.js",
	"bin-debug/com/views/ui/loading/Loading.js",
	"bin-debug/com/views/ui/loading/MZLoading.js",
	"bin-debug/com/views/ui/mc/Effect.js",
	"bin-debug/com/views/ui/moveBG/MoveBG.js",
	"bin-debug/com/views/ui/num/BitmapNum.js",
	"bin-debug/com/views/ui/num/NumText.js",
	"bin-debug/com/views/ui/page/Page.js",
	"bin-debug/com/views/ui/scroller/HScroller.js",
	"bin-debug/com/views/ui/scroller/HScrollerContainer.js",
	"bin-debug/com/views/ui/scroller/ScrollerContainer.js",
	"bin-debug/com/views/ui/scroller/ScrollerList.js",
	"bin-debug/com/views/ui/scroller/VScroller.js",
	"bin-debug/com/views/ui/tab/TabBar.js",
	"bin-debug/com/views/ui/tips/FadeNum.js",
	"bin-debug/com/views/ui/tips/FadeNum0.js",
	"bin-debug/com/views/ui/tips/FadeTips.js",
	"bin-debug/com/views/ui/tips/FadeTips0.js",
	"bin-debug/com/views/ui/window/MaskWindow.js",
	"bin-debug/com/views/ui/window/Window.js",
	"bin-debug/com/views/ui/wxShare/WXShare.js",
	"bin-debug/com/views/window/GameOverWin/GameOverWin.js",
	"bin-debug/com/views/window/ShareWin/shareWin.js",
	"bin-debug/com/views/window/sysWin/SysWin.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 960,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};