import http from './http';
import m from '@/assets/js/common';

var usePrefix = process.env.BASE_URL;//user服务前缀



// 商城首页登录验证接口说明
export function loginCheck(params) {
    return http.formpost(`${usePrefix}user/checkLogin`,params)
}


/*---------------------------其他模块---------------------------*/






