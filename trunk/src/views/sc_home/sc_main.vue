<template>

    <div class="container">
        <div class="pop_image" v-show="popImage.show" @click="popImage.show=false,popImage.imageUrl=''">
            <div>
              <img :src="popImage.imageUrl" v-if="popImage.type==1">
              <video :src="popImage.imageUrl" v-if="popImage.type==2" autoplay="true" @click.stop> </video>
            </div>
        </div>


        <div class="main_top_box">
            <div class="main_top_name">我的{{listInfo.className}}</div>
<!--            <div class="main_top_name">{{listInfo.className}}</div>-->
            <div class="main_top_tip">种一棵树最好的时间是十年前，其次是现在。</div>

<!--            <div class="main_top_tip">{{listInfo.classDesc}}</div>-->
        </div>
        <div class="main_date_box jf_flex_between">
            <i class="iconfont" @click="changeDate(-1)">&#xe766;</i>
            <div class="date">{{date | formatDate}}</div>
            <i class="iconfont" @click="changeDate(1)">&#xe765;</i>
        </div>

        <div class="list_item_box" v-for="stu in studentsInfo">
            <div class="list_item_top jf_flex_between">
                <div class="left_num"><div>{{stu.code}}</div></div>
                <div class="right_box jf_flex_col">
                    <div class="top_box jf_flex_between">
                        <div class="info_box jf_flex_col">
                            <div class="name">{{stu.name}} <span v-if="stu.duty">({{stu.duty}})</span></div>
                            <div class="experience">已学习{{stu.trainingDays}}天，获得{{stu.score}}积分</div>
                        </div>
                        <div class="btn_box jf_flex_between">
                            <div  v-for="item in stu.trainings">
                              <!--  <i class="iconfont" v-if="item.id===1" :class="item.state?'orange':''">&#xe6d1;</i>写作
                                <i class="iconfont" v-if="item.id===2" :class="item.state?'orange':''">&#xe762;</i> 读书
                                <i class="iconfont" v-if="item.id===3" :class="item.state?'orange':''">&#xe807;</i> 运动
                                -->
                                <i class="iconfont" v-if="item.id===1" :class="item.state?'orange':''">&#xe762;</i>
                                <i class="iconfont" v-if="item.id===2" :class="item.state?'orange':''">&#xe807;</i>
                                <i class="iconfont" v-if="item.id===3" :class="item.state?'orange':''">&#xe6d1;</i>
                            </div>
                        </div>
                    </div>

                    <div class="media_box jf_flex_start jf_flex_wrap" v-if="(stu.imgList && stu.imgList.length!==0) || (stu.videoList && stu.videoList.length!==0) ">

                        <div class="media_box"  v-for="img in stu.imgList" v-if="img">
                            <img class="media" data-src="../../assets/images/img_loading.gif" alt="" :src="img+'>square200'" @click="onClickMedia(1,img)">
                        <div class="media_box"  v-for="img in stu.imgList" v-if="img" @click="showImg(img)">
                            <img class="media" data-src="../../assets/images/img_loading.gif" alt="" :src="img">
                        </div>
                        <div class="media_box"  v-for="video in stu.videoList">
                            <video class="media" :src="video"   @click="onClickMedia(2,video)">
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>


<!--                        <img class="media" src="../../assets/images/img_loading.gif" alt="">-->
<!--                        <img class="media" src="../../assets/images/img_loading.gif" alt="">-->
<!--                        <img class="media" src="../../assets/images/img_loading.gif" alt="">-->
<!--                        <img class="media" src="../../assets/images/img_loading.gif" alt="">-->
<!--                        <img class="media" src="../../assets/images/img_loading.gif" alt="">-->
                    </div>
                </div>
            </div>
            <div class="list_item_bottom jf_flex_col">
                <div class="done_item" v-for="target in stu.trainings" v-if="target.state">{{target.name}}{{ target.achievement || 0 }}{{target.unit}}</div>
            </div>
        </div>
        <div class="empty_item"></div>

        <div class="clock_btn" @click.prevent.stop="goCheck"></div>

        <yls-footer :obj="{'one':'current_page jd_tab_on','two':'current_page'}"></yls-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import util from '@/assets/js/util';
    import footer from '../../components/sc_footer/sc_footer';
    import {getClassStudent} from '@/api/apis';
    // import {init} from '@/assets/js/showImgs';
    export default {
        name: 'navbar',
        data() {
            return {
                popImage:{show:false,imageUrl:"",type:0},
                date:'',
                studentsInfo:[],
                listInfo:{}
            }
        },
        components: {
            'yls-footer': footer,//tab组件
        },
        created(){
            this.initData();
        },
        mounted(){
            this.getListInfo();
        },
        methods: {
            initData:function(){
                this.date = new Date();
            },

            onClickMedia:function(type,url){
              this.popImage.type=type;
              this.popImage.imageUrl=url;
              this.popImage.show=true;
            },
            //获取列表数据
            getListInfo:function(){
                util.m.showLoading();
                this.studentsInfo = [];
                this.listInfo = {};
                getClassStudent({date:util.m.dateFormat(this.date)}).then((res)=>{
                    util.m.removeLoading();
                    if(res.data){
                        this.listInfo = res.data;
                        this.studentsInfo = res.data.student;

                        for(let val of this.studentsInfo){
                            val.imgList = [];
                            val.videoList = [];
                            for(let trans of val.trainings){
                               if(trans.imgList && trans.imgList.length !==0){
                                   /* val.imgList = val.imgList.concat(trans.imgList); */
                                   trans.imgList.forEach(item => {
                                       if (item) val.imgList.push(item);
                                   });
                               }
                               if(trans.videoUrl){
                                   val.videoList.push(trans.videoUrl);
                               }
                            }
                        }
                        /*util.m.log( this.studentsInfo)*/
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

            },
            //切换日期
            changeDate:function (day) {
                let tomorrow = this.getTomorrow();
                let date = new Date(this.date);
                date.setTime(date.getTime()+ day * (1000*60*60*24));
                console.log(date);
                if(util.m.dateFormat(date) === util.m.dateFormat(tomorrow)){
                    util.m.showText('已经最新')
                }else{
                    this.date = new Date(date);
                    this.getListInfo();
                }
            },
            //获取明天的日期
            getTomorrow:function () {
                let today = new Date();
                let tomorrow =  today.setTime(today.getTime()+ (1000*60*60*24));
                return new Date(tomorrow);
            },

            showImg:function (img) {
                console.log(img);
                util.si.init(img);
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
    }
    .list_item_top .right_box .btn_box i.orange{
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
    .list_item_top .right_box .media_box .media_box{
        width: calc(20vw - 21px);
        height: calc(20vw - 21px);
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .list_item_top .right_box .media_box .media_box .media{
        width: 100%;
        height: 100%;
        border: none;
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

    .pop_image{
      position: fixed;
      display:table;
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,.6);
      z-index: 750;
    }
    .pop_image>div{
       display: table-cell;
       vertical-align: middle;
     }
    .pop_image>div>img,.pop_image>div>video{
      display: block;
      width:auto;
      height:auto;

      max-width: 80%;
      max-height:80%;
      margin:0 auto;
    }


    /*.sc_img_bg{*/
    /*    width: calc(100vw);*/
    /*    height: calc(100vh);*/
    /*    background-color: rgba(0,0,0,.3);*/
    /*    position: fixed;*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*    z-index: 1010;*/
    /*}*/
    /*.sc_img_bg .img{*/
    /*    position: absolute;*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    width: calc(100vw);*/
    /*    height: calc(100vw);*/
    /*}*/

</style>
