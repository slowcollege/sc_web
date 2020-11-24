<!--<template>-->
<!--    <div class="footer">-->
<!--        <div v-for='(item,index) of items' :key="index" :class='[item.cls,{on:index === idx}]' @click="change(item,index,idx)">-->
<!--            <img :src="index===idx?item.srcSelect:item.src" v-if="showIconOrSrc">-->
<!--            <i :class="index===idx?item.iconSelect:item.icon" v-if="!showIconOrSrc"></i>-->
<!--            <span :class="['colorChange',{on:index===idx}]" >{{item.name}}</span>-->
<!--        </div>-->
<!--    </div>-->

<!--</template>-->

<!--<script type="text/ecmascript-6">-->
<!--    // eslint-disable-next-line-->
<!--    /* eslint-disable */-->
<!--    export default{-->
<!--        props:{-->
<!--            idx: {-->
<!--                type: Number,-->
<!--                default: 0,-->
<!--            },-->
<!--            showIconOrSrc:{-->
<!--                // true表示显示图片途径 src-->
<!--                // false 表示icon图标类名-->
<!--                type: Boolean,-->
<!--                default: true,-->
<!--            },-->
<!--            items: {-->
<!--                type: Array,-->
<!--                default: function () {-->
<!--                    return ([{-->
<!--                        cls: "mian",-->
<!--                        name: "首页",-->
<!--                        push: "/",-->
<!--                        icon: 'iconfont icon-shouye',-->
<!--                        iconSelect: 'iconfont icon-shouye',-->
<!--                        src: "http://118.190.209.124/img/home_normal.png",-->
<!--                        srcSelect: "http://118.190.209.124/img/home_selected.png"-->
<!--                    },-->
<!--                        {-->
<!--                            cls: "mine",-->
<!--                            name: "我的",-->
<!--                            push: "/mine",-->
<!--                            icon: "iconfont icon-guidang",-->
<!--                            iconSelect: 'iconfont icon-guidang',-->
<!--                            src: "http://118.190.209.124/img/guidang_normal.png",-->
<!--                            srcSelect: "http://118.190.209.124/img/guidang_selected.png"-->
<!--                        }]);-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        data(){-->
<!--            return {-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            change(item,index,idx) {-->

<!--                this.$router.push(item.push);-->
<!--                this.$emit("change",index)-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--</script>-->
<!--<style scoped>-->
<!--    .footer{-->
<!--        display: flex;-->
<!--        position: fixed;-->
<!--        left: 0;-->
<!--        bottom: 0;-->
<!--        box-sizing: border-box;-->
<!--        background: rgb(248, 248, 248);-->
<!--        width: 100%;-->
<!--    }-->
<!--    div{-->
<!--        flex: 1;-->
<!--        padding: 5px;-->
<!--    }-->
<!--    div img{-->
<!--        width: 30px;-->
<!--        height: 30px;-->
<!--    }-->
<!--    div span{-->
<!--        display: block;-->
<!--        color:black;-->
<!--        color: rgb(168, 168, 168);-->
<!--    }-->
<!--    .on{-->
<!--        color: rgb(25, 137, 250);-->
<!--    }-->
<!--</style>-->
<template>
    <div>
        <footer class="bottom_tabbar" >
            <div class="tab_box"></div>
            <div class="bottom_tabbar_contain jdshop_alignment_center ">
                <a :class="obj.one" @click.prevent.stop="gotoMain">
                    <div class="tabbar_icon">
                        <img src="../../assets/icon/main_home_gray.png">
                        <img src="../../assets/icon/main_home_red.png">
                    </div>
                    <p class="footer_title">我的班</p>
                </a>
                <a :class="obj.two" @click="gotoMine">
                    <div class="tabbar_icon">
                        <img src="../../assets/icon/center_grey.png">
                        <img src="../../assets/icon/center_red.png">
                    </div>
                    <p class="footer_title">我的</p>
                </a>
            </div>
        </footer>
    </div>
</template>
<script  type="text/ecmascript-6">

    export default{
        data() {
            return {
                normalClass: 'tabbar_item',

            };
        },
        props: {
            obj: {
                type: Object
            }
        },
        methods: {
            gotoMain: function () {
                this.$router.push('/');
            },

            gotoMine: function () {
                this.$router.push('/mine');
            }
        }
    };
</script>
<style scoped>

    footer.bottom_tabbar .bottom_tabbar_contain a.current_page.jd_tab_on p {
        color: #FF342D;
    }
</style>
