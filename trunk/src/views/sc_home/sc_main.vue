<template>
    <div class="container">
        <div class="main_top_box">
<!--            <div class="main_top_name">我的班</div>-->
<!--            <div class="main_top_tip">种一棵树最好的时间是十年前，其次是现在。</div>-->
            <div class="main_top_name">{{listInfo.className}}</div>
            <div class="main_top_tip">{{listInfo.classDesc}}</div>
        </div>
        <div class="main_date_box jf_flex_between">
            <i class="iconfont">&#xe766;</i>
            <div class="date">{{date}}</div>
            <i class="iconfont">&#xe765;</i>
        </div>

        <div class="list_item_box" v-for="stu in listInfo.student">
            <div class="list_item_top jf_flex_between">
                <div class="left_num"><div>{{stu.code}}</div></div>
                <div class="right_box jf_flex_col">
                    <div class="top_box jf_flex_between">
                        <div class="info_box jf_flex_col">
                            <div class="name">{{stu.name}} <span v-if="stu.duty">{{stu.duty}}</span></div>
                            <div class="experience">已学习{{stu.trainingDays}}天，获得{{stu.score}}积分</div>
                        </div>
                        <div class="btn_box jf_flex_between">
                            <i class="iconfont">&#xe6d1;</i>
                            <i class="iconfont">&#xe762;</i>
                            <i class="iconfont">&#xe807;</i>
                        </div>
                    </div>

                    <div class="media_box jf_flex_between">
                        <img class="media" src="../../assets/images/img_loading.gif" alt="">
                        <img class="media" src="../../assets/images/img_loading.gif" alt="">
                        <img class="media" src="../../assets/images/img_loading.gif" alt="">
                    </div>
                </div>
            </div>
            <div class="list_item_bottom jf_flex_col">
                <div class="done_item">读书5页</div>
                <div class="done_item">写了关于沟通能力的内容</div>
                <div class="done_item">俯卧撑10个</div>
            </div>
        </div>
        <div class="empty_item"></div>

        <div class="clock_btn" @click="goCheck">打卡</div>




        <yls-footer :obj="{'one':'current_page jd_tab_on','two':'current_page'}"></yls-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import util from '@/assets/js/util';
    import footer from '../../components/sc_footer/sc_footer';
    import {getClassStudent} from '@/api/apis';
    export default {
        name: 'navbar',
        data() {
            return {
                date:'2020-11-24',
                studentsInfo:[],
                listInfo:{}
            }
        },
        components: {
            'yls-footer': footer,//tab组件
        },
        creted(){},
        mounted(){
            this.getListInfo();
        },
        methods: {
            getListInfo:function(){
                let param = {
                    date:this.date
                };
                getClassStudent(param).then((res)=>{
                    if(res.result){
                        this.listInfo = res.result;
                        this.studentsInfo = res.result.student;
                    }
                }).catch(err=>{

                })
            },
            goCheck:function () {
                if(!util.m.getCookie('sc_token')){
                    this.$router.push('/login')
                }else{
                    this.$router.push('/check')
                }

            }
        }
    }


</script>
<style scoped>
    .main_top_box{
       padding:20px;
       background-color: #fff;
        position: relative;
   }
    .main_top_box:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background-color: #bbb;
    }
    .main_top_name{
        width: 100%;
        height: 50px;
        text-align: left;
        font-size: 26px;
        line-height: 50px;
        font-weight: bold;
        color: #020202;
    }
    .main_top_tip{
        width: 100%;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        color: #9E9E9F;
    }
    .main_date_box{
        padding: 5px 0;
        background-color: #fff;
    }
    .main_date_box .date{
        font-size: 24px;

    }
    .main_date_box i{
        font-size: 20px;
        padding: 0 15px;
    }
    .list_item_box{
        padding: 15px 0;
        background-color: #fff;
        margin-bottom: 10px;
    }

    .list_item_top{
        width: 100%;
    }
    .list_item_top .left_num{
        width: 15px;
        padding-left: 15px;
        padding-right: 10px;
        text-align: center;
        font-size: 12px;
        align-self: flex-start;
        height: 28px;
        line-height: 28px;
    }
    .list_item_top .right_box{
        width: calc(100vw - 40px);
        height: 100%;
        position: relative;
    }
    .list_item_top .right_box .top_box{
        padding-right: 15px;
    }
    .list_item_top .right_box .btn_box{
        height: 100%;
    }
    .list_item_top .right_box .btn_box i{
        padding: 10px;
        font-size: 20px;
        color: orange;
    }
    .list_item_top .right_box .name{
       font-size: 14px;
        color: #4a4a4a;
        padding-bottom: 5px;
    }
    .list_item_top .right_box .experience{
       font-size: 12px;
       color: #919192;
    }
    .list_item_top .right_box .media_box{
        padding: 10px 15px 10px 0;
    }
    .list_item_top .right_box .media_box .media{
        width: 30%;
    }
    .list_item_bottom{
        padding-top: 10px;
        padding-left: 40px;
        font-size: 14px;
        color: #4a4a4a;
    }
    .list_item_bottom .done_item{
        padding-left: 8px;
        position: relative;
        height: 22px;
        line-height: 22px;
    }
    .list_item_bottom .done_item:before{
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: black;
        left: 0;
        top: 9px;
    }
    .empty_item{
        width: 100%;
        height: 50px;
    }
    .clock_btn{
        position: fixed;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: lightblue;
        bottom: 30px;
        left: calc(50vw - 40px);
        z-index:1000;
    }
</style>
