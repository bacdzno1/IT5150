export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/;';
}
export function logout() {
    deleteCookie('adminToken');
    deleteCookie('adminRefToken');
    deleteCookie('adm_id');
    deleteCookie('adm_name');
    deleteCookie('adm_email');
    deleteCookie('adm_phone');
    deleteCookie('adm_bophan');
    deleteCookie('id_bophankd');
    deleteCookie('adm_picture');
    deleteCookie('typeadmin');
    deleteCookie('isLogin');
    deleteCookie('confirmBoxSeen')
    window.location.href = '/admin';
}