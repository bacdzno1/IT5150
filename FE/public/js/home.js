
var blogs = [];  
var ViecLamHapDan = [];
var ViecLamMoiNhat = [];
var CongTyHangDau = [];
var nganhNgheNoiBat = [];
//Gọi api lấy data trang chủ
function getHomeData() {
    $.ajax({
        url: "http://localhost:3053/api/topcv1s/new/Home",
        type: "POST",
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + getCookie('accessToken')
        },
        success: function(response) {
            blogs = response.data.data.blog;
            ViecLamHapDan = response.data.data.ViecLamHapDan;
            ViecLamMoiNhat = response.data.data.ViecLamThuongHieu;
            CongTyHangDau = response.data.data.CongTyHangDau;
            nganhNgheNoiBat = response.data.data.nganhNgheNoiBat;
            console.log(">>> Việc làm mới nhất: ", ViecLamMoiNhat)
            if(blogs.length == 0){
                $('.handbook').hide();
            }

            // filterJobs('location', 'Tất cả', 'hot-job');
            if ($(window).width() > 480) {
                filterJobs('location', 'Tất cả', 'new-job');    
                displayBlogs();
                displayCompanys();
                displayNganhNghe();         
            }
        },
        error: function(xhr, status, error) {
            console.error('Error: ', error);
        }
    });
    
}

//Format time lấy ngày tháng năm giờ
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
}
//Lấy ngày tháng năm
function getDatePart(timestamp) {
    const datePart = timestamp.split(' ')[0]; 
    return datePart;
}
//Hiển thị cẩm nang nghề nghiệp
function displayBlogs() {
    let blogList = $(".hb-list.list-slide");
    blogList.empty(); 
    
    blogs.forEach(function(item) {
        let formattedDate = formatTimestamp(item.new_date); 
        let blogItem = `
            <div class="hb-item slide-item d-flex justify-b align-c" at>
                <div class="hb-thumb">
                    <a href='${item.new_title_rewrite}'>
                        <img width="106" height="92" loading="lazy" onerror="this.onerror=null;this.src='/images/img/default_logo.jpg';" src="${item.new_picture}" alt="Handbook Thumbnail">
                    </a>
                </div>
                <div class="hb-info">
                    <div class="hb-title fw-600 mb-2">
                        <a href='${item.new_title_rewrite}'>
                            ${item.new_title}
                        </a>
                    </div>
                    <div class="hb-des mb-2">
                        ${item.new_des}
                    </div>
                    <div class="hb-time">
                        ${formattedDate}
                    </div>
                </div>
            </div>
        `;
        blogList.append(blogItem);
        let itemsPerPage;
        if (window.innerWidth > 1024) {
            itemsPerPage = 6;
        } else if (window.innerWidth >= 500 && window.innerWidth <= 1024) {
            itemsPerPage = 4;
        } else {
            itemsPerPage = 2;
        }
        paginateJobs('.handbook', itemsPerPage);    
    });
}
//Hiển thị công ty tuyển dụng hàng đầu
function displayCompanys() {
    let companyList = $(".emp-list.list-slide");
    companyList.empty(); 
    
    CongTyHangDau?.forEach(function(item) {
        let usc_logo = item.usc_logo !== "" ? item.usc_logo : "/images/test/image 21.png";
        let companyItem = `
            <div class="emp-item slide-item d-flex flex-dr-c justify-b align-c gap-3">
                <a href="${item.usc_alias}">
                    <img class="emp-avar rounded-circle" loading="lazy" width="120" height="120" onerror="this.onerror=null;this.src='/images/img/comlogo.png';" src="${usc_logo}" alt="Logo Employment">
                </a>
                <a href="${item.usc_alias}">
                    <div class="emp-name fw-700 text-c">${item.usc_company}</div>
                </a>
                <div class="emp-folw">
                    <a href="/${item.usc_alias}-${item.usc_id}">Theo dõi</a>
                </div>
            </div>
        `;
        companyList.append(companyItem);
    });
    paginateJobs('.top-emp', 4);    
}

function displayNganhNghe() {   
    nganhNgheNoiBat.forEach(function(item) {
        const jobElement = $('.caarer-job[data-id="' + item._id + '"]');
        jobElement.text(`+ ${item.count} việc làm`);
        const jobName = $('.caarer-name[data-id="' + item._id + '"]');
        jobName.text(`+ ${item.name}`);
        const Jobitem = $('.caarer-item[data-id="' + item._id + '"]');
        Jobitem.attr('href', "tim-viec-lam-" + item.alias);
    });
    paginateJobs('.hot-caarer', 8);    
}
//
$(document).ready(function() {
    // Gọi API khi trang tải
    getHomeData();
    $('.filterType').CustomSelect({
        searchPlaceholder: 'Tìm kiếm...'
    });
    $('.filterType').val('location').trigger('change');
    $('.filterLocation').show();
    // Sự kiện khi thay đổi kiểu lọc
    $(document).on('change', '.filterType', function() {
        let filterType = $(this).val();
        let jobType = $(this).closest('.content').parent().attr('class').split(' ')[0]; // Xác định new-job hoặc hot-job
        let filterContainer = $(this).closest('.filter');

        filterContainer.find('.fil-cont').hide();

        if (filterType === 'location') {
            filterContainer.find('.filterLocation').show();
        } else if (filterType === 'salary') {
            filterContainer.find('.filterSalary').show();
        } else if (filterType === 'experience') {
            filterContainer.find('.filterExp').show();
        } else if (filterType === 'career') {
            filterContainer.find('.filterCareer').show();
        }

        // Đánh dấu lại mục đã chọn và gọi hàm filterJobs
        filterContainer.find('.fil-item').removeClass('active');
        filterContainer.find('.fil-item[data-value="Tất cả"]').addClass('active');
        filterJobs(filterType, "Tất cả", jobType);
    });

    // Bắt sự kiện khi người dùng chọn một bộ lọc cụ thể
    $(document).on('click', '.fil-item', function() {
        let filterContainer = $(this).closest('.filter');
        filterContainer.find('.fil-item').removeClass('active');
        $(this).addClass('active');
        let criteria = filterContainer.find('.filterType').val();
        let value = $(this).data('value');
        let jobType = $(this).closest('.content').parent().attr('class').split(' ')[0]; 
        filterJobs(criteria, value, jobType);
    });
});
const listRangeMoney = [
    {1: "Thỏa thuận"},
    {2: "1 triệu - 3 triệu"},
    {3: "3 triệu - 5 triệu"},
    {4: "5 triệu - 7 triệu"},
    {5: "7 triệu - 10 triệu"},
    {6: "10 triệu - 15 triệu"},
    {7: "15 triệu - 20 triệu"},
    {8: "20 triệu - 30 triệu"},
    {9: "Trên 30 triệu"},
    {10: "Trên 50 triệu"},
    {11: "Trên 100 triệu"},
];
//Tính lương
function getMucLuong(new_money_type, new_money_from, new_money_to, new_money) {
    try {
        switch (new_money_type) {
            case 0:
            case 5:
                return new_money !== 0 ? listRangeMoney.find(item => item[new_money])[new_money] : "Thoả thuận";
            case 1:
                return "Thoả thuận";
            case 2:
                if (new_money_from > 100) {
                    new_money_from = new_money_from / 1000000;
                }
                return `Từ ${new_money_from} triệu`;
            case 3:
                if (new_money_to > 100) {
                    new_money_to = new_money_to / 1000000;
                }
                return `Đến ${new_money_to} triệu`;
            case 4:
                if (new_money_from > 100) {
                    new_money_from = new_money_from / 1000000;
                }
                if (new_money_to > 100) {
                    new_money_to = new_money_to / 1000000;
                }
                if (new_money_from > new_money_to) {
                    [new_money_from, new_money_to] = [new_money_to, new_money_from];
                }
                return `${new_money_from} - ${new_money_to} triệu`.replace(/\.000\.000|00\.000/g, "");
            default:
                return "Chưa cập nhật";
        }
    } catch (error) {
        return "Chưa cập nhật";
    }
}

const getMucLuong2 = (
	new_money_type,
	new_money_from,
	new_money_to,
	new_money,
) => {
	try {
		if (new_money_type == 0 || new_money_type == 5) {
			return new_money != 0 ? array_muc_luong[new_money] : "Thoả thuận";
		} else if (new_money_type == 1) return "Thoả thuận";
		else if (new_money_type == 2) return `Từ ${(new_money_from /1000000)} triệu`;
		else if (new_money_type == 3) return `Đến ${(new_money_to /1000000)} triệu`;
		else if (new_money_type == 4)
			return `${(new_money_from /1000000)} - ${(
				new_money_to /1000000 + ' triệu'
			)}`
	} catch (error) {
		return "Chưa cập nhật";
	}
};


let hasRun = false; 

$(window).on('scroll', function() {
    if (!hasRun) { 
        hasRun = true;
        filterJobs('location', 'Tất cả', 'hot-job');

        if ($(window).width() <= 480) {
            filterJobs('location', 'Tất cả', 'new-job');
            displayBlogs();
            displayCompanys();
            displayNganhNghe();
        }
    }
});

//Lọc việc làm
function filterJobs(criteria, value, jobType) {
    let listJobs = $(`.${jobType}`).find(".jobs-list.list-slide");
    listJobs.empty();
    let has_match = false
    let checkLazy =  (jobType === 'new-job') ? '':'loading="lazy"';
    let jobList = (jobType === 'new-job') ? ViecLamMoiNhat : ViecLamHapDan;

    jobList.forEach(function(item) {
        let match = false;
        if (criteria == 'location') {
            match = (value == "Tất cả" || item.new_city[0] == value);
        } else if (criteria == 'salary') {
            switch (value) {
                case "Thỏa thuận":
                    match = (item.new_money_type == 1 || item.new_money_type == 5);
                    break;
                case "Dưới 10 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from < 10000000) ||
                            (item.new_money_type == 3 && item.new_money_to < 10000000) ||
                            (item.new_money_type == 4 && item.new_money_to < 10000000)
                    break;
                case "Từ 10 - 15 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from >= 10000000 && item.new_money_from < 15000000) ||
                            (item.new_money_type == 3 && item.new_money_to >= 10000000 && item.new_money_to < 15000000) ||
                            (item.new_money_type == 4 && item.new_money_from >= 10000000 && item.new_money_to <= 15000000);
                    break;
                case "Từ 15 - 20 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from >= 15000000 && item.new_money_from < 20000000) ||
                            (item.new_money_type == 3 && item.new_money_to >= 15000000 && item.new_money_to < 20000000) ||
                            (item.new_money_type == 4 && item.new_money_from >= 15000000 && item.new_money_to <= 20000000);
                    break;
                case "Từ 20 - 25 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from >= 20000000 && item.new_money_from < 25000000) ||
                            (item.new_money_type == 3 && item.new_money_to >= 20000000 && item.new_money_to < 25000000) ||
                            (item.new_money_type == 4 && item.new_money_from >= 20000000 && item.new_money_to <= 25000000);
                    break;
                case "Từ 25 - 30 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from >= 25000000 && item.new_money_from < 30000000) ||
                            (item.new_money_type == 3 && item.new_money_to >= 25000000 && item.new_money_to < 30000000) ||
                            (item.new_money_type == 4 && item.new_money_from >= 25000000 && item.new_money_to <= 30000000);
                    break;
                case "Trên 30 triệu":
                    match = (item.new_money_type == 2 && item.new_money_from >= 30000000) ||
                            (item.new_money_type == 3 && item.new_money_to >= 30000000) ||
                            (item.new_money_type == 4 && item.new_money_from >= 30000000);
                    break;
                default:
                    match = true; 
                }
        } else if (criteria == 'experience') {
            switch (value) {
                case "exp-0":
                    match = item.new_exp == 0;
                    break;
                case "exp-1":
                    match = item.new_exp == 1;
                    break;
                case "exp-2":
                    match = item.new_exp == 2;
                    break;
                case "exp-3":
                    match = item.new_exp == 3;
                    break;
                case "exp-4":
                    match = item.new_exp == 4;
                    break;
                case "exp-5":
                    match = item.new_exp == 5;
                    break;
                default:
                    match = true; 
                }
        } else if (criteria == 'career') {
            switch (value) {
                case 28:
                    match = item.new_cat_id == "28";
                    break;
                case 131:
                    match = item.new_cat_id == "131";
                    break;
                case 130:
                    match = item.new_cat_id == "130";
                    break;
                case 2:
                    match = item.new_cat_id == "2";
                    break;
                case 26:
                    match = item.new_cat_id == "26";
                    break;
                case 20:
                    match = item.new_cat_id == "20";
                    break;
                default:
                    match = true; 
                }
        }

        if (match) {
            has_match = true
            console.log(">>> item: ", item)
            let salaryText = getMucLuong(item.new_money_type, item.new_money_from, item.new_money_to, item.new_money);
            let saveClass = item.checkLuuTin ? 'saved':'';
            let imgsave = item.checkLuuTin ? '/images/icon/BookmarkSaved.svg':'/images/icon/Bookmark.svg';
            let jobItem = `
                <div class="jobs-item slide-item d-flex justify-b bg-white">
                    <div class="jobs-left">
                        <div class="jobs-box d-flex align-c">
                            <div class="jobs-avar">
                                <img class="rounded-circle" ${checkLazy} width="70" height="70" alt="Avartar Job" onerror="this.onerror=null;this.src='/images/img/default_logo.jpg';" src=" ${item.usc_logo }">
                            </div>
                            <div class="jobs-title fw-700">
                                <h3 class="jobs-qview fs-6 color-main mb-2" data-id="${item.new_id}" >
                                    <a href="/${item.new_alias}-${item.new_id}">${item.new_title}</a>
                                </h3>
                                <div class="jobs-compa fs-7" >
                                    <a href="/${item.usc_alias}">${item.usc_company} </a>
                                </div>
                            </div>
                        </div>
                        <div class="jobs-info flex-wr d-flex fs-6">
                            <div class="jobs-locat">
                                ${item.new_city[0]}
                            </div>
                            <div class="jobs-salary">
                                ${salaryText}
                            </div>
                        </div>
                    </div>
                    <div class="jobs-right save_news ${saveClass }" data-id="${item.new_id}">
                        <img src="${imgsave}" class="cursor-p img_save" width="24" height="24" alt="Save Job Icon">
                    </div>
                </div>
            `;
            listJobs.append(jobItem);
            paginateJobs(`.${jobType}`, 9);  
        }
    });
    if (!has_match) {
        let noMatchMessage = `
            <div class="no-jobs-found">
                Không tìm thấy việc làm phù hợp .
            </div>
        `;
        listJobs.append(noMatchMessage); // Hiển thị thông báo
    }
}
//Hiển thị chi tiết tin khi hover
$(document).ready(function() {
    const $infoBox = $('#info-box');
    let lastMouseX = 0;
    let isMouseInInfoBox = false;

    $('.hot-job, .new-job').on('mouseover', '.jobs-qview', function(event) {
        if (window.innerWidth >= 1024) {
            const newId = $(this).data('id');
            const job = ViecLamHapDan.find(item => item.new_id == newId);
            if (job) {
                let salary = getMucLuong(+job.new_money_type, +job.new_money_from, +job.new_money_to, +job.new_money);
                let hanNop = formatTimestamp(job.new_han_nop); 
                const ngayThangNam = getDatePart(hanNop);

                $infoBox.find('.info-job').text(job.new_title);
                $infoBox.find('.info-com').text(job.usc_company);

                let $image = $('.info-avar');
                let imageUrl = job.usc_logo ? job.usc_logo : '/images/img/comlogo.png';
                $image.attr('src', imageUrl).on('error', function() {
                    $(this).attr('src', '/images/img/comlogo.png');
                });
                
                const locationHtml = `
                    <img width="20" height="20" alt="Location Icon" src="/images/icon/ion_location.svg">
                    ${job.new_city[0]}
                `;
                $infoBox.find('.s-loc').html(locationHtml);

                const salaryHtml = `
                    <img width="20" height="20" alt="Cash Icon" src="/images/icon/icon_cash.svg">
                    ${salary}
                `;
                $infoBox.find('.s-cash').html(salaryHtml);

                const calendarHtml = `
                    <img width="24" height="24" alt="Calendar Icon" src="/images/icon/ion_calendar.svg">
                    ${ngayThangNam}
                `;
                $infoBox.find('.s-cal').html(calendarHtml);
                
                let moTa = job.new_mota ? job.new_mota : "Đang cập nhật...";
                const desHtml = `
                    <div class="ws">${moTa}</div>
                `;
                $infoBox.find('.des .detail').html(desHtml);

                let yeuCau = job.new_yeucau ? job.new_yeucau : "Đang cập nhật...";
                const reqHtml = `
                    <div class="ws">${yeuCau}</div>
                `;
                $infoBox.find('.req .detail').html(reqHtml);

                let quyenLoi = job.new_quyenloi ? job.new_quyenloi : "Đang cập nhật...";
                const benHtml = `
                    <div class="ws">${quyenLoi}</div>
                `;
                $infoBox.find('.ben .detail').html(benHtml);
                let hoSo = job.new_ho_so ? job.new_ho_so : "Đang cập nhật...";
                const cvHtml = `
                    <div class="ws">${hoSo}</div>
                `;
                $infoBox.find('.cv .detail').html(cvHtml);
                const contactHtml = `
                    <div class="fw-600 mb-2">Người liên hệ: <span class="fw-400">${job.usc_company ? job.usc_company : 'Chưa cập nhật'}</span></div>
                    <div class="fw-600 mb-2">Địa chỉ tuyển dụng: <span class="fw-400">${job.new_addcontact? job.new_addcontact : 'Chưa cập nhật'}</span></div>
                `;
                $infoBox.find('.contact .contact-info').html(contactHtml);
                let detail_url = job.new_alias + '-' + job.new_id;
                $infoBox.find('.detail_job').attr('href', detail_url);

                $infoBox.show();
                moveBox(event, true);
            }
        }
    });

    $('.hot-job, .new-job').on('mousemove', '.jobs-qview', function(event) {
        moveBox(event, false);
    });

    $('.hot-job, .new-job').on('mouseout', '.jobs-qview', function(event) {
        const relatedTarget = event.relatedTarget || event.toElement;
        if (!$(relatedTarget).closest('#info-box').length) {
            hideInfoBox();
        }
    });

    $infoBox.on('mouseenter', function() {
        isMouseInInfoBox = true;
    });

    $infoBox.on('mouseleave', function() {
        isMouseInInfoBox = false;
        hideInfoBox();
    });

    $(document).on('mousemove', function(event) {
        if (!$(event.target).closest('.jobs-qview').length && !$(event.target).closest('#info-box').length) {
            hideInfoBox();
        }
    });

    function moveBox(event, isInitial) {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        const checkhight = event.clientY;
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const boxWidth = $infoBox.outerWidth();
        const boxHeight = $infoBox.outerHeight();
    
        const distanceToRight = windowWidth - mouseX;
    
        let newLeft, newTop,checkTop;
        if (distanceToRight > boxWidth + 10) { 
            newLeft = mouseX + 10;
        } else {
            newLeft = mouseX - boxWidth - 10; 
        }
    
        newLeft = Math.max(0, Math.min(newLeft, windowWidth - boxWidth));
        newTop = mouseY - (boxHeight / 2);
        checkTop = checkhight - (boxHeight/2)
        if (checkTop < 0) { 
            newTop = mouseY;
        } else if (checkTop + boxHeight > windowHeight) {
            newTop = mouseY - windowHeight +  boxHeight;
        }
    
        if (isMouseInInfoBox && !isInitial) {
            return;
        }
        $infoBox.css({
            left: newLeft + 'px',
            top: newTop + 'px'
        });
    
        lastMouseX = mouseX;
    }
    function hideInfoBox() {
        $infoBox.hide().css({
            left: '',
            top: ''
        });
    }
    $(document).on('click', '.jobs-right.save_news',async  function() {
        if(!getCookie('accessToken') || getCookie('type') == 1){
            $('#login_uv_modal').show()
            return
        }
        var news_id = $(this).data('id'); 
    
        try {
            var save_result = await saveNew(news_id);
            console.log(save_result);

            if (save_result) {
                alert('Lưu tin thành công');
                $(this).addClass('saved');
                $(this).find('img').attr('src', '/images/icon/BookmarkSaved.svg');
            } else {
                alert('Hủy lưu tin thành công');
                $(this).removeClass('saved');
                $(this).find('img').attr('src', '/images/icon/Bookmark.svg');
            }
        } catch (error) {
            console.error("Error saving news:", error);
        }
    })
});
// function getCityNameById(id) {
//     const city = listCities.find(city => city.cit_id === id);
//     return city ? city.cit_name : null;
// }
// function getCategoryIdByName(cat_name) {
//     const category = cateList.find(category => category.cat_name === cat_name);
//     return category ? category.cat_id : null;
// }
// function getCityIdByUrl(city_name) {
//     const city = listCities.find(city => convertToUrl(city.cit_name) === city_name);
//     return city ? city.cit_id : null;
// }
// function getCategoryIdByUrl(cat_name) {
//     const category = cateList.find(category => convertToUrl(category.cat_name) === cat_name);
//     return category ? category.cat_id : null;
// }
// function findAliasByTag(label){
//     const tag = data_tags.find(tag => tag.label === label);
//     return tag ? tag.alias : '';
// }
// function convertToUrl(name) {
//     return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
//         .replace(/đ/g, 'd').replace(/Đ/g, 'D')
//         .replace(/\s+/g, '-') 
//         .replace(/-+/g, '-')
//         .toLowerCase();
// }

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
window.onload = function() {
    const auth = getCookie('auth');
    const token = getCookie('accessToken');
    const type = getCookie("type");

    if (auth == '0' && token) {
        const confirmBoxSeen = getCookie('confirmBoxSeen');
        if (confirmBoxSeen !== 'true') {
            if (type == 2) {
                alert("Vui lòng xác thực tài khoản!");
                window.location.href = '/otp'
            } else {
                if (confirm('Bạn chưa xác thực tài khoản, xác thực ngay?')) {
                    window.location.href = '/otp';
                    setCookie('confirmBoxSeen', 'true', 7);
                } else {
                    setCookie('confirmBoxSeen', 'true', 7);
                }
            }
        }
    }
}







