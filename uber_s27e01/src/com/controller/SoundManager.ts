module com.controller {
    export class SoundManager {
        soundArr: Array<com.model.localData.SoundVO> = new Array();//声音数组
        private _mute: boolean = false;//是否静音
        private static _instance: SoundManager;//单例
        constructor() {
        }

        /**
         * 开始播放
         * @key 播放KEY
         * @isLoop 是否循环
         * @isStopAll 是否停止其他
         */
        play(key: string, isLoop: number, isStopAll: boolean) {//开始播放
            var i = 0;
            var sound: com.model.localData.SoundVO;
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
                    if(isStopAll)
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
        }

        /**
         * 停止播放
         * @key 播放KEY
         */
        stop(key:String) {//停止播放
            var index = this.findSound(key);
            var sound: com.model.localData.SoundVO;

            console.log(this.soundArr[index]);
            if (index != -1) {
                sound = this.soundArr[index];
                sound.channel.stop();
            }
        }

        /**
         * 停止所有
         */
        stopAll() {//停止所有
            var i = 0;

            for (i = 0; i < this.soundArr.length; i++)
                this.soundArr[i].channel.stop();
        }

        /**
         * 是否静音
         */
        set mute(value: boolean) {
            var i = 0;

            this._mute = value;
            for (i = 0; i < this.soundArr.length; i++) {
                if (this._mute)
                    this.soundArr[i].channel.stop();
            }
            /*if (!(this._mute))
             this.play("sound_bg", true, false);*/
        }

        /**
         * 是否静音
         */
        get mute() {
            return this._mute;
        }

        private findSound(key: String) {//查找声音
            var result = -1;
            var i = 0;

            for (i = 0; i < this.soundArr.length; i++) {
                if (this.soundArr[i].key == key) {
                    result = i;
                    break;
                }
            }

            return result;
        }

        static get instance(): SoundManager {//单例
            if (this._instance == null)
                this._instance = new SoundManager();

            return this._instance;
        }
    }
}  