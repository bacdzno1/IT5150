// enter khi nhập sdt và email
function renderSelectUser(list_user, account = '') {
	let html = ''
	list_user.forEach(function callback(user, i) {
		html += `<option value="${user.id_chat}" data-acc="${account}" data-type="${user.type365}">${user.user_name} (id: ${user.id_chat})</option>`
	})
	return html
}

$(document).click(function (event) {
	var target = $(event.target)
	if (!target.closest('#popup_select_acc .auth_form1').length && $('#popup_select_acc').is(':visible')) {
		$('#popup_select_acc').hide()
	}
})
// tắt popup thông báo lỗi
$(document).on('click', '.pp_show_error .btn_confirm', function () {
	$('.pp_show_error').hide()
})
// xóa user đã nhập
var arr_data = []
// hàm các loại thông báo
function list_noti_type(type_noti) {
	var lst = [
		'Tất cả thông báo',
		'Thông báo quên mật khẩu, đổi mật khẩu',
		'Thông báo nhà tuyển dụng xem hồ sơ',
		'Thông báo được tag, trả lời bình luận',
		'Thông báo khi có chuyên viên gửi gợi ý việc làm từ AI365',
	]

	if (type_noti == null || type_noti == 0) {
		return lst
	} else {
		return lst[parseInt(type_noti)]
	}
}
// cập nhật số thú tự trong bảng noti
function update_stt(el_parent) {
	el_parent.find('.content_show_ltbao .box_content_loaitbao').each(function (i) {
		$(this)
			.find('.ct_stt_ltbao')
			.html(i + 1)
	})
}
// xóa loại thông báo đã chọn
$(document).on('click', '.box_content_loaitbao .delete_ltbao', function () {
	let el = $(this),
		el_table = el.parents('.box_table_noti'),
		el_parent = el.parents('.box_form_notify')
	el.parents('.box_content_loaitbao').remove()
	let total_row = el_parent.find('.box_content_loaitbao').length
	update_stt(el_parent)
	if (total_row <= 0) {
		el_table.remove()
	}
})
$(document)
	.on('click', '.btn_huongdan', function () {
		$('.pop_huongdan').show()
	})
	.on('click', '.pop_huongdan .close_pop', function () {
		$('.pop_huongdan').hide()
	})
	.on('click', '.select_ask_permission .btn_y,.select_ask_permission .btn_view', function () {
		$('#popup_permission').show()
		let tk = 'Tài khoản'
		if ($('#email').length) {
			tk = $('#email').val()
		}
		$('#popup_permission .show_tk').text(tk)
		// $('.type_notify').select2({
		// 	// dropdownParent: $('.box_user_permission')
		// })
	})
	.on('click', '.select_ask_permission .btn_n', function () {
		$('.form_ask_permission').hide()
	})
	.on('click', '.btn_close_pop', function () {
		$('#popup_permission').hide()
	})
	.on('click', '#popup_permission .cancel', function () {
		$('#popup_permission').hide()
	})
	.on('click', function (e) {
		let container_background = $('#popup_permission')
		let container = $('#popup_permission .box_permission'),
			btn = $('.select_ask_permission .btn_y,.select_ask_permission .btn_view')
		if (
			container_background.is(e.target) &&
			!container.is(e.target) &&
			container.has(e.target).length === 0 &&
			!btn.is(e.target) &&
			btn.has(e.target).length === 0
		) {
			$('#popup_permission').hide()
		}
	})

// ============ end js phân quyền thông báo ===============
