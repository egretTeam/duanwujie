module com.model.localData.event {
    export class EventVO {
        target: Object;//目标
        type: string;//事件名称
        func: Function;//回调
        constructor(_target: Object, _type: string, _func: Function) {
            this.target = _target;
            this.type = _type;
            this.func = _func;
        }
    }
} 