// let isLogin = getCookie('isLogin');
let userName = getCookieNew('userName')
let userPhone = getCookie('use_phone')
let userLogo = getCookieNew('use_logo')
let userEmail = getCookie('use_mail')

function isIoS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getCookieNew(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function getIdcvFromUrl() {
  var url = window.location.href;
  return url.slice(-4);
}

const sethtml = (id, value) => {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = value;
  }
};

const customQuerySelector = (input, value) => {
  const el = document.querySelector(input);
  if (el) el.innerHTML = value;
};

const handleMapData = (
  id,
  listIds,
  listValues,
  listKeys,
  wrapperId
) => {
  const init = $(id).first();
  const list = document.querySelectorAll(id);
  $(`${wrapperId} .ctbx`).remove();
  // if (list.length > 0) {
  // 	list.forEach((item: Element, index1: number) => {
  // 		listIds.forEach((id: string, index: number) => {
  // 			const el = item.querySelector(id)
  // 			const key = listKeys[index]
  // 			if (el) el.innerHTML = listValues?.[index1]?.[key]
  // 		})
  // 	})
  // }
  if (listValues?.length > 0) {
    listValues.forEach((item, indx) => {
      const cloned = init.clone();
      cloned.attr("id", `exp${indx + 1}`);
      cloned.find(".exp-title").html(item?.title);
      cloned.find(".exp-content").html(item?.content);
      cloned.find(".exp-subtitle").html(item?.subtitle);
      cloned.find(".exp-date").html(item?.date);
      $(`${wrapperId}`).first().append(cloned);
    });
  }
};

const handleSetData = async (html, hide, lang, idlang) => {
  // handle set data
  const box1 = html?.menu?.find((item) => item.id == 'box01')?.content?.content?.content
  const box2 = html?.menu?.find((item) => item.id == 'box02')?.content
  const box3 = html?.menu?.find((item) => item.id == 'box03')?.content
  const box4 = html?.menu?.find((item) => item.id == 'box04')?.content
  const box5 = html?.menu?.find((item) => item.id == 'box05')?.content
  const box6 = html?.menu?.find((item) => item.id == 'box06')?.content
  const box7 = html?.menu?.find((item) => item.id == 'box07')?.content
  const block1 = html?.experiences?.find((item) => item.id == 'block01')?.content
  const block2 = html?.experiences?.find((item) => item.id == 'block02')?.content
  const block3 = html?.experiences?.find((item) => item.id == 'block03')?.content
  const block4 = html?.experiences?.find((item) => item.id == 'block04')?.content
  const block5 = html?.experiences?.find((item) => item.id == 'block05')?.content

  //handle add morefield
  //skills -> find skills -> if more then remove, if less then add
  const listSkillsEl = $('#box03 .exp .ctbx')
  if (listSkillsEl.length > 0 && box3) {
    const el = listSkillsEl?.last().parent()
    const og = el.clone()
    //remove all
    listSkillsEl.each((index, el) => el.remove())
    box3?.content?.skills?.map((item, index) => {
      const clone = og.clone()
      $('#box03 .exp').append(clone.find('.ctbx').first())
    })
  }

  // hide hidden blokc
  const menus = html?.menu
  const exps = html?.experiences

  menus?.forEach((item) => {
    if (item?.status === 'hide' || item?.content === '') {
      $(`#${item?.id}`).hide()
    }
  })

  exps?.forEach((item) => {
    if (item?.status === 'hide' || item?.content === '') {
      let el = document.querySelectorAll < HTMLElement > ('#' + item?.id)
      $(`#${item?.id}`).hide()
    }
  })

  //rearrange order
  //menus
  const sorted = menus;
  sorted?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted[i]
      const itemc = sorted[index]
      if (itemc?.id > next?.id) {
        sorted[index] = next
        sorted[i] = itemc
      }
    }
  })
  sorted?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted[i]
      const itemc = sorted[index]
      if (itemc?.id !== 'box01' && next?.id !== 'box01') {
        if (itemc?.order > next?.order) {
          const elm1 = $('#' + itemc?.id)
          const elm2 = $('#' + next.id)
          const clone1 = elm1.clone()
          const clone2 = elm2.clone()
          elm1.replaceWith(clone2)
          elm2.replaceWith(clone1)
          sorted[index] = next
          sorted[i] = itemc
        }
      }
    }
  })

  // experiences
  const sorted2 = exps
  sorted2?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted2[i]
      const itemc = sorted2[index]
      if (itemc?.id > next?.id) {
        sorted2[index] = next
        sorted2[i] = itemc
      }
    }
  })
  sorted2?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted2[i]
      const itemc = sorted2[index]
      if (itemc?.id !== 'box01' && next?.id !== 'box01') {
        if (itemc?.order > next?.order) {
          const elm1 = $('#' + itemc?.id)
          const elm2 = $('#' + next.id)
          const clone1 = elm1.clone()
          const clone2 = elm2.clone()

          elm1.replaceWith(clone2)
          elm2.replaceWith(clone1)
          sorted2[index] = next
          sorted2[i] = itemc
        }
      }
    }
  })

  //cv title
  sethtml('cv-title', html?.cv_title)

  $('#cv-profile-sex').html()
  $('#page-cv #cv-title').html(html?.cv_title)

  // name
  if (isLogin === "true") {
    if (isCreated === false) {
      sethtml('cv-profile-fullname', userName || html?.name)
      $('#cv-profile-fullname').removeClass("err_cv_content")
    } else {
      sethtml('cv-profile-fullname', userName || html?.name)
    }
  } else {
    sethtml('cv-profile-fullname', html?.name)
  }

  // pos
  if (isLogin === "true") {
    if (isCreated === false) {
      sethtml('cv-profile-job', userInfo.jobName || html?.position)
      $('#cv-profile-job').removeClass("err_cv_content")
    } else {
      sethtml('cv-profile-job', html?.position)
    }
  } else {
    sethtml('cv-profile-job', html?.position)
  }

  // avatar
  // document
  //   .getElementById('cvo-profile-avatar')
  //   ?.setAttribute('src',
  //     html?.avatar?.includes('no_avatar') ?  `/images/cv/no_avatar.jpg` : html?.avatar);
  const avatarElement = document.getElementById('cvo-profile-avatar');

  if (isLogin === "true") {
    if (userLogo) {
      avatarElement?.setAttribute('src', userLogo ? decodeURIComponent(userLogo) : html?.avatar?.includes('no_avatar') ? '/images/cv/no_avatar_11zon.webp' : html?.avatar);
      avatarElement?.addEventListener('error', function () {
        this.onerror = null; 
        this.src = '/images/cv/no_avatar.jpg';
      });
    } else {
      const avatarSrc = html?.avatar?.includes('no_avatar') ? '/images/cv/no_avatar_11zon.webp' : html?.avatar;
      avatarElement?.setAttribute('src', avatarSrc);
      avatarElement?.addEventListener('error', function () {
        this.onerror = null; 
        this.src = '/images/cv/no_avatar.jpg';
      });
    }

  } else {
    const avatarSrc = html?.avatar?.includes('no_avatar') ? '/images/cv/no_avatar_11zon.webp' : html?.avatar;
    avatarElement?.setAttribute('src', avatarSrc);
    avatarElement?.addEventListener('error', function () {
      this.onerror = null; 
      this.src = '/images/cv/no_avatar.jpg';
    });
  }

  if (hide) {
    sethtml('cv-profile-phone', 'Xem ở trên')
  } else if (isLogin === "true") {
    if (isCreated === false) {
      sethtml('cv-profile-phone', userPhone || box1?.phone)
      $('#cv-profile-phone').removeClass("err_cv_content")
    } else {
      sethtml('cv-profile-phone', userPhone || box1?.phone)
    }
  } else {
    sethtml('cv-profile-phone', box1?.phone)
  }

  sethtml('cv-profile-sex', box1?.sex)
  // sethtml('cv-profile-sex', '')
  sethtml('cv-profile-birthday', box1?.birthday)
  // sethtml('cv-profile-birthday', '')

  if (hide) {
    sethtml('cv-profile-email', 'Xem ở trên')
  } else if (isLogin === "true") {
    if (isCreated === false) {
      sethtml('cv-profile-email', userInfo.email || userEmail || box1?.email)
      $('#cv-profile-email').removeClass('err_cv_content')
    } else {
      sethtml('cv-profile-email', box1?.email)
    }
  } else {
    sethtml('cv-profile-email', box1?.email)
  }


  sethtml('cv-profile-address', box1?.address)

  // BOX AND BLOCK
  // console.log({ box1, box2, box3, box4, box5, box6, box7, block1, block2, block3, block4, block5 })

  customQuerySelector('#box01 #cv-boxtitle', html?.menu?.[0]?.content?.title)
  // box2

  customQuerySelector('#box02 > .h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > #cv-boxtitle', box2?.title)

  // zexp
  customQuerySelector('#box02 > div.z-exp > h3 > #cv-boxtitle', box2?.title)

  //fix cv
  customQuerySelector('#box02 > .cum > #boxtitle > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > #boxtitle > #cv-boxtitle', box2?.title)

  customQuerySelector('#box02 .box-content', box2?.content)

  customQuerySelector('#box03 > .h3 > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > h3 > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > div.ski > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > div.z-exp > h3 > #cv-boxtitle', box3?.title)
  // fix cv
  customQuerySelector('#box03 > .ski > #boxtitle > #cv-boxtitle', box3?.title)

  // skills box
  const skilldata = box3?.content?.skills

  const listSkils = document.querySelectorAll('#box03 > div.skill > .ctbx')

  if (listSkils.length > 0)
    listSkils?.forEach((item, index) => {
      // set skill name
      const skillName = item.querySelector('.skill-name')
      if (skillName) skillName.innerHTML = skilldata?.[index]?.name

      // set skill point

      const skillPoint = item.querySelector('.bar-exp > div')

      if (skillPoint) {
        skillPoint.setAttribute('style', `width : ${skilldata?.[index]?.exp}%;`)
      }

      //fix cv
      const skillPoint2 = item.querySelector('.bar-value-exp > input')

      if (skillPoint2) {
        skillPoint2.value = `${skilldata?.[index]?.exp}`
      }
    })

  // awards
  // customQuerySelector('#box04 > .h3 > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > h3 > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > div.cum > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > div.z-exp > h3 > #cv-boxtitle', box4?.title)

  //fix cv
  customQuerySelector('#box04 > .cum > #boxtitle > #cv-boxtitle', box4?.title)

  customQuerySelector('#box04 .box-content', box4?.content)
  customQuerySelector('#box04 > div.ct_bo > div > div', box4?.content)
  customQuerySelector('#box04 > p > span.box-content', box4?.content)
  customQuerySelector('#box04 > .padd_box > span.box-content', box4?.content)

  //cert
  customQuerySelector('#box05 > .h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > div.cum > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > div.z-exp > h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > .cum > #boxtitle > #cv-boxtitle', box5?.title)

  customQuerySelector('#box05 > .box-content', box5?.content)
  customQuerySelector('#box05 > div.ct_bo > div > div', box5?.content)

  customQuerySelector('#box05 > p > span.box-content', box5?.content)
  customQuerySelector('#box05 > .padd_box > span.box-content', box5?.content)
  // fav

  customQuerySelector('#box06 > .h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > .cum > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > div.z-exp > h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > .cum > #boxtitle > #cv-boxtitle', box6?.title)

  customQuerySelector('#box06 > .padd_box > span.box-content', box6?.content)
  customQuerySelector('#box06 > p > span.box-content', box6?.content)
  customQuerySelector('#box06 > .box-content', box6?.content)
  customQuerySelector('#box06 > div.ct_bo > div > div', box6?.content)

  // ref
  customQuerySelector('#box07 > .h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > .cum > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > div.z-exp > h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > .cum > #boxtitle > #cv-boxtitle', box7?.title)

  customQuerySelector('#box07 > .ct_bo > .ct_box > .box-content', box7?.content)
  customQuerySelector('#box07 > .padd_box > span.box-content', box7?.content)
  customQuerySelector('#box07 > p > span.box-content', box7?.content)
  customQuerySelector('#box07 > .box-content', box7?.content)

  // EXPERIENCES
  if (block1) {
    customQuerySelector('#block01 > .head >  #cvo-experience-blocktitle', block1?.title)

    customQuerySelector('#block01 > div.z-exp > div.head > #cvo-experience-blocktitle', block1?.title)

    //fix cv
    customQuerySelector('#block01 > .head >  #blocktitle > #cvo-experience-blocktitle', block1?.title)
    customQuerySelector('#block01 > .head1 >  #cvo-experience-blocktitle', block1?.title)

    //handle map data
    handleMapData(
      '#block01 > #experience-table > div.ctbx',
      ['h3 > .exp-title', '.h3 > .exp-subtitle', 'div.exp-content'],
      block1?.content,
      ['title', 'subtitle', 'content'],
      '#block01 #experience-table'
    )
  }

  // EXp
  if (block2) {
    customQuerySelector('#block02 > .head >  #cvo-experience-blocktitle', block2?.title)
    customQuerySelector('#block02 > div.z-exp > div.head > #cvo-experience-blocktitle', block2?.title)

    //fix cv
    customQuerySelector('#block02 > .head >  #blocktitle > #cvo-experience-blocktitle', block2?.title)
    customQuerySelector('#block02 > .head2 >  #cvo-experience-blocktitle', block2?.title)

    //handle map data
    handleMapData(
      '#block02 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block2?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block02 #experience-table'
    )
  }

  // activity
  if (block3) {
    customQuerySelector('#block03 > .head >  #cvo-experience-blocktitle', block3?.title)
    customQuerySelector('#block03 > div.z-exp > div.head > #cvo-experience-blocktitle', block3?.title)

    //fix cv
    customQuerySelector('#block03 > .head >  #blocktitle > #cvo-experience-blocktitle', block3?.title)
    customQuerySelector('#block03 > .head3 >  #cvo-experience-blocktitle', block3?.title)

    //handle map data
    handleMapData(
      '#block03 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block3?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block03 #experience-table'
    )
  }

  // projects
  if (block4) {
    customQuerySelector('#block04 > .head >  #cvo-experience-blocktitle', block4?.title)
    customQuerySelector('#block04 > div.z-exp > div.head  >   #cvo-experience-blocktitle', block4?.title)

    //fix cv
    customQuerySelector('#block04 > .head > #blocktitle > #cvo-experience-blocktitle', block4?.title)
    customQuerySelector('#block04 > .head4 >  #cvo-experience-blocktitle', block4?.title)

    //handle map data
    handleMapData(
      '#block04 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block4?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block04 #experience-table'
    )
  }

  // MORE
  if (block5) {
    //fix lỗi title block 5 Thông tin thêm
    {
      $('#block05 .head #cvo-experience-blocktitle').html(block5?.title)
    }
    //handle map data
    handleMapData(
      '#block05 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block5?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block05 #experience-table'
    )
  }

}

const handleSetDataNew = async (html, hide, lang, idlang) => {
  console.log(">>> Check html: ", html);
  // handle set data
  const box1 = html?.menu?.find((item) => item.id == 'box01')?.content?.content?.content
  const box2 = html?.menu?.find((item) => item.id == 'box02')?.content
  const box3 = html?.menu?.find((item) => item.id == 'box03')?.content
  const box4 = html?.menu?.find((item) => item.id == 'box04')?.content
  const box5 = html?.menu?.find((item) => item.id == 'box05')?.content
  const box6 = html?.menu?.find((item) => item.id == 'box06')?.content
  const box7 = html?.menu?.find((item) => item.id == 'box07')?.content
  const block1 = html?.experiences?.find((item) => item.id == 'block01')?.content
  const block2 = html?.experiences?.find((item) => item.id == 'block02')?.content
  const block3 = html?.experiences?.find((item) => item.id == 'block03')?.content
  const block4 = html?.experiences?.find((item) => item.id == 'block04')?.content
  const block5 = html?.experiences?.find((item) => item.id == 'block05')?.content

  //handle add morefield
  //skills -> find skills -> if more then remove, if less then add
  const listSkillsEl = $('#box03 .exp .ctbx')
  if (listSkillsEl.length > 0 && box3) {
    const el = listSkillsEl?.last().parent()
    const og = el.clone()
    //remove all
    listSkillsEl.each((index, el) => el.remove())
    box3?.content?.skills?.map((item, index) => {
      const clone = og.clone()
      $('#box03 .exp').append(clone.find('.ctbx').first())
    })
  }

  // hide hidden blokc
  const menus = html?.menu
  const exps = html?.experiences

  menus?.forEach((item) => {
    if (item?.status === 'hide' || item?.content === '') {
      $(`#${item?.id}`).hide()
    }
  })

  exps?.forEach((item) => {
    if (item?.status === 'hide' || item?.content === '') {
      let el = document.querySelectorAll < HTMLElement > ('#' + item?.id)
      $(`#${item?.id}`).hide()
    }
  })

  //rearrange order
  //menus
  const sorted = menus
  sorted?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted[i]
      const itemc = sorted[index]
      if (itemc?.id > next?.id) {
        sorted[index] = next
        sorted[i] = itemc
      }
    }
  })
  sorted?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted[i]
      const itemc = sorted[index]
      if (itemc?.id !== 'box01' && next?.id !== 'box01') {
        if (itemc?.order > next?.order) {
          const elm1 = $('#' + itemc?.id)
          const elm2 = $('#' + next.id)
          const clone1 = elm1.clone()
          const clone2 = elm2.clone()
          elm1.replaceWith(clone2)
          elm2.replaceWith(clone1)
          sorted[index] = next
          sorted[i] = itemc
        }
      }
    }
  })

  // experiences
  const sorted2 = exps
  sorted2?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted2[i]
      const itemc = sorted2[index]
      if (itemc?.id > next?.id) {
        sorted2[index] = next
        sorted2[i] = itemc
      }
    }
  })
  sorted2?.forEach((item, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      const next = sorted2[i]
      const itemc = sorted2[index]
      if (itemc?.id !== 'box01' && next?.id !== 'box01') {
        if (itemc?.order > next?.order) {
          const elm1 = $('#' + itemc?.id)
          const elm2 = $('#' + next.id)
          const clone1 = elm1.clone()
          const clone2 = elm2.clone()

          elm1.replaceWith(clone2)
          elm2.replaceWith(clone1)
          sorted2[index] = next
          sorted2[i] = itemc
        }
      }
    }
  })

  //cv title
  sethtml('cv-title', html?.cv_title)

  $('#cv-profile-sex').html()
  $('#page-cv #cv-title').html(html?.cv_title)

  // name
  sethtml('cv-profile-fullname', html?.name)
  // pos

  sethtml('cv-profile-job', html?.position)

  // avatar
  // document
  //   .getElementById('cvo-profile-avatar')
  //   ?.setAttribute('src',
  //     html?.avatar?.includes('no_avatar') ? `/images/cv/no_avatar.jpg` : html?.avatar)
  const avatarElement = document.getElementById('cvo-profile-avatar');
  if (isLogin === "true") {
    if (userLogo) {
      avatarElement?.setAttribute('src', decodeURIComponent(userLogo));
      avatarElement?.addEventListener('error', function () {
        this.onerror = null; 
        this.src = '/images/cv/no_avatar.jpg';
      });
    } else {
      const avatarSrc = html?.avatar?.includes('no_avatar') ? '/images/cv/no_avatar.jpg' : html?.avatar;
      avatarElement?.setAttribute('src', avatarSrc);
      avatarElement?.addEventListener('error', function () {
        this.onerror = null; 
        this.src = '/images/cv/no_avatar.jpg';
      });
    }
  } else {
    const avatarSrc = html?.avatar?.includes('no_avatar') ? '/images/cv/no_avatar.jpg' : html?.avatar;
    avatarElement?.setAttribute('src', avatarSrc);
    avatarElement?.addEventListener('error', function () {
      this.onerror = null; 
      this.src = '/images/cv/no_avatar.jpg';
    });
  }


  sethtml('cv-profile-phone', box1?.phone)

  sethtml('cv-profile-sex', box1?.sex)
  // sethtml('cv-profile-sex', '')
  sethtml('cv-profile-birthday', box1?.birthday)
  // sethtml('cv-profile-birthday', '')

  sethtml('cv-profile-email', box1?.email)

  sethtml('cv-profile-address', box1?.address)

  // BOX AND BLOCK
  // console.log({ box1, box2, box3, box4, box5, box6, box7, block1, block2, block3, block4, block5 })

  customQuerySelector('#box01 #cv-boxtitle', html?.menu?.[0]?.content?.title)
  // box2

  customQuerySelector('#box02 > .h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > #cv-boxtitle', box2?.title)

  // zexp
  customQuerySelector('#box02 > div.z-exp > h3 > #cv-boxtitle', box2?.title)

  //fix cv
  customQuerySelector('#box02 > .cum > #boxtitle > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > h3 > #cv-boxtitle', box2?.title)
  customQuerySelector('#box02 > .cum > #boxtitle > #cv-boxtitle', box2?.title)

  console.log(">>> Check box2: ", box2);
  customQuerySelector('#box02 .box-content', box2?.content?.content || "")

  customQuerySelector('#box03 > .h3 > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > h3 > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > div.ski > #cv-boxtitle', box3?.title)
  customQuerySelector('#box03 > div.z-exp > h3 > #cv-boxtitle', box3?.title)
  // fix cv
  customQuerySelector('#box03 > .ski > #boxtitle > #cv-boxtitle', box3?.title)

  // skills box
  const skilldata = box3?.content?.skills

  const listSkils = document.querySelectorAll('#box03 > div.skill > .ctbx')

  if (listSkils.length > 0)
    listSkils?.forEach((item, index) => {
      // set skill name
      const skillName = item.querySelector('.skill-name')
      if (skillName) skillName.innerHTML = skilldata?.[index]?.name

      // set skill point

      const skillPoint = item.querySelector('.bar-exp > div')

      if (skillPoint) {
        skillPoint.setAttribute('style', `width : ${skilldata?.[index]?.exp}%;`)
      }

      //fix cv
      const skillPoint2 = item.querySelector('.bar-value-exp > input')

      if (skillPoint2) {
        skillPoint2.value = `${skilldata?.[index]?.exp}`
      }
    })

  // awards
  // customQuerySelector('#box04 > .h3 > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > h3 > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > div.cum > #cv-boxtitle', box4?.title)
  customQuerySelector('#box04 > div.z-exp > h3 > #cv-boxtitle', box4?.title)

  //fix cv
  customQuerySelector('#box04 > .cum > #boxtitle > #cv-boxtitle', box4?.title)

  customQuerySelector('#box04 .box-content', box4?.content?.content || "")

  //cert
  customQuerySelector('#box05 > .h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > div.cum > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > div.z-exp > h3 > #cv-boxtitle', box5?.title)
  customQuerySelector('#box05 > .cum > #boxtitle > #cv-boxtitle', box5?.title)

  customQuerySelector('#box05 .box-content', box5?.content?.content || "")
  // fav

  customQuerySelector('#box06 > .h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > .cum > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > div.z-exp > h3 > #cv-boxtitle', box6?.title)
  customQuerySelector('#box06 > .cum > #boxtitle > #cv-boxtitle', box6?.title)

  customQuerySelector('#box06 .box-content', box6?.content?.content || "")

  // ref
  customQuerySelector('#box07 > .h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > .cum > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > div.z-exp > h3 > #cv-boxtitle', box7?.title)
  customQuerySelector('#box07 > .cum > #boxtitle > #cv-boxtitle', box7?.title)

  customQuerySelector('#box07 .box-content', box7?.content?.content || "")

  // EXPERIENCES
  if (block1) {
    customQuerySelector('#block01 > .head >  #cvo-experience-blocktitle', block1?.title)

    customQuerySelector('#block01 > div.z-exp > div.head > #cvo-experience-blocktitle', block1?.title)

    //fix cv
    customQuerySelector('#block01 > .head >  #blocktitle > #cvo-experience-blocktitle', block1?.title)
    customQuerySelector('#block01 > .head1 >  #cvo-experience-blocktitle', block1?.title)

    //handle map data
    handleMapData(
      '#block01 > #experience-table > div.ctbx',
      ['h3 > .exp-title', '.h3 > .exp-subtitle', 'div.exp-content'],
      block1?.content,
      ['title', 'subtitle', 'content'],
      '#block01 #experience-table'
    )
  }

  // EXp
  if (block2) {
    customQuerySelector('#block02 > .head >  #cvo-experience-blocktitle', block2?.title)
    customQuerySelector('#block02 > div.z-exp > div.head > #cvo-experience-blocktitle', block2?.title)

    //fix cv
    customQuerySelector('#block02 > .head >  #blocktitle > #cvo-experience-blocktitle', block2?.title)
    customQuerySelector('#block02 > .head2 >  #cvo-experience-blocktitle', block2?.title)

    //handle map data
    handleMapData(
      '#block02 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block2?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block02 #experience-table'
    )
  }

  // activity
  if (block3) {
    customQuerySelector('#block03 > .head >  #cvo-experience-blocktitle', block3?.title)
    customQuerySelector('#block03 > div.z-exp > div.head > #cvo-experience-blocktitle', block3?.title)

    //fix cv
    customQuerySelector('#block03 > .head >  #blocktitle > #cvo-experience-blocktitle', block3?.title)
    customQuerySelector('#block03 > .head3 >  #cvo-experience-blocktitle', block3?.title)

    //handle map data
    handleMapData(
      '#block03 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block3?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block03 #experience-table'
    )
  }

  // projects
  if (block4) {
    customQuerySelector('#block04 > .head >  #cvo-experience-blocktitle', block4?.title)
    customQuerySelector('#block04 > div.z-exp > div.head  >   #cvo-experience-blocktitle', block4?.title)

    //fix cv
    customQuerySelector('#block04 > .head > #blocktitle > #cvo-experience-blocktitle', block4?.title)
    customQuerySelector('#block04 > .head4 >  #cvo-experience-blocktitle', block4?.title)

    //handle map data
    handleMapData(
      '#block04 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block4?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block04 #experience-table'
    )
  }

  // MORE
  if (block5) {
    //fix lỗi title block 5 Thông tin thêm
    {
      $('#block05 .head #cvo-experience-blocktitle').html(block5?.title)
    }
    //handle map data
    handleMapData(
      '#block05 > #experience-table > div.ctbx',
      ['h3 > .exp-title', 'h3 > div.exp-date', '.h3 > .exp-subtitle', 'div.exp-content'],
      block5?.content,
      ['title', 'date', 'subtitle', 'content'],
      '#block05 #experience-table'
    )
  }

}

const renderPlaceholder = (lang) => {
  if (lang == "vi") {
    return {
      holder_title_cv: "Tiêu đề CV",
      holder_name: "Họ tên",
      holder_birthday: "Ngày sinh",
      holder_sex: "Giới tính",
      holder_phone: "Điện thoại",
      holder_email: "Email",
      holder_address: "Địa chỉ",
      holder_face: "Facebook",
      holder_job: "Vị trí công việc ứng tuyển",
      holder_box_title: "Tiêu đề",
      holder_tool_add: "Thêm",
      holder_tool_edit: "Sửa",
      holder_tool_del: "Xóa",
      holder_box_content: "Nội dung",
      holder_block_title: "Tiêu đề mục lớn",
      holder_block_cp_name: "Tên công ty",
      holder_block_time: "Thời gian làm việc",
      holder_block_job: "Vị trí công việc",
      holder_block_job_info:
        "Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc.",
      holder_skill: "Tên kỹ năng",
    };
  } else if (lang == "en") {
    return {
      holder_title_cv: "CV Title",
      holder_name: "Full name",
      holder_birthday: "Birthday",
      holder_sex: "Gender ",
      holder_phone: "Phone number",
      holder_email: "Email",
      holder_address: "Address",
      holder_face: "Facebook",

      holder_job: "Job position",
      holder_box_title: "Title",
      holder_tool_add: "Add",
      holder_tool_edit: "Edit",
      holder_tool_del: "Delete",
      holder_box_content: "Content",
      holder_block_title: "Heading",
      holder_block_cp_name: "Company name",
      holder_block_time: "Working time",
      holder_block_job: "Job position",
      holder_block_job_info: "Job description and task achievements.",
      holder_skill: "Skill name",
    };
  } else if (lang == "jp") {
    return {
      holder_title_cv: "CVタイトル",
      holder_name: "氏名",
      holder_birthday: "生年",
      holder_sex: "性別",
      holder_phone: "電話番号",
      holder_email: "Eメール",
      holder_address: "住所",
      holder_face: "ウェブサイト（Facebook)",
      holder_job: "応募仕事",
      holder_box_title: "タイトル",
      holder_tool_add: "追加",
      holder_tool_edit: "編集",
      holder_tool_del: "削除",
      holder_box_content: "内容",
      holder_block_title: "大きい項目タイトル",
      holder_block_cp_name: "会社名",
      holder_block_time: "勤務期間",
      holder_block_job: "職位",
      holder_block_job_info: "職歴の詳細内容",
      holder_skill: "スキル名",
    };
  } else if (lang == "kr") {
    return {
      holder_title_cv: "이력서 제목",
      holder_name: "성명",
      holder_birthday: "년생 ",
      holder_sex: "성별 ",
      holder_phone: "전화번호 ",
      holder_email: "메일",
      holder_address: "주소 ",
      holder_face: "홈페이지 (Facebook)",
      holder_job: "지원하고 싶은 위치",
      holder_box_title: "제목",
      holder_tool_add: "추가",
      holder_tool_edit: "수정",
      holder_tool_del: "삭제",
      holder_box_content: "내용",
      holder_block_title: "큰 제목",
      holder_block_cp_name: "회사명",
      holder_block_time: "근무시간",
      holder_block_job: "작업 위치",
      holder_block_job_info: " 업무에서 달성되는 업무 세부 사항을 설명한다.",
      holder_skill: "기술 이름",
    };
  } else {
    return {
      holder_title_cv: "标题",
      holder_name: "全名",
      holder_birthday: "生日",
      holder_sex: "性别",
      holder_phone: "电话号码",
      holder_email: "邮箱",
      holder_address: "地址",
      holder_face: "Facebook",

      holder_job: "想应聘的岗位",
      holder_box_title: "标题",
      holder_tool_add: "加",
      holder_tool_edit: "修改",
      holder_tool_del: "删除",
      holder_box_content: "内容",
      holder_block_title: "大题目",
      holder_block_cp_name: "公司名称",
      holder_block_time: "工作时间",
      holder_block_job: "工作岗位",
      holder_block_job_info: "描述具体工作, 在工作期间所得到的收获",
      holder_skill: "技能名称",
    };
  }
};

const setPlaceholderHTMl = (lang, html, sample) => {
  // //handle check skill input
  let isSample = false;
  if (sample && html) {
    if (JSON.stringify(sample) === JSON.stringify(html)) {
      isSample = true;
    }
  }

  document.querySelectorAll(".bar-value-exp > input").forEach((el) => {
    el.setAttribute("type", "number");
  });

  //handle remove watermark
  document.querySelector(".watermark")?.setAttribute("style", "display:none;");

  // handle check token then set user data to cv
  const info = window.localStorage.getItem("inforFull");
  const token = getCookie("accessToken");

  if (info && token && isSample) {
    try {
      const data = JSON.parse(info);

      sethtml("cv_title", data?.cv_title);
      sethtml("cv-profile-fullname", data?.use_first_name);
      sethtml("cv-profile-sex", data?.use_gioi_tinh === 1 ? "Nam" : "Nữ");
      sethtml("cv-profile-email", data?.use_email_lienhe);
      sethtml("cv-profile-phone", data?.use_phone);
      sethtml("cv-profile-address", data?.use_address);

      sethtml(
        "cv-profile-birthday",
        data?.use_birth_day
          ? moment(data?.use_birth_day)?.format("DD/MM/YYYY")
          : moment().format("DD/MM/YYYY")
      );

      // set image
      if (data?.use_logo) {
        const decoded = jwtDecode(token);
        const createdAt = moment(decoded?.data?.createdAt * 1000)?.format(
          "YYYY/MM/DD"
        );
        document
          .getElementById("cvo-profile-avatar")
          ?.setAttribute("src", data?.use_logo);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // handle set placeholder by lang
  const tempPlaceholder = renderPlaceholder(lang);
  // console.log(tempPlaceholder);
  Object.keys(tempPlaceholder)?.forEach((key) => {
    const removeHolder = key?.replace("holder_", "");

    // cv title
    renderer(removeHolder, "title_cv", "cv-title", tempPlaceholder[key]);
    renderer(removeHolder, "name", "cv-profile-fullname", tempPlaceholder[key]);
    renderer(
      removeHolder,
      "birthday",
      "cv-profile-birthday",
      tempPlaceholder[key]
    );
    renderer(removeHolder, "sex", "cv-profile-sex", tempPlaceholder[key]);
    renderer(removeHolder, "phone", "cv-profile-phone", tempPlaceholder[key]);
    renderer(removeHolder, "email", "cv-profile-email", tempPlaceholder[key]);
    renderer(
      removeHolder,
      "address",
      "cv-profile-address",
      tempPlaceholder[key]
    );
    renderer(removeHolder, "face", "cv-profile-face", tempPlaceholder[key]);
    renderer(removeHolder, "job", "cv-profile-job", tempPlaceholder[key]);
    renderer(removeHolder, "skill", "skill-name", tempPlaceholder[key], false);

    renderer(
      removeHolder,
      "block_title",
      "cvo-experience-blocktitle",
      tempPlaceholder[key]
    );
    renderer(removeHolder, "box_title", "cv-boxtitle", tempPlaceholder[key]);
    renderer(
      removeHolder,
      "box_content",
      "box-content",
      tempPlaceholder[key],
      false
    );
    renderer(
      removeHolder,
      "block_cp_name",
      "exp-title",
      tempPlaceholder[key],
      false
    );
    renderer(
      removeHolder,
      "block_job",
      "exp-subtitle",
      tempPlaceholder[key],
      false
    );
    renderer(
      removeHolder,
      "block_job_info",
      "exp-content",
      tempPlaceholder[key],
      false
    );
    renderer(
      removeHolder,
      "block_cp_name",
      "exp-title",
      tempPlaceholder[key],
      false
    );
    renderer(
      removeHolder,
      "block_time",
      "exp-date",
      tempPlaceholder[key],
      false
    );

    renderer(
      removeHolder,
      "tool_add",
      "clone",
      tempPlaceholder[key],
      false,
      true
    );
    renderer(
      removeHolder,
      "tool_del",
      "remove",
      tempPlaceholder[key],
      false,
      true
    );
    renderer(
      removeHolder,
      "tool_edit",
      "edit",
      tempPlaceholder[key],
      false,
      true
    );
  });
};

const renderer = (
  removeHolder,
  title,
  id,
  value,
  isId = true,
  notPlaceholder = false
) => {
  if (removeHolder === title) {
    let list;

    if (isId) {
      list = document.querySelectorAll(`[id=${id}]`);
    } else {
      list = document.querySelectorAll(`.${id}`);
    }
    if (!notPlaceholder) {
      list.forEach((el) => el.setAttribute("cvo-placeholder", value));
    } else {
      list.forEach((el) => (el.innerHTML = value));
    }
  }
};

const appendScript = () => {
  const appendScript = (url, async) => {
    const script6 = document.createElement("script");
    script6.src = url;
    script6.async = async;
    document.head.appendChild(script6);
  };

  appendScript(
    "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js",
    false
  );
  appendScript(
    "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js",
    false
  );

  // appendScript("/js/cv/select2.js", false);
  appendScript("/js/cv/select2.min.js", false);
  appendScript("/js/cv/jquery.validate.min.js", false);
  appendScript("/js/cv/cv.js", false);
  appendScript("/js/cv/style_header.js", false);
  appendScript("/js/cv/permissions_notify.js", false);
  appendScript("/js/cv/check_login_dt.js", false);
  appendScript("/js/cv/1.js", false);
  appendScript("/js/cv/cv_new_all1.js", false);
  appendScript("/js/cv/taocv_v2.js", false);
  appendScript("/js/cv/cvh_new_all1.js", false);
  appendScript("/js/cv/edit.js", false);
  appendScript("/js/cv/main.js", false);
}

function preventDefaultAction(e) {
  e.preventDefault();
}

function updateAvatarLibrary(url) {
  const libraryContainer = $('.upload_avar_libra');

  if (url && !url.includes('no_avatar')) {
    const imgElement = $('<div class="avar_libra_item"><img loading="lazy" src="' + url + '" width="70" height="70" alt="Avar Library" /></div>');
    libraryContainer.append(imgElement);
  }
}