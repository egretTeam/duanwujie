module com.events {
    export class GameSceneEvent extends com.model.localData.event.Event {

        constructor(_type: string, _data: Object) {
            super(_type, _data);
        }
    }
}   