$('.close-button').on('click', function () {
  $('#modal_login').hide();
})

$(".toggle-password-label input").change(function () {
  var password = $('.password');

  if ($(this).is(':checked')) {
    password.attr('type', 'text');
  } else {
    password.attr('type', 'password');
  }
})