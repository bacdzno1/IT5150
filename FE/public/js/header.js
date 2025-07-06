$(document).ready(function () {
    $(".nav-item").hover(
        function () {
            $(this).children(".nav-dropdown").stop(true, true).fadeIn(300);
        },
        function () {
            $(this).children(".nav-dropdown").stop(true, true).fadeOut(300);
        }
    );
    if(getCookie('accessToken') && getCookie('type') == 1){
        $.ajax({
            url: "http://localhost:3050/api/topcv1s/ntd/PointCpn",
            type: "POST",
            contentType: "application/json",
            headers: {
            "Authorization": "Bearer " + getCookie('accessToken')
            },
            success: function(response) {
                console.log(response.data.point_usc)
                $(".menu_account_point span").text(response.data.point_usc);
    
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }
    let accessToken = getCookie("accessToken");
    // console.log(accessToken);
    let type = getCookie("type");
    $(".nav-act").removeClass("active");
    var windowWidth = $(window).width();
    if (accessToken && accessToken !== "") {
        $(".nav-btn").hide();
        if (type && type == 1) {
            var styleMenu = windowWidth <= 1024 ? ".drop-empl" : ".emp_info";
            let userLogo = getCookie("logo");
            let userName = getCookieNew("usc_company");
            let useralias = convertToAlias(userName);
            let id = getCookie("usc_id");
            $(".drop-defaul").hide();
            $(".dropdown-toggle").addClass("nav-only-candi")
            $(".nav-only-candi").closest(".nav-item").remove();
            $(styleMenu).addClass("active");
            $(styleMenu + " .info-name").text(userName);
            $(styleMenu + " .menu_account_comp").text(userName);
            $(styleMenu + " .menu_account_comp").attr('href',userName);
            $(styleMenu + " .info-avar img").attr("src", userLogo);
            $(styleMenu + " .menu_account_logo img").attr("src", userLogo);
            // $(styleMenu + " .menu_account_point span").text(userMail);
            $(styleMenu + " .menu_account_id span").text(id);
            $(styleMenu + " .menu_account_logout").click(function () {
                deleteCookie("accessToken");
                deleteCookie("auth");
                deleteCookie("logo");
                deleteCookie("phone");
                deleteCookie("type");
                deleteCookie("usc_company");
                deleteCookie("usc_id");
                deleteCookie("usc_name");
                deleteCookie("usc_email");
                deleteCookie("usc_name_add");
                deleteCookie("usc_name_email");
                deleteCookie("usc_name_phone");
                deleteCookie("phoneForOtp");
                deleteCookie("confirmBoxSeen");    
                deleteCookie('usc_email');
                location.reload();
            });
        } else if (type && type == 2) {
            var styleMenu = windowWidth <= 1024 ? ".drop-candi" : ".candi_info";
            let userLogo = getCookieNew("use_logo");
            let userName = getCookieNew("userName");
            let useralias = convertToAlias(userName);
            let userPhoneTk = getCookie("use_phone");
            let id = getCookie("use_id");
            $(".drop-defaul").hide();
            $(".nav-candi").closest(".nav-item").remove();
            $(styleMenu).addClass("active");
            $(styleMenu + " .info-name").text(userName);
            $(styleMenu + " .menu_account_logo img").attr("src", userLogo);
            $(styleMenu + " .menu_account_number span").text(userPhoneTk);
            $(styleMenu + " .menu_account_id span").text(id);
            $(styleMenu + " .menu_account_cand").attr("href", "/" + useralias +'-uv-'+ id).text(userName);
            $(styleMenu + " .menu_account_cand").text(userName);
            $(styleMenu + " .info-avar img").attr("src", userLogo);
            $(styleMenu + " .menu_account_logout").click(function () {
                deleteCookie("accessToken");
                deleteCookie("auth");
                deleteCookie("phoneForOtp");
                deleteCookie("use_logo");
                deleteCookie("type");
                deleteCookie("refreshToken");
                deleteCookie("usc_search");
                deleteCookie("use_id");
                deleteCookie("use_mail");
                deleteCookie("use_phone");
                deleteCookie("userName");
                deleteCookie("isLogin");
                deleteCookie("confirmBoxSeen");
                deleteCookie('use_mail');

                deleteCookie("infor"); // livechat

                location.reload();
            });

            // socket io
            const socketScript = document.createElement("script")
            socketScript.src = "https://cdn.socket.io/4.8.0/socket.io.min.js"
            socketScript.integrity = "sha384-OoIbkvzsFFQAG88r+IqMAjyOtYDPGO0cqK5HF5Uosdy/zUEGySeAzytENMDynREd"
            socketScript.crossOrigin = "anonymous"
            document.body.appendChild(socketScript)
        }
    } else {
        $(".nav-only-candi").closest(".nav-item").remove();
        $(".nav-only-company").closest(".nav-item").remove();
        $(".nav-btn").addClass("active");
    }
});
$(".toggle-password-label input").change(function () {
    var password = $(".password");
    if ($(this).is(":checked")) {
        password.attr("type", "text");
    } else {
        password.attr("type", "password");
    }
});
$(".info-user").click(function () {
    $(this).siblings(".menu_account").toggle();
});
$(document).click(function (e) {
    if (!$(e.target).closest(".menu_account, .info-user, .btn-drop").length) {
        $(".menu_account").slideUp();
    }
});
$(".btn-drop").click(function () {
    var $menuAccount = $(this).siblings(".menu-drop").find(".menu_account");
    if (!$menuAccount.hasClass("active")) {
        $menuAccount.addClass("active").slideDown();
    } else {
        $menuAccount.removeClass("active").slideUp();
    }
});

$('#login_candi_form').validate({
    rules: {
        phone: {
            required: true,
        },
        password:{
            required: true
        }
    },
    messages: {
        phone:{
            required :"Vui lòng nhập tên đăng nhập"
        },
        password:{
            required :"Vui lòng nhập mật khẩu"
        }
    },
})
$('#login_emp_form').validate({
    rules: {
        phone: {
            required: true,
        },
        password:{
            required: true
        }
    },
    messages: {
        phone:{
            required :"Vui lòng nhập tên đăng nhập"
        },
        password:{
            required :"Vui lòng nhập mật khẩu"
        }
    },
})
$("#login_uv_modal .button_login").click(function () {
    if ($("#login_candi_form").valid()) {
        event.preventDefault();
        const username = $("#login_uv_modal #useacc_id").val();
        const password = $("#login_uv_modal #usepas_id").val();
        const data = { username: username, password: password };

        $.ajax({
            url: "http://localhost:3050/api/topcv1s/user/LoginCandidate",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {
                if (response.data.result === true) {
                    document.cookie = `accessToken=${response.data.data.Token}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `refreshToken=${response.data.data.RefreshToken}; max-age=${365 * 24 * 60 * 60}`;
                    document.cookie = `use_id=${response.data.data.data.use_id}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `auth=${response.data.data.data.auth}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `type=${response.data.data.data.type}; max-age=${60 * 24 * 60 * 60}`;
                    setCookie("userName", response.data.data.data.userName, 1440)
                    // document.cookie = `userName=${response.data.data.data.userName}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `use_phone=${response.data.data.data.use_phone}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `use_mail=${response.data.data.data.use_mail}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `use_logo=${response.data.data.data.use_logo}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `usc_search=${response.data.data.data.usc_search}; max-age=${60 * 24 * 60 * 60}`;
                    document.cookie = `isLogin=true; max-age=${60 * 24 * 60 * 60}`;

                    alert("Đăng nhập thành công");
                    location.reload();
                    // window.location.href = "/"
                } else {
                    alert("Tài khoản hoặc mật khẩu không chính xác");
                }
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
                if (xhr.status === 400) {
                    alert("Tài khoản hoặc mật khẩu không chính xác");
                } else {
                    console.error("Error:", error);
                    alert(`Đã xảy ra lỗi khi đăng nhập`);
                }
            },
        });
    }
});
$("#login_ntd_modal .button_login").click(function () {
    event.preventDefault()
    if ($("#login_emp_form").valid()) {
        event.preventDefault()
        const accountValue = $("#login_ntd_modal #useacc_id").val();
        const passValue = $("#login_ntd_modal #usepas_id").val();
        if (accountValue === "") {
            alert("Vui lòng nhập email hoặc số điện thoại");
            return;
        }
        if (passValue === "") {
            alert("Vui lòng nhập mật khẩu");
            return;
        }
        $.ajax({
            url: "http://localhost:3050/api/topcv1s/user/Login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ userName: accountValue, password: passValue }),
            success: function (response) {
                alert(response.data.message);
                document.cookie = `accessToken=${response.data.token}; max-age=3600; path=/`;
                document.cookie = `usc_id=${response.data.user.usc_id}; max-age=3600; path=/`;
                document.cookie = `phone=${response.data.user.phone}; max-age=3600; path=/`;
                document.cookie = `auth=${response.data.user.auth}; max-age=3600; path=/`;
                document.cookie = `type=${response.data.user.type}; max-age=3600; path=/`;
                setCookie("usc_company", response.data.user.usc_company, 1)
                // document.cookie = `usc_company=${response.data.user.usc_company}; max-age=3600; path=/`;
                document.cookie = `logo=${response.data.user.logo}; max-age=3600; path=/`;
                setCookie("usc_name", response.data.user.usc_name, 1)
                // document.cookie = `usc_name=${response.data.user.usc_name}; max-age=3600; path=/`;
                document.cookie = `usc_name_add=${response.data.user.usc_name_add}; max-age=3600; path=/`;
                document.cookie = `usc_name_phone=${response.data.user.usc_name_phone}; max-age=3600; path=/`;
                document.cookie = `usc_name_email=${response.data.user.usc_name_email}; max-age=3600; path=/`;
                location.reload();
            },
            error: function (error) {
                if (error.responseJSON.error.message) {
                    alert(error.responseJSON.error.message);
                } else {
                    alert("Đăng nhập thất bại, vui lòng thử lại");
                }
            },
        });
    }
});
$(".close-login").click(function () {
    $(this).closest(".modal_login").hide();
});
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}
function getCookieNew(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

