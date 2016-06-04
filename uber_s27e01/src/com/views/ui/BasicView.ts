module com.views.ui {
    export class BasicView extends egret.Sprite {
        groupName: string = "";//预加载名称
        private hasEvent: boolean = false;//是否有预加载事件监听
        /**
         * 基础视图
         */
        constructor() {
            super();

            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
            this.addEventListener(egret.Event.RESIZE, this.onResize, this);
        }

        /**
         * 设置缩放
         * @s 缩放比率
         */
        setScale(s:number) {//设置缩放
            this.scaleX = s;
            this.scaleY = s;
        }

        /**
         * 添加到场景
         * @e 事件
         */
        protected onAddStage(e: egret.Event) {//添加到场景
            this.onResize(null);
        }

        /**
         * 移除出场景
         * @e 事件
         */
        protected onRemoveStage(e: egret.Event) {//移除出场景
            try {
                this.removeChildren();
            } catch (e) {

            }

            this.removePreLoadEvent();
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this);
            this.removeEventListener(egret.Event.RESIZE, this.onResize, this);            
        }

        /**
         * 重定位
         * @e 事件
         */
        protected onResize(e:egret.Event) {//重定位

        }

        /**
         * 预加载
         * @groupName 预加载id
         */
        protected preload(groupName:string) {//预加载
            this.groupName = groupName;

            if (!(this.hasEvent)) {
                this.hasEvent = true;

                com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE, this.onPreLoadComplete.bind(this));
                com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.ERROR, this.onPreLoadError.bind(this));
                com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS, this.onPreLoadProgress.bind(this));
            }
            
            com.controller.ResManager.instance.loadGroup(this.groupName);
        }

        /**
         * 预加载成功
         * @e com.model.localData.event.LoaderEvent
         */
        protected onPreLoadComplete(e: com.model.localData.event.Event) {//预加载成功
            if(e.data==this.groupName)
                this.removePreLoadEvent();
        }

        /**
         * 预加载失败
         * @e com.model.localData.event.LoaderEvent
         */
        protected onPreLoadError(e: com.model.localData.event.Event) {//预加载失败

        }

        /**
         * 预加载过程
         * @e com.model.localData.event.LoaderEvent
         */
        protected onPreLoadProgress(e: com.model.localData.event.Event) {//预加载过程

        }

        /**
         * 移除预加载监听事件
         */
        protected removePreLoadEvent() {//移除预加载监听事件
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.COMPLETE);
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.ERROR);
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.LoaderEvent.PROGRESS);
        }
    }
} 