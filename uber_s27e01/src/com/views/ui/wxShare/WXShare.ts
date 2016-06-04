module com.views.ui.wxShare {
    export class WXShare extends BasicView{
        /*bmd: Phaser.BitmapData;//背景
        arrow: Phaser.Sprite;//箭头
        txt: Phaser.Text;//文本
        canTouchFlag: boolean = false;//可触摸标志*/
        private static instance: WXShare;//单例
        constructor() {
            super();
            /*var rate = com.model.DataCenter.instance.configVO.whRate;
            var style = { font: Math.floor(60 * com.model.DataCenter.instance.configVO.whRate) + "px Microsoft YaHei ", fill: "#ffffff", align: "center", wordWrap: true};

            this.bmd = new Phaser.BitmapData(this.game, "bmd", com.model.DataCenter.instance.configVO.appWidth, com.model.DataCenter.instance.configVO.appHeight);
            this.bmd.fill(0, 0, 0, 0.7);
            this.bmd.add(this);
            this.bmd.update(0, 0, this.bmd.width, this.bmd.height);

            this.arrow = new Phaser.Sprite(this.game, 0, 0, "arron_rt");
            this.arrow.scale.set(rate);
            this.arrow.x = com.model.DataCenter.instance.configVO.appWidth - this.arrow.width;
            this.addChild(this.arrow);

            this.txt = new Phaser.Text(this.game, 0, 0, "呐，一个人玩游戏多闷，\r分享给朋友，钱多多，大家赚！", style);
            this.txt.x = (com.model.DataCenter.instance.configVO.appWidth - this.txt.width) / 2;
            this.txt.y = 103 * rate;
            this.addChild(this.txt);

            this.inputEnabled = true;
            this.input.priorityID = 2;

            setTimeout(this.addTouchEnd.bind(this), 100); */           
        }

        /*update() {
            if (!(this.canTouchFlag))
                return;

            if (this.input.checkPointerDown(this.game.input.activePointer, true)) {
                this.kill();
                WXShare.instance = null;
            }
        }

        addTouchEnd() {//添加触摸结束事件
            this.canTouchFlag = true;
        }

        static show(game: Phaser.Game) {//显示
            if (this.instance == null) {
                this.instance = new WXShare(game);
                game.add.existing(this.instance);
            }
        }*/
    }
} 