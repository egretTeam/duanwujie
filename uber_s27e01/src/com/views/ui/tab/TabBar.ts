module com.views.ui.tab {
    export class TabBar extends BasicView {
        private btnArr: Array<com.views.ui.button.Button> = new Array();//按钮数组
        private _selectedIndex: number = 0;//选择索引
        /**
        * 变化
        */
        static CHANGE: string = "CHANGE";//变化
        constructor(btnArr:Array<com.views.ui.button.Button>) {
            super();

            var i = 0;

            for (i = 0; i < btnArr.length; i++) {
                this.addChild(btnArr[i]);
                btnArr[i].x = btnArr[i].width * i;
                btnArr[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onItemClick, this);
                this.btnArr.push(btnArr[i]);
            }
            this.selectedIndex = 0;
        }

        /**
        * 设置索引
        * @value 索引值
        */
        public set selectedIndex(value: number) {//设置索引
            var i = 0;

            this._selectedIndex = value;

            for (i = 0; i < this.btnArr.length; i++) {
                if (i == this._selectedIndex)
                    this.btnArr[i].setEnable(false);
                else
                    this.btnArr[i].setEnable(true);
            }

            this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
        }

        /**
        * 获取索引
        * @value 索引值
        */
        public get selectedIndex():number {//获取索引
            return this._selectedIndex;
        }

        protected onRemoveStage(e: egret.Event): void {//移除
            var i = 0;
            
            for (i = 0; i < this.btnArr.length; i++)
                this.btnArr[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onItemClick, this);
             
            super.onRemoveStage(e);

            this.btnArr = null;
        }

        private onItemClick(e: egret.TouchEvent): void {//点击item
            var i = 0;

            for (i = 0; i < this.btnArr.length; i++) {
                if (this.btnArr[i] == e.currentTarget) {
                    this.selectedIndex = i;
                    break;
                }
            }
        }
    }
} 