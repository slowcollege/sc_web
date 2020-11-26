<template>
    <div class="container">
        <div class="check_nav">
            <i class="iconfont" @click="goBack">&#xe766;</i>
        </div>

        <div class="check_top_box jf_flex_col">
            <div class="check_date">2020.11.13</div>
            <div class="check_tips">每日习惯养成计划</div>
        </div>

        <div class="check_list_item jf_flex_between" v-for="task in taskInfo">
            <div class="left_box">
                <div>
                    <input type="checkbox" class="ca_checkbox_input" :checked="task.state" disabled>
                </div>
            </div>
            <div class="right_box jf_flex_col">
                <div class="check_title jf_flex_between">
                    <div><i class="iconfont">&#xe6d1;</i>每天{{task.name}}{{task.target}}{{task.unit}}</div>
                    <div class="court">+1学分</div>
                </div>
                <div class="media_box jf_flex_start jf_flex_wrap">
                    <div class="media_item_box"> <div class="file_bg"></div> <input type="file" class="file" name=file accept="image/*" readonly></div>
                    <div class="media_item_box"> <div class="video_bg"></div> <input type="file" class="file" name=file accept="video/*" readonly></div>
                    <div class="media_item_box" v-for="it in 4"><img class="media" src="../../assets/images/img_loading.gif" alt=""></div>
                </div>

                <div class="remark_box" v-if="task.id === 1">
                    <div class="read_item">
                        读书 <input type="text"> 页
                    </div>
                </div>
                <div class="remark_box" v-else>
                    <div class="write_item">
                        <textarea name="ryn" id="b" cols="30" rows="10"></textarea>
                    </div>
                </div>

            </div>
        </div>





<!--        <div class="check_list_item jf_flex_between">-->
<!--            <div class="left_box">-->
<!--                <div>-->
<!--                    <input type="checkbox" class="ca_checkbox_input" checked="checked" disabled>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="right_box jf_flex_col">-->
<!--                <div class="check_title jf_flex_between">-->
<!--                    <div><i class="iconfont">&#xe6d1;</i>每天读1页书（非虚构书）</div>-->
<!--                    <div class="court">+1学分</div>-->
<!--                </div>-->
<!--                <div class="media_box jf_flex_start jf_flex_wrap">-->
<!--                    <div class="media_item_box"> <div class="file_bg"></div> <input type="file" class="file" id="file1" name=file accept="image/*" readonly></div>-->
<!--                    <div class="media_item_box"> <div class="video_bg"></div> <input type="file" class="file" id="video1" name=file accept="video/*" readonly></div>-->
<!--                    <div class="media_item_box" v-for="it in 4"><img class="media" src="../../assets/images/img_loading.gif" alt=""></div>-->
<!--                </div>-->

<!--                <div class="remark_box">-->
<!--                    <div class="read_item">-->
<!--                        读书 <input type="text"> 页-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->
<!--        <div class="check_list_item jf_flex_between">-->
<!--            <div class="left_box">-->
<!--                <div>-->
<!--                    <input type="checkbox" class="ca_checkbox_input" disabled>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="right_box jf_flex_col">-->
<!--                <div class="check_title jf_flex_between">-->
<!--                    <div><i class="iconfont">&#xe6d1;</i>每天写作50字</div>-->
<!--                    <div class="court">+1学分</div>-->
<!--                </div>-->
<!--                <div class="media_box jf_flex_start jf_flex_wrap">-->
<!--                    <div class="media_item_box"> <div class="file_bg"></div> <input type="file" class="file" id="file1" name=file accept="image/*" readonly></div>-->
<!--                    <div class="media_item_box"> <div class="video_bg"></div> <input type="file" class="file" id="video1" name=file accept="video/*" readonly></div>-->
<!--                    <div class="media_item_box" v-for="it in 4"><img class="media" src="../../assets/images/img_loading.gif" alt=""></div>-->
<!--                </div>-->

<!--                <div class="remark_box">-->
<!--                    <div class="write_item">-->
<!--                        <textarea name="ryn" id="b" cols="30" rows="10"></textarea>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="check_list_item jf_flex_between">-->
<!--            <div class="left_box">-->
<!--                <div>-->
<!--                    <input type="checkbox" class="ca_checkbox_input" checked="checked" disabled>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="right_box jf_flex_col">-->
<!--                <div class="check_title jf_flex_between">-->
<!--                    <div><i class="iconfont">&#xe6d1;</i>每天1个俯卧撑</div>-->
<!--                    <div class="court">+1学分</div>-->
<!--                </div>-->
<!--                <div class="media_box jf_flex_start jf_flex_wrap">-->
<!--                    <div class="media_item_box"> <div class="file_bg"></div> <input type="file" class="file" id="file2" name=file accept="image/*" readonly></div>-->
<!--                    <div class="media_item_box"> <div class="video_bg"></div> <input type="file" class="file" id="video2" name=file accept="video/*" readonly></div>-->
<!--                    <div class="media_item_box" v-for="it in 4"><img class="media" src="../../assets/images/img_loading.gif" alt=""></div>-->
<!--                </div>-->

<!--                <div class="remark_box">-->
<!--                    <div class="write_item">-->
<!--                        <textarea name="ryn" id="a" cols="30" rows="10"></textarea>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="check_submit_btn">
            提交
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {getStudentTrainingTask} from '@/api/apis';
    import util from '@/assets/js/util'
    export default {
        data() {
            return {
                taskInfo: []
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            //获取待打卡数据
            getData:function(){
                util.m.showLoading();
                getStudentTrainingTask().then((res)=>{
                    util.m.removeLoading();
                    if(res.data){
                        this.taskInfo = res.data;
                    }
                }).catch(err=>{})
            },
            goBack:function () {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .check_nav {
        width: calc(100vw);
        height: 45px;
        background-color: #fff;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        position: fixed;
        left: 0;
        top: 0;
        color: #fff;
        z-index: 300;
    }
    .check_nav i{
        float: left;
        padding-left: 15px;
        font-size: 24px;
        color: #DFAB26;
    }
    .check_top_box{
        padding: 10px 20px;
        padding-top: 45px;
        background-color: #fff;
    }
    .check_top_box .check_date{
        width: 100%;
        text-align: left;
        font-size: 16px;
        color: #DFAB26;
    }
    .check_top_box .check_tips{
        width: 100%;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
    }

    .check_list_item{
        width: 100%;
        padding: 15px 0;
        background-color: #fff;
        margin-top: 10px;
    }
    .check_list_item .left_box{
        width: 40px;
        height: 100%;
        align-self: flex-start;
    }
    .check_list_item .right_box{
        width: calc(100vw - 55px);
        padding-right: 15px;
    }
    .check_list_item .right_box .check_title{
        font-size: 16px;
        color: #515150;
    }
    .check_list_item .right_box .check_title i{
        color: #DFAB25;
        font-size: 16px;
        padding-right: 6px;
    }
    .check_list_item .right_box .check_title .court{
        color: #159F34;
    }

    .check_list_item .right_box .media_box{
        padding: 10px 0;
    }
    .check_list_item .right_box .media_box .media_item_box{
        width: 60px;
        height: 60px;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
    }
    .check_list_item .right_box .media_box .media_item_box .file{
        width: 60px;
        height: 60px;
        border: none;
        opacity: 0;
    }
    .check_list_item .right_box .media_box .media_item_box .file_bg{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 0;
        top: 0;
        border: none;
        background: url("../../assets/images/upload_img.png")no-repeat center center;
        background-size: 50%;
    }
    .check_list_item .right_box .media_box .media_item_box .video_bg{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 0;
        top: 0;
        border: none;
        background: url("../../assets/images/upload_video.png")no-repeat center center;
        background-size: 50%;
    }
    .check_list_item .right_box .media_box .media_item_box .media{
        width: 100%;
        height: 100%;
    }

    .check_list_item .right_box .remark_box{

    }
    .check_list_item .right_box .remark_box .read_item{
        padding: 5px 0;
        height: 24px;
        line-height: 24px;
        text-align: left;
        font-size: 16px;
    }
    .check_list_item .right_box .remark_box .read_item input{
        border: 1px solid #8a8a8a;
        width: 60px;
        height: 24px;
        padding: 0 3px;
    }
    .check_list_item .right_box .remark_box .write_item{
        padding: 5px;
        min-height: 60px;
        border: 1px solid #8a8a8a;
    }
    .check_list_item .right_box .remark_box .write_item textarea{
        width: 100%;
        height: 60px;
    }


    .ca_checkbox_input {
        position: relative;
        background-color: #fff;
        width: 20px;
        height: 20px;
        border: 1px solid #ddd;
        border-radius: 50%;
        display: inline-block;
        margin-top: 2px;
        cursor: default;
        -webkit-appearance: none;
        -webkit-user-select: none;
        user-select: none;
        -webkit-transition: background-color ease .1s;
        transition: background-color ease .1s;

       margin-left: 10px;
    }
    .ca_checkbox_input:checked {
        background-color: #ff0200;
        border: 1px solid #ff0200;
        text-align: center;
        background-clip: padding-box;
    }
    .ca_checkbox_input:before {
        content: '';
        width: .5rem;
        height: .3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -.25rem;
        margin-top: -.25rem;
        background: 0 0;
        border: 1px solid #fff;
        border-top: 0;
        border-right: 0;
        z-index: 2;
        border-radius: 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .check_submit_btn{
        width: 80%;
        height: 45px;
        margin: 20px auto;
        background-color: #ff0200;
        text-align: center;
        line-height: 45px;
        color: #fff;
        border-radius: 22.5px;

    }
</style>
