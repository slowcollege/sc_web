/****   http.js   ****/
// 导入封装好的axios实例
import request from './request'
import qs from 'qs'
import m from "../assets/js/common";
const http ={
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url,params){
        const config = {
            method: 'get',
            url:url
        };
        if(params) config.params = params;
        return request(config)
    },
    //普通格式的调用
    post(url,params){
        params.token = m.getCookie('mallToken')||null;
        params.source = m.getCookie('mallSource')||null;
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
        params.token = m.getCookie('mallToken')?m.getCookie('mallToken'):null;
        params.source = m.getCookie('mallSource')?m.getCookie('mallSource'):null;
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
