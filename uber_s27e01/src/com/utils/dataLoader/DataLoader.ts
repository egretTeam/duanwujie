module com.utils.dataLoader{
    declare var $, JQuery;
    export class DataLoader {
        url: string;//url;
        cmd: string;//cmd        
        constructor() {
            
        }

        getData(cmd: string, url: string, data?: any) {//发送数据-get
            this.cmd = cmd;
            this.url = url;

            $.get(url, this.onGetStatus.bind(this));
        }

        sendData(cmd: string, url: string, data?: any) {//发送数据-jsonp
            this.cmd = cmd;
            this.url = url;

            $.ajax({
                type: "GET",
                url: url,
                data: data,
                dataType: "jsonp",
                async: !0,
                cache: !1,
                success: this.onStatus.bind(this),
                error: this.onError.bind(this)
            });
        }

        getScript(cmd:string, url:string) {
            this.cmd = cmd;
            this.url = url;

            $.getScript(url, this.onScriptSuccess.bind(this));
        }

        onGetStatus(data: Object) {//get响应
            com.controller.EventManager.instance.dispatchEvent(new DataLoaderEvent(DataLoaderEvent.COMPLETE, { cmd: this.cmd, data: data }));
        }

        onStatus(data: Object) {//响应
            com.controller.EventManager.instance.dispatchEvent(new DataLoaderEvent(DataLoaderEvent.COMPLETE, { cmd: this.cmd, data:data}));
        }

        onError(data:Object) {//失败
            com.controller.EventManager.instance.dispatchEvent(new DataLoaderEvent(DataLoaderEvent.ERROR, { cmd: this.cmd, data: null }));
        }

        onScriptSuccess(response, status) {//页面加载成功
            alert("页面加载成功");
        }
    }
} 