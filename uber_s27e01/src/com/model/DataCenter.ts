/// <reference path="localData/UserVO.ts"/>
/// <reference path="localData/ConfigVO.ts"/>

module com.model {
    export class DataCenter {
        userVO: com.model.localData.UserVO = new com.model.localData.UserVO();//用户变量
        configVO: com.model.localData.ConfigVO = new com.model.localData.ConfigVO();//配置变量
        private static _instance: DataCenter;//单例
        constructor() {

        }

        static get instance(): DataCenter {
            if (this._instance == null)
                this._instance = new DataCenter();

            return this._instance;
        }
    }
} 