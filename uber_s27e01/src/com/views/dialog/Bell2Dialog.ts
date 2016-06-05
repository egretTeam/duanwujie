module com.views.dialog {
	/**
	 *
	 * @author 
	 *
	 */
    export class Bell2Dialog extends LuckDialog{
        constructor() {
            super();
        }   
        singer:string;
        bellname:string;
        singertext:egret.TextField;
        bellnametext: egret.TextField;
        setUrl(bellinfo):void{
            this.singer = bellinfo[0];
            this.singertext.text = this.singer;
            this.bellname = bellinfo[1];
            this.bellnametext.text = this.bellname;
        }
        //需要调用接口实例化该user   
        requstVerification():Boolean{
            this.user = new com.model.localData.UserVO();
            return false;
        }
        getuser(): com.model.localData.UserVO{
            if(this.user ==null){
                this.user = new com.model.localData.UserVO();
                this.user.iscrbtuser = false;   
            }
            return this.user;            
        }
        user:com.model.localData.UserVO;
        oder():void{
            if(this.getuser().iscrbtuser){
                this.jump(new Bell2_2Dialog())
            }
            else{
                this.jump(new Bell2_1Dialog())
                
            }
        }
        
        protected  getImage():egret.Bitmap{
            return new egret.Bitmap(RES.getRes("bell2"));
        }
     
        protected  createContent(): void{
            this.singertext = new egret.TextField();
            this.singertext.x = 275;
            this.singertext.y = 345;
            this.singertext.size = 30;
            this.bellnametext = new egret.TextField();
            this.bellnametext.x = 275;
            this.bellnametext.y = 380;
            this.bellnametext.size = 30;
            this.addChild(this.singertext);
            this.addChild(this.bellnametext);
            
        }
        
        protected onRemoveStage(e: egret.Event) {//移除
            super.onRemoveStage(e);
        }
        
        protected customTouchHandler(evt: egret.TouchEvent) {
            if(new egret.Rectangle(168,700,300,65).contains(evt.stageX,evt.stageY)){
                this.jump(new AwardDialog());
            }
            else if(new egret.Rectangle(168,615,300,65).contains(evt.stageX,evt.stageY)){
                     this.oder(); 
            }
        }
        
        public close(): void {
            this.jump(new AwardDialog());
            console.log("Bell2");
        }
	}
}
