module com.utils.dataLoader {
    export class DataLoaderEvent extends com.model.localData.event.Event {
        static COMPLETE: string = "COMPLETE";//加载完成
        static ERROR: string = "ERROR";//加载失败
        constructor(_type:string, _data:Object) {
            super(_type, _data);
        }
    }
} 