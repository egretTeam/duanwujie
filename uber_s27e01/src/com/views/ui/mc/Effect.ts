module com.views.ui.mc {
    export class Effect extends com.views.ui.BasicView {
        bg: egret.Bitmap;//背景
        count: number = 0;//计数
        status: number = 0;//状态
        prefix: string = "";//前缀
        totalFrame: number = 0;//总帧数
        frameRate: number = 0;//帧频
        startFrame: number = 0;//开始帧
        /**
        * 动画
        * @prefix 前缀
        * @totalFrame 总帧数
        * @frameRate 帧频
        * @startFrame 开始帧
        */
        constructor(prefix:string, totalFrame:number, frameRate:number, startFrame?:number) {
            super();

            this.prefix = prefix;
            this.totalFrame = totalFrame;
            this.frameRate = frameRate;
            if (startFrame)
                this.startFrame = startFrame;

            this.bg = new egret.Bitmap(RES.getRes("" + this.prefix + "" + this.startFrame));
            this.addChild(this.bg);

            this.status = 0;
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

            super.onRemoveStage(e);

            this.bg = null;
        }

        private onEnterFrame(e: egret.Event) {//动画
            this.count++;
            if (this.count > this.frameRate) {
                this.count = 0;
                this.status++;
                if (this.status <= this.totalFrame) {
                    if (this.bg == null)
                        return;

                    this.bg.texture = RES.getRes("" + this.prefix + "" + (this.status + this.startFrame));
                }
                else {
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    if (this.parent == null)
                        return;

                    this.parent.removeChild(this);
                }
            }
        }
    }
} 