<template>
    <div>
        <div class="jf_gift_register">
            <div class="login_banner">
                <img alt="" border="0" src="https://qnimages.jia-fu.cn//jf-gift-manager/5368313db59ce828d0c4b75260b38d6b.jpeg">
            </div>
            <div class="login_content"><label for="phoneInput">
                <input placeholder="请输入手机号码" type="text" pattern="[0-9]*" maxlength="11" id="phoneInput" class="login_content_name"  v-model='mobile' ref="mobile" @blur="onBlurInput()">
                <img src="../../assets/icon/jf_gift_phone.png" class="login_name_pic">
                <span class="login_wronginfo"></span>
            </label>
                <label><input placeholder="请输入密码" type="text" pattern="[0-9]*" maxlength="6" id="codeInput" class="login_content_valiate"  v-model='password' ref="password" @blur="onBlurInput()">
                    <img src="../../assets/icon/jf_gift_verification.png" class="login_valiate_pic">
                </label>
                <label class="login_btn" @click="login">
                    <a href="javascript:;">登录</a>
                </label>

            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {login} from '@/api/apis';
    import util from '@/assets/js/util';
    export default {
        data() {
            return {
                mobile:'',
                password:'123'
            }
        },
        created(){},
        mounted(){

        },
        methods:{
            login:function () {
                // this.$router.push('/');

                if(!this.mobile){
                    return
                }
                if(!this.password){
                    return
                }

                let param = {
                    mobile:this.mobile,
                    password:this.password,
                };
                login(param).then((res)=>{
                    util.m.addCookie('sc_token',res.data.token);
                    this.$router.push('/');
                }).catch(()=>{

                });


            },
            //失去焦点的时候
            onBlurInput: function () {
                // document.body.scrollTop = document.documentElement.scrollTop = 0;
                // var input1 = document.getElementById('phoneInput');
                // var input2 = document.getElementById('codeInput');
                // input1.blur();
                // input2.blur();
                // this.$refs.phone.blur();
                // this.$refs.code.blur();
                // window.scroll(0, 0)
            }
        }
    }
</script>
<style scoped>
    .jf_gift_register {
        background: #fff;
        width: calc(100vw);
        height: calc(100vh);
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 8000;
    }
    .jf_gift_register .login_banner {
        background-size: 100%;
        padding: 20px 30px;
    }
    .jf_gift_register .login_banner img{
        width: 100%
    }
    .jf_gift_register .login_content {
        margin: 20px auto;
        text-align: center;
        position: relative;
        z-index: 5;
        background-color: #fff
    }
    .jf_gift_register .login_content > label {
        display: block;
        width: 100%;
        margin-bottom: 25px;
        position: relative
    }
    .jf_gift_register .login_content > label > input {
        width: 90%;
        font-size: 16px;
        border: 0;
        outline: 0;
        text-indent: 50px;
        border-radius: 0;
        line-height: 25px;
        padding: 10px 0;
        border-bottom: solid 1px #ddd;
        -webkit-transition: all .3s linear;
        transition: all .3s linear
    }
    .jf_gift_register .login_content > label > a {
        display: block;
        padding: 8px 0;
        margin: 0 auto;
        width: 90%;
        border-radius: 5px;
        outline: 0;
        border: solid 1px #10a6e2;
        background: #10a6e2;
        color: #fff;
        font-size: 16px;
        text-align: center;
        -webkit-transition: all .3s linear;
        transition: all .3s linear
    }
    .jf_gift_register .login_content > label > a:focus {
        background: #3498db
    }
    .jf_gift_register .login_name_pic {
        width: 26px;
        height: 26px;
        display: inline-block;
        position: absolute;
        left: 5%;
        top: 9px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        vertical-align: sub
    }
    .jf_gift_register .login_valiate_pic {
        width: 26px;
        height: 26px;
        display: inline-block;
        position: absolute;
        left: 5%;
        top: 8px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        -webkit-transition: all .3s linear;
        transition: all .3s linear
    }
    .jf_gift_register .login_content > label > input:focus {
        background-color: #fff;
        border: none;
        padding: 10px 0;
        border-radius: 0;
        border-bottom: solid 1px #10a6e1
    }
    .jf_gift_register .login_content > label > input:focus + img {
        -webkit-filter: none;
        filter: none
    }
    .jf_gift_register .login_logo .login_content > label:last-of-type {
        margin-bottom: 0
    }
    .jf_gift_register .login_content .login_btn {
        margin: 40px auto
    }
    .jf_gift_register .login_content .login_btn:active {
        opacity: .8
    }
    @media screen and (max-width: 374px) {
        .jf_gift_register .login_banner {

        }

        .jf_gift_register .login_content label {
            margin-bottom: 15px
        }

        .jf_gift_register .login_content .login_btn {
            margin: 20px auto
        }
    }
</style>
