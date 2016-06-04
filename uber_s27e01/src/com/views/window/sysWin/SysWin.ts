module com.views.windows.sysWin {
    export class SysWin{
        /*bg: Phaser.Sprite;//背景
        ok: Phaser.Button;//ok
        cancel: Phaser.Button;//cancel
        txt: Phaser.Text;//txt
        okFunc: Function;//ok回调
        cancelFunc: Function;//cancel回调*/
        private static instance: SysWin;//单例
        constructor() {
            /*var style;

            super(game, 0, 0);

            this.bg = new Phaser.Sprite(game, 0, 0, "dialog");
            this.addChild(this.bg);
            style = { font: "30px Microsoft YaHei ", fill: "#000000", align: "center", wordWrap: true, wordWrapWidth: 386, fontWeight: "bold" };
            this.txt = new Phaser.Text(game, 39, 53, "", style);
            this.addChild(this.txt);

            com.controller.EventManager.instance.addEventListener(this, com.model.localData.event.ResizeEvent.RESIZE, this.onResize.bind(this));*/
        }

        /*init(s: string, type: number, _okFunc?: Function, _cancelFunc?: Function) {//初始化
            var str = s, disStr = "";
            var index = 0;

            this.okFunc = _okFunc;
            this.cancelFunc = _cancelFunc;

            while (str.length >0) {//换行
                str = s.substr(index, 13);
                index += 13;
                if(s.length>index)
                    str += "\r";
                disStr += str;
                str = s.substr(index, s.length-index);
            }
            if (index == 0)
                disStr = s;

            this.txt.text = disStr;
            this.txt.x = (500 - this.txt.width) / 2;
            if (type == 0) {
                this.ok = new Phaser.Button(this.game, 0, 220, "ok", this.onOK, this);
                this.ok.x = (500 - this.ok.width) / 2;
                this.addChild(this.ok);
            }
            else {
                           
            }
            this.txt.y = this.bg.y + (this.ok.y - this.bg.y) / 2 - this.txt.height / 2;
        }

        onResize(e: com.model.localData.event.Event) {//重定位
            var rate = com.model.DataCenter.instance.configVO.whRate;

            this.scale.set(rate);
            SysWin.instance.x = (com.model.DataCenter.instance.configVO.appWidth - 549 * rate) / 2;
            SysWin.instance.y = (com.model.DataCenter.instance.configVO.appHeight - 391 * rate) / 2;
        }

        onOK() {//ok
            if (this.okFunc != null)
                this.okFunc();
            this.onClose();
        }

        onCancel() {//cancel
            if (this.cancelFunc != null)
                this.cancelFunc();
            this.onClose();
        }

        onClose() {//关闭
            com.controller.EventManager.instance.removeEventListener(this, com.model.localData.event.ResizeEvent.RESIZE);
            this.kill();
            SysWin.instance = null;
        }

        static show(game: Phaser.Game, s: string, type: number, okFunc?: Function, cancelFunc?: Function) {//显示
            var rate = 0;

            if (this.instance == null) {
                rate = com.model.DataCenter.instance.configVO.whRate;

                this.instance = new SysWin(game);
                this.instance.scale.set(rate);
                this.instance.x = (com.model.DataCenter.instance.configVO.appWidth - 549 * rate) / 2;
                this.instance.y = (com.model.DataCenter.instance.configVO.appHeight - 340 * rate) / 2+25*rate;
                game.add.existing(this.instance);
            }
            this.instance.init(s, type, okFunc, cancelFunc);
        }*/
    }
} 