var name = getCookieNew('userName');
var logo = getCookieNew('use_logo');
var alias = convertToAlias(name);
var id_user = getCookie("use_id");
var usc_search = getCookie("usc_search");
if (usc_search == 1) {
    $('.active-find-pc input, .active-find-mb input').prop('checked', true);
} else {
    console.log(usc_search)
    $('.active-find-pc input, .active-find-mb input').prop('checked', false);
}
if(name && name != ''){
    $('.menu-mb-compna').text(name);
    $('.menu-mb-compna').attr("href","/" + alias +'-uv-'+ id_user)
}
else{
    $('.menu-mb-compna').text("Chưa cập nhật");
}

$('.menu-mb-complog').attr("src",logo);
$('.menu-mb-logout').click(function(){
    LogoutFuntion();
});
$('.uhead-rig-logout').click(function(){
    LogoutFuntion();
});
function LogoutFuntion(){
    deleteCookie('accessToken');
    deleteCookie('auth');
    deleteCookie('use_logo');
    deleteCookie('type');
    deleteCookie('refreshToken');
    deleteCookie('usc_search');
    deleteCookie('use_id');
    deleteCookie('use_phone');
    deleteCookie('userName');
    deleteCookie('use_mail');
    deleteCookie('isLogin');
    deleteCookie('confirmBoxSeen');
    deleteCookie('phoneForOtp');
    deleteCookie('use_mail');
    deleteCookie('usc_email');
    window.location.href = "/";
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}   

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
} 
function getCookieNew(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
$(document).ready(function () {
$('.slider').on('click', function(event) {
    event.stopPropagation();
    console.log('1212');
    const value = usc_search==0?1:0;
    console.log(value)
    $.ajax({
        url: "http://localhost:3050/api/topcv1s/candidate/AllowSearchCandi",
        type: "POST",
        headers: {
            "Authorization": "Bearer " + getCookie('accessToken')
        },
        data: { iduv: id_user, value: value },
        success: function(response) {
            console.log(response);
            alert(response.data.message || "Information updated successfully");
            usc_search = response.data.result_search;
            setCookie("usc_search", response.data.result_search, 60);
        },
        error: function(xhr, status, error) {
            alert('Failed to update information');
            console.error("Error:", error);
        },
    });
});
})