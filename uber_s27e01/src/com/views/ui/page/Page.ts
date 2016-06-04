module com.views.ui.page {
    export class Page extends BasicView {
        add0: com.views.ui.button.Button;//减按钮
        bg: egret.Bitmap;//背景
        txt: egret.TextField;//文本
        add1: com.views.ui.button.Button;//加按钮
        /**
        * 模式 0-页码模式 1-数量模式
        */
        pageType: number = 0;//模式 0-页码模式 1-数量模式
        /**
        * 当前页码
        */
        currentPage: number = 1;//当前页码
        /**
        * 总页码
        */
        totalPage: number = 1;//总页码
        /**
        * 总页码
        */
        static CHANGE: string = "CHANGE";//变化
        /**
        * 分页组件
        * @barSkin 分页输入背景
        * @subSkin 减按钮皮肤
        * @addSkin 加按钮皮肤
        * @pageType 分页模式 0-页码模式 1-数量模式
        */
        constructor(barSkin:string, subSkin:string[], addSkin:string[], pageType:number) {
            super();

            this.pageType = pageType;

            this.add0 = new com.views.ui.button.Button(subSkin);
            this.addChild(this.add0);

            this.bg = new egret.Bitmap(RES.getRes("" + barSkin));
            this.addChild(this.bg);
            this.bg.x = this.add0.width;
            this.bg.y = (this.bg.height - this.add0.height) / 2;

            this.txt = new egret.TextField();
            this.addChild(this.txt);
            this.txt.width = this.bg.width;
            this.txt.height = this.bg.height;
            this.txt.x = this.bg.x;
            this.txt.y = this.bg.y;
            this.txt.textAlign = egret.HorizontalAlign.CENTER;
            this.txt.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.txt.type = egret.TextFieldType.INPUT;
            this.txt.textColor = 0x000000;

            this.add1 = new com.views.ui.button.Button(addSkin);
            this.addChild(this.add1);
            this.add1.x = this.bg.x + this.bg.width;

            this.add0.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd0, this);
            this.add1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd1, this);
            this.txt.addEventListener(egret.Event.CHANGE, this.onChange, this);
        }

        /**
        * 设置字体格式
        * @color 颜色
        * @size 大小
        */
        setTextformat(color:number, size:number): void {//设置字体格式
            this.txt.textColor = color;
            this.txt.size = size;
        }

        /**
        * 初始化
        * @color 当前页码
        * @size 总页码
        */
        init(currentPage:number, totalPage:number): void {//初始化
            this.currentPage = currentPage;
            this.totalPage = totalPage;

            this.dis();
        }

        /**
        * 设置背景偏移
        * @offsetX 偏移x
        * @offsetY 偏移y
        */
        setBGOffset(offsetX:number, offsetY:number) {//设置背景偏移
            this.bg.x = this.add0.width+offsetX;
            this.bg.y = (this.bg.height - this.add0.height) / 2 + offsetY;
            this.txt.x = this.bg.x;
            this.txt.y = this.bg.y;
        }

        protected onRemoveStage(e: egret.Event): void {//移除
            this.add0.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd0, this);
            this.add1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdd1, this);
            this.txt.removeEventListener(egret.Event.CHANGE, this.onChange, this);

            super.onRemoveStage(e);

            this.add0 = null;
            this.bg = null;
            this.txt = null;
            this.add1 = null;
        }

        private onAdd0(e: egret.TouchEvent): void {//-
            this.currentPage--;
            if (this.currentPage < 1)
                this.currentPage = 1;

            this.dis();
        }

        private onAdd1(e: egret.TouchEvent): void {//+
            this.currentPage++;
            if (this.currentPage>this.totalPage)
                this.currentPage = this.totalPage;

            this.dis();
        }

        private onChange(e: egret.FocusEvent) {//失去焦点
            if (this.txt.text == "")
                this.currentPage = 0;
            else
                this.currentPage = parseInt("" + this.txt.text);
            if (this.currentPage < 1)
                this.currentPage = 1;
            else if (this.currentPage > this.totalPage)
                this.currentPage = this.totalPage;

            this.dis();
        }

        private dis(): void {//显示
            if (this.pageType == 0)
                this.txt.text = "" + this.currentPage + "/" + this.totalPage;
            else
                this.txt.text = "" + this.currentPage;

            this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
        }
    }
} 