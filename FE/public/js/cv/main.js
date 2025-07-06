$(function () {
  var URL = window.URL || window.webkitURL;
  var $image = $("#image");
  var $download = $(".btn-save-image");
  var $dataX = $("#dataX");
  var $dataY = $("#dataY");
  var $dataHeight = $("#dataHeight");
  var $dataWidth = $("#dataWidth");
  var $dataRotate = $("#dataRotate");
  var $dataScaleX = $("#dataScaleX");
  var $dataScaleY = $("#dataScaleY");
  var dataTile = $("#dataTile").val();
  var baseW = $dataWidth.val();
  var baseH = $dataHeight.val();
  var options = {
    aspectRatio: 1 / dataTile,
    preview: ".img-edit-preview",
    dragMode: "move",
    crop: function (e) {
      $dataX.val(Math.round(e.detail.x));
      $dataY.val(Math.round(e.detail.y));
      $dataHeight.val(Math.round(e.detail.height));
      $dataWidth.val(Math.round(e.detail.width));
      $dataRotate.val(e.detail.rotate);
      $dataScaleX.val(e.detail.scaleX);
      $dataScaleY.val(e.detail.scaleY);
    },
  };
  var originalImageURL = $image.attr("src");
  var uploadedImageName = "avatar.jpg";
  var uploadedImageType = "image/jpeg";
  var uploadedImageURL;

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Buttons
  if (!$.isFunction(document.createElement("canvas").getContext)) {
    $('button[data-method="getCroppedCanvas"]').prop("disabled", true);
    $("button.btn-save-image").prop("disabled", true);
  }

  $(document).on("change", "#inp_avatar_ai365", function (e) {
    let file = this.files[0];
    if (file) {
      uploadImageCut(file);
    }
  });
  //Drop image
  $(document).on("dragover", ".choose_image .avatar_handle", function (e) {
    e.preventDefault();
    $(this).addClass("active");
  });
  $(document).on("dragleave", ".choose_image .avatar_handle", function (e) {
    e.preventDefault();
    $(this).removeClass("active");
  });
  $(document).on("drop", ".choose_image .avatar_handle", function (e) {
    e.preventDefault();
    $(this).removeClass("active");
    result = e.originalEvent.dataTransfer.files[0];
    if (result.type.split("/")[0] != "image") {
      $(".choose_image .warning_text").html("Vui lòng chọn ảnh");
      setTimeout(() => {
        $(".choose_image .warning_text").html(
          "Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng giảm dung lượng ảnh trước khi tải lên."
        );
      }, 2000);
    } else {
      file_avatar = result;
      uploadImageCut(result);
    }
    // return false;
  });
  //Ajax clothes
  function dress(prompt_clothes, gender, clothes_type, image) {
    $.ajax({
      url: "/api/cv/dressUpAvatar",
      type: "POST",
      async: "false",
      data: {
        prompt_clothes: prompt_clothes,
        gender: gender,
        clothes_type: clothes_type,
        image: image,
      },
      beforeSend: function (response) {
        $(".profile_descripe").hide();
        $(".loading-container").show();
        $(".avatar-final-container .clothes_option .clothes_text").attr(
          "data-render",
          clothes_type
        );
        $(".avatar-final-container .clothes_option .dropdown-content p")
          .find(`[data-render='${clothes_type}']`)
          .addClass("active");
        $(".avatar-final-container textarea").val(prompt_clothes);
      },
      // dataType:"JSON",
      success: function (success) {
        const result = success?.data;
        // if (result?.data?.error) {
        // 	window.alert(result?.data?.error)
        // } else {
        let image_obj = result;
        $(".loading-container").hide();
        image_final_1 = `data:image/jpeg;base64,${image_obj?.b64_image_1}`;
        image_final_2 = `data:image/jpeg;base64,${image_obj?.b64_image_2}`;
        $(".avatar-final-container").show();
        $(
          ".avatar-final-container .avatar-show .left-avatar .handle-avatar"
        ).css({
          "background-image": `url(${image_final_1})`,
        });
        $(
          ".avatar-final-container .avatar-show .left-avatar .handle-avatar"
        ).attr("data-image", image_final_1);
        $(
          ".avatar-final-container .avatar-show .right-avatar .handle-avatar"
        ).css({
          "background-image": `url(${image_final_2})`,
        });
        $(
          ".avatar-final-container .avatar-show .right-avatar .handle-avatar"
        ).attr("data-image", image_final_2);
        // }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
        window.alert("Có lỗi xảy ra!");
      },
    });
  }
  //Render avatar 1
  $(".profile_descripe .render_avatar").on("click", function (e) {
    gender = $(".profile_descripe .gender_option input:checked").attr(
      "data-gender"
    );
    clothes_type = $(".profile_descripe .clothes_option .clothes_text").attr(
      "data-render"
    );
    prompt_clothes = $(".profile_descripe textarea").val();
    dress(prompt_clothes, gender, clothes_type, image);
  });
  //Render avatar 2
  $(".avatar-final-container .avatar_change").on("click", function (e) {
    gender = $(".profile_descripe .gender_option input:checked").attr(
      "data-gender"
    );
    clothes_type = $(
      ".avatar-final-container .clothes_option .clothes_text"
    ).attr("data-render");
    prompt_clothes = $(".avatar-final-container textarea").val();
    $(".avatar-final-container").hide();
    dress(prompt_clothes, gender, clothes_type, image);
  });
});

$(document).on("click", "#cvo-profile-avatar, .fake_img", function () {
  $(".isNewImage").val("no");
});

$(document).on("click", ".avatar-container .show_old_avatar", function (e) {
  $(".isNewImage").val("no");
  $("#imageEditorWraper_AI").hide();
  $(".edit-image-btns").css({
    display: "flex",
  });
});
function detectAvatar(base64) {
  $.ajax({
    url: "http://43.239.223.19:4090/detect",
    type: "POST",
    data: { source_image: base64 },
    beforeSend: function (response) {
      $(".bg-spinner").remove();
      $("body").append(
        '<div class="bg-spinner"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>'
      );
    },
    // dataType: 'JSON',
    success: function (result) {
      $(".bg-spinner").remove();
      if (result && result.face) {
        $(".choose_image .bottom-container .right-span").attr(
          "data-class",
          "profile_descripe"
        );
        $("#avatarAI365Wraper .box_select_info").show();
        $(".choose_image .image-container").hide();
        $(".choose_image .avatar_handle").css({
          background: `url(${base64})`,
          "background-size": "contain",
          "background-repeat": "no-repeat",
          "background-position": "center center",
        });
      } else {
        $(".choose_image .warning_text").html("Ảnh không hợp lệ");
        setTimeout(() => {
          $(".choose_image .warning_text").html(
            "Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng giảm dung lượng ảnh trước khi tải lên."
          );
        }, 2000);

        $(
          "#avatarAI365Wraper .box_select_image,#avatarAI365Wraper .box_des,#avatarAI365Wraper .box_select_info,#avatarAI365Wraper .box_select_style,#avatarAI365Wraper .box_render_success"
        ).hide();
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("failed");
    },
  });
}
// Detect upload image
function detectAvatarUpload(base64) {
  $.ajax({
    url: "/api/cv/detectFace",
    type: "POST",
    data: JSON.stringify({ base64: base64 }),
    beforeSend: function (response) {
      $(".bg-spinner").remove();
      $("body").append(
        '<div class="bg-spinner"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>'
      );
    },
    contentType: "application/json; charset=utf-8",
    success: function (success) {
      const result = success?.data;
      $(".bg-spinner").remove();
      if (result && result.face) {
        $("#imageEditorWraper_AI").show();
        $(".choose_image_style").hide();
        $(".choose_image").show();
        $(".choose_image .image-container").hide();
        image = base64;
        $(".choose_image  .avatar_handle").css({
          "background-size": "contain",
          "background-color": "#787878",
          "background-image": `url(${base64})`,
          "background-repeat": "no-repeat",
          border: "0.5px solid #979797",
        });
        $(".choose_image .bottom-container .right-span").attr(
          "data-class",
          "profile_descripe "
        );
      } else {
        $(".tipCompress").html("Ảnh không hợp lệ");
        setTimeout(() => {
          $(".tipCompress").html(
            "Lưu ý ảnh phong cách cần đủ sáng và nhìn thẳng"
          );
        }, 2000);
      }
    },
    error: function (errr) {
      console.log(errr);
    },
  });
}

function downloadBase64(base64String, cv_name) {
  const downloadLink = document.createElement("a");

  downloadLink.href = base64String;

  downloadLink.download = `${cv_name}.png`;

  downloadLink.click();
}
var file_avatar = "";
var file_style = "";
var avatar_final = "";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

$(document).on("dragover", ".choose_image .avatar_handle", function (e) {
  e.preventDefault();
  $(this).addClass("active");
});
$(document).on("dragleave", ".choose_image .avatar_handle", function (e) {
  e.preventDefault();
  $(this).removeClass("active");
});
$(document).on("drop", ".choose_image .avatar_handle", function (e) {
  e.preventDefault();
  $(this).removeClass("active");
  result = e.originalEvent.dataTransfer.files[0];
  if (result.type.split("/")[0] != "image") {
    $(".choose_image .warning_text").html("Vui lòng chọn ảnh");
    setTimeout(() => {
      $(".choose_image .warning_text").html(
        "Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng giảm dung lượng ảnh trước khi tải lên."
      );
    }, 2000);
  } else {
    file_avatar = result;
    let base64_avatar = getBase64(result).then((base64) => {
      detectAvatar(base64);
    });
  }
  // return false;
});
$(document).on(
  "click",
  ".choose_image .avatar_handle, .choose_image .avatar_change",
  function (e) {
    $("#inp_avatar_ai365").click();
  }
);
//Show list source image
$(document).on(
  "click",
  ".profile_descripe .bottom-container .right-span",
  function (e) {
    let gender = $('input[name="radio1"]:checked').attr("data-gender");
    if (gender != undefined) {
      $(this).parents(":eq(1)").hide();
      $("#imageEditorWraper_AI .choose_image_style").show();
    }
    html = "";
    for (let i = 1; i <= 6; i++) {
      html += `
        <div class="image-ai-wraper" data-image="/images/avatar_cv/${gender}/image_${i}.jpg?v=1" style = "background: url(https://devnext.timviec365.vn/static-tv/images/avatar_cv/${gender}/image_${i}.jpg?v=1) no-repeat; background-size: cover;">
        <div class="select-image-click"> </div>
        </div>
        `;
    }
    $(
      ".choose_image_style .image-ai-container .image-ai-wraper-container"
    ).html(html);
  }
);
//Call api fakeface
$(document).on(
  "click",
  ".choose_image_2  .bottom-container .right-span",
  function (e) {
    imageSource = file_style;
    if (imageSource.split("/")[1] != "images") {
      isBase64 = "true";
    } else {
      isBase64 = "false";
    }
    let base64_avatar = getBase64(file_avatar).then((base64) => {
      $.ajax({
        url: "site/swapAvatar",
        type: "POST",
        data: { base64, imageSource, isBase64 },
        beforeSend: function (response) {
          $(".bg-spinner").remove();
          $("body").append(
            '<div class="bg-spinner"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>'
          );
        },
        dataType: "JSON",
        success: function (result) {
          $(".choose_image_2").hide();
          $(".ai_image_created").show();

          $(".bg-spinner").remove();
          if (result && result.result_image) {
            let base64 = `data:image/jpeg;base64,${result.result_image}`;
            $(".ai_image_created .avatar_handle").css({
              background: `url(${base64})`,
              "background-size": "cover",
            });
            avatar_final = base64;
          } else {
            $("#avatarAI365Wraper .box_image_error").show();
            $(
              "#avatarAI365Wraper .box_select_image,#avatarAI365Wraper .box_des,#avatarAI365Wraper .box_select_info,#avatarAI365Wraper .box_select_style,#avatarAI365Wraper .box_render_success"
            ).hide();
          }
        },
      });
    });
  }
);
//Upload final
$(document).on(
  "click",
  ".image_final_select, .ai_image_created .bottom-conatainer .right-span",
  function (e) {
    let base64 = avatar_final;
    $.ajax(`http://localhost:3050/api/topcv1s/user/uploadAvatar`, {
      method: "POST",
      data: { image64: base64 },
      cache: false,
      beforeSend: function (response) {
        $(".bg-spinner").remove();
        $("body").append(
          '<div class="bg-spinner"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>'
        );
      },
      success: function (img) {
        $(".bg-spinner").remove();
        $("#cvo-profile-avatar").attr("src", img);
        file_avatar = "";
      },
      error: function () {
        console.log("Upload error");
      },
    });
  }
);
$(document).on("click", ".download_avatar", function (e) {
  let base64 = avatar_final;
  downloadBase64(base64, "cv365_avatar");
});
// Select gender, age
$(".age_option > div, .gender_option > span").click(function (e) {
  $(this).parent().find("span input, div input").attr("checked", false);
  $(this).parent().find("span, div").css({
    border: "none",
  });
  $(this).find("input").attr("checked", true);
  $(this).css({
    border: "1.5px solid #4C5BD4",
  });
});
// Select drop-down menu
$(document).on("click", ".choose_type, .choose_tone", function () {
  $(this).find(".dropdown-content").toggle();
});
$(document).on(
  "click",
  ".choose_type .dropdown-content p, .choose_tone .dropdown-content p ",
  function () {
    text = $(this).html();
    $(this).parents(":eq(1)").find("div:first-child").html(text);
    $(this).parent().find("p").removeClass("active");
    $(this).addClass("active");
    $(this).parent().hide();
    return false;
  }
);
//
$(document).on("click", ".image-ai-wraper", function (e) {
  $(".image-ai-container .image-ai-wraper .select-image-click").removeClass(
    "active"
  );
  $(this).find(".select-image-click").addClass("active");
  image_source = $(this).attr("data-image");
  file_style = image_source;
  $(".choose_image_2  .avatar_handle").css({
    background: `url(${image_source})`,
    "background-size": "cover",
  });
  $(".choose_image_style .bottom-container .right-span").attr(
    "data-class",
    "choose_image_2"
  );
});
$(document).on("click", ".choose_image_2 .avatar_change", function (e) {
  $(".choose_image_style").show();
  $(this).parent().hide();
});
// Click show next div
$(document).on("click", ".bottom-container span", function (e) {
  if ($(this).attr("data-class") != "") {
    $(this).parents(":eq(1)").hide();
    data_class = $(this).attr("data-class");
    $(`.${data_class}.container`).show();
  }
});
//Create AI avatar again
$(document).on(
  "click",
  ".ai_image_created .image_option_wraper .image_change",
  function (e) {
    $(".ai_image_created ").hide();
    $(".choose_image").show();
    $(
      ".choose_image .bottom-container .right-span, .choose_image_style .bottom-container .right-span"
    ).attr("data-class", "");
    $(".choose_image .image-container").show();
    $(".avatar_handle").css({
      background: ``,
    });
    $("input:checked").parent().css({
      border: "none",
    });
    $("input:checked").attr("checked", false);
    $("#inp_avatar_ai365").val("");
    file_avatar = "";
    file_style = "";
  }
);

// new
$(".gender_option > span").click(function (e) {
  $(this).parent().find("span input").attr("checked", false);
  $(this).parent().find("span, div").css({
    border: "none",
  });
  $(this).find("input").attr("checked", true);
  $(this).css({
    border: "1.5px solid #4C5BD4",
  });
});
// Select drop-down menu
$(document).on("click", ".clothes_option", function () {
  $(this).parent().find(".dropdown-content").toggle();
});
$(document).on("click", ".clothes_option .dropdown-content p", function () {
  text = $(this).html();
  data_render = $(this).attr("data-render");
  $(".clothes_option .clothes_text").html(text);
  $(".clothes_option .clothes_text").attr("data-render", data_render);
  $(this).parent().find("p").removeClass("active");
  $(this).addClass("active");
  $(this).parent().hide();
  return false;
});
//
$(document).on("click", ".avatar-final-container .handle-avatar", function (e) {
  $(".avatar-final-container .handle-avatar .select-image-click").removeClass(
    "active"
  );
  $(this).find(".select-image-click").addClass("active");
  avatar_final = $(this).attr("data-image");
});
$(document).on("click", ".choose_image_2 .avatar_change", function (e) {
  $(".choose_image_style").show();
  $(this).parent().hide();
});
// Click show next div
$(document).on("click", ".bottom-container span", function (e) {
  if ($(this).attr("data-class") != "") {
    $(this).parents(":eq(1)").hide();
    data_class = $(this).attr("data-class");
    $(`#imageEditorWraper_AI .${data_class}`).show();
  }
});