
/**
 * 物品抽象类，可以用于表示得分物品、奖励物品、障碍物等。
 * @author 蔡羽
 *
 */
module com.views.ui.scene.gameScene {
    export abstract class AbstractItem extends com.views.ui.BasicView implements Item{
        protected armature: dragonBones.Armature;
        protected item;

        public gap: number = 10;

        protected isEnd: boolean = false;
        protected isHit: boolean = false;
        
        constructor() {
            super();
            var dragonbonesData = RES.getRes("items/json");
            var textureData = RES.getRes("items/texture");
            var texture = RES.getRes("items/png");

            var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
            this.armature = dragonbonesFactory.buildArmature("Armature");
            this.init();
        }
        public init() { };
        
        getType(): number{
            return -1;
        }
        
        setPos(x: number,y: number): void {
            this.x = x;
            this.y = y;
        }
        
        reset(){
            this.isEnd=false;
            this.isHit=false;
            this.init();
        }
        
        roundEnd(): void {
            if(!this.isHit) {
                this.isEnd = true;
                //对象池回收本对象
                ClassPool.getInstance().reclaim(this);
            }
        }

        update(): void {
            if(this.isEnd) return;
            this.y += this.gap;
            if(this.y >= com.model.DataCenter.instance.configVO.appHeight - 50) {
                this.roundEnd();
            }
        }
    }
}