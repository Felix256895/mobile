/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 17/11/01
 */
import axios from 'axios';
import { Dialog } from 'vant';
const Utils = {
    post(purl,jsonStr, callback,report){
        axios(
            {
                method: 'post',
                url: purl,
                responseType:'json',
                data:jsonStr,
            },
            {
                "headers": {"Content-Type": "application/x-www-form-urlencodeed"}
            }
        ).then(function (response) {
                if(response.data.code==0){
                    callback(response.data);
                }else{
                    report(response.data);
                }
                if(response.data.code=='-3'){
                    Dialog.alert({
                        title: '登录失效',
                        message: '亲~需要重新登录了哦！'
                        }).then(() => {
                            location.href='/'
                        });
                }
            }
        ).catch(function (error) {
            console.log(error)
        });
    },

    get(purl,jsonStr, callback,report){
        axios.get(purl, { 
            params: jsonStr,
            responseType:'json',
        })
        .then(function (res) {
            if(res.data.code==0){
                callback(res.data);
            }else{
                report(res.data);
            }
            if(res.data.code=='-1'){
                Dialog.alert({
                    title: '登录失效',
                    message: '亲~需要重新登录了哦！'
                    }).then(() => {
                        location.href='/'
                    });
            }
        })
        .catch(function (err) {
            console.log(err);
        })
    },

    // 拼接对象
    concats(target, source) {       
        for (var obj in source) {
          target[obj] = source[obj];
        }        
        return target;
    },

    obj:{
        'mobile_model':'web',
        'mobile_system':'1.0', 
    },
    // 时间还有多少天
    getTimeAgo(ts){
        if(ts <= 0) { return '未知'}
        let n=new Date().getTime();
        let f=n-ts;
        let bs=(f>=0?'前':'后');//判断时间点是在当前时间的 之前 还是 之后
        f=Math.abs(f);
        if(f<6e4){return '刚刚'}//小于60秒,刚刚
        if(f<36e5){return parseInt(f/6e4)+'分钟'+bs}//小于1小时,按分钟
        if(f<864e5){return parseInt(f/36e5)+'小时'+bs}//小于1天按小时
        if(f<2592e6){return parseInt(f/864e5)+'天'+bs}//小于1个月(30天),按天数
        if(f<31536e6){return parseInt(f/2592e6)+'个月'+bs}//小于1年(365天),按月数
        return parseInt(f/31536e6)+'年'+bs;//大于365天,按年算
    },
    // 时间年月日
    getLocalTime(nS, dt = 'date') {
        let date = new Date(nS);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() < 10 ? '0'+date.getDate()+ ' ' : date.getDate()+ ' ';
        let h = date.getHours() < 10 ? '0'+date.getHours() + ':' : date.getHours()+':';
        let m = date.getMinutes() < 10 ? '0'+date.getMinutes() + ':' : date.getMinutes()+':';
        let s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

        if(dt == 'date'){
            return Y+M+D;
        }else if(dt == 'time'){
            return h+m+s;
        }else if( dt == 'datetime'){
            return Y+M+D+h+m+s;
        }
        return Y+M+D;
    },

    getTime(ns,data){
        let date = new Date(ns);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        let D = date.getDate() < 10 ? '0'+date.getDate()+ ' ' : date.getDate()+ ' ';
        let h = date.getHours() < 10 ? '0'+date.getHours() + ':' : date.getHours()+':';
        let m = date.getMinutes() < 10 ? '0'+date.getMinutes() + ':' : date.getMinutes()+':';
        let s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();  
        if(data=='M'){
            return M;
        }else if(data=='D'){
            return D;
        }
    }

};

export default Utils;
