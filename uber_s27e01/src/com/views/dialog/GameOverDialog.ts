module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
	export class GameOverDialog extends Dialog{
    	  highestScore:number;
    	  ranking:number;
        scorePanel: egret.TextField;
        private highestScorePanel: egret.TextField;
        rankingPanel: egret.TextField;
    	
        constructor() {
            super();
        }   
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("gameover"));
        }
     
        protected createContent(): void {
            this.scorePanel = new egret.TextField;
            this.scorePanel.x=340;
            this.scorePanel.y = 410;
            this.scorePanel.size = 25;
            this.scorePanel.width = 250;
            this.scorePanel.textColor = 0x64470C;
            
            this.highestScorePanel = new egret.TextField;
            this.highestScorePanel.x = 340;
            this.highestScorePanel.y = 455;
            this.highestScorePanel.size = 25;
            this.highestScorePanel.width = 250;
            this.highestScorePanel.textColor = 0x64470C;
            
            this.rankingPanel = new egret.TextField;
            this.rankingPanel.x = 340;
            this.rankingPanel.y = 500;
            this.rankingPanel.size = 25;
            this.rankingPanel.width = 250;
            this.rankingPanel.textColor = 0x64470C;
            
            var hs: string = egret.localStorage.getItem("highestScore");
            this.highestScorePanel.text = hs==null?0+"":hs;
            
            
            this.addChild(this.highestScorePanel);
            this.addChild(this.scorePanel);
            this.addChild(this.rankingPanel);
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
//            console.log(evt.stageX+" "+evt.stageY)
            if(this.getAwardArea().contains(evt.stageX,evt.stageY)) {
                this.close();    
            } else if(this.getShareArea().contains(evt.stageX,evt.stageY)) {
                this.showShareArea();
            } else if(this.getTryAgainArea().contains(evt.stageX,evt.stageY)) {
               MainView.instance.changeScene(com.constants.SceneConstants.GAME);
            }
        }
        
        public showShareArea():void{
        }
        
        public close(): void {
            this.jump(new AwardDialog());
        }
        
        private getAwardArea():egret.Rectangle{
            return new egret.Rectangle(170,565,280,60);
        }
        private getShareArea(): egret.Rectangle {
            return new egret.Rectangle(170,680,280,60);
        }
        private getTryAgainArea(): egret.Rectangle {
            return new egret.Rectangle(170,760,280,60);
        }
	}
}
