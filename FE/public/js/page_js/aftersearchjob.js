$(document).ready(function() {
    const $prevBtn = $('.cnt-fil-lef');
    const $nextBtn = $('.cnt-fil-rig');
    const $filList = $('.cnt-fil-list');
    const $filItems = $('.fil-item');
    const itemMargin = 14;
    const moveAmount = 200;
    const boxWidth = $('.cnt-fil-box').width();
    let transform = 0;

    let isDragging = false;
    let startPos = 0;
    let prevTranslate = 0;
    let animationID;

    const $activeItem = $filItems.filter('.active');
    if ($activeItem.length > 0) {
        const activeItemOffset = $activeItem.position().left;
        const activeItemWidth = $activeItem.outerWidth(true);
        const offsetToCenter = (boxWidth - activeItemWidth) / 2;
        transform = -activeItemOffset + offsetToCenter;
        transform = Math.min(0, Math.max(transform, boxWidth - getListWidth() - 43));
        updateTransform();
    }

    $prevBtn.hide();
    toggleButtons();

    function updateTransform() {
        $filList.css('transform', `translateX(${transform}px)`);
    }

    function toggleButtons() {
        const listWidth = getListWidth();
        $prevBtn.toggle(transform < 0);
        $nextBtn.toggle(Math.abs(transform) + boxWidth < listWidth + 43);
    }

    function getItemWidth(index) {
        return $filItems.eq(index).outerWidth(true) + itemMargin;
    }

    function getListWidth() {
        let totalWidth = 0;
        $filItems.each(function() {
            totalWidth += $(this).outerWidth(true) + itemMargin;
        });
        return totalWidth - itemMargin;
    }

    function getContainerWidth() {
        return $filList.width() + 43;
    }

    $nextBtn.click(function() {
        const listWidth = getListWidth() + 43;
        if (Math.abs(transform) + boxWidth < listWidth) {
            transform -= moveAmount;
            if (Math.abs(transform) + boxWidth > listWidth) {
                transform = boxWidth - listWidth;
            }
            updateTransform();
            toggleButtons();
        }
    });

    $prevBtn.click(function() {
        if (transform < 0) {
            transform += moveAmount;
            if (transform > 0) {
                transform = 0;
            }
            updateTransform();
            toggleButtons();
        }
    });

    $filList.on('mousedown touchstart', function(event) {
        isDragging = true;
        startPos = getPositionX(event);
        prevTranslate = transform;
        animationID = requestAnimationFrame(animation);
        $filList.addClass('grabbing');
    });

    $(document).on('mouseup touchend', function() {
        if (isDragging) {
            isDragging = false;
            cancelAnimationFrame(animationID);
            $filList.removeClass('grabbing');
            toggleButtons();
        }
    });

    $filList.on('mouseleave', function() {
        if (isDragging) {
            isDragging = false;
            cancelAnimationFrame(animationID);
            $filList.removeClass('grabbing');
            toggleButtons();
        }
    });

    $filList.on('mousemove touchmove', function(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            const diff = currentPosition - startPos;
            transform = prevTranslate + diff;
            const listWidth = getListWidth() + 43;
            transform = Math.min(0, Math.max(transform, boxWidth - listWidth));
            updateTransform();
        }
    });

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        updateTransform();
        if (isDragging) {
            requestAnimationFrame(animation);
        }
    }

    toggleButtons();
});
$(document).ready(function() {
    const $slideList = $('.cnt-sugg .slide-list');
    const $slideItems = $('.cnt-sugg .slide-item');
    const $prevBtn = $('.cnt-sugg .cnt-nav-lef');
    const $nextBtn = $('.cnt-sugg .cnt-nav-rig');
    const itemWidth = $slideItems.outerWidth(true);
    const gap = 20;
    let itemsPerPage = 2;
    let moveAmount;
    let totalItems = $slideItems.length;
    let currentPage = 1;

    function updateTransform() {
        const transformValue = -(moveAmount * (currentPage - 1));
        $slideList.css('transform', `translateX(${transformValue}px)`);
        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        $('.cnt-sugg .cnt-paginate').text(`${currentPage}/${totalPages} Trang`);
    }

    function calculateMoveAmount() {
        if ($(window).width() > 1200) {
            itemsPerPage = 2;
        } else {
            itemsPerPage = 1;
        }
        return (itemWidth * itemsPerPage) + (gap * (itemsPerPage));
    }

    $nextBtn.click(function() {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateTransform();
        }
    });

    $prevBtn.click(function() {
        if (currentPage > 1) {
            currentPage--;
            updateTransform();
        }
    });

    $(window).on('resize', function() {
        moveAmount = calculateMoveAmount();
        currentPage = Math.min(currentPage, Math.ceil(totalItems / itemsPerPage));
        updateTransform();
    });

    moveAmount = calculateMoveAmount();
    updateTransform();
});
$(document).ready(function() {
    $('.nav-item').hover(function() {
        $(this).children('.nav-dropdown').stop(true, true).fadeIn(300);
    }, function() {
        $(this).children('.nav-dropdown').stop(true, true).fadeOut(300);
    });
});
$(document).ready(function() {
    var currentTimestamp = Math.floor(Date.now() / 1000);
    var currentPage = 1;
    var pageSize = 10;
    var cache = {};
    var loadedPages = [];
    var sortOrder = 'desc';
    var sortField = '';
    function handleSearch() {
        var keyword = $('#s_key').val();
        var cit_id = $('#cit_id').val();
        var exp_id = $('#exp_id').val();
        var sal_id = $('#sal_id').val();
        var district = $('#district').val();
        var fomati = $('#fomati').val();
        var lever = $('#lever').val();
        var edu = $('#edu').val();
        if (keyword) {
            var searchKeywords = localStorage.getItem('searchKeywords');
    
            if (searchKeywords) {
                searchKeywords = JSON.parse(searchKeywords);
                if (!searchKeywords.includes(keyword)) {
                    searchKeywords.push(keyword);
                    localStorage.setItem('searchKeywords', JSON.stringify(searchKeywords));
                }
            } else {
                searchKeywords = [keyword];
                localStorage.setItem('searchKeywords', JSON.stringify(searchKeywords));
            }
        }
        // if (!keyword && cit_id == 0 && exp_id == 0 && sal_id == 0) {
        //     window.location.href = '/';
        // } else {
            var url = '/tim-viec-lam';

            if (keyword && getCategoryIdByName(keyword) && cit_id == 0) {
                var convertCat = convertToUrl(keyword);
                url += '-' + convertCat;
            } else if (keyword && findAliasByTag(keyword) && cit_id == 0) {
                var convertCat = findAliasByTag(keyword);
                url += '-' + convertCat;
            } else if (keyword && getCategoryIdByName(keyword) && cit_id != 0) {
                var convertCat = convertToUrl(keyword);
                var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
                url += '-' + convertCat + '-tai-' + convertCit;
            } else if (!keyword && !getCategoryIdByName(keyword) && cit_id != 0) {
                var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
                url += '-tai-' + convertCit;
            } else if (keyword && !getCategoryIdByName(keyword) && cit_id != 0) {
                var convertCit = convertToUrl(getCityNameById(parseInt(cit_id)));
                url += '-tai-' + convertCit;
            }


            var queryParams = [];
            if (keyword && !getCategoryIdByName(keyword) && !findAliasByTag(keyword)) {
                queryParams.push('name=' + keyword);
            }
            if (exp_id) {
                queryParams.push('exp=' + exp_id);
            }
            if (sal_id && sal_id != 0) {
                queryParams.push('salary=' + sal_id);
            }
            if ($('.adv_fil').is(':visible')) {
                if (district ) {
                    queryParams.push('district=' + district);
                }

                if (fomati ) {
                    queryParams.push('fomati=' + fomati);
                }

                if (lever ) {
                    queryParams.push('lever=' + lever);
                }

                if (edu ) {
                    queryParams.push('edu=' + edu);
                }
            }

            if (queryParams.length > 0) {
                url += '?' + queryParams.join('&');
            }

            window.location.href = url;
        // }
    }
    $('.search-btn').click(function() {
        handleSearch()
    });
    // $('#cit_id').change(function() {
    //     handleSearch()
    // })
    $('.remind-lis-box').on('click', 'li', function () {
        handleSearch()
    })
    $('.remind-his-box').on('click', 'li', function () {
        handleSearch()
    })
    function extractJobAndProvinceFromUrl(url) {
        const keywords = ["tim", "kiem", "viec", "lam", "tai"];
    
        const path = new URL(url).pathname.replace(/^\//, '');
        
        const parts = path.split('-');
    
        let jobUrl = null;
        let provinceUrl = null;
    
        parts.forEach((part, index) => {
            if (keywords.includes(part)) {
                const nextPart = parts[index + 1];
                if (part === "viec" && nextPart !== "lam") {
                    jobUrl = nextPart;
                }
                if (part === "tai" && nextPart) {
                    provinceUrl = nextPart;
                }
            }
        });
    
        return { jobUrl, provinceUrl };
    }
    const currentUrl = window.location.href;
    const { jobUrl, provinceUrl } = extractJobAndProvinceFromUrl(currentUrl);
    const urlParams = new URLSearchParams(window.location.search);
    var sal_id = urlParams.get('salary') ? urlParams.get('salary') : '0';
    $('#sal_id').val(sal_id);
    $('#sal_id').trigger('change')
    var exp_id = urlParams.get('exp') ? urlParams.get('exp') : '8';
    $('#exp_id').val(exp_id);
    $('#exp_id').trigger('change')
    var district = urlParams.get('district') ? urlParams.get('district') : '0';
    $('#district').val(district);
    $('#district').trigger('change')
    var fomati = urlParams.get('fomati') ? urlParams.get('fomati') : '0';
    $('#fomati').val(fomati);
    $('#fomati').trigger('change')
    var lever = urlParams.get('lever') ? urlParams.get('lever') : '0';
    $('#lever').val(lever);
    $('#lever').trigger('change')
    var edu = urlParams.get('edu') ? urlParams.get('edu') : '0';
    $('#edu').val(edu);
    $('#edu').trigger('change')
    var sortOrder = urlParams.get('sortOrder') ? urlParams.get('sortOrder') : 'desc';
    var sortField = urlParams.get('sortField') ? urlParams.get('sortField') : '';
    var keyword = '';
    var cit_id = $('#city_filter').val() ? $('#city_filter').val() : '0';
    $('#cit_id').val(cit_id);
    $('#cit_id').trigger('change')
    var cat_id = $('#cat_filter').val() ? $('#cat_filter').val() : '0';
    var tag = $('#tag_filter').val() ? $('#tag_filter').val() : '';
    if(tag && tag != ''){
        var keyword = tag;
    }
    else if(urlParams.get('name') && urlParams.get('name') != ''){
        var keyword = urlParams.get('name') ? urlParams.get('name') : '';
    }
    else{
        var keyword = '';
    }
    $('#s_key').val(keyword)
    if(cat_id !=0){
        key2= getCategoryNameById(cat_id)
        $('#s_key').val(key2)
    }
    function loadJobs(page) {
        if (loadedPages.includes(page)) {
            useCache(page);
            return;
        }
        var requestData = {
            page: page,
            sortOrder: sortOrder,
            sortField: sortField
        };
        if (keyword != '') {
            requestData.keywords = keyword;
        }
        if (exp_id != 0) {
            requestData.exp = exp_id;
        }
        if (cit_id != 0) {
            requestData.address = cit_id;
        }
        if (cat_id != 0) {
            requestData.nameWork = cat_id;
        }
        if (sal_id != 0) {
            requestData.salary = sal_id;
        }
        if (district != 0) {
            requestData.district = district;
        }
        if (fomati != 0) {
            requestData.fomati = fomati;
        }
        if (lever != 0) {
            requestData.capBac = lever;
        }
        if (edu != 0) {
            requestData.edu = edu;
        }
        $.ajax({
            url: 'http://localhost:3053/api/topcv1s/new/SearchNew',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(requestData),
            success: function(response) {
                cache[page] = response.data;
                loadedPages.push(page);
                displayJobs(response.data);
                setupPagination();
            },
            error: function(error) {
                console.error(error);
                $('.total_job').html('0');
                $('.search-res-count').html('0');
            }
        });
    }

    function useCache(page) {
        var data = cache[page];
        displayJobs(data);
        setupPagination();
    }

    function displayJobs(data) {
        $('.job-list').empty();
        $('.total_job').html(data.total);
        $('.search-res-count').html(data.total);
        $('.job-list').empty();
        if (data.total > 0) {
            $('.cnt-body .job-nav').addClass('active');
            data.data.forEach(function(item) {
                var timeDiffRemain = item.new_han_nop - currentTimestamp;
                var timeDiffUpdate = currentTimestamp - item.new_update_time;
                var cityName = getCityNameById(parseInt(item.new_city))
                var mucLuong = getMucLuong(item.new_money_type, item.new_money_from, item.new_money_to, item.new_money);
                var html = `<div class="job-item">
                    <div class="job-avar">
                        <a href="/${item.usc_alias}">
                            <img class="rounded-circle outline_main" src="${item.usc_logo}" onerror="this.onerror=null;this.src='/images/img/default_logo.jpg';" width="117" height="117" alt="${item.usc_company}">
                        </a>                    
                    </div>
                    <div class="job-body">
                        <div class="job-tit">
                            <div class="job-tit-all">
                                <h3 class="mb-0">
                                    <a href="/${item.new_alias}-${item.new_id}" class="job-name" data-tooltip="${item.new_title}">${item.new_title}</a>
                                </h3>
                                <a href="/${item.usc_alias}" class="job-comp" data-tooltip="${item.usc_company}">${item.usc_company}</a>
                            </div>
                            <div class="job-salary">
                                ${mucLuong}
                            </div>
                        </div>
                        <div class="job-info">
                            <div class="job-label">
                                <label class="address">${cityName}</label>
                                <label class="remain_time">Còn <span class="fw-600">${getTimeRemain(timeDiffRemain).value}</span> ${getTimeRemain(timeDiffRemain).type} để ứng tuyển</label>
                                <label class="last_updated">Cập nhật ${getTimeRemain(timeDiffUpdate).value} ${getTimeRemain(timeDiffUpdate).type} trước</label>
                            </div>
                            <div class="job-act">
                                <a class="job-apply" href="/${item.new_alias}-${item.new_id}" data_apply="${item.new_id}">Ứng tuyển</a>
                                <button class="job-save" style="display:none" data_save="${item.new_id}">
                                    <img src="/images/icon/saveJobIcon.svg" alt="Save Job Icon" width="15.75" height="21.203">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
                $('.job-list').append(html);
            });
        } else {
            $('.job-list').append(`<div class="not_found"><img src='/images/icon/notfound.svg' width='100' height='100' alt='Not Found Icon'><h3 class="fs-6 fw-400 mb-0">Chưa tìm thấy việc làm phù hợp với yêu cầu của bạn</h3></div>`);
        }

        toolTip('.job-name');
        toolTip('.job-comp');
    }

    function setupPagination() {
        var totalJobs = parseInt($('.total_job').html());
        var totalPages = Math.ceil(totalJobs / pageSize);
        $('.cnt-body .cnt-paginate').html(currentPage + ' / ' + totalPages);

        $('.cnt-body .cnt-nav-lef').prop('disabled', currentPage === 1);

        $('.cnt-body .cnt-nav-lef').off('click').on('click', function() {
            if (currentPage > 1) {
                currentPage--;
                loadJobs(currentPage);
            }
        });

        $('.cnt-body .cnt-nav-rig').prop('disabled', currentPage === totalPages);

        $('.cnt-body .cnt-nav-rig').off('click').on('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                loadJobs(currentPage);
            }
        });
    }

    function toolTip(ele) {
        $(ele).each(function() {
            var $this = $(this);
            var tooltipText = $this.attr('data-tooltip');
            var $tooltipContent = $('<div class="tooltip-content"></div>').text(tooltipText);
            $this.append($tooltipContent);
            $this.on('mouseenter', function() {
                $tooltipContent.css('opacity', 1);
            });
            $this.on('mouseleave', function() {
                $tooltipContent.css('opacity', 0);
            });
        });
    }

    $('.radio-choose input[name="important"]').on('change', function() {
        var selectedId = $(this).attr('id');
        switch (selectedId) {
            case 'imp-relate':
                sortField = '';
                break;
            case 'imp-pdate':
                sortField = 'new_create_time';
                sortOrder = 'asc';
                break;
            case 'imp-udate':
                sortField = 'new_update_time';
                sortOrder = 'asc';
                break;
            case 'imp-hsalary':
                sortField = 'new_money';
                sortOrder = 'asc';
                break;
            case 'imp-urgent':
                sortField = 'new_han_nop';
                sortOrder = 'asc';
                break;
        }
        currentPage = 1;
        cache = {};
        loadedPages = [];
        loadJobs(currentPage);
    });
    $('.priority_by').on('change', function() {
        var selectedId = $(this).val();
        switch (selectedId) {
            case 'Related':
                sortField = '';
                break;
            case 'Posted':
                sortField = 'new_create_time';
                sortOrder = 'asc';
                break;
            case 'Updated':
                sortField = 'new_update_time';
                sortOrder = 'asc';
                break;
            case 'Salary':
                sortField = 'new_money';
                sortOrder = 'asc';
                break;
        }
        currentPage = 1;
        cache = {};
        loadedPages = [];
        loadJobs(currentPage);
    });

    loadJobs(currentPage);
});

function getTimeRemain(time){
    if(time > 946080000 ){
        return {value : Math.round(time / (60 * 60 * 24 * 30 * 365)), type : 'năm'};
    }
    else if(time > 2592000){
        return {value : Math.round(time / (60 * 60 * 24 * 30)), type : 'tháng'};
    }
    else if(time > 86400 ){
        return {value : Math.round(time / (60 * 60 * 24)), type : 'ngày'};
    }
    else if(time > 3600){
        return {value : Math.round(time / (60 * 60)), type : 'giờ'};
    }
    else{
        return {value : Math.round(time / (60)), type : 'phút'};
    }
}
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
			return new_money != 0 ? listRangeMoney.find(item => item[new_money])[new_money] : "Thoả thuận";
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
function handleUrlChange() {
    console.log('URL hiện tại là:', window.location.href);
    // const url = window.location.href
    // const city = listCities.find((item) => url.includes(`-tai-${convertToUrl(item.cit_name)}`))
    // // console.log("🚀 ~ handleUrlChange ~ city:", city)
    // // console.log(listCities);
    // if (city) {
    //     // $('#cit_id').val(city.cit_id)
    //     console.log("🚀 ~ handleUrlChange ~ $(`#cit_id option[value=${city.cit_id}]`):", $(`#cit_id option[value=${city.cit_id}]`))
    //     $(`#cit_id option[value=${city.cit_id}]`).prop('selected', true)
    // }
}

$(document).ready(function() {
    handleUrlChange();
});

$(window).on('popstate', function(event) {
    handleUrlChange();
});

function updateUrlWithoutRedirect(newUrl) {
    history.pushState(null, null, newUrl);
    $(window).trigger('popstate');
}


function updateUrlWithoutRedirect(url) {
    // Cập nhật URL mà không reload trang, có thể sử dụng History API hoặc thư viện hỗ trợ
    history.pushState(null, null, url);
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}  
$(document).ready(function() {
    var user_id = getCookie('use_id');
    var formData = new FormData();
    if(user_id){
        formData.append('id', user_id);
    }
    console.log(user_id);
    $.ajax({
        url: "http://localhost:3053/api/topcv1s/new/getRecommentComp",
        type: "POST",
        data: formData,
        headers: {
            "Authorization": "Bearer " + getCookie('accessToken')
        },
        processData: false,
        contentType: false,
        success: function(response) {
            if(response.data.result == true){
                $('.interes').show();
                var dataComp = response.data.data;
                var dataNew = response.data.data.jobs;
                $('.interes-head').empty()
                $('.interes-more').attr("href", `/${dataComp.usc_alias}`)
                htmlComp =  `
                <a href="/${dataComp.usc_alias}"><img class="rounded-circle" onerror="this.onerror=null;this.src='/images/img/default_logo.jpg';" src="${dataComp.usc_logo}" width="88" height="88" alt="Logo Company"></a>
                    <h3 class="interes-head-tit mb-0">
                    <a  href="/${dataComp.usc_alias}">
                        ${dataComp.usc_company}
                    </a>  
                    </h3>`;
                $('.interes-head').append(htmlComp);
                $('.interes-body').empty();
                if(dataNew.length > 0){
                    dataNew.forEach(function(item) {
                        var cityName = getCityNameById(parseInt(item.new_city))
                        var mucLuong = getMucLuong(item.new_money_type, item.new_money_from, item.new_money_to, item.new_money);     
                        let imgsave = item.checkLuuTin ? '/images/icon/BookmarkSaved.svg':'/images/icon/Bookmark.svg';     
                        var htmlNew = `
                        <div class="interes-item">
                            <div class="interes-detail">
                                <div class="interes-info">
                                    <a href="/${dataComp.usc_company}">
                                        <img class="interes-avar rounded-circle" onerror="this.onerror=null;this.src='/images/img/default_logo.jpg';" src="${dataComp.usc_logo}" width="45" height="45" alt="Logo Company">
                                    </a>
                                    <div class="interes-tit">
                                        <h4 class="interes-name mb-0">
                                        <a href="/${item.new_alias}-${item.new_id}">
                                            ${item.new_title}
                                        </a>             
                                        </h4>
                                        <div class="interes-comp">
                                        <a href="/${dataComp.usc_alias}">
                                            ${dataComp.usc_company}
                                        </a>   
                                        </div>
                                    </div>
                                </div>
                                <button class="interes-save" data-id="${item.new_id}">
                                    <img src="${imgsave}" alt="Save Job Icon" width="14.62" height="19.53">
                                </button>
                            </div>
                            <div class="interes-label">
                                <label>
                                    ${cityName}
                                </label>
                                <label>
                                    ${mucLuong}
                                </label>
                            </div>
                        </div>`;
                        $('.interes-body').append(htmlNew);
                    })
                }
            }
        },
        error: function(xhr, status, error) {
            console.log(error)
        },
    });
    $(document).on('click', '.interes-save',async  function() {
        if(!getCookie('accessToken')){
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
})