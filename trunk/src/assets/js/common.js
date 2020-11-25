/**
 * Created by apple on 2020/11/24.
 */

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
    // showLoading: function () {
    //     jfShowTips.showLoading();
    // },
    // removeLoading: function () {
    //     jfShowTips.removeLoading();
    // },
    // showText: function (text) {
    //     jfShowTips.toastShow({'text': text});
    // },
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


};

export default Rxports;
