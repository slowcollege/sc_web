import http from './http';
import m from '@/assets/js/common';

var usePrefix = process.env.BASE_URL;//user服务前缀



//登录接口
export function login(params) {
    return http.loginpost(`${usePrefix}user/login`,params)
}


/*---------------------------其他模块---------------------------*/






