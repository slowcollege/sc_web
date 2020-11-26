/****   http.js   ****/
// 导入封装好的axios实例
import request from './request'
import qs from 'qs'
import m from "../assets/js/common";
import md5 from 'js-md5';


const http ={
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url,params){
        if(!params)params = {};
        params.token = m.getCookie('sc_token') || null;

        const config = {
            method: 'get',
            url:url
        };
        if(params) config.params = params;
        return request(config)
    },
    //普通格式的调用
    post(url,params){
        if(!params)params = {};
        params.token = m.getCookie('sc_token') || null;
        const config = {
            method: 'post',
            url:url,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            data:params
        };
        return request(config)
    },
    //formdata格式的调用
    formpost(url,params){
        if(!params)params = {};
        params.token = m.getCookie('sc_token') || null;
        const config = {
            method: 'post',
            url:url,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify(params)
        };
        return request(config)
    },
    //formdata格式的调用
    loginpost(url,params){
        params.password = md5(params.password);
        const config = {
            method: 'post',
            url:url,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify(params)
        };
        return request(config)
    },
    //上传图片处理
    upload(url,data){
        url = url+'?token='+m.getCookie('sc_token');
        const config = {
            method: 'post',
            url:url,
            headers: {'Content-Type': 'multipart/form-data'},
            data:data
        };
        return request(config)
    },

};
//导出
export default http
