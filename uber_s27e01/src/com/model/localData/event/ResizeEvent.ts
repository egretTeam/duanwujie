module com.model.localData.event {
    export class ResizeEvent extends com.model.localData.event.Event {
        static RESIZE: string = "ResizeEvent_RESIZE";//尺寸变化
        constructor(_type: string, _data: Object) {
            super(_type, _data);
        }
    }
}  