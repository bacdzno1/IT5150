$(document).on('focus', '#form-cv [contenteditable="true"]:not(.box-title,.block-title)', function () {
  $(this).attr('data-edit', 1)
})

function removeVietnameseTonesTime(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  str = str.replace(/ + /g, " ");
  str = str.trim();
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g, " ");
  str = str.replace(/tu|nam/g, '');
  str = str.replace('den', '-');
  return str;
}


function replaceStr(str) {
  $('#checktext').html(str)
  return $('#checktext').html().replaceAll('&nsbp;', ' ').replaceAll('\n', '').replaceAll(' ', '').replaceAll('<br>', '').trim()
}

function check_cv_begin() {
  try {
    let show_error = 0
    let name_box = []
    let selector = $('#form-cv .cvo-block [contenteditable="true"]:not(.box-title,.block-title):visible')
    if (selector.length) {
      selector.each(function () {
        let title = ''
        let error = 0
        if ($(this).parents('.block').length) {
          box_id = $(this).parents('.block').attr('id')
          content_suggest = data_box.find((box) => box.id == box_id)
          title = $(this).parents('.cvo-block').find('.box-title').text()
          if (title === '') {
            title = "Thông tin liên hệ"
          }
        } else if ($(this).parents('.cvo-block').length) {
          box_id = $(this).parents('.cvo-block').attr('id')
          content_suggest = data_block.find((block) => block.id == box_id)
          title = $(this).parents('.cvo-block').find('.block-title').text()
        }
        if (content_suggest) {
          //check nội dung box
          if ($(this).hasClass('box-content')) {
            if (
              (replaceStr(content_suggest.content.content) == replaceStr($(this).html()) && replaceStr(content_suggest.content.content) != '') ||
              replaceStr($(this).html().toLowerCase()).includes('cv365')
            ) {
              error = 1
            } else {
            }
          }

          if ($(this).attr("id") === "cv-profile-phone") {
            if (
              (replaceStr(content_suggest.content[0].phone) == replaceStr($(this).html()) && replaceStr(content_suggest.content[0].phone) != '')
            ) {
              error = 1
            } else {
            }
          }

          if ($(this).attr("id") === "cv-profile-email") {
            if (
              (replaceStr(content_suggest.content[0].email) == replaceStr($(this).html()) && replaceStr(content_suggest.content[0].email) != '')
            ) {
              error = 1
            } else {
            }
          }

          // Check kỹ năng
          if ($(this).hasClass('skill-name')) {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.name) == replaceStr($(this).html()) && replaceStr(item.name) != '')
              ) {
                error = 1
              } else {
              }
            })
          }
          //check nội dung block
          if ($(this).hasClass('exp-content') && $(this).parents('.cvo-block').attr('id') != 'block05') {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.content) == replaceStr($(this).html()) && replaceStr(item.content) != '')
              ) {
                error = 1
              } else {
              }
            })
          }

          if ($(this).hasClass('exp-subtitle') && $(this).parents('.cvo-block').attr('id') != 'block05') {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.subtitle) == replaceStr($(this).html()) && replaceStr(item.subtitle) != '')
              ) {
                error = 1
              } else {
              }
            })
          }

          // Check thời gian 
          if ($(this).hasClass('exp-date')) {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.date) == replaceStr($(this).html()) && replaceStr(item.date) != '')
              ) {
                error = 1;
              } else {
              }
            })
          }

          //check tên công ty trong block
          if ($(this).hasClass('exp-title')) {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.title) == replaceStr($(this).html()) && replaceStr(item.title) != '')
              ) {
                error = 1
              } else {
              }
            })
          }
          if (error == 1) {
            $(this).addClass('err_cv_content')
            show_error = 1
            if (name_box.indexOf(title) == -1 && title) {
              name_box.push(title)
            }
          }

          if (error == 2) {
            $(this).addClass('err_cv_content')
          }
        }
      })
    }
  } catch (error) {
    // console.log(error)
  }
}

function check_cv_content() {
  let show_error = 0
  let name_box = []
  let selector = $('#form-cv .cvo-block [contenteditable="true"]:not(.box-title,.block-title):visible')
  selector.removeClass('err_cv_content')
  if (selector.length) {
    selector.each(function () {
      let title = ''
      let error = 0
      if ($(this).parents('.block').length) {
        box_id = $(this).parents('.block').attr('id')
        content_suggest = data_box.find((box) => box.id == box_id)
        title = $(this).parents('.block').find('.box-title').text()
        if (title === '') {
          title = "Thông tin liên hệ"
        }
      } else if ($(this).parents('.cvo-block').length) {
        box_id = $(this).parents('.cvo-block').attr('id')
        content_suggest = data_block.find((block) => block.id == box_id)
        title = $(this).parents('.cvo-block').find('.block-title').text()
      }
      if (content_suggest) {
        //check nội dung box
        if ($(this).hasClass('box-content')) {
          if (
            (replaceStr(content_suggest.content.content) == replaceStr($(this).html()) && replaceStr(content_suggest.content.content) != '') ||
            replaceStr($(this).html().toLowerCase()).includes('cv365')
          ) {
            error = 1
          } else {
          }
        }

        if ($(this).attr("id") === "cv-profile-phone") {
          if (
            (replaceStr(content_suggest.content[0].phone) == replaceStr($(this).html()) && replaceStr(content_suggest.content[0].phone) != '')
          ) {
            error = 1
          } else {
          }
        }

        if ($(this).attr("id") === "cv-profile-email") {
          if (
            (replaceStr(content_suggest.content[0].email) == replaceStr($(this).html()) && replaceStr(content_suggest.content[0].email) != '')
          ) {
            error = 1
          } else {
          }
        }

        // Check kỹ năng
        if ($(this).hasClass('skill-name')) {
          content_suggest.content.forEach((item) => {
            if (
              (replaceStr(item.name) == replaceStr($(this).html()) && replaceStr(item.name) != '')
            ) {
              error = 1
            } else {
            }
          })
        }
        //check nội dung block
        if ($(this).hasClass('exp-content') && $(this).parents('.cvo-block').attr('id') != 'block05') {
          if (!$(`#${content_suggest.id}`).is(':hidden')) {
            content_suggest.content.forEach((item) => {
              if (
                (replaceStr(item.content) == replaceStr($(this).html()) && replaceStr(item.content) != '') ||
                replaceStr($(this).html().toLowerCase()).includes('cv365')
              ) {
                error = 1
                console.log(error, 'error')
              } else {
              }
            })
          }
        }

        // Check thời gian 
        if ($(this).hasClass('exp-date') && $(this).parents('.cvo-block').attr('id') != 'block05') {
          content_suggest.content.forEach((item) => {
            if (
              (replaceStr(item.date) == replaceStr($(this).html()) && replaceStr(item.date) != '')
            ) {
              error = 1
            } else {
            }
          })
        }

        //check vị trí công việc trong block
        if ($(this).hasClass('exp-subtitle') && $(this).parents('.cvo-block').attr('id') != 'block05') {
          content_suggest.content.forEach((item) => {
            if (
              (replaceStr(item.subtitle) == replaceStr($(this).html()) && replaceStr(item.subtitle) != '')
            ) {
              error = 1
            } else {
            }
          })
        }

        //check tên công ty trong block
        if ($(this).hasClass('exp-title') && $(this).parents('.cvo-block').attr('id') != 'block05') {
          content_suggest.content.forEach((item) => {
            if (
              (replaceStr(item.title) == replaceStr($(this).html()) && replaceStr(item.title) != '')
            ) {
              error = 1
            } else {
            }
          })
        }

        if (error == 1) {
          $(this).addClass('err_cv_content')
          show_error = 1
          if (name_box.indexOf(title) == -1 && title) {
            name_box.push(title)
          }
        }

        if (error == 2) {
          $(this).addClass('err_cv_content')
        }
      }
    })
  }
  // }

  //Check nội dung trống
  let empty = 0
  $('#form-cv .cvo-block:not(.box-contact) [contenteditable="true"]:visible').each(function () {
    if (!$(this).parents('#block05').length) {
      if ($(this).text() == '') {
        empty = 1
        if ($(this).parents('.cvo-block').find('.block-title').length) {
          let title = $(this).parents('.cvo-block').find('.block-title').text()
          if (name_box.indexOf(title) == -1 && title) {
            name_box.push(title)
          }
        } else if ($(this).parents('.cvo-block').find('.box-title').length) {
          let title = $(this).parents('.cvo-block').find('.box-title').text()
          if (name_box.indexOf(title) == -1 && title) {
            name_box.push(title)
          }
        }
        $(this).addClass('err_cv_content')
      }
    }
  })
  if (empty == 1) {
    show_error = 1
  }

  let errTime = '';
  let selectorTimeExp = $('#block02 .experience .exp-date[contenteditable="true"]:visible')
  let forcusTime;
  selectorTimeExp.each(function () {
    let errTimeTmp = '';
    let timeInput = removeVietnameseTonesTime($(this).text());
    if (!timeInput.trim()) {
      name_box.push('Thời gian làm việc')
      show_error = 1
    } else {
      let inputArr = timeInput.split('-');
      if (inputArr.length > 2) {
        errTimeTmp = 'Thời gian làm việc phải có định dạng năm hoặc tháng/năm. Thời gian kết thúc có thể là "nay", "hiện tại". Thời gian bắt đầu và thời gian kết thúc cách nhau bởi dấu "-" hoặc "đến"'
      } else {
        if (inputArr.length == 2) {
          if (inputArr[0].includes('/')) {
            let arrTimeStart = inputArr[0].split('/');
            if (arrTimeStart.length == 3) {
              if (Number(arrTimeStart[0]) > 31 || Number(arrTimeStart[1]) > 12 || Number(arrTimeStart[2]) < new Date().getFullYear() - 50 || Number(arrTimeStart[2]) > new Date().getFullYear()) {
                errTimeTmp = `Thời gian bắt đầu làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm) hoặc quá thời gian cho phép`
              }
            } else if (arrTimeStart.length == 2) {
              if (Number(arrTimeStart[0]) > 12 || Number(arrTimeStart[1]) < new Date().getFullYear() - 50 || Number(arrTimeStart[1]) > new Date().getFullYear()) {
                errTimeTmp = `Thời gian bắt đầu làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm) hoặc quá thời gian cho phép`
              }
            } else {
              errTimeTmp = `Thời gian bắt đầu làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm)`
            }
          } else {
            if (!Number(inputArr[0]) || Number(inputArr[0]) < new Date().getFullYear() - 50 || Number(inputArr[0]) > new Date().getFullYear()) {
              errTimeTmp = `Thời gian bắt đầu làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm) hoặc quá thời gian cho phép`
            }
          }
          //Check thời gian kết thúc
          if (inputArr[1].includes('/')) {
            let arrTimeEnd = inputArr[1].split('/');
            if (arrTimeEnd.length == 3) {
              if (Number(arrTimeEnd[0]) > 31 || Number(arrTimeEnd[1]) > 12 || Number(arrTimeEnd[2]) < new Date().getFullYear() - 50 || Number(arrTimeEnd[2]) > new Date().getFullYear()) {
                errTimeTmp = `Thời gian kết thúc làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm, "nay", "hiện tại") hoặc quá thời gian cho phép`
              }
            } else if (arrTimeEnd.length == 2) {
              if (Number(arrTimeEnd[0]) > 12 || Number(arrTimeEnd[1]) < new Date().getFullYear() - 50 || Number(arrTimeEnd[1]) > new Date().getFullYear()) {
                errTimeTmp = `Thời gian kết thúc làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm, "nay", "hiện tại") hoặc quá thời gian cho phép`
              }
            } else {
              errTimeTmp = `Thời gian kết thúc làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm, "nay", "hiện tại")`
            }
          } else {
            if (Number(inputArr[1]) && Number(inputArr[1]) < new Date().getFullYear() - 50 || Number(inputArr[1]) > new Date().getFullYear()) {
              errTimeTmp = `Thời gian kết thúc làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm, "nay", "hiện tại") hoặc quá thời gian cho phép`
            } else if (!Number(inputArr[1]) && inputArr[1].trim().toLowerCase() != 'nay' && inputArr[1].trim().toLowerCase() != 'hien tai') {
              errTimeTmp = `Thời gian kết thúc làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm, "nay", "hiện tại") hoặc quá thời gian cho phép`
            }
          }
        } else {
          if (!Number(timeInput.trim()) || Number(timeInput.trim()) < new Date().getFullYear() - 50 || Number(timeInput.trim()) > new Date().getFullYear()) {
            errTimeTmp = `Năm làm việc không đúng định dạng (ngày/tháng/năm, tháng/năm, năm) hoặc quá thời gian cho phép`
          }
        }
      }
    }
    if (errTimeTmp) {
      $(this).addClass('err_cv_content');
      if (!errTime) {
        errTime = errTimeTmp
      }
      if (!forcusTime) {
        forcusTime = $(this);
      }
    }

  })

  if (show_error == 1 || errTime) {
    var msg = '';
    msg += name_box.length ? `Bạn chưa sửa các mục: <span style="color:red; text-transform: uppercase">${name_box.join(', ')}</span><br>` : ''
    msg += errTime ? `<span style="color:red">${errTime.toUpperCase()}</span>` : ''
    $('.el-message-box__message').html(msg);
    $('.v-modal').show();
    $('.el-message-box__wrapper').show();
    // console.log('34werqwerqw')
    if (errTime) {
      $('body').data('focus', forcusTime)
    }
    return false
  }

  return true
}

function render_item_suggest(content) {
  return `<p class="item_suggest">${content}</p>`
}

$(document)
  .on(
    "focus",
    ".block .box-content, #cv-profile-sex, #cv-profile-birthday, #cv-profile-phone, #cv-profile-address, .head .block-title, .cum .box-title, .ski .box-title, #cv-profile-email, #experience-table .ctbx .exp-content, #experience-table .ctbx .exp-date, #experience-table .ctbx .exp-subtitle, #experience-table .ctbx .exp-title,.skill-name",
    function (e) {
      $(".suggesting").removeClass("suggesting");
      let box_id;
      if ($(this).parents(".block").length) {
        box_id = $(this).parents(".block").attr("id");
      } else if ($(this).parents(".cvo-block").length) {
        box_id = $(this).parents(".cvo-block").attr("id");
      }
      $(`.item_suggest`).removeClass("active");
      boxOffset = $(this).offset();
      $(`.item_suggest[data-id="${box_id}"]`).addClass("active");
      if (
        $(".container_sidebar_left").length &&
        !$(".container_sidebar_left").hasClass("rutgon") &&
        $(window).width() > 1200
      ) {
        if (!$("#hdanvietcv").hasClass("active")) {
          let list_hide = $("#hdanvietcv").attr("data-hide");
          list_hide = list_hide ? list_hide : "";
          list_hide = list_hide.split(",");
          if (list_hide.indexOf(box_id) == -1) {
            $("#hdanvietcv").click();
            $("#hdanvietcv").attr("data-active", box_id);
          }
        }
      }
    }
  )
  .on('click', '.cvo-block [contenteditable="true"]', function () {
    if ($(this).text() != '' && $(this).hasClass('err_cv_content')) {
      $(this).text('')
      $(this).removeClass('err_cv_content')
    }
  })
  .on('input', '.cvo-block:not(.box-contact,.box-skills) [contenteditable="true"]', function () {
    if (!$(this).parents('#block03').length && !$(this).parents('#block05').length) {
      if ($(this).text() == '') {
        $(this).addClass('err_cv_content')
      } else {
        $(this).removeClass('err_cv_content')
      }
    }
  })
  .on('input', '#cv-profile-phone,#cv-profile-email,#cv-profile-address,#cv-profile-birthday', function () {
    if ($(this).text() != '') {
      const fontFamily = $(this).css('font-family');
      $(this).removeAttr('style')
      $(this).css('font-family', fontFamily);
    } else {
      $(this).css('outline', 'red dashed 1px')
    }
  })
  .on('click', function () {
    var target = $(event.target)
    if (!target.closest('.el-message-box')) {
      $('.v-modal').hide(), $('.el-message-box__wrapper').hide()
    }
  })
  .on('click', '.item_suggest .open', function () {
    if ($(this).parents('.item_suggest').hasClass('active')) {
      $(this).parents('.item_suggest').removeClass('active')
    } else {
      $(this).parents('.item_suggest').addClass('active')
    }
  })
  .on('focus', '.box-title,.block-title', function () {
    let selector = $(this)
    if ($('#page-cv').attr('data-type') == 'mobile') {
      $('#page-cv').css('zoom', '1')
      setTimeout(function () {
        $('#cvo-toolbar').removeClass('fx')
      }, 300)
      return false
    }
  })
  .on('click', '.close_zoom_cv', function () {
    $('#zoom_cv').hide()
    $('#cv_mau_new').hide()
  })
  .on('click', '.box_suggest .title', function () {
    let cid = $('#page-taocv').attr('data-cate-id')
    $.ajax({
      url: 'site/get_cv_mau',
      type: 'POST',
      data: { cid },
      dataType: 'JSON',
      success: function (result) {
        if (result) {
          $('#zoom_cv .img_cv').attr('src', result.link_image)
          $('#zoom_cv .view_count').text(result.view_count)
          $('#zoom_cv .view_time').text(result.time)
          $('#zoom_cv').show()
        }
      },
    })
  })

function changeLayoutCv() {
  let layout = detectLayout()
  if (layout.cv_all != '.all') {
    console.log('falseeeee')
    return false
  }
  let cv_all = layout.cv_all,
    cv_left = layout.cv_left,
    cv_right = layout.cv_right;
  if (!$("#form-cv .cv_page").length) {
    let htmlTop =
      $("#cv-top")[0] && !$("#cv-top").parents(".all").length
        ? $("#cv-top")[0].outerHTML
        : "",
      htmlFooter = $("#form-cv .footer")[0]
        ? $("#form-cv .footer")[0].outerHTML
        : "",
      htmlContent = $(`#form-cv ${cv_all}`)[0].outerHTML;
    //htmlTop);
    let html = `<div class="cv_page" data-page="1">
        ${htmlTop}
        ${htmlContent}
        ${htmlFooter}
    </div>`
    const pathname = window.location.pathname

    $('#form-cv').prepend(html)

    $('#sortable').addClass('connectedSortable').addClass('sortable')
    $('#sort_block').addClass('connectedSortable').addClass('sort_block')
    if (pathname === '/tao-cv-it/mau-02') {
      $('.cv_page > #cv-top').remove()
      $('#form-cv > .page_more').remove()
      $('#form-cv > #cv-main')[1] ? $('#form-cv > #cv-main')[1].remove() : ''
    }
  }
  adjustPage(1)
}

function detectLayout() {
  let cv_all = '.all',
    cv_left = '#cv-main',
    cv_right = '#cv-content',
    selector_main = '.all>#cv-main',
    selector_content = '.all>#cv-content'

  if ($('.cv_page').length) {
    selector_main = '.cv_page[data-page="1"] .all>#cv-main'
    selector_content = '.cv_page[data-page="1"] .all>#cv-content'
  }

  if (!$('#form-cv .all').length || !$(selector_main).length || !$(selector_content).length) {
    cv_all = ''
    if ($('#cv-main>#cv-content').length) {
      cv_all = '#cv-main'
      cv_left = '#cv-right'
      cv_right = '#cv-content'
    }
  }
  let cv_left_offset = $(cv_left).first().offset(),
    cv_left_height = $(cv_left).first().outerHeight(true),
    cv_right_offset = $(cv_right).first().offset(),
    cv_right_height = $(cv_right).first().outerHeight(true)
  if (cv_left_offset && cv_right_offset) {
    if (cv_left_offset.top < cv_right_offset.top) {
      if (cv_right_offset.top - cv_left_height > 0) {
        cv_all = ''
      }
    } else if (cv_left_offset.top > cv_right_offset.top) {
      if (cv_left_offset.top - cv_right_height > 0 && cv_right_height > 0) {
        cv_all = ''
      }
    }
  } else {
    cv_all = ''
  }
  let data = {
    cv_all: cv_all,
    cv_left: cv_left,
    cv_right: cv_right,
  }
  return data
}
var height_page = 1122

function adjustPage(page = 1) {
  if ($('.page_cv').attr('data-nopagi') == 1) {
    unPaginationCV()
  } else {
    let layout = detectLayout()
    if (layout.cv_all != '.all') {
      return false
    }
    $('#form-cv .watermark').remove()
    const pathname = window.location.pathname
    removeLineHeight()

    if (pathname !== '/tao-cv-quan-tri-kinh-doanh/mau-15') {
      paginationCv(page)
    } else {
      paginationCv(2)
    }

    addWatermark()
  }
}

function paginationCv(page) {
  try {
    let layout = detectLayout()
    let cv_all = layout.cv_all,
      cv_left = layout.cv_left,
      cv_right = layout.cv_right
    if (cv_all != '.all') {
    }
    cv_all = '.all'

    let page_current = $(`#form-cv .cv_page[data-page="${page}"]`)
    page_current.removeClass('height_page')
    let heightAll = page_current.outerHeight(true),
      heightTop = page_current.find('#cv-top')[0] ? page_current.find('#cv-top').outerHeight(true) : 0,
      heightFooter = page_current.find('.footer')[0] ? page_current.find('.footer').outerHeight(true) : 0,
      htmlTop =
        page_current.find('#cv-top')[0] && !page_current.find('#cv-top').parents(`${cv_all}`).length ? page_current.find('#cv-top')[0].outerHTML : '',
      htmlFooter = page_current.find('.footer')[0] ? page_current.find('.footer')[0].outerHTML : '',
      htmlContent = page_current.find(`${cv_all}`)[0] ? page_current.find(`${cv_all}`)[0].outerHTML : ''

    let heightFreeLeft = 0,
      heightFreeRight = 0
    let nextPage = $(`#form-cv .cv_page[data-page="${Number(page) + 1}"]`),
      new_page = 1
    while (nextPage.length || heightAll > height_page) {

      page_current = $(`#form-cv .cv_page[data-page="${page}"]`)
      page_current.removeClass('height_page')
      page_current.find(`${cv_right}`).removeAttr('style')
      page_current.find(`${cv_left}`).removeAttr('style')
      heightAll = page_current.outerHeight(true)
      nextPage = $(`#form-cv .cv_page[data-page="${Number(page) + 1}"]`)
      prevPage = $(`#form-cv .cv_page[data-page="${Number(page) - 1}"]`)
      heightTop =
        page_current.find('#cv-top')[0] && !page_current.find('#cv-top').parents(`${cv_all}`).length ?
          page_current.find('#cv-top').outerHeight(true) :
          0
      heightFooter = page_current.find('.footer')[0] ? page_current.find('.footer').outerHeight(true) : 0
      htmlTop = page_current.find('#cv-top')[0] ? page_current.find('#cv-top')[0].outerHTML : ''
      htmlFooter = page_current.find('.footer')[0] ? page_current.find('.footer')[0].outerHTML : ''
      htmlContent = page_current.find(`${cv_all}`)[0] ? page_current.find(`${cv_all}`)[0].outerHTML : ''
      heightFreeLeft = 0
      heightFreeRight = 0

      page_current.find(`${cv_left}`).removeAttr('style')
      page_current.find(`${cv_right}`).removeAttr('style')
      new_page = 1
      if (nextPage.length) {
        new_page = 0
      }
      if (!nextPage.length && heightAll > height_page) {
        let html = `<div class="cv_page page_more" data-page="${Number(page) + 1}"></div>`
        $(html).insertAfter(page_current)
        nextPage = $(`#form-cv .cv_page[data-page="${Number(page) + 1}"]`)
        nextPage.prepend(htmlContent)
        nextPage.find('#cv-top').remove()
        nextPage.find(`${cv_right} #sort_block`).html('')
        nextPage.find(`${cv_right} .block.cvo-block `).remove('')
        nextPage.find(`${cv_left} #sortable`).html('')
      }
      if (heightFooter && nextPage.length) {
        page_current.find('.footer').remove()
        if (!nextPage.find('.footer').length) {
          nextPage.append(htmlFooter)
        }
      }
      if (nextPage.length && !nextPage.find('.all').length && heightAll > height_page) {
        nextPage.prepend(htmlContent)
        nextPage.find('#cv-top').remove()
        nextPage.find(`${cv_right} #sort_block`).html('')
        nextPage.find(`${cv_right} .block.cvo-block `).remove('')
        nextPage.find(`${cv_left} #sortable`).html('')
      }
      if (heightAll > height_page) {
        page_current.find(`${cv_right}`).hide()

        let boxLength = page_current.find(`${cv_left} .block`).length
        let htmlBox = []
        for (let i = boxLength - 1; i >= 0; i--) {
          if (page_current.outerHeight(true) > height_page) {
            let html = page_current.find(`${cv_left} .block`).eq(i)[0].outerHTML
            page_current.find(`${cv_left} .block`).eq(i).remove()
            nextPage.find(`${cv_left} #sortable`).prepend(html)
          }
        }
        page_current.find(`${cv_right}`).show()
        page_current.find(`${cv_left}`).hide()

        let blockLength = page_current.find(`${cv_right} .cvo-block`).length
        for (let i = blockLength - 1; i >= 0; i--) {
          if (page_current.outerHeight(true) > height_page) {
            let html = page_current.find(`${cv_right} .cvo-block`).eq(i)[0].outerHTML
            let blockHeight = page_current.find(`${cv_right} .cvo-block`).eq(i).outerHeight(true)
            let id = page_current.find(`${cv_right} .cvo-block`).eq(i).attr('id')
            let head = page_current.find(`${cv_right} .cvo-block`).eq(i).find('.head')[0] ?
              page_current.find(`${cv_right} .cvo-block`).eq(i).find('.head')[0].outerHTML :
              ''
            let blockControls = page_current.find(`${cv_right} .cvo-block`).eq(i).find('.blockControls')[0] ?
              page_current.find(`${cv_right} .cvo-block`).eq(i).find('.blockControls')[0].outerHTML :
              ''
            let childLength = page_current.find(`${cv_right} .cvo-block`).eq(i).find('.experience').length

            if (childLength > 1 || nextPage.find(`${cv_right} .cvo-block[id="${id}"]`).length) {
              let d = 0
              for (let k = childLength - 1; k >= 0; k--) {
                let htmlChild = page_current.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(k)[0].outerHTML
                if (page_current.outerHeight(true) > height_page) {
                  if (nextPage.find(`${cv_right} .cvo-block[id="${id}"]`).length) {
                    nextPage.find(`${cv_right} .cvo-block[id="${id}"] #experience-table`).prepend(htmlChild)
                  } else {
                    nextPage.find(`${cv_right} #sort_block`).prepend(html)
                    nextPage.find(`${cv_right} .cvo-block[id="${id}"] .experience`).remove()
                    nextPage.find(`${cv_right} .cvo-block[id="${id}"] #experience-table`).prepend(htmlChild)
                  }
                  page_current.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(k).remove()
                  d = k
                }
              }
              if (d > 0) {
                nextPage.find(`${cv_right} .cvo-block[id="${id}"] .blockControls`).remove()
                nextPage.find(`${cv_right} .cvo-block[id="${id}"] .head`).remove()
              } else {
                if (!nextPage.find(`${cv_right} .cvo-block[id="${id}"] .head`).length) {
                  nextPage.find(`${cv_right} .cvo-block[id="${id}"]`).prepend(blockControls)
                  nextPage.find(`${cv_right} .cvo-block[id="${id}"]`).prepend(head)
                }
                page_current.find(`${cv_right} .cvo-block`).eq(i).remove()
              }
            } else {
              if (blockHeight <= height_page) {
                nextPage.find(`${cv_right} #sort_block`).prepend(html)
                page_current.find(`${cv_right} .cvo-block`).eq(i).remove()
              }
            }
          } else {
            break;
          }
        }
        heightFreeRight = height_page - page_current.outerHeight(true)
      }

      page_current.find(`${cv_left}`).show()
      page_current.find(`${cv_right}`).hide()
      heightFreeLeft = height_page - page_current.outerHeight(true)
      if (heightFreeLeft > 0) {
        let boxLength = nextPage.find(`${cv_left} .block`).length
        let listBoxRemove = []
        for (let i = 0; i <= boxLength - 1; i++) {
          let boxHeight = nextPage.find(`${cv_left} .block`).eq(i).outerHeight(true)
          if (boxHeight < heightFreeLeft) {
            let html = nextPage.find(`${cv_left} .block`).eq(i)[0].outerHTML
            page_current.find(`${cv_left} #sortable`).append(html)
            listBoxRemove.push(i)
            heightFreeLeft -= boxHeight
          } else {
            break
          }
        }
        listBoxRemove.reverse().forEach(function callback(item, i) {
          nextPage.find(`${cv_left} .block`).eq(item).remove()
        })
      }

      page_current.find(`${cv_left}`).hide()
      page_current.find(`${cv_right}`).show()
      heightFreeRight = height_page - page_current.outerHeight(true)
      if (heightFreeRight > 0 && nextPage.length > 0) {
        let blockLength = nextPage.find(`${cv_right} .cvo-block`).length
        let listBlockDelete = []

        for (let i = 0; i <= blockLength - 1; i++) {
          let html = nextPage.find(`${cv_right} .cvo-block`).eq(i)[0] ? nextPage.find(`${cv_right} .cvo-block`).eq(i)[0].outerHTML : i
          let id = nextPage.find(`${cv_right} .cvo-block`).eq(i).attr('id')
          let head = nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.head')[0] ?
            nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.head')[0].outerHTML :
            ''
          let blockControls = nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.blockControls')[0] ?
            nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.blockControls')[0].outerHTML :
            ''
          let childLength = nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').length
          let boxHeight = nextPage.find(`${cv_right} .cvo-block`).eq(i).outerHeight(true)
          if (childLength > 1 || page_current.find(`${cv_right} .cvo-block[id="${id}"]`).length) {
            let childRemove = []
            for (let k = 0; k <= childLength - 1; k++) {
              let htmlChild = nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(k)[0].outerHTML
              let heightChild = nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(k).outerHeight(true)
              if (k == 0 && childLength > 1) {
                let heightRemove = 0
                for (let j = 1; j < childLength; j++) {
                  heightRemove += nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(j).outerHeight(true)
                }
                heightChild = boxHeight - heightRemove
              }
              if (heightFreeRight > heightChild) {
                if (page_current.find(`${cv_right} .cvo-block[id="${id}"]`).length) {
                  page_current.find(`${cv_right} .cvo-block[id="${id}"] #experience-table`).append(htmlChild)
                } else {
                  page_current.find(`${cv_right} #sort_block`).append(html)
                  page_current.find(`${cv_right} .cvo-block[id="${id}"] .experience`).remove()
                  page_current.find(`${cv_right} .cvo-block[id="${id}"] #experience-table`).append(htmlChild)
                }
                childRemove.push(k)
                heightFreeRight -= heightChild
                if (k == 0) {
                  if (head) {
                    nextPage.find(`${cv_right} .cvo-block[id="${id}"] .blockControls`).remove()
                    nextPage.find(`${cv_right} .cvo-block[id="${id}"] .head`).remove()
                  }
                }
              } else {
                heightFreeRight -= heightChild
              }
            }
            childRemove.reverse().forEach((val) => {
              nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').eq(val).remove()
            })
            heightFreeRight -= boxHeight
            if (!nextPage.find(`${cv_right} .cvo-block`).eq(i).find('.experience').length) {
              nextPage.find(`${cv_right} .cvo-block`).eq(i).remove()
            }
          } else {
            if (heightFreeRight >= boxHeight) {
              page_current.find(`${cv_right} #sort_block`).append(html)
              listBlockDelete.push(i)
              heightFreeRight -= boxHeight
            } else {
              break
            }
          }
        }

        listBlockDelete.reverse().forEach((val) => {
          nextPage.find(`${cv_right} .cvo-block `).eq(val).remove()
        })
      }
      page_current.find(`${cv_right}`).show()
      page_current.find(`${cv_left}`).show()
      if (!heightFooter) {
        heightFooter = page_current.find('.footer')[0] ? page_current.find('.footer').outerHeight(true) : 0
        heightFreeLeft -= heightFooter
        heightFreeRight -= heightFooter
      }
      let heightAllNew = page_current.outerHeight(true)
      if (!nextPage.find(`${cv_left} .block:visible`).length &&
        !nextPage.find(`${cv_right} .cvo-block:visible`).length &&
        heightAllNew + heightFooter <= height_page
      ) {
        // console.log('allnew1:', heightAllNew)
        if (nextPage.find('.footer').length) {
          page_current.append(nextPage.find('.footer')[0].outerHTML)
          if (page_current.outerHeight(true) <= height_page) {
            nextPage.find('.footer').remove()
          } else {
            page_current.find('.footer').remove()
          }
        }
      }

      page_current.addClass('height_page')

      page = Number(page)
      page++
    }

    //Xóa các trang thừa
    for (let i = $(`#form-cv .cv_page`).length; i >= 0; i--) {
      let pagePrev = $(`#form-cv .cv_page[data-page="${i - 1}"]`)
      let page = $(`#form-cv .cv_page[data-page="${i}"]`)
      if (!page.find(`${cv_left} .block:visible`).length && !page.find(`${cv_right} .cvo-block:visible`).length && !page.find(`.footer`).length) {
        //Chuyển nội dung box đang ẩn lên page trước
        if (page.find(`${cv_left} .block:hidden`).length) {
          for (let i = 0; i < page.find(`${cv_left} .block:hidden`).length; i++) {
            let id = page.find(`${cv_left} .block:hidden`)[i].getAttribute('id')
            console.log(id)
            let html = page.find(`${cv_left} .block:hidden`)[i].outerHTML
            pagePrev.find(`${cv_left} #sortable`).append(html)
          }
        }
        if (page.find(`${cv_right} .cvo-block:hidden`).length) {
          for (let i = 0; i < page.find(`${cv_right} .cvo-block:hidden`).length; i++) {
            let id = page.find(`${cv_right} .cvo-block:hidden`)[i].getAttribute('id')
            // console.log(id)
            let html = page.find(`${cv_right} .cvo-block:hidden`)[i].outerHTML
            pagePrev.find(`${cv_right} #sort_block`).append(html)
          }
        }
        page.remove()
      }
    }

    //Thêm padding để full trang
    heightFooter = page_current.find('.footer')[0] ? page_current.find('.footer').outerHeight(true) : 0

    if (heightFreeLeft > heightFreeRight) {
      page_current.find(`${cv_left}`).css('padding-bottom', heightFreeLeft - 20)
    } else {
      if (heightFreeRight > 0) {
        page_current.find(`${cv_right}`).css('padding-bottom', heightFreeRight - 20)
      }
    }
    if (page_current.attr('data-page') > $(`#form-cv .cv_page`).length) {
      paginationCv($(`#form-cv .cv_page`).length);
    }

    $('#form-cv .cv_page').addClass('height_page');
  } catch (error) {
    console.log(error)
  }
}

function merge_block(block) {
  let id = block.attr('id'),
    page = block.parents('.cv_page').attr('data-page')
  let nextPage = $(`.cv_page[data-page="${Number(page) + 1}"]`)
  if (nextPage.length) {
    let check = nextPage.find(`#${id}`).length
    if (check) {
      let htmlAdd = nextPage.find(`#${id} #experience-table`).html()
      block.find(`#experience-table`).append(htmlAdd)
      nextPage.find(`#${id}`).remove()
    }
  }
}

function removeLineHeight() {
  let totalPage = $('.cv_page').length
  for (let page = 1; page <= totalPage; page++) {
    $('.cv_page .all').removeAttr('style')
    $('.cv_page .sortable .block:visible').removeAttr('style')
    $('.cv_page .sort_block .cvo-block:visible').removeAttr('style')
    $('.cv_page .sort_block .cvo-block .ctbx.experience:visible').removeAttr('style')
  }
}

function adjustLineHeight() {
  // return false;
  let totalPage = $('.cv_page').length
  // console.log(totalPage, 'adjustLineHeight')
  for (let page = 1; page <= totalPage; page++) {
    let curentPage = $(`.cv_page[data-page="${page}"]`)
    curentPage.removeClass('height_page')
    curentPage.find('#cv-content').hide()
    heightFreeLeft = height_page - curentPage.outerHeight(true)
    curentPage.find('#cv-content').show()
    curentPage.find('#cv-main').hide()
    heightFreeRight = height_page - curentPage.outerHeight(true)
    curentPage.find('#cv-main').show()
    heightFreeLeft = Number(heightFreeLeft)
    heightFreeRight = Number(heightFreeRight)

    let heightFreeMax = heightFreeRight > heightFreeLeft ? heightFreeRight : heightFreeLeft
    let marginForAll = 0
    if (curentPage.find('#cv-top').length && heightFreeMax < 200) {
      marginForAll = heightFreeMax * 0.25
    }
    heightFreeLeft -= marginForAll
    heightFreeRight -= marginForAll
    curentPage.find('.all').css('padding-top', marginForAll)
    if (heightFreeLeft < 200) {
      let marginForBox = heightFreeLeft * 0.5
      let marginForContent = heightFreeLeft - marginForBox
      //Thêm margin cho các box cha
      let blockLength = curentPage.find('.sortable .block').length
      curentPage.find('.sortable .block').css('margin-top', marginForBox / blockLength)

      //Thêm margin cho các box cha
      let contentLength = curentPage.find('.sortable .block .box-content').length
      const pathname = window.location.pathname
      if (pathname == '/tao-cv-my-pham-thoi-trang-trang-suc/mau-12') {
        curentPage.find('.sortable .block .box-content').css('margin-top', '10px')
      } else {
        curentPage.find('.sortable .block .box-content').css('margin-top', marginForContent / blockLength)
      }
    }
    if (heightFreeRight < 200) {
      let marginForBox = heightFreeRight * 0.5
      let marginForContent = heightFreeRight - marginForBox
      //Thêm margin cho các box cha
      let blockLength = curentPage.find('.sort_block .cvo-block').length
      curentPage.find('.sort_block .cvo-block').css('margin-top', marginForBox / blockLength)

      //Thêm margin cho các box con
      let contentLength = curentPage.find('.sort_block .cvo-block .ctbx.experience').length
      curentPage.find('.sort_block .cvo-block .ctbx.experience').css('margin-top', marginForContent / contentLength)
    }
    curentPage.addClass('height_page')
  }
}

function adjustLineHeight1() {
  let totalPage = $('.cv_page').length
  let lastPage = $(`.cv_page[data-page="${totalPage}"]`)
  lastPage.find('#cv-content').removeAttr('style')
  lastPage.find('#cv-main').removeAttr('style')

  //Lấy chiều dài của 2 cột ở page cuối
  lastPage.removeClass('height_page')
  lastPage.find('.all #cv-content').hide()
  let lastPageHeightLeft = lastPage.find('.all').height() + lastPage.find('.footer').height()
  lastPage.find('.all #cv-main').hide()
  lastPage.find('.all #cv-content').show()
  let lastPageHeightRight = lastPage.find('.all').height() + lastPage.find('.footer').height()
  lastPage.find('.all #cv-main').show()
  lastPage.addClass('height_page')

  freeHeightLeft = 0
  freeHeightRight = 0

  //Lấy khoảng trống còn dư của 2 cột
  for (let page = 1; page < totalPage; page++) {
    let currentPage = $(`.cv_page[data-page="${page}"]`)

    if (page == totalPage - 1) {
      currentPage.removeClass('height_page')
      currentPage.find(`#cv-main`).removeAttr('style')
      currentPage.find(`#cv-content`).removeAttr('style')
      currentPage.find('#cv-content').hide()
      freeHeightLeft += height_page - currentPage.outerHeight(true)
      currentPage.find('#cv-content').show()

      currentPage.find('#cv-main').hide()
      freeHeightRight += height_page - currentPage.outerHeight(true)
      currentPage.find('#cv-main').show()
      currentPage.find('#cv-main .cvo-block').each(function () {
        let marginTop = $(this).css('margin-top').replace('px', '')
        let marginBottom = $(this).css('margin-bottom').replace('px', '')
        freeHeightLeft += Number(marginTop)
        freeHeightLeft += Number(marginBottom)
      })
      currentPage.find('#cv-content .cvo-block').each(function () {
        let marginTop = $(this).css('margin-top').replace('px', '')
        let marginBottom = $(this).css('margin-bottom').replace('px', '')
        freeHeightRight += Number(marginTop)
        freeHeightRight += Number(marginBottom)
      })
    }
  }
  if (lastPageHeightLeft <= 200 && lastPageHeightRight <= 200 && freeHeightLeft >= lastPageHeightLeft && freeHeightRight >= lastPageHeightRight) {
    let beforeLastPage = $(`.cv_page[data-page="${totalPage - 1}"]`)
    beforeLastPage.find('#cv-content').removeAttr('style')
    beforeLastPage.find('#cv-main').removeAttr('style')

    beforeLastPage.find('.all #cv-content').hide()
    let paddingLeft = height_page - beforeLastPage.outerHeight(true)
    beforeLastPage.find('.all #cv-main').hide()
    beforeLastPage.find('.all #cv-content').show()
    let paddingRight = height_page - beforeLastPage.outerHeight(true)
    beforeLastPage.find('.all #cv-main').show()
    let heightMarginLeft = freeHeightLeft - paddingLeft
    let heightMarginRight = freeHeightRight - paddingRight
    beforeLastPage.find('#cv-main .block').each(function () {
      let marginTop = $(this).css('margin-top').replace('px', '')
      let marginBottom = $(this).css('margin-bottom').replace('px', '')
      let marginTopAdjust = (marginTop / heightMarginLeft) * marginTop,
        marginBottomAdjust = (marginBottom / heightMarginLeft) * marginBottom
      $(this).css('margin-top', marginTopAdjust)
      $(this).css('margin-bottom', marginBottomAdjust)
    })
    beforeLastPage.find('#cv-content .cvo-block').each(function () {
      let marginTop = $(this).css('margin-top').replace('px', '')
      let marginBottom = $(this).css('margin-bottom').replace('px', '')
      let marginTopAdjust = (marginTop / heightMarginRight) * (freeHeightLeft - lastPageHeightRight),
        marginBottomAdjust = (marginBottom / heightMarginRight) * (freeHeightRight - lastPageHeightRight)
      $(this).css('margin-top', marginTopAdjust)
      $(this).css('margin-bottom', marginBottomAdjust)
    })

  }
  paginationCv(page)
}

function adjustLineHeightVer2() {
  let totalPage = $('.cv_page').length
  let lastPage = $(`.cv_page[data-page="${totalPage}"]`)
  lastPage.find('#cv-content').removeAttr('style')
  lastPage.find('#cv-main').removeAttr('style')

  //Lấy chiều dài của 2 cột ở page cuối
  lastPage.removeClass('height_page')
  lastPage.find('.all #cv-content').hide()
  let lastPageHeightLeft = lastPage.find('.all').height() + lastPage.find('.footer').height()
  lastPage.find('.all #cv-main').hide()
  lastPage.find('.all #cv-content').show()
  let lastPageHeightRight = lastPage.find('.all').height() + lastPage.find('.footer').height()
  lastPage.find('.all #cv-main').show()
  lastPage.addClass('height_page')

  freeHeightLeft = 0
  freeHeightRight = 0

  //Lấy khoảng trống còn dư của 2 cột
  for (let page = 1; page < totalPage; page++) {
    let currentPage = $(`.cv_page[data-page="${page}"]`)

    if (page == totalPage - 1) {
      currentPage.removeClass('height_page')
      currentPage.find(`#cv-main`).removeAttr('style')
      currentPage.find(`#cv-content`).removeAttr('style')
      currentPage.find('#cv-content').hide()
      freeHeightLeft += height_page - currentPage.outerHeight(true)
      currentPage.find('#cv-content').show()

      currentPage.find('#cv-main').hide()
      freeHeightRight += height_page - currentPage.outerHeight(true)
      currentPage.find('#cv-main').show()
      currentPage.find('#cv-main .cvo-block').each(function () {
        let marginTop = $(this).css('margin-top').replace('px', '')
        let marginBottom = $(this).css('margin-bottom').replace('px', '')
        freeHeightLeft += Number(marginTop)
        freeHeightLeft += Number(marginBottom)
      })
      currentPage.find('#cv-content .cvo-block').each(function () {
        let marginTop = $(this).css('margin-top').replace('px', '')
        let marginBottom = $(this).css('margin-bottom').replace('px', '')
        freeHeightRight += Number(marginTop)
        freeHeightRight += Number(marginBottom)
      })
    }
  }
  if (lastPageHeightLeft <= 200 && lastPageHeightRight <= 200 && freeHeightLeft >= lastPageHeightLeft && freeHeightRight >= lastPageHeightRight) {
    let beforeLastPage = $(`.cv_page[data-page="${totalPage - 1}"]`)
    beforeLastPage.find('#cv-content').removeAttr('style')
    beforeLastPage.find('#cv-main').removeAttr('style')

    beforeLastPage.find('.all #cv-content').hide()
    let paddingLeft = height_page - beforeLastPage.outerHeight(true)
    beforeLastPage.find('.all #cv-main').hide()
    beforeLastPage.find('.all #cv-content').show()
    let paddingRight = height_page - beforeLastPage.outerHeight(true)
    beforeLastPage.find('.all #cv-main').show()
    let heightMarginLeft = freeHeightLeft - paddingLeft
    let heightMarginRight = freeHeightRight - paddingRight
    beforeLastPage.find('#cv-main .block').each(function () {
      let marginTop = $(this).css('margin-top').replace('px', '')
      let marginBottom = $(this).css('margin-bottom').replace('px', '')
      let marginTopAdjust = (marginTop / heightMarginLeft) * marginTop,
        marginBottomAdjust = (marginBottom / heightMarginLeft) * marginBottom
      $(this).css('margin-top', marginTopAdjust)
      $(this).css('margin-bottom', marginBottomAdjust)
    })
    beforeLastPage.find('#cv-content .cvo-block').each(function () {
      let marginTop = $(this).css('margin-top').replace('px', '')
      let marginBottom = $(this).css('margin-bottom').replace('px', '')
      let marginTopAdjust = (marginTop / heightMarginRight) * (freeHeightLeft - lastPageHeightRight),
        marginBottomAdjust = (marginBottom / heightMarginRight) * (freeHeightRight - lastPageHeightRight)
      $(this).css('margin-top', marginTopAdjust)
      $(this).css('margin-bottom', marginBottomAdjust)
    })
  }
  paginationCv(1)
}

function addWatermark() {
  let html = `<div class="watermark_js">© TopCv1s.com</div>`
  let totalPage = $('.cv_page').length
  for (let page = 1; page <= totalPage; page++) {
    let currentPage = $(`.cv_page[data-page="${page}"]`)
    currentPage.find('.watermark_js').remove()
    if (!currentPage.find('.watermark_js').length && !currentPage.find('.watermark').length) {
      currentPage.append(html)
    }
  }
}

// Tự động viết hoa
function replaceVal(val, step) {
  var selection = window.getSelection()
  for (var i = 0; i < step; i += 1) {
    selection.modify('extend', 'backward', 'character')
  }
  document.execCommand('insertText', false, val)
}
var check_val = ['?', '.', '!']
$(document).on('keyup', '#form-cv [contenteditable="true"]', function (e) {
  if (check_val.includes(e.key) || e.which == 49 || e.which == 191) {
    $(this).attr('data-upper', 1)
  } else if ($(this).attr('data-upper') == 1 && e.key.length <= 1 && e.which != 32) {
    $(this).removeAttr('data-upper')
    let text = e.key.toUpperCase()
    replaceVal(text, 1)
  }
})

$(document)
  .on('click', '.btn_change_bg', function () {
    $('input[name="radio_img"]:checked').prop('checked', false)
  })
  .on('click', '.pop_change_background .upload_file_bg', function () {
    $('#inp_bg_file').click()
  })

function unPaginationCV() {
  if ($('#form-cv .cv_page').length) {
    $('#form-cv .cv_page[data-page = "1"]').removeClass('height_page')
    $('#form-cv .cv_page').each(function () {
      let page = $(this).attr('data-page')
      if (page > 1) {
        $(this)
          .find('#sortable .block')
          .each(function () {
            let id = $(this).attr('id')
            let html = $(this)[0].outerHTML
            console.log($('#form-cv .cv_page[data-page = "1"] #sortable').length)
            $('#form-cv .cv_page[data-page = "1"] #sortable').append(html)
            $(this).remove()
          })
        $(this)
          .find('#sort_block .cvo-block')
          .each(function () {
            let id = $(this).attr('id')
            if ($(`#form-cv .cv_page[data-page = "1"] #sort_block #${id}`).length) {
              let html = $(this).find(`#experience-table`).html()
              $(`#form-cv .cv_page[data-page = "1"] #sort_block #${id} #experience-table`).append(html)
            } else {
              let html = $(this)[0].outerHTML
              $(`#form-cv .cv_page[data-page = "1"] #sort_block`).append(html)
            }
          })
        if ($(this).find('.footer').length) {
          let html = $(this).find('.footer')[0].outerHTML
          $(`#form-cv .cv_page[data-page = "1"]`).append(html)
        }
        $(this).remove()
      }
    })
  }
}