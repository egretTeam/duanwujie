module com.model.localData.event {
    export class TouchMoveEvent extends com.model.localData.event.Event {
        static TouchMoveEvent_START: string = "TouchMoveEvent_START";//开始移动
        static TouchMoveEvent_MOVE: string = "TouchMoveEvent_MOVE";//移动
        static TouchMoveEvent_END: string = "TouchMoveEvent_END";//结束移动
        constructor(_type: string, _data: Object) {
            super(_type, _data);
        }
    }
}   