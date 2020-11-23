<template>
    <div class="container">

        <div class="mine_nav">个人中心</div>
        <div class="mine_content">
            <div class="mine_info_box jf_flex_between">
                <div class="head_info_box">
                    <div class="inner"></div>
                </div>
                <div class="user_info_box jf_flex_col">
                    <div class="user_name">张三李四</div>
                    <div class="user_info_line jf_flex_start"><img src="../../assets/icon/main_home_gray.png" alt="">2020级01班</div>
                    <div class="user_info_line jf_flex_start"><img src="../../assets/icon/main_home_gray.png" alt="">学号：06</div>
                </div>
            </div>

            <div class="mine_func_line jf_flex_between">
                <div class="title">学分</div>
                <div class="content"><span>950</span>学分</div>
            </div>
            <div class="mine_func_line jf_flex_between">
                <div class="title">账号</div>
                <div class="content">退出登录</div>
            </div>
        </div>





        <yls-footer :obj="{'one':'current_page','two':'current_page jd_tab_on'}"></yls-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import footer from '../../components/sc_footer/sc_footer';
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            'yls-footer': footer,//tab组件
        },
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
