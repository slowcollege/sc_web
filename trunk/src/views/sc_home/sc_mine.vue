<template>
    <div class="container">

        <div class="mine_nav">个人中心</div>
        <div class="mine_content">
            <div class="mine_info_box jf_flex_between">
                <div class="head_info_box">
                    <img class="inner" :src="stuInfo.image"/>
                </div>
                <div class="user_info_box jf_flex_col">
                    <div class="user_name">{{stuInfo.name}}</div>
                    <div class="user_info_line jf_flex_start"><img src="../../assets/icon/main_home_gray.png" alt="">{{stuInfo.className}}</div>
                    <div class="user_info_line jf_flex_start"><img src="../../assets/icon/main_home_gray.png" alt="">学号：{{stuInfo.code}}</div>
                </div>
            </div>

            <div class="mine_func_line jf_flex_between">
                <div class="title">学分</div>
                <div class="content"><span>{{stuInfo.score}}</span>学分</div>
            </div>
            <div class="mine_func_line jf_flex_between">
                <div class="title">账号</div>
                <div class="content" @click="outLogin">退出登录</div>
            </div>
        </div>

        <yls-footer :obj="{'one':'current_page','two':'current_page jd_tab_on'}"></yls-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import {getStudentProfile} from '@/api/apis';
    import util from '@/assets/js/util'
    import footer from '../../components/sc_footer/sc_footer';
    export default {
        data() {
            return {
                stuInfo:{},//个人中心信息
            }
        },
        components: {
            'yls-footer': footer,//tab组件
        },
        mounted(){
            this.getProfileInfo()
        },
        methods:{
            getProfileInfo:function () {
                util.m.showLoading();
                getStudentProfile().then(res=>{
                    if(res.data){
                        this.stuInfo = res.data;
                    }
                    util.m.removeLoading();
                }).catch()
            },
            outLogin:function () {
                util.m.removeCookie('sc_token');
                this.$router.push('/login')
            }
        }
    }
</script>
<style scoped>
    .mine_nav {
        width: calc(100vw);
        height: 45px;
        background-color: #FF342D;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        position: fixed;
        left: 0;
        top: 0;
        color: #fff;
        z-index: 300;
    }

    .mine_content{
        width: calc(100vw);
        height: calc(100vh - 100px);
        padding-top: 45px;
    }
    .mine_info_box{
        width: 100%;
        height: 120px;
        margin-bottom: 20px;
        background-color:lightblue;
    }
    .head_info_box{
        width: 80px;
        height: 80px;
        /*background-color: #fff;*/
        padding:20px 40px;
    }
    .head_info_box .inner{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #fff;
    }
    .user_info_box{
        width: calc(100vw - 160px);
        height:80px;
        padding: 20px 0;
    }
    .user_name{
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
    }
    .user_info_line{
        width: 100%;
    }
    .user_info_line img{
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
    .mine_func_line{
        padding: 10px 15px;
        background-color: #fff;
        position: relative;
        font-size: 14px;
    }
    .mine_func_line .title, .mine_func_line .content{
        height: 24px;
    }
    .mine_func_line :not(:last-child):after{
        content: "";
        position: absolute;
        width: calc(100vw - 30px);
        left: 15px;
        bottom: 0;
        height: 1px;
        background-color: rgba(0,0,0,.1);
    }
</style>
