/**
 * Created by apple on 2020/11/24.
 */
// import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import {Indicator,Toast} from 'mint-ui'
var Rxports = {
    /*-------------------------打印方法---------------------------*/
    log: function (data) {
        console.log(JSON.parse(JSON.stringify(data)));
    },

    /*-------------------------cookie方法---------------------------*/
    //存
    addCookie: function (sName, sValue, iDay) {
        if (iDay) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);
            document.cookie = sName + '=' + sValue + '; PATH=/; EXPIRES=' + oDate.toGMTString();
        } else {
            document.cookie = sName + '=' + sValue + '; PATH=/';
        }
    },
    //取
    getCookie: function (sName) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] === sName) {
                return arr2[1];
            }
        }
    },
    //删
    removeCookie: function (sName) {
        Rxports.addCookie(sName, 1, -1);
    },

    /*-------------------------jd方法---------------------------*/
    showLoading: function () {
        Indicator.open({
            // text: 'Loading...',
            spinnerType: 'fading-circle'
        });
    },
    removeLoading: function () {
        Indicator.close();
    },
    showText: function (text) {
        Toast({
            message: text,
            position: 'bottom',
            duration: 3000
        });
    },
    // showDialog: function (m, c, check) {
    //     jfShowTips.dialogShow({
    //         'mainText': m,
    //         'minText': c,
    //         'checkFn': function () {
    //             //点击删除后做的事件
    //             check();
    //         }
    //     })
    // },
    // removeDialog: function () {
    //     jfShowTips.dialogRemove();
    // },

    /*-------------------------url方法---------------------------*/
    //简化版获取url数据
    getUrlData:function(link){
        let url = link || window.location.href;
        var obj = {};
        if(url.includes('?')){
            var params = url.split("?")[1].split("&");
            params.map(v => obj[v.split("=")[0]] = v.split("=")[1]);
        }
        return obj;
    },
    dateFormat: function (date,fmt='YYYY-MM-dd') {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "M+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "m+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            }
        }
        return fmt;
    }

};

export default Rxports;
