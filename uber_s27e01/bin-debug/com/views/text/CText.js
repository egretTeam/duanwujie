var com;
(function (com) {
    var views;
    (function (views) {
        var text;
        (function (text) {
            /**
             *
             * @author
             *
             */
            var CText = (function (_super) {
                __extends(CText, _super);
                function CText() {
                    _super.call(this);
                    this.label = "请输入内容";
                    this.init();
                    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
                    this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
                    this.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                    this.addEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                }
                var d = __define,c=CText,p=c.prototype;
                p.init = function () {
                    this.type = egret.TextFieldType.INPUT;
                    this.size = 30;
                    this.textColor = 0xFFFFFF;
                    this.border = true;
                    this.background = true;
                    this.backgroundColor = 0xFFFFFF;
                };
                p.focusIn = function () {
                    if (this.text == this.label) {
                        this.text = "";
                        this.textColor = 0x000000;
                    }
                };
                p.focusOut = function () {
                    if (this.text == "") {
                        this.text = this.label;
                        this.textColor = 0xFFFFFF;
                    }
                };
                p.onRemoveFromStage = function () {
                    this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
                    this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
                    this.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                    this.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                    this.onRemoveStage();
                };
                p.onRemoveStage = function () {
                    if (this.removeHandle != null)
                        this.removeHandle();
                };
                p.onAddStage = function () {
                    if (this.addHandle != null)
                        this.addHandle();
                };
                p.getInput = function () {
                    return this.input;
                };
                return CText;
            }(egret.TextField));
            text.CText = CText;
            egret.registerClass(CText,'com.views.text.CText');
        })(text = views.text || (views.text = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
