/****   request.js   ****/
// 导入axios
import axios from 'axios/index'
import M from '../assets/js/common';
import router from '../router/index'
//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: process.env.BASE_API,
    // 超时时间 单位是ms，这里设置了30s的超时时间
    timeout: 3 * 10000
});
// 2.请求拦截器
service.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    // config.headers = {
    //     'Content-Type':'application/x-www-form-urlencoded' //配置请求头
    // }
    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // const token = M.getCookie('mallToken');//这里取token之前，你肯定需要先拿到token,存一下
    // if(token){
    //     // config.params = {'token':token} //如果要求携带在参数中
    //     config.headers.token= token; //如果要求携带在请求头中
    // }
    return config
}, error => {
    Promise.reject(error)
});

// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    if(response.data.code === 2){
        console.log(response.data);
        M.removeLoading();
        // M.showText('登录失效');
        // location.href = process.env.login;
        router.push('/login');
        return false;
    }else{
        console.log(response.data);
        return response.data
    }
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        // 1.公共错误处理
        // 2.根据响应码具体处理
        let showText = '';
        switch (error.response.status) {
            case 400:
                showText = '错误请求';
                break;
            case 401:
                showText = '未授权，请重新登录';
                break;
            case 403:
                showText = '拒绝访问';
                break;
            case 404:
                showText = '请求错误,未找到该资源';
                break;
            case 405:
                showText = '请求方法未允许';
                break;
            case 408:
                showText = '请求超时';
                break;
            case 500:
                showText = '服务器端出错';
                break;
            case 501:
                showText = '网络未实现';
                break;
            case 502:
                showText = '网络错误';
                break;
            case 503:
                showText = '服务不可用';
                break;
            case 504:
                showText = '网络超时';
                break;
            case 505:
                showText = 'http版本不支持该请求';
                break;
            default:
                showText = `系统异常`;
        }
        M.showText(showText);
    } else {
        // 超时处理
        console.log(error);
        if (JSON.stringify(error).includes('timeout')) {
            M.showText('服务器响应超时');
        }
        console.log('连接服务器失败')
    }
    M.removeLoading();
    console.log(error.message);
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response)
});
//4.导入文件
export default service
