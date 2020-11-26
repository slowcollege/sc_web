import http from './http';
import m from '@/assets/js/common';

var usePrefix = process.env.BASE_URL;//user服务前缀



//登录接口
export function login(params) {
    return http.loginpost(`${usePrefix}user/login`,params)
}
//首页列表接口
export function getClassStudent(params) {
    return http.get(`${usePrefix}user/getClassStudent`,params)
}
//个人中心接口
export function getStudentProfile(params) {
    return http.get(`${usePrefix}user/getStudentProfile`,params)
}
//待打卡列表查询
export function getStudentTrainingTask(params) {
    return http.get(`${usePrefix}user/getStudentTrainingTask`,params)
}


/*---------------------------其他模块---------------------------*/






