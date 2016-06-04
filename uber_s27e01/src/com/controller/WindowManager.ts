module com.controller {
    export class WindowManager {
        hasWin: boolean = false;//是否有窗口
        winCount: number = 0;//窗口数
        private static _instance: WindowManager;//单例
        constructor() {

        }

        setWin() {//设置窗体
            this.hasWin = true;
            this.winCount++;
        }

        closeWin() {//关闭窗体
            this.winCount--;
            if (this.winCount <= 0) {
                this.winCount = 0;
                this.hasWin = false;
            }
        }

        static get instance(): WindowManager {//单例
            if (this._instance == null)
                this._instance = new WindowManager();

            return this._instance;
        }
    }
} 