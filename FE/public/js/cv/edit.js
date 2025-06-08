var parms = [
	{
		cmd: 'aCommandName',
		desc: 'A DOMString representing the name of the command',
	},
	{
		cmd: 'aShowDefaultUI',
		desc: 'A Boolean indicating whether the default user interface should be shown. This is not implemented in Mozilla.',
	},
	{
		cmd: 'aValueArgument',
		desc: "A DOMString representing some commands (such as insertimage) require an extra value argument (the image's url). Pass an argument of null if no argument is needed.",
	},
]
var commands = [
	{
		cmd: 'cv-bot__style--bold',
		cmdNew: 'bold',
		icon: 'bold',
		desc: 'B',
	},
	{
		cmd: 'cv-bot__style--italic',
		cmdNew: 'italic',
		icon: 'italic',
		desc: 'I',
	},
	{
		cmd: 'cv-bot__style--under',
		cmdNew: 'underline',
		icon: 'underline',
		desc: 'U',
	},
	{
		cmd: 'cv-bot__align--left',
		cmdNew: 'justifyLeft',
		icon: 'align-left',
		desc: 'Căn trái',
	},
	{
		cmd: 'cv-bot__align--center ',
		cmdNew: 'justifyCenter',
		icon: 'align-center',
		desc: 'Căn giữa',
	},
	{
		cmd: 'cv-bot__align--right',
		cmdNew: 'justifyRight',
		icon: 'align-right',
		desc: 'Căn phải',
	},
	{
		cmd: 'cv-bot__align--between',
		cmdNew: 'justifyFull',
		icon: 'align-justify',
		desc: 'Căn đều hai bên',
	},
	{
		cmd: 'cv-bot__act--undo',
		cmdNew: 'undo',
		icon: 'undo',
		desc: 'Undo',
	},
	{
		cmd: 'cv-bot__act--redo',
		cmdNew: 'redo',
		icon: 'repeat',
		desc: 'Redo',
	},
]

var commandRelation = {}

function supported(cmd) {
	var css = document.queryCommandSupported(cmd.cmdNew) ? 'btn-succes' : 'btn-error'
	return css
}

function icon(cmd) {
	return typeof cmd.icon !== 'undefined' ? 'fa fa-' + cmd.icon : ''
}

function doCommand(cmdKey) {
	var cmd = commandRelation[cmdKey]
	console.log(">>> cmd: ", cmd);

	if (supported(cmd) === 'btn-error') {
		alert('execCommand(“' + cmd.cmdNew + '”)\nis not supported in your browser')
		return
	}
	val = typeof cmd.val !== 'undefined' ? prompt('Value for ' + cmd.cmdNew + '?', cmd.val) : ''
	document.execCommand("styleWithCSS", true); //not need span style
	document.execCommand(cmd.cmdNew, false, val || '')
	if ($('.' + cmd.cmd).hasClass('active')) {
		$('.' + cmd.cmd).removeClass('active')
		console.log(">>> no: ", $('.' + cmd.cmd));
	} else {
		$('.' + cmd.cmd).addClass('active')
		console.log(">>> yes: ", $('.' + cmd.cmd));
	}
}


//click fucntions
$('.cv-bot__style--bold').click(() => {
	doCommand('bold')
})
$('.cv-bot__style--italic').click(() => {
	doCommand('italic')
})

$('.cv-bot__style--under').click(() => {
	doCommand('underline')
})

// $('.cmd-strikeThrough').click(() => {
// 	doCommand('strikeThrough')
// })

$('.cv-bot__align--left').click(() => {
	doCommand('justifyLeft')
})
$('.cv-bot__align--center').click(() => {
	doCommand('justifyCenter')
})
$('.cv-bot__align--right').click(() => {
	doCommand('justifyRight')
})

$('.cv-bot__align--between').click(() => {
	doCommand('justifyFull')
})

$('.cv-bot__act--undo').click(() => {
	doCommand('undo')
})

$('.cv-bot__act--redo').click(() => {
	doCommand('redo')
})

// $('.cmd-removeFormat').click(() => {
// 	doCommand('removeFormat')
// })

if ($('#indam_khcach').length) {
	function init() {
		var html = '<div class="editor-control-group disabled">',
			template =
				'<span class="editor-control %btnClass%" title="%desc%" onmousedown="event.preventDefault();" onclick="doCommand(\'%cmd%\')"><i class="%iconClass%"></i></span>'
		commands.map(function (command, i) {
			commandRelation[command.cmdNew] = command
			var temp = template
			temp = temp.replace(/%iconClass%/gi, icon(command))
			temp = temp.replace(/%desc%/gi, command.desc)
			//temp = temp.replace(/%btnClass%/gi, supported(command));
			temp = temp.replace(/%btnClass%/gi, 'cmd-' + command.cmdNew)
			temp = temp.replace(/%cmd%/gi, command.cmdNew)

			html += temp
			if (i == 3 || i == 7) {
				html += '</div><div class="editor-control-group disabled">'
			}
		})
		html += '</div>'
		document.querySelector('#tools').innerHTML = html
	}
} else {
	console.log(">>> abc");
	function init() {
		var template = `<div class="%cmd% cv-bot--item editor-control" onMouseDown="preventDefaultAction(event);" onclick="doCommand(\'%cmdNew%\')"><div class="cv-bot_act--title">%desc%</div><img loading="eager" src="/images/icon/%cmdNew%.svg" width="19" height="18" alt="%desc%"></div>`
		var template2 = `<button class="%cmd% cv-bot__style--item editor-control" onMouseDown="preventDefaultAction(event);" onclick="doCommand(\'%cmdNew%\')">%desc%</button>`
		let list_btn = []
		let list_btn2 = []
		commands.map(function (command, i) {
			commandRelation[command.cmdNew] = command
			var temp = template
			temp = temp.replace(/%desc%/gi, command.desc)
			temp = temp.replace(/%cmd%/gi, command.cmd)
			temp = temp.replace(/%cmdNew%/gi, command.cmdNew)
			list_btn.push(temp)
		})
		commands.map(function (command, i) {
			commandRelation[command.cmdNew] = command
			var temp2 = template2
			temp2 = temp2.replace(/%desc%/gi, command.desc)
			temp2 = temp2.replace(/%cmd%/gi, command.cmd)
			temp2 = temp2.replace(/%cmdNew%/gi, command.cmdNew)
			list_btn2.push(temp2)
		})
		let html = '<div class="editor-control-group disabled">'
		for (let i = 0; i <= 2; i++) {
			html += list_btn[i]
		}
		let style = $('.cv-bot__style')
		for (let i = 0; i <= 2; i++) {
			style.append(list_btn2[i])
		}
		let taskbar = $('.cv-bot-cont.container')
		for (let i = 7; i <= list_btn.length; i++) {
			taskbar.append(list_btn[i])
		}
		// document.querySelector('#tool_1').innerHTML = html
		// html = '<div class="editor-control-group disabled">'
		// for (let i = 4; i <= 7; i++) {
		// 	html += list_btn[i]
		// }
		// html += '</div>'
		// document.querySelector('#tool_2').innerHTML = html
		// html = '<div class="editor-control-group disabled">'
		// for (let i = 8; i <= list_btn.length - 1; i++) {
		// 	html += list_btn[i]
		// }
		// html += '</div>'
		// document.querySelector('#tool_3').innerHTML = html
	}
}

init()
// $('.editor-control-group').removeClass('disabled');

setInterval(function () {
	$('.editor-control').removeClass('active')
	commands.map(function (command, i) {
		if (document.queryCommandState(command.cmdNew) == true) {
			$('.' + command.cmd).addClass('active')
		}
	})
}, 100)

// $(window).scroll(function () {
// 	if ($(this).scrollTop() >= 420 && $('#cvo-toolbar').hasClass('fx') == false) {
// 		$('#cvo-toolbar').addClass('fx')
// 	}
// 	if ($(this).scrollTop() < 420 && $('#cvo-toolbar').hasClass('fx') == true) {
// 		$('#cvo-toolbar').removeClass('fx')
// 	}
// })
// if ($('#page-cv').attr('data-type') == 'mobile') {
// 	$('.box_content_taocv').scroll(function () {
// 		if ($(this).scrollTop() >= 100 && $('#cvo-toolbar').hasClass('fx') == false) {
// 			$('#cvo-toolbar').addClass('fx')
// 		}
// 		if ($(this).scrollTop() < 100 && $('#cvo-toolbar').hasClass('fx') == true) {
// 			$('#cvo-toolbar').removeClass('fx')
// 		}
// 	})
// }

$(document)
	.on('focus', '.exp-content, .box-content,#lto-about, #lto-content', function () {
		$('.editor-control-group').removeClass('disabled')
	})
	.on('blur', '.exp-content, .box-content,#lto-about, #lto-content', function () {
		$('.editor-control-group').addClass('disabled')
	})
