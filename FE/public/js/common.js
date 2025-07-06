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
            url: "http://localhost:3050/api/topcv1s/candidate/SaveNew",
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