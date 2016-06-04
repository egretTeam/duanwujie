module com.model.localData.event {
    export class Event {
        data: Object;//数据
        type: string;//类型
        constructor(_type:string, _data:Object) {
            this.data = _data;
            this.type = _type;
        }
    }
}