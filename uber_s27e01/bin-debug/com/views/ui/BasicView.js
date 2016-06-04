var com;
(function (com) {
    var views;
    (function (views) {
        var ui;
        (function (ui) {
            var BasicView = (function (_super) {
                __extends(BasicView, _super);
                /**
                 * 基础视图
                 */
                function BasicView() {
                    _super.call(this);
                    this.groupName = ""; //预加载名称
                    this.hasEvent = false; //是否有预加载事件监听
                    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
                    this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
                    this.addEventListener(egret.Event.RESIZE, this.onResize, this);
                }
                var d = __define,c=BasicView,p=c.prototype;
                /**
                 * 设置缩放
                 * @s 缩放比率
                 */
                p.setScale = function (s) {
                    this.scaleX = s;
                    this.scaleY = s;
                };
                /**
                 * 添加到场景
                 * @e 事件
                 */
                p.onAddStage = function (e) {
                    this.onResize(null);
                };
                /**
                 * 移除出场景
                 * @e 事件
                 */
                p.onRemoveStage = function (e) {
                    try {
                        this.removeChildren();
                    }
                    catch (e) {
                    }
                    this.removePreLoadEvent();
                    this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
                    this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
                    this.removeEventListener(egret.Event.RESIZE, this.onResize, this);
                };
                /**
                 * 重定位
                 * @e 事件
                 */
                p.onResize = function (e) {
                };
                /**
                 * 预加载
                 * @groupName 预加载id
                 */
                p.preload = function (groupName) {
                    this.groupName = groupName;
                    if (!(this.hasEvent)) {
                        this.hasEvent = true;
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE, this.onPreLoadComplete.bind(this));
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.ERROR, this.onPreLoadError.bind(this));
                        com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS, this.onPreLoadProgress.bind(this));
                    }
                    com.controller.ResManager.instance.loadGroup(this.groupName);
                };
                /**
                 * 预加载成功
                 * @e com.model.localData.event.LoaderEvent
                 */
                p.onPreLoadComplete = function (e) {
                    if (e.data == this.groupName)
                        this.removePreLoadEvent();
                };
                /**
                 * 预加载失败
                 * @e com.model.localData.event.LoaderEvent
                 */
                p.onPreLoadError = function (e) {
                };
                /**
                 * 预加载过程
                 * @e com.model.localData.event.LoaderEvent
                 */
                p.onPreLoadProgress = function (e) {
                };
                /**
                 * 移除预加载监听事件
                 */
                p.removePreLoadEvent = function () {
                    com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
                    com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.ERROR);
                    com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);
                };
                return BasicView;
            }(egret.Sprite));
            ui.BasicView = BasicView;
            egret.registerClass(BasicView,'com.views.ui.BasicView');
        })(ui = views.ui || (views.ui = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
