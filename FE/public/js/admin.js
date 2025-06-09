export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/;';
}
export function logout() {
    deleteCookie('adminToken');
    deleteCookie('adminRefToken');
    deleteCookie('adm_id');
    deleteCookie('typeadmin');
    deleteCookie('isLogin');
    window.location.href = '/admin';
}