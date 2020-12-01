// import $ from jquery;
import $ from 'jquery'
var showImg = {
    init:function (img,parentElement) {
        var html = '<div class="sc_img_bg" id="sc_img_bg">\n' +
            '            <img src="'+img+'" class="img" alt="">\n' +
            '<div class="close" id="sc_img_close">x</div>' +
            '        </div>';
        $('#app').append(html);
        $('#sc_img_close').click(function () {
            $('#sc_img_bg').remove();
        })
    }
};

export default showImg;
