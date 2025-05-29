function updateUrlWithoutRedirect(newUrl) {
    history.pushState(null, null, newUrl);
    $(window).trigger('popstate');
}
