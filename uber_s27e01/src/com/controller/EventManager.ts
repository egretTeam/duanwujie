/// <reference path="../model/localData/event/Event.ts"/>
/// <reference path="../model/localData/event/EventVO.ts"/>

module com.controller {
    export class EventManager{
        eventArr: Array<com.model.localData.event.EventVO>;//事件数组
        private static _instance: EventManager;//单例
        constructor() {
            this.eventArr = new Array();
        }

        addEventListener(_target:Object, _type:string, _func:Function) {//添加监听 _target目标, _type事件类型, _func回调
            this.eventArr.push(new com.model.localData.event.EventVO(_target, _type, _func));
        }

        removeEventListener(_target: Object, _type: string) {//移除监听 _target目标, _type事件类型
            var i = 0;

            for (i = 0; i < this.eventArr.length; i++) {
                if (this.eventArr[i].target == _target) {
                    if (this.eventArr[i].type == _type) {
                        this.eventArr.splice(i, 1);
                        i--;
                    }
                }
            }
        }

        dispatchEvent(e: com.model.localData.event.Event) {//派发事件 e事件
            var i = 0;

            for (i = 0; i < this.eventArr.length; i++) {
                if (this.eventArr[i].type == e.type) 
                    this.eventArr[i].func(e);
            }
        }

        static get instance(): EventManager {
            if (this._instance == null)
                this._instance = new EventManager();

            return this._instance;
        }
    }
} 