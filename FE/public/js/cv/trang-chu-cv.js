// Lấy dữ liệu CV
const idcv = getIdcvFromUrl();
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
let isLogin = getCookie('isLogin');
// let userFilter = getCookie('filter')
let isCreated = false;
var defaultFont = 'Roboto', defaultFontSize = 17, defaultLineHeight = 1.45;
var userAgent = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

$(document).ready(function () {
  var result, lang, idlang, dataMuc;

  // Gọi API bằng Ajax kèm theo idcv
  $.ajax({
    url: 'http://localhost:3056/api/topcv1s/cv/in4CV',
    type: 'POST',
    data: { idcv: idcv },
    success: function (data) {
      result = data;
      const in4CVSsr = result.data.data
      alias = in4CVSsr.alias;

      const colorMap = in4CVSsr.colors.split(',');

      const handleChangeLang = (lang) => {
        if (in4CVSsr) {
          if (in4CVSsr?.item_ur) {
            return (in4CVSsr?.item_ur?.html);
          } else if (lang === "vi" && in4CVSsr?.html_vi !== undefined) {
            return (in4CVSsr?.html_vi);
          } else if (lang === "en" && in4CVSsr?.html_en !== undefined) {
            return (in4CVSsr?.html_en);
          } else if (lang === "cn" && in4CVSsr?.html_cn !== undefined) {
            return (in4CVSsr?.html_cn);
          } else if (lang === "kr" && in4CVSsr?.html_kr !== undefined) {
            return (in4CVSsr?.html_kr);
          } else if (lang === "jp" && in4CVSsr?.html_jp !== undefined) {
            return (in4CVSsr?.html_jp);
          } else if (!lang) {
            return null;
          } else {
            return null; // Hoặc giá trị mặc định khác nếu cần
          }
        }
      };

      const dataForMuc = (lang) => {
        const data = in4CVSsr?.[`html_${lang}`];
        let final = [];
        if (data) {
          const jsonData = data;
          final.push({
            id: "box02",
            name: "Mục tiêu nghề nghiệp",
            status: jsonData?.menu?.find((item) => item.id == 'box02')?.status,
          });
          final.push({
            id: "box03",
            name: "Kỹ năng",
            status: jsonData?.menu?.find((item) => item.id == 'box03')?.status,
          });
          final.push({
            id: "box04",
            name: "Giải thưởng",
            status: jsonData?.menu?.find((item) => item.id == 'box04')?.status,
          });
          final.push({
            id: "box05",
            name: "Chứng chỉ",
            status: jsonData?.menu?.find((item) => item.id == 'box05')?.status,
          });
          final.push({
            id: "box06",
            name: "Sở thích",
            status: jsonData?.menu?.find((item) => item.id == 'box06')?.status,
          });
          final.push({
            id: "box07",
            name: "Người tham chiếu",
            status: jsonData?.menu?.find((item) => item.id == 'box07')?.status,
          });
          final.push({
            id: "block01",
            name: "Trình độ học vấn",
            status: jsonData?.experiences?.find((item) => item.id == 'block01')?.status,
          });
          final.push({
            id: "block02",
            name: "Kinh nghiệm làm việc",
            status: jsonData?.experiences?.find((item) => item.id == 'block02')?.status,
          });
          final.push({
            id: "block03",
            name: "Hoạt động",
            status: jsonData?.experiences?.find((item) => item.id == 'block03')?.status,
          });
          final.push({
            id: "block04",
            name: "Dự án tham gia",
            status: jsonData?.experiences?.find((item) => item.id == 'block04')?.status,
          });
          final.push({
            id: "block05",
            name: "Thông tin thêm",
            status: jsonData?.experiences?.find((item) => item.id == 'block05')?.status,
          });

          dataMuc = final          
        }

      };

      const mucChuaSd = (item) => {
        if (item.status === 'hide') {
          return `
            <div class="mucchuasd muc_chua_sd " id="muc_chua_sd_${item?.id}">
              <img src="/images/icon/ic_cv_warning.svg"
                class="icon_warning_muc cursor_pt" alt="icon cảnh báo" />
              <div class="mucchuasd_frame">
                <p class="txt_frame_mcsd">
                  ${item?.name}
                </p>
              </div>
              <img src="/images/icon/ic_cv_plus.svg"
                class="icon_add_muc cursor_pt" alt="icon thêm mục"
                data-blockmain="menu" data-blockkey=${item?.id} />
            </div>
          `
        }
      }

      const mucDaSd = (item) => {
        if (item.status !== 'hide') {
          return `
            <div class="mucchuasd muc_da_sd " id="muc_da_sd_${item?.id}">
              <img src="/images/icon/ic_cv_warning.svg" class="icon_warning_muc cursor_pt" alt="icon cảnh báo" />
              <div class="mucchuasd_frame">
                <p class="txt_frame_mcsd">
                  ${item?.name}
                </p>
              </div>
              <img src="/images/icon/ic_cv_minus.svg"
                class="icon_add_muc cursor_pt" alt="icon thêm mục"
                data-blockmain="menu" data-blockkey=${item?.id} />
            </div>
          `
        }
      }

      $.ajax({
        url: isMobile ? `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/cv_mobile/index.html` : `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/${alias}/index.html`,
        method: 'GET',
        success: function (data) {
          $('#cvid').attr('value', idcv)
          $('.page_cv').html(data);
          $("#cvo-profile-avatar").addClass('show_modal_avar')
          appendScript()

          lang = $(".sidenav__lague--item.sidenav--item.active").attr('data-language');
          if (lang === "vi") {
            idlang = "1"
          } else if (lang === "en") {
            idlang = "2"
          } else if (lang === "cn") {
            idlang = "3"
          } else if (lang === "jp") {
            idlang = "4"
          } else {
            idlang = "5"
          }

          handleSetData(handleChangeLang(lang), false, lang, idlang)
          dataForMuc(lang)
          // dataMuc.forEach(item => {
          //   $('.show_mucchuasd').append(mucChuaSd(item))
          //   $('.show_mucdasd').append(mucDaSd(item))
          // });

          if (isLogin === "true") {
            const id = getCookie("use_id");
            const token = getCookie("accessToken");
            $.ajax({
              url: 'http://localhost:3052/api/topcv1s/candidate/detailCV',
              type: 'POST',
              data: { idcv: idcv, id: id },
              beforeSend: function (request) {
                request.setRequestHeader("Authorization", "Bearer " + token);
              },
              success: function (data) {
                const response = data?.data?.data?.result;

                const dataForMucNew = (lang, idlang) => {
                  const data = response?.lang === lang || response?.lang === idlang
                    ? JSON.parse(response?.html)
                    : in4CVSsr?.[`html_${lang}`];
                  let final = [];
                  if (data) {
                    const jsonData = data;
                    final.push({
                      id: "box02",
                      name: "Mục tiêu nghề nghiệp",
                      status: jsonData?.menu?.find((item) => item.id == 'box02')?.status,
                    });
                    final.push({
                      id: "box03",
                      name: "Kỹ năng",
                      status: jsonData?.menu?.find((item) => item.id == 'box03')?.status,
                    });
                    final.push({
                      id: "box04",
                      name: "Giải thưởng",
                      status: jsonData?.menu?.find((item) => item.id == 'box04')?.status,
                    });
                    final.push({
                      id: "box05",
                      name: "Chứng chỉ",
                      status: jsonData?.menu?.find((item) => item.id == 'box05')?.status,
                    });
                    final.push({
                      id: "box06",
                      name: "Sở thích",
                      status: jsonData?.menu?.find((item) => item.id == 'box06')?.status,
                    });
                    final.push({
                      id: "box07",
                      name: "Người tham chiếu",
                      status: jsonData?.menu?.find((item) => item.id == 'box07')?.status,
                    });
                    final.push({
                      id: "block01",
                      name: "Trình độ học vấn",
                      status: jsonData?.experiences?.find((item) => item.id == 'block01')?.status,
                    });
                    final.push({
                      id: "block02",
                      name: "Kinh nghiệm làm việc",
                      status: jsonData?.experiences?.find((item) => item.id == 'block02')?.status,
                    });
                    final.push({
                      id: "block03",
                      name: "Hoạt động",
                      status: jsonData?.experiences?.find((item) => item.id == 'block03')?.status,
                    });
                    final.push({
                      id: "block04",
                      name: "Dự án tham gia",
                      status: jsonData?.experiences?.find((item) => item.id == 'block04')?.status,
                    });
                    final.push({
                      id: "block05",
                      name: "Thông tin thêm",
                      status: jsonData?.experiences?.find((item) => item.id == 'block05')?.status,
                    });

                    dataMuc = final
                  }
                };

                // console.log(">>> Check response: ", response);
                if (response?.html) {
                  if (response?.lang === "1" || response?.lang === "vi") {
                    lang = 'vi'
                    idlang = "1"
                  } else if (response?.lang === "2" || response?.lang === "en") {
                    lang = "en"
                    idlang = "2"
                  } else if (response?.lang === "3" || response?.lang === "cn") {
                    lang = "cn"
                    idlang = "3"
                  } else if (response?.lang === "4" || response?.lang === "jp") {
                    lang = "jp"
                    idlang = "4"
                  } else {
                    lang = "kr"
                    idlang = "5"
                  }
                  isCreated = true
                  const color = JSON.parse(response?.html)?.css.color
                  const font = JSON.parse(response?.html)?.css.font
                  const fontSize = JSON.parse(response?.html)?.css.font_size;
                  const fontSpacing = JSON.parse(response?.html)?.css.font_spacing;
                  const filter = JSON.parse(response?.html)?.css.filter
                  const handleChangeLangNew = (lang) => {
                    if (response && response?.html) {
                      if (response?.item_ur) {
                        return response?.item_ur?.html;
                      } else if (lang === "vi" && in4CVSsr?.html_vi !== undefined) {
                        idlang = "1"
                        return response?.lang === "1" || response?.lang === "vi"
                          ? JSON.parse(response?.html)
                          : in4CVSsr?.html_vi;
                      } else if (lang === "en" && in4CVSsr?.html_en !== undefined) {
                        idlang = "2"
                        return response?.lang === "2" || response?.lang === "en"
                          ? JSON.parse(response?.html)
                          : in4CVSsr?.html_en;
                      } else if (lang === "cn" && in4CVSsr?.html_cn !== undefined) {
                        idlang = "3"
                        return response?.lang === "3" || response?.lang === "cn"
                          ? JSON.parse(response?.html)
                          : in4CVSsr?.html_cn;
                      } else if (lang === "jp" && in4CVSsr?.html_jp !== undefined) {
                        idlang = "4"
                        return response?.lang === "4" || response?.lang === "jp"
                          ? JSON.parse(response?.html)
                          : in4CVSsr?.html_jp;
                      } else if (lang === "kr" && in4CVSsr?.html_kr !== undefined) {
                        idlang = "5"
                        return response?.lang === "5" || response?.lang === "kr"
                          ? JSON.parse(response?.html)
                          : in4CVSsr?.html_kr;
                      } else if (!lang) {
                        return null;
                      } else {
                        return JSON.parse(response?.html);
                      }
                    }
                  };

                  dataForMucNew(lang, idlang)
                  dataMuc.forEach(item => {
                    $('.show_mucchuasd').append(mucChuaSd(item))
                    $('.show_mucdasd').append(mucDaSd(item))
                  });

                  handleSetData(handleChangeLangNew(lang))
                  setPlaceholderHTMl(
                    lang,
                    handleChangeLangNew(lang),
                    JSON.parse(response?.html),
                  );

                  // $('#cvo-profile-avatar').css('filter', decodeURIComponent(userFilter))
                  // console.log(">>> Avatar: ", JSON.parse(response?.html)?.avatar);s

                  // Lấy avatar từ hai nguồn
                  const avatar1 = JSON.parse(response?.html)?.avatar;
                  const avatar2 = decodeURIComponent(userLogo);

                  // So sánh hai URL
                  if (avatar1 && avatar2) {
                    if (avatar1 !== avatar2) {
                      // Nếu khác nhau, cập nhật cả hai
                      updateAvatarLibrary(avatar1);
                      updateAvatarLibrary(avatar2);
                    } else {
                      // Nếu giống nhau, chỉ cập nhật một
                      updateAvatarLibrary(avatar1);
                    }
                  } else {
                    // Trường hợp một trong hai URL là null hoặc undefined
                    updateAvatarLibrary(avatar1 || avatar2);
                  }

                  $('#cv_font').val(font);
                  $('[contenteditable="true"]').css('font-family', font)

                  $('.font_size').val(fontSize);
                  $('#form-cv, #cv-content h3').css('font-size', parseFloat(fontSize) + "px");
                  $('#cv-top h1').css('font-size', ((parseFloat(fontSize) - 1) * 2).toFixed(2) + "px");
                  $('#cv-top h2, .box-title, .block-title').css('font-size', (parseFloat(fontSize) + 2).toFixed(2) + "px");

                  $('.line_height').val(fontSpacing);
                  $('#form-cv [contenteditable="true"]').css('line-height', fontSpacing);


                  $('#cv_font').change(function () {
                    var selectedFont = $(this).val();
                    $('[contenteditable="true"]').css('font-family', selectedFont);
                  });


                  $('.cv-top--content__color').css('background-color', `#${color}`);
                  $('.modal-act-color--circle').css('background-color', `#${color}`);
                  $('.sidenav__color--item.sidenav--item').each(function () {
                    if ($(this).find('.sidenav__color--circle').attr('data-color') === color) {
                      $('.sidenav__color--item.sidenav--item').removeClass('active');
                      $(this).addClass('active')
                    }
                  })

                  $('.sidenav__lague--item.sidenav--item').each(function () {
                    if ($(this).attr("data-language") === idlang || $(this).attr("data-language") === lang) {
                      $('.sidenav__lague--item.sidenav--item').removeClass('active');
                      $(this).addClass('active');
                      $(".cv-top__langue .cv-top--content img").attr('src', $(this).find('img').attr('src'))
                    }
                  })

                  $('#color-stylesheet').attr("href", `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/${alias}/css/colors/${color}.css`);

                  $('.sidenav__lague--item.sidenav--item').on('click', function () {
                    $('.sidenav__lague--item.sidenav--item').removeClass('active');
                    $(this).addClass('active');
                    $(".cv-top__langue .cv-top--content img").attr('src', $(this).find('img').attr('src'))
                    lang = $(this).attr('data-language');
                    handleSetData(handleChangeLangNew(lang))
                    setPlaceholderHTMl(
                      lang,
                      handleChangeLangNew(lang),
                      in4CVSsr?.[`html_${lang}`],
                    );
                    $('.show_mucchuasd').empty()
                    $('.show_mucdasd').empty()

                    dataForMucNew(lang, idlang)
                    dataMuc.forEach(item => {
                      $('.show_mucchuasd').append(mucChuaSd(item))
                      $('.show_mucdasd').append(mucDaSd(item))
                    });

                    if (isCreated && response?.lang === idlang || response?.lang === lang) {
                      $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').removeClass('err_cv_content')
                    } else {
                      $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').addClass('err_cv_content')
                    }
                  });

                  if (isCreated && response?.lang === idlang || response?.lang === lang) {
                    $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').removeClass('err_cv_content')
                  } else {
                    $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').addClass('err_cv_content')
                  }
                } else {
                  isCreated = false
                  $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').addClass('err_cv_content')

                  handleSetData(handleChangeLang(lang))
                  setPlaceholderHTMl(
                    lang,
                    handleChangeLang(lang),
                    in4CVSsr?.[`html_${lang}`],
                  );

                  dataForMuc(lang)
                  dataMuc.forEach(item => {
                    $('.show_mucchuasd').append(mucChuaSd(item))
                    $('.show_mucdasd').append(mucDaSd(item))
                  });

                  $('.sidenav__lague--item.sidenav--item').on('click', function () {
                    $('.sidenav__lague--item.sidenav--item').removeClass('active');
                    $(this).addClass('active');
                    $(".cv-top__langue .cv-top--content img").attr('src', $(this).find('img').attr('src'))
                    lang = $(this).attr('data-language');
                    
                    handleSetData(handleChangeLang(lang))
                    setPlaceholderHTMl(
                      lang,
                      handleChangeLang(lang),
                      in4CVSsr?.[`html_${lang}`]
                    );
                    // dataForMuc(lang)
                    // dataMuc.forEach(item => {
                    //   $('.show_mucchuasd').append(mucChuaSd(item))
                    //   $('.show_mucdasd').append(mucDaSd(item))
                    // });
                  });

                  updateAvatarLibrary(decodeURIComponent(userLogo))

                  $('#cv_font').change(function () {
                    var selectedFont = $(this).val();
                    $('[contenteditable="true"]').css('font-family', selectedFont);
                  });

                  $('.font_size').change(function () {
                    var selectedFontSize = $(this).val();
                    $('#form-cv, #cv-content h3').css('font-size', parseFloat(selectedFontSize) + "px");
                    $('#cv-top h1').css('font-size', ((parseFloat(selectedFontSize) - 1) * 2).toFixed(2) + "px");
                    $('#cv-top h2, .box-title, .block-title').css('font-size', (parseFloat(selectedFontSize) + 2).toFixed(2) + "px");
                  });

                  $('.line_height').change(function () {
                    var selectedLineHeight = $(this).val();
                    $('#form-cv [contenteditable="true"]').css('line-height', selectedLineHeight);
                  });
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching HTML:', textStatus, errorThrown);
              }
            })
          } else {
            lang = $(".sidenav__lague--item.sidenav--item.active").attr('data-language');
            if (lang === "vi") {
              idlang = "1"
            } else if (lang === "en") {
              idlang = "2"
            } else if (lang === "cn") {
              idlang = "3"
            } else if (lang === "jp") {
              idlang = "4"
            } else {
              idlang = "5"
            }
            handleSetData(handleChangeLang(lang), false, lang, idlang)
            setPlaceholderHTMl(
              lang,
              handleChangeLang(lang),
              in4CVSsr?.[`html_${lang}`]
            );

            dataForMuc(lang)
            dataMuc.forEach(item => {
              $('.show_mucchuasd').append(mucChuaSd(item))
              $('.show_mucdasd').append(mucDaSd(item))
            });

            // Đổi font chữ, font size, font spacing
            var savedFontSize = localStorage.getItem('fontSize');
            var savedLineHeight = localStorage.getItem('lineHeight');
            var savedFont = localStorage.getItem('selectedFont');
            if (savedFont) {
              $('#cv_font').val(savedFont);
              $('[contenteditable="true"]').css('font-family', savedFont);
            } else {
              $('#cv_font').val(defaultFont);
              $('[contenteditable="true"]').css('font-family', defaultFont)
            }

            if (savedFontSize) {
              $('.font_size').val(savedFontSize);
              $('#form-cv, #cv-content h3').css('font-size', parseFloat(savedFontSize) + "px");
              $('#cv-top h1').css('font-size', ((parseFloat(savedFontSize) - 1) * 2).toFixed(2) + "px");
              $('#cv-top h2, .box-title, .block-title').css('font-size', (parseFloat(savedFontSize) + 2).toFixed(2) + "px");
            } else {
              $('.font_size').val(defaultFontSize);
              $('#form-cv, #cv-content h3').css('font-size', parseFloat(defaultFontSize) + "px");
              $('#cv-top h1').css('font-size', ((parseFloat(defaultFontSize) - 1) * 2).toFixed(2) + "px");
              $('#cv-top h2, .box-title, .block-title').css('font-size', (parseFloat(defaultFontSize) + 2).toFixed(2) + "px");
            }

            if (savedLineHeight) {
              $('.line_height').val(savedLineHeight);
              $('#form-cv [contenteditable="true"]').css('line-height', savedLineHeight);
            } else {
              $('.line_height').val(defaultLineHeight);
              $('#form-cv [contenteditable="true"]').css('line-height', defaultLineHeight);
            }

            $('#cv_font').change(function () {
              var selectedFont = $(this).val();
              $('[contenteditable="true"]').css('font-family', selectedFont);
            });

          }

          // Load the CSS file
          $('#cv-css').attr('href', isMobile ? "http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/cv_mobile/css/cv.css" : `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/${alias}/css/cv.css`);

          // Đổi màu
          $('.cv-top--content__color').css('background-color', `#${colorMap[0]}`);
          $('.modal-act-color--circle').css('background-color', `#${colorMap[0]}`);
          $('#color-stylesheet').attr("href", `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/${alias}/css/colors/${colorMap[0]}.css`);
          const colorList = $('.sidenav__color--circle')
          for (let i = 0; i < colorList.length; i++) {
            $(colorList[i]).css("background-color", `#${colorMap[i]}`)
            $(colorList[i]).attr('data-color', colorMap[i]);
          }

          $('.sidenav__color--item.sidenav--item').on('click', function () {
            $('.sidenav__color--item.sidenav--item').removeClass('active');
            $(this).addClass('active');
            var bgColor = $(this).find('.sidenav__color--circle').attr('data-color');
            var cssFile = colorMap.find(item => item === bgColor)
            $('.cv-top--content__color').css('background-color', '#' + bgColor);
            $('.modal-act-color--circle').css('background-color', $('.cv-top--content__color').css('background-color'));
            if (cssFile) {
              $('#color-stylesheet').attr('href', `http://localhost:3056/api/topcv1s/cv/cv365/upload/cv/${alias}/css/colors/${cssFile}.css`);
            }
          });

          // Đổ dữ liệu vào CV
          if (in4CVSsr?.html_vi && in4CVSsr?.html_vi !== 'null' && in4CVSsr?.html_vi !== '') {
            lang = 'vi'
          } else if (in4CVSsr?.html_en && in4CVSsr?.html_en !== 'null' && in4CVSsr?.html_en !== '') {
            lang = 'en'
          } else if (in4CVSsr?.html_jp && in4CVSsr?.html_jp !== 'null' && in4CVSsr?.html_jp !== '') {
            lang = 'jp'
          } else if (in4CVSsr?.html_kr && in4CVSsr?.html_kr !== 'null' && in4CVSsr?.html_kr !== '') {
            lang = 'kr'
          } else if (in4CVSsr?.html_cn && in4CVSsr?.html_cn !== 'null' && in4CVSsr?.html_cn !== '') {
            lang = 'cn'
          }

          localStorage.setItem('sampleCV', JSON.stringify(in4CVSsr?.[`html_${lang}`]))

          $('.sidenav__lague--item.sidenav--item').on('click', function () {
            $('.sidenav__lague--item.sidenav--item').removeClass('active');
            $(this).addClass('active');
            $(".cv-top__langue .cv-top--content img").attr('src', $(this).find('img').attr('src'))
            lang = $(this).attr('data-language');
            handleSetData(handleChangeLang(lang), false, lang, idlang)
            setPlaceholderHTMl(
              lang,
              handleChangeLang(lang),
              in4CVSsr?.[`html_${lang}`]
            );
            // dataForMuc(lang)
            // dataMuc.forEach(item => {
            //   $('.show_mucchuasd').append(mucChuaSd(item))
            //   $('.show_mucdasd').append(mucDaSd(item))
            // });

            $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').addClass('err_cv_content')
          });

          $('.exp-title, .exp-content, .exp-date, .exp-subtitle, .box-content, .skill-name, #cv-profile-sex, #cv-profile-phone, #cv-profile-birthday, #cv-profile-address, #cv-profile-email').addClass('err_cv_content')
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error('Error fetching HTML:', textStatus, errorThrown);
        }
      });
      localStorage.removeItem('userInfo')
    },
    error: function (xhr, status, error) {
      console.error('Error:', error); // In lỗi ra console nếu có lỗi
    }
  });
});

$(".nav-item").hover(
  function () {
    $(this).children(".nav-dropdown").stop(true, true).fadeIn(300);
  },
  function () {
    $(this).children(".nav-dropdown").stop(true, true).fadeOut(300);
  }
);

// Zoom CV
let zoomLevel = 100;

function updateZoom() {
  $(".cv-range-percent").text(`${zoomLevel}%`);
  $(".cv-body-content").css("transform", `scale(${zoomLevel / 100})`);
}

$("#zoom-out").click(function () {
  if (zoomLevel > 10) {
    zoomLevel -= 1;
    updateZoom();
  }
});

$("#zoom-in").click(function () {
  if (zoomLevel < 150) {
    zoomLevel += 1;
    updateZoom();
  }
});

$(".cv-range-input").on("input", function () {
  zoomLevel = parseInt($(this).val());
  updateZoom();
});

$(".cv-range").hover(
  function () {
    $(".cv-range-percent").hide();
    $(".cv-range-input").show();
  },
  function () {
    // Hover out
    $(".cv-range-percent").show();
    $(".cv-range-input").hide();
  }
);

updateZoom();

// Hiển thị các chức năng
$(".sidenav__target").on("click", function () {
  const isActive = $(this).hasClass("active");

  if (isActive) {
    $(this).removeClass("active");
    $(".cv-sidenav").removeClass("sidenav-dshow");
    $(".cv-body").removeClass("active");
  } else {
    $(".sidenav__target").removeClass("active");
    $(this).addClass("active");
    $(".cv-sidenav").addClass("sidenav-dshow");
    $(".cv-body").addClass("active");
  }

  const targetId = $(this).attr("target_id");
  const targetStyle = $(this).attr("target_style");
  $(".sidenav__cnt").hide();
  const $targetCnt = $("#" + targetId);

  if ($targetCnt.length) {
    const $sidenav = $targetCnt.closest(".cv-sidenav");
    $sidenav.removeClass("cv-sidenav--visible");
    $targetCnt.show();

    if (targetStyle === "2") {
      $sidenav.addClass("nav-white");
    } else {
      $sidenav.removeClass("nav-white");
    }
  }
});

// Dấu mũi tên
$(".sidenav__toggle").click(function () {
  $(".cv-sidenav").toggleClass("sidenav-dshow");
  $(".cv-body").toggleClass("active");
  $(".sidenav__target ").removeClass("active");
});
$(".close_sidenav").click(function () {
  $(".cv-sidenav").removeClass("sidenav-dshow");
  $(".sidenav__target ").removeClass("active");
});

// Tối ưu không gian
$(document).ready(function () {
  var interval;
  var increment;

  function updateLineHeight() {
    var lineHeight = $('.line_height').val();
    $('#form-cv [contenteditable="true"]').css('line-height', lineHeight);
  }

  function updateFontSize() {
    var fontSize = parseFloat($('.font_size').val());
    $('#form-cv, #cv-content h3').css('font-size', fontSize + "px");
    $('#cv-top h1').css('font-size', ((fontSize - 1) * 2).toFixed(2) + "px");
    $('#cv-top h2, .box-title, .block-title').css('font-size', (fontSize + 2).toFixed(2) + "px");
  }

  function updateInputValue($input, newValue) {
    var minValue = parseFloat($input.attr("min"));
    var maxValue = parseFloat($input.attr("max"));
    if (newValue >= minValue && newValue <= maxValue) {
      $input.val(newValue.toFixed(2)); // Cập nhật giá trị của input
      $input.attr("value", newValue.toFixed(2)); // Đảm bảo thuộc tính value cũng được cập nhật
      updateFontSize();
      updateLineHeight();
    }
  }

  $(".minus_range_btn").click(function () {
    var $input = $(this).closest(".form_range").find(".range_space_input");
    increment = parseFloat($input.attr("step"));
    var currentValue = parseFloat($input.val());
    var minValue = parseFloat($input.attr("min"));
    if (currentValue > minValue) {
      updateInputValue($input, currentValue - increment);
    }
  });

  $(".range_space_input").on("input", function () {
    var $input = $(this);
    var currentValue = parseFloat($input.val());
    updateInputValue($input, currentValue);
  });

  $(".font_size").on("input", function () {
    updateFontSize();
  });

  $(".line_height").on("input", function () {
    updateLineHeight();
  });

  $(".minus_range_btn")
    .mousedown(function () {
      var $input = $(this).closest(".form_range").find(".range_space_input");
      increment = parseFloat($input.attr("step"));
      interval = setInterval(function () {
        var currentValue = parseFloat($input.val());
        var minValue = parseFloat($input.attr("min"));
        if (currentValue > minValue) {
          updateInputValue($input, currentValue - increment);
        }
      }, 100);
    })
    .mouseup(function () {
      clearInterval(interval);
    });

  $(".plus_range_btn").click(function () {
    var $input = $(this).closest(".form_range").find(".range_space_input");
    increment = parseFloat($input.attr("step"));
    var currentValue = parseFloat($input.val());
    var maxValue = parseFloat($input.attr("max"));
    if (currentValue < maxValue) {
      updateInputValue($input, currentValue + increment);
    }
  });

  $(".plus_range_btn")
    .mousedown(function () {
      var $input = $(this).closest(".form_range").find(".range_space_input");
      increment = parseFloat($input.attr("step"));
      interval = setInterval(function () {
        var currentValue = parseFloat($input.val());
        var maxValue = parseFloat($input.attr("max"));
        if (currentValue < maxValue) {
          updateInputValue($input, currentValue + increment);
        }
      }, 100);
    })
    .mouseup(function () {
      clearInterval(interval);
    });
});

// Xem trước
$(document).ready(function () {
  const $modalActColor = $(".modal-act-color");
  const $modalActColorLabel = $(".modal-act-color--label");

  $modalActColor.on("click", function (event) {
    event.stopPropagation();
    $modalActColorLabel.toggle();
  });

  $modalActColorLabel.on("click", function (event) {
    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    if (!$modalActColor.is(event.target) &&
      $modalActColor.has(event.target).length === 0
    ) {
      $modalActColorLabel.hide();
    }
  });
});

// Ẩn xem trước
$(".modal-act-close").click(function () {
  $("#modal_view").hide();
});
// Hiển thị CV tham khảo
$(".cv-top__refer").click(function () {
  $("#modal_refer").show();
  $('body').css('overflow', 'hidden')
});
// Ẩn màn CV tham khảo
$(".close_refer_modal").click(function () {
  $("#modal_refer").hide();
  $('body').css('overflow', 'auto')
});

// Zoom ảnh xem trước
$(document).ready(function () {
  let interval;
  let scale = 1;

  const updateScale = (delta) => {
    scale += delta;
    if (scale > 1.5) scale = 1.5;
    if (scale < 0.1) scale = 0.1;
    $(".img_cv").css("transform", `scale(${scale})`);
    $(".modal-percent-range").text(`${Math.round(scale * 100)}%`);
  };

  $(".view-btn-minus").on("mousedown", function () {
    updateScale(-0.1);
    interval = setInterval(() => updateScale(-0.1), 100);
  });

  $(".view-btn-plus").on("mousedown", function () {
    updateScale(0.1);
    interval = setInterval(() => updateScale(0.1), 100);
  });

  $(document).on("mouseup mouseleave", function () {
    clearInterval(interval);
  });


  $(".view-btn-minus-mb").on("mousedown", function () {
    updateScale(-0.1);
    interval = setInterval(() => updateScale(-0.1), 100);
  });

  $(".view-btn-plus-mb").on("mousedown", function () {
    updateScale(0.1);
    interval = setInterval(() => updateScale(0.1), 100);
  });

  $(document).on("mouseup mouseleave", function () {
    clearInterval(interval);
  });
});

// Zoom ảnh CV tham khảo
$(document).ready(function () {
  let interval;
  let scale = 1;

  const updateScale = (delta) => {
    scale += delta;
    if (scale > 1.5) scale = 1.5;
    if (scale < 0.1) scale = 0.1;
    $(".img_cv_refer").css("transform", `scale(${scale})`);
    $(".range_refer_percent").text(`${Math.round(scale * 100)}%`);
  };

  $(".range_refer_minus").on("mousedown", function () {
    updateScale(-0.1);
    interval = setInterval(() => updateScale(-0.1), 100);
  });

  $(".range_refer_plus").on("mousedown", function () {
    updateScale(0.1);
    interval = setInterval(() => updateScale(0.1), 100);
  });

  $(document).on("mouseup mouseleave", function () {
    clearInterval(interval);
  });
});

// Mobile nút xem trước
$(document).ready(function () {
  $(".modal_refer--right-show").click(function () {
    $(".modal_refer--right").toggleClass("active");
  });
});

// Set up avatar
$(document).ready(function () {
  var currentStep = 1;
  var croppieInstance = null;

  function goToStep(step) {
    $(".step-item").removeClass("active");
    $(".modal_avar_step-" + step).addClass("active");
    if (step === 1) {
      $(".modal_avar_restep").hide();
    } else {
      $(".modal_avar_restep").show();
    }
    currentStep = step;
  }

  $(".edit_change_img").click(function () {
    $("#avar_input").click();
  });

  $(".choose_type_upload_avar").click(function () {
    $("#avar_input").click();
  });

  $(".modal_avar_step-btn").click(function () {
    goToStep(2);
  });

  $("#avar_input").change(function () {
    var files = $(this)[0].files;
    if (files.length > 0) {
      var reader = new FileReader();
      reader.onload = function (e) {
        if (croppieInstance) {
          croppieInstance.destroy();
        }

        croppieInstance = new Croppie(
          document.getElementById("croppie_container"), {
          enableOrientation: true,
          viewport: {
            width: 220,
            height: 220,
          },
          boundary: {
            width: 310,
            height: 220,
          },
        }
        );

        croppieInstance
          .bind({
            url: e.target.result,
          })
          .then(function () {
            var min = $(".cr-slider").attr("min");
            var max = $(".cr-slider").attr("max");
            var step = $(".cr-slider").attr("step");
            $(".custom_zoom_avar").attr({
              min,
              max,
              step,
            });
            $(".custom_zoom_avar").val(parseInt(max) / 2);
          });
        $(".filter_img_pre").attr("src", e.target.result);
        goToStep(3);
      };
      reader.readAsDataURL(files[0]);
    }
  });

  $(".modal_avar_restep").click(function () {
    if (currentStep > 1) {
      $("#avar_input").val("");
      goToStep(currentStep - 1);
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(
      ".choose_type_upload_avar, .upload_avar_choose"
    ).length) {
      $(".upload_avar_choose").removeClass("active");
    }
  });

  $(".modal_avar_close, .close").click(function () {
    $("#modal_avar").hide();
    $("#avar_input").val("");
  });

  $("#save_cropped_image").click(function () {
    if (croppieInstance) {
      croppieInstance.result({
        type: 'base64',
        size: 'original',
        format: 'jpeg',
        quality: 1
      }).then(function (base64) {
        var img = new Image();
        img.src = base64;

        img.onload = function () {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;

          // Áp dụng bộ lọc nếu bộ lọc CSS không hoạt động
          var filterValue = $(".cr-image").css("filter");
          // if (filterValue) {
          //     ctx.filter = filterValue;
          // }

          ctx.drawImage(img, 0, 0, img.width, img.height);

          var filteredBase64 = canvas.toDataURL('image/jpeg', 1.0);

          $.ajax({
            url: "http://localhost:3050/api/topcv1s/user/uploadAvatarCV",
            method: "POST",
            data: { image64: filteredBase64 },
            cache: false,
            success: function (response) {
              if (response?.data?.img) {
                console.log(">>> img: ", response.data.img);

                $("#cvo-profile-avatar").attr("src", response.data.img).css("filter", filterValue);
              } else {
                console.error("Định dạng phản hồi không như mong đợi:", response);
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.error("Lỗi tải lên:", textStatus, errorThrown);
            },
          });

          $("#modal_avar").hide();
          $("#avar_input").val("");
          $('.filter_item').removeClass('active');
          $('.filter_item').first().addClass('active');
        }

        img.onerror = function () {
          console.error("Lỗi khi tải ảnh");
        }
      });
    }
  });

  $(".edit_rotate").click(function () {
    if (croppieInstance) {
      croppieInstance.rotate(90);
    }
  });

  $(".custom_zoom_avar").on("input", function () {
    if (croppieInstance) {
      croppieInstance.setZoom($(this).val());
    }
  });


  $('.cv-body-content').on('click', '.show_modal_avar', function () {
    $("#modal_avar").show();
    goToStep(1);
  });
  // $(".show_modal_avar").click(function () {

  // });
});

// Bộ lọc avatar
$(document).ready(function () {
  $(".filter_item").click(function () {
    $(".filter_item").removeClass("active");
    $(this).addClass("active");
    var targetFilter = $(this).data("target-filter");
    $(".cr-image").css("filter", targetFilter);
  });
});

// Cuộn thanh chức năng
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop(); // Lấy vị trí cuộn hiện tại của trang
    var sidenav = $('.cv-sidenav'); // Thẻ cv-sidenav
    if (scrollTop >= 150) {
      sidenav.css('top', '150px');
      sidenav.css('max-height', 'calc(100vh - 62.6px - 89.2px)')
    } else {
      sidenav.css('top', '230px');
      sidenav.css('max-height', 'calc(100vh - 80px - 62.6px - 89.2px)')
    }
  });
});

// Mẫu CV tham khảo
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3056/api/topcv1s/cv/ListSampleCV',
    method: 'POST',
    success: function (res) {
      if (res.data.result) {
        let data = res.data.data
        $('.modal_refer_cv img').attr('src', data[0].image);
        // let data = res.data.data.find(item => item.id !== Number(idcv))
        // console.log(">>> Check data: ", data);
        var items = $('.cv_refer--item');
        var mauCVs = $('.sidenav__cnt__item')
        for (let i = 0; i < data.length; i++) {
          var item = $(items[i]);
          var mauCV = $(mauCVs[i]);
          item.find('label').text(data[i].name).attr({
            'data-img': data[i].image,
            'data-alias': data[i].alias,
            'data-id': data[i].id
          });
          mauCV.attr('data-id', data[i].id).attr('data-alias', data[i].alias);
          mauCV.find('.sidenav__cnt__item--img > img').attr('src', data[i].image)
          mauCV.find('.sidenav__cnt__item--name').text(data[i].name)
          $('.modal_render_head_mb_cnt div').text(data[0].name)
          $('.modal_refer_use').attr('data-url', `http://localhost:9020/tao-cv/${data[0].alias}-${data[0].id}`)
          $('.modal_refer--btn').attr('data-url', `http://localhost:9020/tao-cv/${data[0].alias}-${data[0].id}`)
        }
        $('.sidenav__cnt__item').each(function () {
          if ($(this).attr('data-id') === idcv) {
            $('.sidenav__cnt__item').removeClass('target');
            $(this).addClass('target');
          }
        })
        const firstInput = $('input[type="radio"][name="cv-tham-khao"]').first()
        firstInput.prop('checked', true);

        $('input[type="radio"][name="cv-tham-khao"]').change(function () {
          var selectedLabel = $(this).siblings('label').attr('data-img');
          var selectedAlias = $(this).siblings('label').attr('data-alias');
          var selectedId = $(this).siblings('label').attr('data-id');
          var text = $(this).siblings('label').text();
          $('.modal_refer_cv img').attr('src', selectedLabel || '/images/img/CV_Copywirter-01_1.png');
          $('.modal_render_head_mb_cnt div').text(text)
          $('input[type="radio"][name="cv-tham-khao"]').not(this).prop('checked', false);
          $(this).prop('checked', true);
          $('.modal_refer_use').attr('data-url', `http://localhost:9020/tao-cv/${selectedAlias}-${selectedId}`)
          $('.modal_refer--btn').attr('data-url', `http://localhost:9020/tao-cv/${selectedAlias}-${selectedId}`)
        });
      }
    },
    error: function (er) {
      console.error(err);
    }
  })
});

$(document).ready(function () {
  $('.modal_refer_use').on('click', function () {
    window.open($(this).attr('data-url'), '_blank');
  })
  $('.modal_refer--btn').on('click', function () {
    window.open($(this).attr('data-url'), '_blank');
  })
});

// Đổi mẫu CV
$('.sidenav__cnt__item').on('click', function () {
  var alias = $(this).attr('data-alias');
  var id = $(this).attr('data-id');
  $('.sidenav__cnt__item').removeClass('target');
  $(this).addClass('target');
  window.open(`http://localhost:9020/tao-cv/${alias}-${id}`, '_blank')
})

// Modal Đăng nhập
if (!isLogin) {
  // $('#modal_login').show();
} else {
  $('#modal_login').hide();
}
$('.close-button').on('click', function () {
  $('#modal_login').hide();
})

// Modal đăng ký
$('#cate-dk').select2();
$('#city-selector').select2();
$('#district-selector').select2();