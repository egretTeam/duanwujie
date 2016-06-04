/**
 *用于优化对象使用率的对象池，
 * 
 * @author 蔡羽
 *
 */
class ClassPool {
    private static instance: ClassPool;
    public static getInstance(): ClassPool{
        if(ClassPool.instance==null)
            ClassPool.instance=new ClassPool();
        return ClassPool.instance;
    }
    
    private shieldPool;
    private blockPool;
    private scorePool;
    private bombPool;
    
    constructor() {
        this.shieldPool = new Array();
        this.blockPool = new Array();
        this.scorePool = new Array();
        this.bombPool = new Array();
	}
	/**
	 * 获取盾牌
	 */ 
    public getShield(): com.views.ui.scene.gameScene.shield{
	    if(this.shieldPool.length)
    	    return this.shieldPool.shift();
        return new com.views.ui.scene.gameScene.shield();
	}
	/**
	 * 获取路障
	 */ 
    public getBlock(): com.views.ui.scene.gameScene.luzhang {
        if(this.blockPool.length) {
            return this.blockPool.shift();
        }
        return new com.views.ui.scene.gameScene.luzhang();
    }
    
    /**
     * 获取得分
     */ 
    public getScore(): com.views.ui.scene.gameScene.round {
        if(this.scorePool.length){
            return this.scorePool.shift();
        }
        return new com.views.ui.scene.gameScene.round();
    }
    
    /**
     * 获取得分
     */
    public getBomb(): com.views.ui.scene.gameScene.luzhangBomb {
        if(this.bombPool.length)
            return this.bombPool.shift();
        return new com.views.ui.scene.gameScene.luzhangBomb();
    }
	
    public reclaim(item: com.views.ui.scene.gameScene.Item){
        switch(item.getType()){
            case com.constants.ItemConstant.SHILED:
                this.shieldPool.push(item);break;
            case com.constants.ItemConstant.BLOCK:
                this.blockPool.push(item); break;
            case com.constants.ItemConstant.SCORE:
                this.scorePool.push(item); break;
            case com.constants.ItemConstant.BOMB:
                this.bombPool.push(item); break;
        }
    }
    
}
