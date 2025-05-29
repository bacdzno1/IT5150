var name = getCookieNew('usc_company');
var logo = getCookie('logo');
if(name && name != ''){
    // $('#usc_company').text(name);
    var alias = convertToAlias(name)
    console.log(alias)
    var link_cpn = `<a href="/${alias}">${name}</a>`
    $('#usc_company').html(link_cpn);
}
else{
    $('#usc_company').text("Chưa cập nhật");
}

$('.lnav-comp-logo').attr("src",logo);


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}   

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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