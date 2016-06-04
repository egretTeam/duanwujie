var com;
(function (com) {
    var controller;
    (function (controller) {
        var SoundManager = (function () {
            function SoundManager() {
                this.soundArr = new Array(); //声音数组
                this._mute = false; //是否静音
            }
            var d = __define,c=SoundManager,p=c.prototype;
            /**
             * 开始播放
             * @key 播放KEY
             * @isLoop 是否循环
             * @isStopAll 是否停止其他
             */
            p.play = function (key, isLoop, isStopAll) {
                var i = 0;
                var sound;
                var flag = false;
                for (i = 0; i < this.soundArr.length; i++) {
                    sound = this.soundArr[i];
                    if (sound.key == key) {
                        flag = true;
                        if (!(this.mute))
                            sound.channel = sound.sound.play(isLoop);
                        sound.channel.volume = 0.5;
                        sound.channel.position = 0.05;
                    }
                    else {
                        if (isStopAll)
                            sound.channel.stop();
                    }
                }
                if (!flag) {
                    sound = new com.model.localData.SoundVO();
                    sound.sound = RES.getRes(key);
                    console.log(RES.getRes(key));
                    sound.key = key;
                    if (!(this.mute))
                        sound.channel = sound.sound.play(isLoop);
                    this.soundArr.push(sound);
                    if (sound.key == "sound_bg")
                        sound.channel.volume = 0.5;
                    else if (sound.key == "sound_jump0")
                        sound.channel.volume = 0.5;
                }
            };
            /**
             * 停止播放
             * @key 播放KEY
             */
            p.stop = function (key) {
                var index = this.findSound(key);
                var sound;
                console.log(this.soundArr[index]);
                if (index != -1) {
                    sound = this.soundArr[index];
                    sound.channel.stop();
                }
            };
            /**
             * 停止所有
             */
            p.stopAll = function () {
                var i = 0;
                for (i = 0; i < this.soundArr.length; i++)
                    this.soundArr[i].channel.stop();
            };
            d(p, "mute"
                /**
                 * 是否静音
                 */
                ,function () {
                    return this._mute;
                }
                /**
                 * 是否静音
                 */
                ,function (value) {
                    var i = 0;
                    this._mute = value;
                    for (i = 0; i < this.soundArr.length; i++) {
                        if (this._mute)
                            this.soundArr[i].channel.stop();
                    }
                    /*if (!(this._mute))
                     this.play("sound_bg", true, false);*/
                }
            );
            p.findSound = function (key) {
                var result = -1;
                var i = 0;
                for (i = 0; i < this.soundArr.length; i++) {
                    if (this.soundArr[i].key == key) {
                        result = i;
                        break;
                    }
                }
                return result;
            };
            d(SoundManager, "instance"
                ,function () {
                    if (this._instance == null)
                        this._instance = new SoundManager();
                    return this._instance;
                }
            );
            return SoundManager;
        }());
        controller.SoundManager = SoundManager;
        egret.registerClass(SoundManager,'com.controller.SoundManager');
    })(controller = com.controller || (com.controller = {}));
})(com || (com = {}));
