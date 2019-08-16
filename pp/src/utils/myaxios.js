import axios from 'axios';

export default function(arr){
    //默认函数
    function _myaxios(){
        this.vueob=null;
    }
    //原型对象
    _myaxios.prototype={
        v(ob){
            this.vueob=ob;
            this.status=true;
        },
        //生成请求
        getAxios(config){
            let _url=config.url; 
            let _type=config.type;
            let _data=config.data;
            let factory={
                get:function(){
                    return axios.get(_url);
                },
                post:function(){
                    return axios.post(_url,_data);
                }
            }
            return factory[_type];
        },
        //发送请求
        sendAxios(config){
            let _axios=this.getAxios(config);
            if(this.status || !config.isBlock){
                config.isBlock ? this.status =false :"";
                _axios().then((res)=>{
                    this.status=true;
                    config.success === 'default'?
                    this.handleAxios(config.dataname,res): 
                    config.success.call(this.vueob,res); 
                }).catch((err)=>{
                    this.status=true;
                    config.error === 'default'?
                    this.handleAxios(config.dataname,err.response): 
                    config.error.call(this.vueob,err); 
                })
            }
        },
        //处理请求
        handleAxios(dataname,data){
            this.vueob[dataname]=data;
            let responseStatus={
                200: '服务器成功返回请求的数据。',
                201: '新建或修改数据成功。',
                202: '一个请求已经进入后台排队（异步任务）。',
                204: '删除数据成功。',
                400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
                401: '用户没有权限（令牌、用户名、密码错误）。',
                403: '用户得到授权，但是访问是被禁止的。',
                404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
                406: '请求的格式不可得。',
                410: '请求的资源被永久删除，且不会再得到的。',
                422: '当创建一个对象时，发生一个验证错误。',
                500: '服务器发生错误，请检查服务器。',
                502: '网关错误。',
                503: '服务不可用，服务器暂时过载或维护。',
                504: '网关超时。',
            }
            if(data.status!==200&&data.status){
                console.log(responseStatus[data.status]);
            }
        }
    }
    //生成请求
    // _myaxios.prototype.getAxios=function(config){
    //     var _url=config.url; 
    //     var _type=config.type;
    //     var _data=config.data;
    //     var factory={
    //         get:function(){
    //             return axios.get(_url);
    //         },
    //         post:function(){
    //             return axios.post(_url,_data);
    //         }
    //     }
    //     return factory[_type];
    // }
    //发送请求
    // _myaxios.prototype.sendAxios=function(config){
    //     var _axios=this.getAxios(config);
    //     var self=this;
    //     if(this.status || !config.isBlock){
    //         config.isBlock ? this.status =false :"";
    //         _axios().then(function(res){
    //             self.status=true;
    //             config.success === 'default'?
    //             self.handleAxios(config.dataname,res.data): 
    //             config.success.call(self.vueob,res); 
    //         }).catch(function(error){
    //             console.log(error.response)
    //         })
    //     }
    // }
    // //处理请求
    // _myaxios.prototype.handleAxios=function(dataname,data){
    //     console.log(data)
    //     this.vueob[dataname]=data;
    // }

    //初始化部分
    var _a=new _myaxios();
    arr.forEach(function(item,index){
        _a[item.name]=function(config){
            _a.sendAxios({
                url:item.url,
                type:config && config.type || 'get',
                success:config && config.success || 'default',
                data:config && config.data || {},
                dataname:config && config.dataname || item.name,
                isBlock:config && config.isBlock || true,
                error:config && config.error || 'default',
            });
        }
    });



    return _a;
}