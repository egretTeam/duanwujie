module com.views.ui.num {
    export class BitmapNum extends BasicView {
        numArr: Array<egret.Bitmap> = new Array();//数字数组
        gap: number = 0;//间隔
        prefix: string = "";//前缀
        /**
        * 显示宽度
        */
        disWidth: number = 0;//显示宽度
        /**
        * 显示高度
        */
        disHeight: number = 0;//显示高度
        /**
        * 位图数字
        * @prefix 前缀
        * @gap 间隔
        */
        constructor(prefix:string, gap:number) {
            super();

            this.prefix = prefix;
            this.gap = gap;
        }

        /**
        * 初始化
        * @n 数字
        */
        init(n: number) {//初始化
            var bmp: egret.Bitmap;
            var s: string = "" + n;
            var i = 0;

            this.clearNum();
            for (i = 0; i < s.length; i++) {
                bmp = new egret.Bitmap(RES.getRes("" + this.prefix+""+ s.substr(i, 1)));
                this.addChild(bmp);
                if (i > 0)
                    bmp.x = this.numArr[i - 1].x + this.numArr[i - 1].width + this.gap;
                this.numArr.push(bmp);

                this.disWidth = bmp.x + bmp.width;
                this.disHeight = bmp.height;
            }
        }

        protected onRemoveStage(e: egret.Event) {//移除
            this.clearNum();

            super.onRemoveStage(e);
        }

        private clearNum() {//清除数字
            var i = 0;

            for (i = 0; i < this.numArr.length; i++)
                this.removeChild(this.numArr[i]);
            this.disWidth = 0;
            this.disHeight = 0;
            this.numArr = new Array();
        }
    }
} 