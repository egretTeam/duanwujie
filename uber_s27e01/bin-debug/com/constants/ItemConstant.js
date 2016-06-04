var com;
(function (com) {
    var constants;
    (function (constants) {
        /**
         *  常量记录类
         * @author 蔡羽
         *
         */
        var ItemConstant = (function () {
            function ItemConstant() {
            }
            var d = __define,c=ItemConstant,p=c.prototype;
            ItemConstant.SHILED = 0;
            ItemConstant.BOMB = 1;
            ItemConstant.BLOCK = 2;
            ItemConstant.SCORE = 3;
            return ItemConstant;
        }());
        constants.ItemConstant = ItemConstant;
        egret.registerClass(ItemConstant,'com.constants.ItemConstant');
    })(constants = com.constants || (com.constants = {}));
})(com || (com = {}));
