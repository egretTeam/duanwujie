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
                    this.addEventListener(egret.Event.CHANGE, this.modified, this);
                }
                var d = __define,c=CText,p=c.prototype;
                p.init = function () {
                    this.type = egret.TextFieldType.INPUT;
                    this.size = 28;
                    this.textColor = 0x444444;
                    this.border = true;
                    this.background = true;
                    this.backgroundColor = 0xFFFFFF;
                    this.text = this.label;
                    this.height = 30;
                    this.width = 200;
                };
                p.setLabel = function (label) {
                    this.label = label;
                    if (this.input == null || this.input == "")
                        this.text = this.label;
                };
                p.modified = function () {
                    if (this.text == this.label) {
                        this.input = "";
                    }
                    else
                        this.input = this.text;
                    if (this.applyModifyHandle != null)
                        this.applyModifyHandle(this.input);
                };
                p.focusIn = function () {
                    if (this.input == null || this.input == "") {
                        this.text = "";
                        this.textColor = 0x000000;
                    }
                    if (this.focusInHandle != null)
                        this.focusInHandle(this.input);
                };
                p.focusOut = function () {
                    if (this.text == "" || this.text == this.label) {
                        this.textColor = 0x444444;
                        this.text = this.label;
                    }
                    else {
                        this.input = this.text;
                    }
                    if (this.focusOutHandle != null)
                        this.focusOutHandle(this.input);
                };
                p.onRemoveFromStage = function () {
                    this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
                    this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
                    this.removeEventListener(egret.FocusEvent.FOCUS_IN, this.focusIn, this);
                    this.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.focusOut, this);
                    this.removeEventListener(egret.Event.CHANGE, this.modified, this);
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
                p.setInput = function (input) {
                    this.input = input;
                    this.text = input;
                };
                return CText;
            }(egret.TextField));
            text.CText = CText;
            egret.registerClass(CText,'com.views.text.CText');
        })(text = views.text || (views.text = {}));
    })(views = com.views || (com.views = {}));
})(com || (com = {}));
