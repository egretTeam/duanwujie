module com.model.localData.event {
    export class LoaderEvent extends com.model.localData.event.Event {
        /**
         * 配置加载完成
         */
        static CONFIG_COMPLETE: string = "LoaderEvent_CONFIG_COMPLETE";//配置加载完成
        /**
         * 加载完成
         */
        static COMPLETE: string = "LoaderEvent_COMPLETE";//加载完成
        /**
         * 加载失败
         */
        static ERROR: string = "LoaderEvent_ERROR";//加载失败
        /**
         * 加载过程
         */
        static PROGRESS: string = "LoaderEvent_PROGRESS";//加载过程
        constructor(_type: string, _data: Object) {
            super(_type, _data);
        }
    }
}   