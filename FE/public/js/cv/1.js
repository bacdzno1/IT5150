var cate_id_cv = 0;

sampleCv = JSON.parse(window.localStorage.getItem("sampleCV"));

//Lấy data gợi ý của các box, block
var data_box = [];
var data_block = [];

// let block, arr_content;
box_content = [];

box_content.push({
  sex: sampleCv?.menu?.[0]?.content?.content?.content?.sex,
  birthday: sampleCv?.menu?.[0]?.content?.content?.content?.birthday,
  phone: sampleCv?.menu?.[0]?.content?.content?.content?.phone,
  email: sampleCv?.menu?.[0]?.content?.content?.content?.email,
  address: sampleCv?.menu?.[0]?.content?.content?.content?.address,
})
box = {
  id: `box01`,
  content: box_content,
};
data_box.push(box);
box = {
  id: `box02`,
  content: sampleCv?.menu?.[1]?.content,
};
data_box.push(box);
arr_content = [];

sampleCv?.menu?.[2]?.content?.content?.skills?.forEach((item) => {
  arr_content.push({
    name: item?.name,
    exp: item?.exp,
  });
});

box = {
  id: `box03`,
  content: arr_content,
};
data_box.push(box);
box = {
  id: `box04`,
  content: sampleCv?.menu?.[3]?.content,
};
data_box.push(box);
box = {
  id: `box05`,
  content: sampleCv?.menu?.[4]?.content,
};
data_box.push(box);
box = {
  id: `box06`,
  content: sampleCv?.menu?.[5]?.content,
};
data_box.push(box);
box = {
  id: `box07`,
  content: sampleCv?.menu?.[6]?.content,
};
data_box.push(box);

arr_content = [];

sampleCv?.experiences?.[0]?.content?.content?.forEach((item) => {
  arr_content.push({
    title: item?.title,
    subtitle: item?.subtitle,
    content: item?.content,
    date: item?.date,
  });
});

block = {
  id: "block01",
  content: arr_content,
};
data_block.push(block);
arr_content = [];

sampleCv?.experiences?.[1]?.content?.content?.forEach((item) => {
  arr_content.push({
    title: item?.title,
    subtitle: item?.subtitle,
    content: item?.content,
    date: item?.date,
  });
});

block = {
  id: "block02",
  content: arr_content,
};
data_block.push(block);
arr_content = [];
sampleCv?.experiences?.[2]?.content?.content?.forEach((item) => {
  arr_content.push({
    title: item?.title,
    subtitle: item?.subtitle,
    content: item?.content,
    date: item?.date,
  });
});
block = {
  id: "block03",
  content: arr_content,
};
data_block.push(block);
arr_content = [];
sampleCv?.experiences?.[3]?.content?.content?.forEach((item) => {
  arr_content.push({
    title: item?.title,
    subtitle: item?.subtitle,
    content: item?.content,
    date: item?.date,
  });
});
block = {
  id: "block04",
  content: arr_content,
};
data_block.push(block);
arr_content = [];
sampleCv?.experiences?.[4]?.content?.content?.forEach((item) => {
  arr_content.push({
    title: item?.title,
    subtitle: item?.subtitle,
    content: item?.content,
    date: item?.date,
  });
});
block = {
  id: "block05",
  content: arr_content,
};
data_block.push(block);
//end data gợi ý của các box, block

function doi_muc(el, blockKey, blockMain) {
  let e = el;
  var id = blockKey || $(e).attr("data-blockkey");
  var boxid = blockMain || $(e).attr("data-blockmain");

  var tieude = $(e).parent().find(".txt_frame_mcsd").text();
  if ($(e).parent().hasClass("muc_da_sd")) {
    var html1 = ` <div class="mucchuasd muc_chua_sd " id="muc_chua_sd_${id}">
					<img src="/images/icon/ic_cv_warning.svg" class="icon_warning_muc cursor_pt" alt="icon cảnh báo">
					<div class="mucchuasd_frame">
						<p class="txt_frame_mcsd">${tieude}</p>
					</div>
					<img src="/images/icon/ic_cv_plus.svg" class="icon_add_muc cursor_pt" alt="icon thêm mục"  data-blockmain="${boxid}" data-blockkey="${id}">
				</div>`;
    $(".box_show_mucchuasd").find(".show_mucchuasd").append(html1);
    $(e).parent().remove();
    // $.hideBlock(boxid, id);
    $("#" + id).hide();
  } else {
    var html1 = `<div class="mucchuasd muc_da_sd " id="muc_da_sd_${id}">
					<img src="/images/icon/ic_cv_warning.svg" class="icon_warning_muc cursor_pt" alt="icon cảnh báo">
					<div class="mucchuasd_frame">
						<p class="txt_frame_mcsd">${tieude}</p>
					</div>
					<img src="/images/icon/ic_cv_minus.svg" class="icon_add_muc cursor_pt" alt="icon thêm mục"  data-blockmain="${boxid}" data-blockkey="${id}">
				</div>`;
    $(".show_mucdasd").append(html1);
    $(e).parent().remove();
    $.showBlock(boxid, id);
    $("#" + id).show();
  }
}

$(document).on("click", ".icon_add_muc", function (e) {
  e.preventDefault();
  doi_muc(this);
});
// end
