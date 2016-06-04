module com.model.localData.event {
    export class TimerEvent extends com.model.localData.event.Event {
        static TIMER: string = "TimerEvent_TIMER";//计时
        constructor(_type: string, _data: Object) {
            super(_type, _data);
        }
    }
} 