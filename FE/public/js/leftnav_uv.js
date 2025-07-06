var name = getCookieNew('userName');
var logo = getCookieNew('use_logo');
var alias = convertToAlias(name);
var id_user = getCookie("use_id");
if(name && name != ''){
    $('.lnav-cand-name').text(name);
    $('.view_prf_uv').attr("href","/" + alias +'-uv-'+ id_user)
}
else{
    $('.lnav-cand-name').text("Chưa cập nhật");
}

$('.lnav-cand-logo').attr("src",logo);


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
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

$(document).ready(function(){
    $('.refresh_prf,.refresh_prf_moblie').click(function(){
        $.ajax({
            url: "http://localhost:3050/api/topcv1s/candidate/RefreshProfileCandi",
            type: "POST",
            headers: {
                "Authorization": "Bearer " + getCookie('accessToken')
            },
            success: function (response) {
                alert('Làm mới hồ sơ thành công!');
            },
            error: function (xhr, status, error) {
            }
        });
    })
})
