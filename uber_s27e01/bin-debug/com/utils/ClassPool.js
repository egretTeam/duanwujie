/**
 *用于优化对象使用率的对象池，
 *
 * @author 蔡羽
 *
 */
var ClassPool = (function () {
    function ClassPool() {
        this.shieldPool = new Array();
        this.blockPool = new Array();
        this.scorePool = new Array();
        this.bombPool = new Array();
    }
    var d = __define,c=ClassPool,p=c.prototype;
    ClassPool.getInstance = function () {
        if (ClassPool.instance == null)
            ClassPool.instance = new ClassPool();
        return ClassPool.instance;
    };
    /**
     * 获取盾牌
     */
    p.getShield = function () {
        if (this.shieldPool.length)
            return this.shieldPool.shift();
        return new com.views.ui.scene.gameScene.shield();
    };
    /**
     * 获取路障
     */
    p.getBlock = function () {
        if (this.blockPool.length) {
            return this.blockPool.shift();
        }
        return new com.views.ui.scene.gameScene.luzhang();
    };
    /**
     * 获取得分
     */
    p.getScore = function () {
        if (this.scorePool.length) {
            return this.scorePool.shift();
        }
        return new com.views.ui.scene.gameScene.round();
    };
    /**
     * 获取得分
     */
    p.getBomb = function () {
        if (this.bombPool.length)
            return this.bombPool.shift();
        return new com.views.ui.scene.gameScene.luzhangBomb();
    };
    p.reclaim = function (item) {
        switch (item.getType()) {
            case com.constants.ItemConstant.SHILED:
                this.shieldPool.push(item);
                break;
            case com.constants.ItemConstant.BLOCK:
                this.blockPool.push(item);
                break;
            case com.constants.ItemConstant.SCORE:
                this.scorePool.push(item);
                break;
            case com.constants.ItemConstant.BOMB:
                this.bombPool.push(item);
                break;
        }
    };
    return ClassPool;
}());
egret.registerClass(ClassPool,'ClassPool');
