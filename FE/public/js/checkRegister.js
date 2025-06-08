/**
 * Thêm script js chạy ở trong head 
 * @param js Đoạn script chèn vào head 
 */
function addScriptJs(js) {
    var script = $('<script></script>', {
        type: 'text/javascript',
        text: js
    });
    $('head').append(script);
}

/**
 * Lấy giá trị của cookie 
 * @param name Tên của cookie 
 * @returns Giá trị của cookie 
 */
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

/**
 * Kiểm tra xem có cờ (ở cookie), nếu có thì chèn đoạn script tương ứng ở head 
 */
function checkRegister_GgAds() {
    try {
        var typeRegister = getCookie('topcv1s_typeRegister'); // Tìm cờ trong cookie 
        // var phoneCookie = getCookie(cookiePhone); // Tìm số điện thoại ở cookie 
        var phoneCookie = getCookie('use_phone' || 'phone'); // Tìm số điện thoại ở cookie 
        if (typeRegister && phoneCookie) {
            var phone = '+84' + String(phoneCookie.slice(1)); // format số điện thoại 
            
            // Chỉ dành cho luồng UV tạo CV rồi đăng ký 
            if (typeRegister === 'dangkycv') {
                var script = `dataLayer.push({
                    'event': 'dangkycv',
                    'phone': ${phone}
                });`;
                addScriptJs(script);
                Cookies.remove('topcv1s_typeRegister');
            }

            // NTD đăng ký 
            if (typeRegister === 'dangkyntd') {
                var script = `dataLayer.push({
                    'event': 'dangkyntd',
                    'phone': ${phone}
                });`;
                addScriptJs(script);
                Cookies.remove('topcv1s_typeRegister');
            }

            // Các luồng đăng ký ứng viên còn lại 
            if (typeRegister === 'dangkyuv') {
                var script = `dataLayer.push({
                    'event': 'dangkyuv',
                    'phone': ${phone}
                });`;
                addScriptJs(script);
                Cookies.remove('topcv1s_typeRegister');
            }
        }
    } catch (error) {
        console.log('checkRegister_GgAds', error);
    }
}
