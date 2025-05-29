exports.convertToSlugMucLuc = (str) => {
	const regexKorean = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g
	if (!str) return
	// Chuyển hết sang chữ thường
	if (typeof str === 'string' && str.match(/[\u3400-\u9FBF]/)) {
		return 'ung-vien-nuoc-ngoai'
	} else if (typeof str === 'string' && str.match(regexKorean)) {
		return 'ung-vien-nuoc-ngoai'
	} else {
		if (typeof str === 'string') {
			str = str.toLowerCase()

			// xóa dấu
			str = str
				.normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
				.replace(/[\u0300-\u036f]/g, '') // xóa các ký tự dấu sau khi tách tổ hợp

			// Thay ký tự đĐ
			str = str.replace(/[đĐ]/g, 'd')

			// Xóa ký tự đặc biệt
			str = str.replace(/([^0-9a-z-\s])/g, '')

			// Xóa khoảng trắng thay bằng ký tự -
			str = str.replace(/(\s+)/g, '-')

			// Xóa ký tự - liên tiếp
			str = str.replace(/-+/g, '-')

			// xóa phần dư - ở đầu & cuối
			str = str.replace(/^-+|-+$/g, '')

			// Loại bỏ số và dấu chấm ở đầu chuỗi
			str = str.replace(/^\d+\./, '')

			// return
			return str
		}
	}
}