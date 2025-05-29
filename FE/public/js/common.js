var URL_API_USER = 'http://localhost:3050/api/topcv1s/user'
var URL_API_NTD = 'http://localhost:3051/api/topcv1s/ntd'
var URL_API_CANDI = 'http://localhost:3052/api/topcv1s/candidate'
var URL_API_NEW = 'http://localhost:3053/api/topcv1s/new'
var URL_API_DOWLOAD = 'http://localhost:3055/dowload'
var URL_API_CV = 'http://localhost:3056/api/topcv1s/cv'
var domain = 'http://localhost:9020'
console.log('commonjsss')
function convertToAlias(str) {
    return str
        .toLowerCase()
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/[^a-z0-9\s]/g, '') 
        .trim() 
        .replace(/\s+/g, '-'); 
}

async function saveNew(news_id) {
    try {
        let response = await $.ajax({
            url: URL_API_CANDI + "/SaveNew",
            type: "POST",
            data: {
                id_tin: news_id
            },
            headers: {
                "Authorization": "Bearer " + getCookie('accessToken')
            }
        });
        return response.data.result_save;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
$(document).ready(function () {
$('.show_pass').on('click', function() {
    console.log('anhlinhdzzz')
    var passwordInput = $(this).siblings('input');
    var inputType = passwordInput.attr('type');
    var img = $(this).find('img')
    if (inputType === 'password') {
        passwordInput.attr('type', 'text');
        img.attr('src','/images/icon/eye_open.png')
    } else {
        passwordInput.attr('type', 'password');
        img.attr('src','/images/icon/eye_close.png')
    }
});
})