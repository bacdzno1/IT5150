
$(window).on('scroll.loadScriptsOnce', function () {
   $(window).off('scroll.loadScriptsOnce');
   // setTimeout(function() {
   const hostname = window.location.hostname;
   const socket = io.connect('https://socket.timviec365.vn', {
      secure: true,
      enabledTransports: ['https'],
      transports: ['websocket', 'polling'],
   })
   setTimeout(() => {

      if (void 0 != hostname && "" != hostname) {
         let e = hostname.split(".")[0];
         class t {
            constructor() {
               this.appendTemplate(e), this.tawkChatInputEditor = $("#tawk-chatinput-editor"), this.tawkChatinputAddFile = $("#tawk-chatinput-addFile"), this.listConversation = $(".listConversation"), this.liveChatMain = $(".liveChatMain"), this.listFile = [], this.baseurlFileUpload = "https://api.timviec365.vn:9015/uploads/"
            }
            getClientCodeID() {
               return function () {
                  var e = window.localStorage.getItem("_DEVICEID_");
                  if (e) return e;
                  var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                     var t = 16 * Math.random() | 0;
                     return ("x" == e ? t : 3 & t | 8).toString(16)
                  });
                  return window.localStorage.setItem("_DEVICEID_", t), t
               }()
            }
            getConversationGroupID() {
               return 99144
            }
            talk_button() {
               return `<button class="talk_button">Live Chat</button>`
            }
            liveChatHeader() {
               return `<div class="liveChatHeader">
                   <div class="chat_call">
                       <img onclick="openQrChat()" class="chat_popup_head_ic_bg" src='/images/icon/chat_call.svg'></img>
                       <img onclick="openQrChat()" class="chat_popup_head_ic_bg" src='/images/icon/chat_video.svg'></img>
                   </div>
                   <div class="liveChatHeaderButton"><button id="liveChatClose">X</button></div>
                   <div class="text-center text">
                       <a rel="nofollow" class="text"></a>
                   </div>
               </div>`
            }
            liveChatBody() {
               return `<div class="liveChatBody">
                               <div class="listConversation"></div>
                               <div id="typing"></div>
                               <div id="mainEnterChat">
                                   <div id="boxPreview" class="hidden"><button class="itemPreview" id="itemAddNewFile"><img src="https://timviec365.vn/images/livechat/add_new_file.svg"></button></div>
                                   <div id="boxEnterChat">
                                       <div id="boxEditor">
                                           <div id="boxRepMess">
                                               <div id="boxRepMessTop">
                                                   <img src="https://timviec365.vn/images/livechat/repMess.svg">
                                                   <div id="boxContentRepMess">
                                                       <p id="contentRepMess"></p>
                                                       <p id="timeRepMess"></p>
                                                   </div>
                                                   <button id="closeRepMess">X</button>
                                               </div>
                                           </div>
                                           <textarea disabled placeholder="Nhập nội dung" id="tawk-chatinput-editor" rows="1"></textarea>
                                       </div>
                                       <div id="chatinputActionButtons">
                                           <button id="btnSendMess" class="hidden">${this.btnSendMessage()}</button>
                                           <button id="addFile">${this.btnSendFile()}</button>
                                           <input type="file" id="tawk-chatinput-addFile" multiple hidden>
                                       </div>
                                   </div>
                               </div>
                               <button id="onBotLiveChat"><img src="https://timviec365.vn/images/livechat/onBottom.svg"></button>
                           </div>`
            }
            QrChatCall() {
               return `<div class="popup_qr_chat" id="box_qr_chat" style="display:none"><div id="img_qr_chat"></div></div>`
            }
            drag() {
               return '<div id="drag"><img src="https://timviec365.vn/timviecejs/images/livechat/drag.png"></div>'
            }
            btnSendMessage() {
               return '<svg width="50" height="51" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_571_56690)"><path d="M30 7.4273V23.5726C30 27.3987 26.8987 30.5 23.0727 30.5H6.92736C3.10131 30.5 0 27.3987 0 23.5727V7.4273C0 3.60131 3.10131 0.5 6.92736 0.5H23.0727C26.8987 0.5 30 3.60131 30 7.4273Z" fill="url(#paint0_linear_571_56690)"/><path d="M6.79923 30.5C3.05012 30.5 0 27.4499 0 23.7008V7.29923C0 3.55012 3.05012 0.5 6.79923 0.5H23.2008C26.9499 0.5 30 3.55012 30 7.29923V23.7008C30 27.4499 26.9499 30.5 23.2008 30.5H6.79923Z" fill="url(#paint1_linear_571_56690)"/><path opacity="0.5" d="M30.0001 15.4666V23.5725C30.0001 27.3986 26.8987 30.5 23.0726 30.5H16.8868L8.66577 22.279L23.4435 8.90997L30.0001 15.4666Z" fill="url(#paint2_linear_571_56690)"/><path opacity="0.3" d="M23.7208 9.24756L5.73975 13.7902L8.95742 16.8186V22.5914L12.1258 20.1762L15.2035 23.2539L23.7208 9.24756Z" fill="#1A1A1A"/><path d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z" fill="url(#paint3_linear_571_56690)"/><path d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z" fill="url(#paint4_linear_571_56690)"/><path d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z" fill="url(#paint5_linear_571_56690)"/><path d="M8.64502 22.279L11.8134 19.8638L10.2539 18.3042L8.64502 22.279Z" fill="#D2D2D2"/><path d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z" fill="white"/><path d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z" fill="#9FB5DF"/><path d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z" fill="white"/></g><defs><linearGradient id="paint0_linear_571_56690" x1="15" y1="0.5" x2="15" y2="30.5" gradientUnits="userSpaceOnUse"><stop offset="0.005" stop-color="#FFE5AE"/><stop offset="1" stop-color="#FF992D"/></linearGradient><linearGradient id="paint1_linear_571_56690" x1="15" y1="0.792976" x2="15" y2="30.678" gradientUnits="userSpaceOnUse"><stop stop-color="#4C5BD4"/><stop offset="1" stop-color="#1F7ED0"/></linearGradient><linearGradient id="paint2_linear_571_56690" x1="15.9939" y1="15.5339" x2="28.7275" y2="28.267" gradientUnits="userSpaceOnUse"><stop stop-color="#64A8E2"/><stop offset="1" stop-color="#1F7ED0" stop-opacity="0"/></linearGradient><linearGradient id="paint3_linear_571_56690" x1="10.2539" y1="15.9382" x2="23.4085" y2="15.9382" gradientUnits="userSpaceOnUse"><stop offset="0.009" stop-color="#F3E0DF"/><stop offset="1" stop-color="#E8E0BA"/></linearGradient><linearGradient id="paint4_linear_571_56690" x1="14.2217" y1="12.9556" x2="15.4627" y2="14.7785" gradientUnits="userSpaceOnUse"><stop offset="0.009" stop-color="#65BCC0"/><stop offset="1" stop-color="#53838A"/></linearGradient><linearGradient id="paint5_linear_571_56690" x1="5.42725" y1="12.7206" x2="23.4084" y2="12.7206" gradientUnits="userSpaceOnUse"><stop offset="0.009" stop-color="#F3E0DF"/><stop offset="1" stop-color="#E8E0BA"/></linearGradient><clipPath id="clip0_571_56690"><rect y="0.5" width="30" height="30" rx="15" fill="white"/></clipPath></defs></svg>'
            }
            btnSendFile() {
               return '<svg width="32" height="38" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0371 7.45508L14.7324 1.15039C14.5566 0.974609 14.3193 0.875 14.0703 0.875H1.625C1.10645 0.875 0.6875 1.29395 0.6875 1.8125V26.1875C0.6875 26.7061 1.10645 27.125 1.625 27.125H20.375C20.8936 27.125 21.3125 26.7061 21.3125 26.1875V8.12012C21.3125 7.87109 21.2129 7.63086 21.0371 7.45508ZM19.1504 8.55078H13.6367V3.03711L19.1504 8.55078ZM19.2031 25.0156H2.79688V2.98438H11.6445V9.3125C11.6445 9.63884 11.7742 9.95182 12.0049 10.1826C12.2357 10.4133 12.5487 10.543 12.875 10.543H19.2031V25.0156ZM11.9375 12.8281C11.9375 12.6992 11.832 12.5938 11.7031 12.5938H10.2969C10.168 12.5938 10.0625 12.6992 10.0625 12.8281V15.9922H6.89844C6.76953 15.9922 6.66406 16.0977 6.66406 16.2266V17.6328C6.66406 17.7617 6.76953 17.8672 6.89844 17.8672H10.0625V21.0312C10.0625 21.1602 10.168 21.2656 10.2969 21.2656H11.7031C11.832 21.2656 11.9375 21.1602 11.9375 21.0312V17.8672H15.1016C15.2305 17.8672 15.3359 17.7617 15.3359 17.6328V16.2266C15.3359 16.0977 15.2305 15.9922 15.1016 15.9922H11.9375V12.8281Z" fill="#474747"/></svg>'
            }
            appendTemplate(e) {
               let t = `<link rel="stylesheet" href="https://timviec365.vn/timviecejs/css/livechat/app.css" media="all"><div id="liveChatContainer"><div class="widget ${e}">${this.talk_button()}<div class="liveChatMain" style="display: none">${this.liveChatHeader()}${this.liveChatBody()}${this.drag()}</div></div><audio controls id="notificationAudio" style="display: none;"></div>`;
               $("body").append(t);
               if (!$('#box_qr_chat').length) {
                  $('body').append(this.QrChatCall)
               }
            }
            changeBody(e) {
               "show" == e ? ($(".talk_button").hide(), this.liveChatMain.show(), $(".widget").addClass("active"), this.listConversation.animate({
                  scrollTop: this.listConversation.get(0).scrollHeight
               }, 0)) : ($(".talk_button").show(), this.liveChatMain.hide(), $(".widget").removeClass("active"))
            }
            showBtnSendMessage() {
               $("#btnSendMess").removeClass("hidden"), $("#addFile").addClass("hidden")
            }
            checkShowMessTime(e, t) {
               let i = this.processTime(e.createAt),
                  s = (i.day, this.processTime(t.createAt));
               return e.senderID != t.senderID || "notification" == t.messageType || e.senderID == t.senderID && i.minutes != s.minutes
            }
            loadListMess(e, t) {
               let i = "",
                  s = this.processTime();
               for (let l = e.length - 1; l >= 0; l--) {
                  let d = e[l],
                     r = "",
                     c = !1;
                  if ("notification" != d.messageType) {
                     n.listMessages.unshift(d);
                     let h = this.processTime(d.createAt),
                        v = h.day;
                     if (l > 0) {
                        let p = e[l - 1];
                        c = this.checkShowMessTime(d, p)
                     } else v == s.day ? (c = !0, $(".notificationDate.today").remove(), r = this.notificationDate("Today", "today")) : console.log(v, s.day);
                     let g = a.message(d, c);
                     if (d.messageID == t.lastMess && d.senderID != o.userID) {
                        let u = this.getTime(t.time, "seenMessage");
                        g += this.userSeen(t.userName, t.userAvatar, u)
                     }
                     i = (g = r + g) + i
                  }
               }
               a.addMessToList(i)
            }
            messByUser(e, t, i = "text", s, a = [], n = null, o = "", l = [], d) {
               let r, c = d ? this.getTime(t) : "",
                  h = this.getListReaction(),
                  v = this.getListReactedMess(l),
                  p = this.getTime(t, "timeMessDetail");
               if ("text" == i && (r = `<div class="liveChatItem user ${l.length > 0 ? "hasReaction" : ""}" data-id="${s}" data-time="${t}">
                                           <div class="liveChatTime">${c}</div>
                                           <div class="boxChatContent">
                                               <div class="liveChatContent liveChatContext">
                                                   <div class="liveChatContentText">
                                                       ${e.replaceAll("\n", "<br>")}
                                                   </div>
                                                   <div class="detailTime"><span>${p}</span></div>
                                                   ${v}
                                               </div>
                                               ${h}
                                           </div>
                                       </div>`), "sendPhoto" == i && null != a && (r = `<div class="liveChatItem user ${l.length > 0 ? "hasReaction" : ""}" data-id="${s}">
                                           <div class="liveChatTime">${c}</div>
                                           <div class="boxChatContent">
                                               <div class="liveChatContent liveChatContext image">`, a.forEach(e => {
                  var t = void 0 != e.nameDownload ? e.nameDownload : e.NameDownload;
                  r += `<a href="${this.baseurlFileUpload}${t}" target="_blank" rel="nofollow">
                                               <img src="${this.baseurlFileUpload}${t}" onerror='this.onerror=null; let src = this.src; this.src="/>images/user_no.png";setTimeout(()=>{this.src=src},1000)'>
                                           </a>`
               }), r += `
                                                   ${v}
                                               </div>
                                               ${h}
                                           </div>
                                       </div>`), "sendFile" == i && null != a && (r = "", a.forEach(e => {
                  var t = void 0 != e.nameDownload ? e.nameDownload : e.NameDownload,
                     i = void 0 != e.nameDisplay ? e.nameDisplay : e.NameDisplay,
                     a = void 0 != e.fileSizeInByte ? e.fileSizeInByte : e.FileSizeInByte;
                  r += `<div class="liveChatItem user ${l.length > 0 ? "hasReaction" : ""}" data-id="${s}">
                                               <div class="liveChatTime">${c}</div>
                                               <div class="boxChatContent">
                                                   <a rel="nofollow" download href="${this.baseurlFileUpload}${t}">
                                                       <div class="liveChatContent liveChatContext downloadFile">
                                                           <div class="downloadFileHeader">
                                                               <p class="nameFile">${i}</p>
                                                               <p class="sizeFile">${void 0 != a ? a : ""}</p>
                                                               <p class="typeFile">Tệp</p>
                                                           </div>
                                                           <div class="text-center btnDownLoad">Tải xuống</div>
                                                       </div>
                                                   </a>
                                                   ${v}
                                                   ${h}
                                               </div>
                                           </div>`
               })), "link" == i && null != n) {
                  let g = null != n.image ? `<div class="imageLayout"><img src="https://timviec365.vn${n.image}"></div>` : "",
                     u = null != n.description ? n.description : "";
                  r = `<div class="liveChatItem user ${l.length > 0 ? "hasReaction" : ""}" data-id="${s}">
                                           <div class="boxChatContent">
                                               <div class="liveChatContent liveChatContentMessLink">
                                                   <a href="${e}" rel="nofollow" target="_blank">
                                                       ${g}
                                                       <b class="titleLayout">${n.title}</b>
                                                       <div class="descriptionLayout">${u}</div>
                                                       <div class="linkLayout">${n.linkHome}</div>
                                                   </a>
                                               </div>
                                               ${v}
                                               ${h}
                                           </div>
                                       </div>`
               }
               return "" != o && "" != o.messageID && (r = `<div class="liveChatItem user" data-id="${s}" data-time="${t}">
                                           <div class="boxChatContent">
                                               <div class="liveChatContent liveChatContext">
                                                   <div class="boxShowRepMess">
                                                       <img src="https://timviec365.vn/images/livechat/repMess.svg">
                                                       <div class="boxContentRepMess">
                                                           <div class="contentRepMess">${o.message.replaceAll("\n", "<br>")}</div>
                                                           <div class="timeRepMess">L\xfac ${this.getTime(o.createAt, "answer")}</div>
                                                       </div>
                                                   </div>
                                                   <div class="boxContentRoot">${e.replaceAll("\n", "<br>")}</div>
                                               </div>
                                               ${v}
                                               ${h}
                                           </div>
                                       </div>`), r
            }
            messBySwitchboard(e, t, i, s, a = "text", n = [], o = null, l = "", d = [], r) {
               let c = '<div class="liveChatLogo"><div class="SwitchboardLogo"><img src="https://timviec365.vn/timviecejs/images/livechat/w_headphone.svg"></div></div>',
                  h = r ? this.switchboardTime(t, i) : "",
                  v = this.getListReaction("user"),
                  p = this.getListReactedMess(d),
                  g = this.getTime(i, "timeMessDetail"),
                  u = "";
               if ("text" == a && (u = `<div class="liveChatItem support_switchboard ${d.length > 0 ? "hasReaction" : ""}" data-id="${s}" data-time="${i}">
                                           ${c}
                                           <div class="liveChatContent">
                                               <div class="liveChatTime">${h}</div>
                                               <div class="boxContentLiveChat p_relative">
                                                   <div class="liveChatContentMess liveChatContext">
                                                       <div class="liveChatContentText">
                                                           ${e.replaceAll("\n", "<br>")}
                                                       </div>
                                                       <div class="detailTime"><span>${g}</span></div>
                                                       ${p}
                                                       
                                                   </div>
                                                   ${v}
                                               </div>
                                           </div>
                                       </div>`), "sendPhoto" == a && (u = "", u += `<div class="liveChatItem support_switchboard ${d.length > 0 ? "hasReaction" : ""}" data-id="${s}" data-time="${i}">
                                               ${c}
                                               <div class="liveChatContent image">
                                                   <div class="liveChatTime">${h}</div>
                                                   <div class="boxContentLiveChat p_relative">`, n.forEach(e => {
                  var t = void 0 != e.nameDownload ? e.nameDownload : e.NameDownload;
                  u += `<div class="liveChatContentMess image liveChatContext">
                                                   <a target="_blank" rel="nofollow" href="${this.baseurlFileUpload}${t}"><img src="https://timviec365.vn${this.baseurlFileUpload}${t}" onerror='this.onerror=null; let src = this.src; this.src="/>images/user_no.png";setTimeout(()=>{this.src=src},1000)'></a>
                                               </div>`
               }), u += `${p}
                                       
                                       ${v}
                                       </div>
                                   </div>
                               </div>`), "sendFile" == a && (u = "", n.forEach(e => {
                  var t, a = void 0 != e.nameDownload ? e.nameDownload : e.NameDownload;
                  u += `<div class="liveChatItem support_switchboard ${d.length > 0 ? "hasReaction" : ""}" data-id="${s}" data-time="${i}">
                                               ${c}
                                               <div class="liveChatContent">
                                                   <div class="liveChatTime">${h}</div>
                                                   <div class="boxContentLiveChat p_relative">
                                                       <a rel="nofollow" download href="${this.baseurlFileUpload}${a}">
                                                           <div class="liveChatContent downloadFile">
                                                               <div class="downloadFileHeader">
                                                                   <p class="nameFile">${void 0 != e.nameDisplay ? e.nameDisplay : e.NameDisplay}</p>
                                                                   <p class="sizeFile">${void 0 != e.fileSizeInByte ? e.fileSizeInByte : e.FileSizeInByte}</p>
                                                                   <p class="typeFile">Tệp</p>
                                                               </div>
                                                               <div class="text-center btnDownLoad">Tải xuống</div>
                                                           </div>
                                                       </a>
                                                       ${p}
                                                       
                                                       ${v}
                                                   </div>
                                               </div>
                                           </div>`
               })), "link" == a && null != o) {
                  let m = null != o.image ? `<div class="imageLayout"><img src="https://timviec365.vn${o.image}"></div>` : "",
                     C = null != o.description ? o.description : "";
                  u = `<div class="liveChatItem support_switchboard ${d.length > 0 ? "hasReaction" : ""}">
                                           ${c}
                                           <div class="liveChatContent">
                                               <div class="liveChatTime">${h}</div>
                                               <div class="liveChatContentMess liveChatContentMessLink">
                                                   <a href="${e}" rel="nofollow" target="_blank">
                                                       ${m}
                                                       <b class="titleLayout">${o.title}</b>
                                                       <div class="descriptionLayout">${C}</div>
                                                       <div class="linkLayout">${o.linkHome}</div>
                                                   </a>
                                               </div>
                                           </div>
                                       </div>`
               }
               return null != l && "" != l && "" != l.messageID && (u = `<div class="liveChatItem support_switchboard ${d.length > 0 ? "hasReaction" : ""}" data-id="${s}" data-time="${i}">
                                           ${c}
                                           <div class="liveChatContent">
                                               <div class="liveChatTime">${h}</div>
                                               <div class="liveChatContentMess liveChatContext">
                                                   <div class="boxShowRepMess">
                                                       <img src="https://timviec365.vn/timviecejs/images/livechat/repMess.svg">
                                                       <div class="boxContentRepMess">
                                                           <div class="contentRepMess">${l.message.replaceAll("\n", "<br>")}</div>
                                                           <p class="timeRepMess">L\xfac ${this.getTime(l.createAt, "answer")}</p>
                                                       </div>
                                                   </div>
                                                   <div class="boxContentRoot">${e.replaceAll("\n", "<br>")}</div>
                                               </div>
                                           </div>
                                       </div>`), u
            }
            messFilePreview(e, t) {
               let i = "",
                  s, a = this.getListReaction(),
                  o = this.getListReactedMess([]);
               return "sendPhoto" == t ? (i = `<div class="liveChatItem user" data-id="${s = n.getClientMessID()}">
                                           <div class="liveChatTime"></div>
                                           <div class="boxChatContent">
                                               <div class="liveChatContent liveChatContext image">`, e.forEach(e => {
                  i += `<a href="${e.result}"><img src="${e.result}"></a>`
               }), i += `       ${o}
                                               </div>
                                               ${a}
                                           </div>
                                       </div>`) : "sendFile" == t && e.forEach(e => {
                  i += `<div class="liveChatItem user" data-id="${s = n.getClientMessID()}"><a rel="nofollow" download><div class="liveChatContent liveChatContext downloadFile"><div class="downloadFileHeader"><p class="nameFile">${e.name}</p><p class="sizeFile"></p><p class="typeFile">Tệp</p></div><div class="text-center btnDownLoad">Tải xuống</div></div></a></div>`
               }), i
            }
            showPreviewImage(e, t) {
               let i = `<div class="itemPreview"><button data-index="${t}" class="closePreview">X</button><img src="${e.result}"></div>`;
               return i
            }
            showPreviewFile(e) {
               let t = `<div class="itemPreview File"><img src="https://timviec365.vn/timviecejs/images/livechat/icon_file.png"><button data-index="${e}" class="closePreview">X</button></div>`;
               return t
            }
            addMessToList(e, t = "") {
               "" == t ? this.listConversation.prepend(e) : this.listConversation.append(e)
            }
            message(e, t = !1) {
               if (o.conversationID == e.conversationID) {
                  let i;
                  return e.senderID == o.userID ? a.messByUser(e.message, e.createAt, e.messageType, e.messageID, e.listFile, e.infoLink, e.quoteMessage, e.emotionMessage, t) : a.messBySwitchboard(e.message, e.senderName, e.createAt, e.messageID, e.messageType, e.listFile, e.infoLink, e.quoteMessage, e.emotionMessage, t)
               }
            }
            previewFile() {
               $("#boxPreview,#btnSendMess").removeClass("hidden"), $("#addFile").addClass("hidden"), $("div.itemPreview").remove();
               let e = this.tawkChatinputAddFile.prop("files");
               for (var t = 0; t < e.length; t++) {
                  let i = e[t];
                  this.listFile.push(i)
               }
               let s = this.listFile.length,
                  a = this,
                  n = ["image/gif", "image/png", "image/jpg", "image/jpeg", "image/jfif", "image/PNG"];
               for (let o = 0; o < s; o++) {
                  let l = this.listFile[o],
                     d = l.type;
                  if (l.size, l.name, d == n[0] || d == n[1] || d == n[2] || d == n[3] || d == n[4] || d == n[5]) {
                     let r = new FileReader;
                     r.onload = function (e) {
                        let t = a.showPreviewImage(r, o);
                        $("#itemAddNewFile").before(t)
                     }, r.readAsDataURL(l)
                  } else {
                     let c = a.showPreviewFile(o);
                     $("#itemAddNewFile").before(c)
                  }
               }
               this.tawkChatinputAddFile.val("")
            }
            userSeen(e, t, i) {
               return ""
            }
            reset() {
               this.tawkChatInputEditor.val("").attr("rows", 1), n.editMessageID = void 0, o.outTyping(), $("div.itemPreview").remove(), $("#boxPreview,#btnSendMess").addClass("hidden"), $("#addFile").removeClass("hidden"), n.closeRepMess(), this.listFile = []
            }
            boxEndConversation() {
               return '';
               return `<div class="p_relative" id="boxEndConversation"><button id="endConversation"><span class="endConversationLine"></span><span class="endConversationLine"></span><span class="endConversationLine"></span></button><ul id="ulEndConversation"><li><button id="btnEndConversation">Dừng cuộc tr\xf2 chuyện</button></li></ul></div>`
            }
            boxConfirmEndConversation() {
               return `<div id="boxConfirmEndConversation">
                               <div id="mainEndConversation">
                                   <div class="confirmEndConversationHeader">Bạn c\xf3 chắc chắn muốn dừng cuộc tr\xf2 chuyện hỗ trợ?</div>
                                   <div class="divConfirmEndConversation">
                                   <button id="btnCancelConfirmEndConversation">Hủy</button>
                                   <button id="btnAcceptEndConversation">Dừng</button>
                                   </div>
                               </div>
                           </div>`
            }
            processTime(e = null) {
               let t, i, s, a, n, o, l;
               s = null == e ? new Date : new Date(e);
               let d = s.getUTCDate(),
                  r = s.getMonth() + 1,
                  c = s.getFullYear(),
                  h = s.getHours(),
                  v = s.getMinutes(),
                  p = s.getSeconds();
               return t = d < 10 ? "0" + d : d, i = r < 10 ? "0" + r : r, a = h < 10 ? "0" + h : h, n = v < 10 ? "0" + v : v, o = p < 10 ? "0" + p : p, l = h < 12 ? " AM" : " PM", {
                  day: t,
                  month: i,
                  year: c,
                  hours: a,
                  minutes: n,
                  seconds: o,
                  typeTime: l
               }
            }
            getTime(e = null, t = "message") {
               let i = this.processTime(e),
                  s;
               return "message" == t ? s = `${i.hours}:${i.minutes} ${i.typeTime}` : "seenMessage" == t || "answer" == t ? s = `${i.hours}:${i.minutes}:${i.seconds} ng\xe0y ${i.day}/${i.month}/${i.year}` : "timeMessDetail" == t && (s = `${i.hours}:${i.minutes}:${i.seconds} ${i.typeTime}`), s
            }
            removeContext() {
               $(".contextMenu").remove()
            }
            contextMenu(e, t) {
               this.removeContext();
               let i = "";
               "text" == t && (i = `<li class="contextMenu-item"><button class="contextMenu-button contextMenuAnswerMessage">Reply</button></li>
                                          <li class="contextMenu-item"><button class="contextMenu-button contextMenuEditMessage">Edit</button></li>
                                          <li class="contextMenu-item"><button class="contextMenu-button contextMenuCopyMessage">Copy</button></li>`);
               let s = `<ul data-theme="light" class="contextMenu" id="context${e}">
                                           ${i}
                                           <li class="contextMenu-item"><button class="contextMenu-button contextMenuDeleteMessage">Delete</button></li>
                                       </ul>`;
               $("body").append(s)
            }
            contextMenuSwitchBoard(e, t) {
               this.removeContext();
               let i = "";
               "text" == t && (i = `<ul data-theme="light" class="contextMenu" id="context${e}">
                                          <li class="contextMenu-item"><button class="contextMenu-button contextMenuAnswerMessage">Reply</button></li>
                                          <li class="contextMenu-item"><button class="contextMenu-button contextMenuCopyMessage">Copy</button></li>
                                       </ul>`), $("body").append(i)
            }
            createPosition(e, t) {
               let i = $("#context" + t),
                  {
                     clientX: s,
                     clientY: a
                  } = e,
                  n = a + i[0].scrollHeight >= window.innerHeight ? window.innerHeight - i[0].scrollHeight - 20 : a,
                  o = s + i[0].scrollWidth >= window.innerWidth ? window.innerWidth - i[0].scrollWidth - 20 : s;
               i.css({
                  width: i[0].scrollWidth + "px",
                  height: i[0].scrollHeight + "px",
                  top: n + "px",
                  left: o + "px"
               })
            }
            notificationDate(e, t = "") {
               return `<div class="notificationDate ${t}"><span>${e}</span></div>`
            }
            notification10h30pm() {
               return ""
            }
            switchboardTime(e, t) {
               return e + ", " + this.getTime(t)
            }
            dataReaction() {
               return [{
                  key: "1",
                  value: "/images/livechat/icon_like.gif"
               }, {
                  key: "2",
                  value: "/images/livechat/icon_smile.gif"
               }, {
                  key: "3",
                  value: "/images/livechat/icon_heart.gif"
               }, {
                  key: "4",
                  value: "/images/livechat/icon_point.gif"
               }, {
                  key: "5",
                  value: "/images/livechat/icon_think.gif"
               }, {
                  key: "6",
                  value: "/images/livechat/icon_heart_eye.gif"
               }, {
                  key: "7",
                  value: "/images/livechat/icon_promise.gif"
               }, {
                  key: "8",
                  value: "/images/livechat/icon_hi.gif"
               },]
            }
            getListBtnReaction() {
               let e = '<ul class="ulReactionMsg">';
               return this.dataReaction().forEach(t => {
                  e += `<li><button data-type="${t.key}" class="btnReactionMsg"><img src="https://timviec365.vn${t.value}"></button></li>`
               }), e += "</ul>"
            }
            getListReaction(e = "user") {
               let t = `<div class="reactionMsg">
                                   <button data-type="1" class="btnLikeReactionMsg">
                                       <img src="https://timviec365.vn/timviecejs/images/livechat/icon-like-out.svg">
                                   </button>`;
               return "user" == e && (t += this.getListBtnReaction()), t += "</div>"
            }
            getListReactedMess(e) {
               let t, i, s, a, n = '<ul class="listReactedMess">';
               return this.dataReaction().forEach(o => {
                  t = void 0 != (i = e.find(e => e.type == o.key)) ? "active " : "", s = void 0 != i ? i.linkEmotion : o.value, a = void 0 != i ? i.listUserId.length : 0, n += this.btnReactedMess(o.key, s, t, a)
               }), n += "</ul>"
            }
            btnReactedMess(e, t, i, s = 0) {
               if (t.includes('http://210.245.108.202:9002')) {
                  t = t.replace('http://210.245.108.202:9002', 'http://localhost:9020/images');
               }
               console.log(t)
               return `<li>
                               <button class="btnReactedMess ${i}" data-type="${e}">
                                   <img src="${t}">
                                   <span>${s > 1 ? s : ""}</span>
                               </button>
                           </li>`
            }
            baseUrlEmotion(e) {
               return `https://mess.timviec365.vn/Emotion/Emotion${e}.png`
            }
            apiSentMess() {
               return "https://timviec365.vn/livechat/SendMessage.php"
            }
            apiUploadFile() {
               return "https://timviec365.vn/livechat/UploadFile.php"
            }
            apiGetListMessage() {
               return "https://timviec365.vn/livechat/GetListMessage.php"
            }
            apiReadMessage() {
               return "https://timviec365.vn/livechat/ReadMessage.php"
            }
            apiLeaveGroup() {
               return "https://timviec365.vn/livechat/OutGroup.php"
            }
            apiEditMessage() {
               return "https://timviec365.vn/livechat/EditMessage.php"
            }
            apiDeleteMessage() {
               return "https://timviec365.vn/livechat/DeleteMessage.php"
            }
            apiReactionMessage() {
               return "https://timviec365.vn/livechat/SetEmotionMessage.php"
            }
         }
         class i {
            constructor({
               fromWeb: e,
               clientSocket: t
            }) {
               this.socket = this.connect(e, t), this.clientId = a.getClientCodeID(), this.fromWeb = e, this.userID = 59721, this.switchboardID, this.clientName = "Kh\xe1ch h\xe0ng " + e, this.listMember, this.conversationID, this.loginWithIdDevice(), this.browserOnEvents()
            }
            connect(e, t) {
               let i;
               return "work247" == e || "localhost" == e || void 0 == t ? io.connect("wss://socket.timviec365.vn", {
                  secure: !0,
                  enabledTransports: ["https"],
                  transports: ["websocket", "polling"]
               }) : t
            }
            browserOnEvents() {
               this.socket.on("connect", () => {
                  $(".liveChatBody").hasClass("disconnect") && (this.loginWithIdDevice(), $(".liveChatItem").length > 0 && (a.listConversation.empty(), n.init("reload")))
               }), this.socket.on("disconnect", e => {
                  $(".liveChatBody").addClass("disconnect")
               }), this.socket.on("AddNewConversationForClient", (e, t) => {
                  if (a.tawkChatInputEditor.removeClass("newConversation"), this.conversationID = e, this.listMember = t, this.switchboardID = t[1], 0 == $("#boxEndConversation").length) {
                     let i = a.boxEndConversation();
                     $(".liveChatHeaderButton").prepend(i)
                  }
                  n.isTimeShiftOver() || (n.isMissed && (n.isMissed = !1, clearTimeout(n.runSendMissedMessage)), n.sendMissedMessage())
               }), this.socket.on("Typing", (e, t, i) => {
                  this.conversationID == t && $("#typing").html(i + " đang nhập...")
               }), this.socket.on("OutTyping", (e, t) => {
                  this.conversationID == t && $("#typing").empty()
               }), this.socket.on("SendMessage", e => {
                  let t = {
                     messageID: e.MessageID,
                     senderID: e.SenderID,
                     messageType: e.MessageType,
                     message: e.Message,
                     conversationID: e.ConversationID,
                     listFile: e.ListFile,
                     createAt: e.CreateAt,
                     senderName: e.SenderName,
                     quoteMessage: {
                        createAt: e.QuoteMessage.CreateAt,
                        message: e.QuoteMessage.Message,
                        messageID: e.QuoteMessage.MessageID,
                        messageType: e.QuoteMessage.MessageType,
                        senderID: e.QuoteMessage.SenderID,
                        senderName: e.QuoteMessage.SenderName
                     },
                     emotionMessage: []
                  };
                  n.listMessages.push(t);
                  let i = !1,
                     s = n.listMessages.length,
                     l = n.listMessages[s - 1],
                     d = a.getTime(e.CreateAt, "timeMessDetail"),
                     r = {};
                  if (null != l && (r = a.getTime(l.createAt)), void 0 === l && (l = n.listMessages[0]), e.ConversationID == this.conversationID && e.SenderID == this.userID) {
                     let c = a.getTime(e.CreateAt),
                        h = n.getLiveChatItemByID(e.MessageID);
                     h.attr("data-time", e.CreateAt), h.find(".detailTime span").html(d), (r.minutes != d.minutes || l.senderID != o.userID) && h.find(".liveChatTime").html(c)
                  }
                  if (e.ConversationID == this.conversationID && (e.SenderID != this.userID || "sendFile" == e.MessageType || "link" == e.MessageType)) {
                     $(".boxSeen").remove();
                     let v = null;
                     "link" == e.MessageType && null != e.InfoLink && (v = {
                        description: e.InfoLink.Description,
                        haveImage: e.InfoLink.HaveImage,
                        image: e.InfoLink.Image,
                        isNotification: e.InfoLink.IsNotification,
                        linkHome: e.InfoLink.LinkHome,
                        messageID: e.InfoLink.MessageID,
                        title: e.InfoLink.Title,
                        typeLink: e.InfoLink.TypeLink
                     }), t.infoLink = v, r.minutes != d.minutes && (i = !0), i = a.checkShowMessTime(t, l);
                     let p = a.message(t, i);
                     if (a.addMessToList(p, "append"), a.listConversation.animate({
                        scrollTop: a.listConversation.get(0).scrollHeight
                     }, 0), e.SenderID != this.userID && !0 == n.isMissed && (n.isMissed = !1, clearTimeout(n.runSendMissedMessage)), !$(".widget").hasClass("active") || !a.tawkChatInputEditor.is(":focus")) {
                        let g = $(".talk_button"),
                           u = g.attr("data-unread");
                        u = void 0 == u ? 1 : parseInt(u) + 1, g.addClass("unreader").attr("data-unread", u)
                     }
                     $(".widget").hasClass("active") && n.isTabActive || n.callNotification(e.SenderName, e.SenderAvatar, e.MessageType, e.Message)
                  }
               }), this.socket.on("DeleteConversation", e => {
                  void 0 != this.conversationID && this.conversationID == e && (localStorage.removeItem("_DEVICEID_"), location.reload())
               }), this.socket.on("ReadMessage", e => {
                  if ($(".boxSeen").remove(), void 0 != e.userName && void 0 != e.avatarName && void 0 != e.timeSeener) {
                     let t = a.userSeen(e.userName, e.avatarName, a.getTime(e.timeSeener, "seenMessage"));
                     $(".liveChatItem").last().after(t)
                  }
                  a.listConversation.animate({
                     scrollTop: a.listConversation.get(0).scrollHeight
                  }, 0)
               }), this.socket.on("EditMessage", (e, t, i) => {
                  let s = n.getLiveChatItemByID(t);
                  0 == s.find(".boxShowRepMess").length ? s.find(".liveChatContentMess").html(i.replaceAll("\n", "<br>")) : s.find(".boxContentRoot").html(i.replaceAll("\n", "<br>"))
               }), this.socket.on("DeleteMessage", (e, t) => {
                  n.getLiveChatItemByID(t).remove()
               }), this.socket.on("EmotionMessage", (e, t, i, s, a) => {
                  void 0 != this.conversationID && this.conversationID == i && n.reactionMessage(t, s, a, e)
               })
            }
            loginWithIdDevice() {
               this.socket.emit("LoginWithIdDevice", this.clientId, this.fromWeb)
            }
            typing() {
               void 0 != this.conversationID && void 0 != this.switchboardID && this.socket.emit("Typing", this.userID, this.conversationID, [this.switchboardID], this.clientName)
            }
            outTyping() {
               void 0 != this.conversationID && void 0 != this.switchboardID && this.socket.emit("OutTyping", this.userID, this.conversationID, [this.switchboardID], this.clientName)
            }
            leaveGroup(e) {
               void 0 != this.conversationID && this.socket.emit("OutGroup", this.conversationID, e, -1, this.listMember)
            }
            editMessage(e, t) {
               let i = {
                  ConversationID: this.conversationID,
                  MessageID: e,
                  Message: t
               };
               this.socket.emit("EditMessage", i, [this.clientId, this.switchboardID])
            }
            deleteMessage(e) {
               let t = {
                  ConversationID: this.conversationID,
                  MessageID: e
               };
               this.socket.emit("DeleteMessage", t, [this.clientId, this.switchboardID])
            }
            readMessage() {
               void 0 != this.switchboardID && void 0 != this.conversationID && this.socket.emit("ReadMessage", this.userID, this.conversationID, [this.switchboardID], [this.clientId, this.switchboardID])
            }
            reactionMessage(e, t, i, s, a, n) {
               this.socket.emit("EmotionMessage", this.userID, e, this.conversationID, t, i, this.listMember, s, a, n)
            }
         }
         class s {
            constructor() {
               this.isMissed, this.missedMessage, this.listFileMissed = [], this.timeOutMissed = 3e4, this.clientMessID = 0, this.runSendMissedMessage, this.isTabActive, this.hasMessage = !0, this.editMessageID, this.dataAnswer, this.page, this.listMessages = [], this.isCheckedReaction
            }
            callAjax(e, t, i = null, s = null, a = !1, n = "POST") {
               $.ajax({
                  type: n,
                  url: e,
                  data: t,
                  async: a,
                  dataType: "json",
                  beforeSend: i,
                  success: function (e) {
                     null != s && s(e)
                  }
               })
            }
            getEmployeeID() {
               return o.listMember.find(function (e) {
                  return e != o.userID
               })
            }
            getLiveChatItemByID(e) {
               return $(".liveChatItem[data-id=" + e + "]")
            }
            getIDContextMenu(e) {
               return $(e).parents(".contextMenu").attr("id").replace("context", "")
            }
            updateUnread() {
               if ($(".talk_button").hasClass("unreader")) {
                  $(".talk_button").removeClass("unreader").removeAttr("data-unread");
                  let e = {
                     senderId: o.userID,
                     conversationId: o.conversationID
                  },
                     t = function (e) {
                        null != e.data && o.readMessage()
                     };
                  this.callAjax(a.apiReadMessage(), e, null, t)
               }
            }
            loadListMessages(e = "loadNew", t = 0) {
               if (this.isTimeShiftOver() && this.showNoticeShiftOver(), "reload" == e && (t = 0), !0 == this.hasMessage || "reload" == e) {
                  let i = {
                     clientId: o.clientId,
                     fromWeb: o.fromWeb,
                     countMess: t,
                     countLoad: 30
                  },
                     s = this;
                  $.ajax({
                     type: "POST",
                     url: a.apiGetListMessage(),
                     data: i,
                     dataType: "json",
                     beforeSend: function () {
                        "loadNew" == e && a.listConversation.append('<div id="waiting"><p class="loading">Loading</p></div>')
                     },
                     success: function (i) {
                        if ("" != i) {
                           $("#waiting").remove(), a.tawkChatInputEditor.removeAttr("disabled");
                           let l = i.data;
                           if (null == l) a.tawkChatInputEditor.addClass("newConversation");
                           else {
                              if ("reload" == e && (n.page = void 0), 1 == l.listMember.length && a.tawkChatInputEditor.addClass("newConversation"), 0 == t) {
                                 if (o.conversationID = l.conversationId, o.listMember = l.listMember, o.switchboardID = s.getEmployeeID(), l.listMember.length > 1 && 0 == $("#boxEndConversation").length) {
                                    let d = a.boxEndConversation();
                                    $(".liveChatHeaderButton").prepend(d)
                                 }
                                 let r = l.unReader;
                                 r > 0 && $(".talk_button").addClass("unreader").attr("data-unread", r)
                              } else l.listMessages.length > 0 && t > 0 ? a.listConversation.animate({
                                 scrollTop: 200
                              }, 0) : 0 == l.listMessages.length && (s.hasMessage = !1);
                              let c = {
                                 lastMess: l.messageId,
                                 userName: l.nameLastSeener,
                                 userAvatar: l.avatarLastSeener,
                                 time: l.timeLastSeener
                              };
                              a.loadListMess(l.listMessages, c), 0 == t && a.listConversation.animate({
                                 scrollTop: a.listConversation.get(0).scrollHeight
                              }, 0)
                           }
                        } else location.reload()
                     },
                     error: function () {
                        $("#waiting").remove()
                     }
                  })
               }
            }
            rowMessInput(e) {
               let t = e.split("\n"),
                  i = t.length;
               a.tawkChatInputEditor.attr("rows", i)
            }
            sendMessToGroup(e, t = "normal") {
               let i = a.getConversationGroupID();
               o.conversationID = i;
               let s = {
                  LiveChat: {
                     ClientId: o.clientId,
                     ClientName: `Kh\xe1ch h\xe0ng ${hostname}`,
                     FromWeb: o.fromWeb
                  },
                  InfoSupport: {
                     Title: "Hỗ trợ",
                     Message: `Xin ch\xe0o, ID: ${o.clientId}, website: ${hostname}, t\xf4i cần bạn hỗ trợ!`
                  }
               };
               "missed" == t && (s.InfoSupport.Title = "Missed messages", s.InfoSupport.Status = 2, s.InfoSupport.UserId = this.getEmployeeID()), this.sendMessage(i, e, s)
            }
            sendMessage(e, t, i = null) {
               if (a.listFile.length > 0 || this.listFileMissed.length > 0) {
                  let s = [],
                     l = new FormData,
                     d, r, c = [],
                     h = ["image/gif", "image/png", "image/jpg", "image/jpeg", "image/jfif", "image/PNG"];
                  for (let v = 0; v < a.listFile.length; v++) {
                     let p = a.listFile[v],
                        g = p.name,
                        u = p.size,
                        m = p.type;
                     if (l.append("file[]", p), m == h[0] || m == h[1] || m == h[2] || m == h[3] || m == h[4] || m == h[5]) {
                        var C = new FileReader;
                        r = "sendPhoto", C.onload = async function (e) {
                           var t = new Image;
                           t.src = e.target.result, t.onload = function () {
                              var e = this.height;
                              d = {
                                 TypeFile: "sendPhoto",
                                 SizeFile: u,
                                 Width: this.width,
                                 Height: e
                              }, s.push(d)
                           }
                        }, C.readAsDataURL(p), c.push(C)
                     } else r = "sendFile", d = {
                        TypeFile: "sendFile",
                        SizeFile: u,
                        NameDisplay: g
                     }, s.push(d)
                  }
                  setTimeout(() => {
                     let t = a.messFilePreview(c, r);
                     a.listConversation.append(t).animate({
                        scrollTop: a.listConversation.get(0).scrollHeight
                     }, 0), this.sendFileToChat(l, e, r, s, i)
                  }, 1e3)
               }
               if ("" != t) {
                  let _ = {
                     ConversationID: e,
                     SenderID: o.userID,
                     MessageType: "text",
                     Message: t
                  },
                     M, f = this;
                  null != i && (_.LiveChat = JSON.stringify(i.LiveChat), _.InfoSupport = JSON.stringify(i.InfoSupport)), void 0 != this.dataAnswer && (_.Quote = JSON.stringify(this.dataAnswer), M = {
                     messageID: this.dataAnswer.MessageID,
                     senderID: o.userID,
                     senderName: "Customer Support",
                     createAt: this.dataAnswer.CreateAt,
                     messageType: "text",
                     message: this.dataAnswer.Message
                  });
                  let I = function () {
                     if (null == i || null != i && !i.InfoSupport.hasOwnProperty("Status")) {
                        let e = a.getTime(),
                           s = f.getClientMessID(),
                           n = a.messByUser(t, e, "text", s, [], null, M);
                        a.listConversation.append(n).animate({
                           scrollTop: a.listConversation.get(0).scrollHeight
                        }, 0)
                     }
                  },
                     b = function (e) {
                        f.updateliveChatItemID(e.data.messageId)
                     };
                  n.callAjax(a.apiSentMess(), _, I, b)
               }
            }
            sendFileToChat(e, t, i, s, n = null) {
               let l = this;
               $.ajax({
                  url: a.apiUploadFile(),
                  type: "POST",
                  contentType: !1,
                  cache: !1,
                  processData: !1,
                  data: e,
                  dataType: "JSON",
                  async: !1,
                  success: function (e) {
                     let d = e.data.listNameFile;
                     for (let r = 0; r < d.length; r++) s[r].FullName = d[r];
                     let c = {
                        ConversationID: t,
                        SenderID: o.userID,
                        MessageType: i,
                        Message: "a",
                        File: JSON.stringify(s)
                     };
                     null != n && (c.LiveChat = JSON.stringify(n.LiveChat), c.InfoSupport = JSON.stringify(n.InfoSupport));
                     let h = function (e) {
                        l.updateliveChatItemID(e.data.messageId)
                     };
                     l.callAjax(a.apiSentMess(), c, null, h)
                  }
               })
            }
            editMessage(e, t) {
               let i = {
                  MessageID: e,
                  Message: t,
                  ConversationID: o.conversationID
               },
                  s = this,
                  n = function (i) {
                     let a = s.getLiveChatItemByID(e);
                     0 == a.find(".boxShowRepMess").length ? a.find(".liveChatContentText").html(t.replaceAll("\n", "<br>")) : a.find(".boxContentRoot").html(t.replaceAll("\n", "<br>")), o.editMessage(e, t)
                  };
               this.callAjax(a.apiEditMessage(), i, n)
            }
            sendMessToChat() {
               !this.isTimeShiftOver() && $(".notification10h30pm").length && $(".notification10h30pm").remove();
               let e = a.tawkChatInputEditor.val().trim();
               a.tawkChatInputEditor.hasClass("newConversation") ? (this.sendMessToGroup(e), this.missedMessage = e) : void 0 != this.editMessageID ? this.editMessage(this.editMessageID, e) : (this.missedMessage = e, this.listFileMissed = a.listFile, this.sendMessage(o.conversationID, e), this.isTimeShiftOver() || (this.isMissed && (this.isMissed = !1, clearTimeout(this.runSendMissedMessage)), this.sendMissedMessage())), a.reset()
            }
            showBoxConfirmEndConversation() {
               $("#endConversation").removeClass("active"), $("#ulEndConversation").hide();
               let e = a.boxConfirmEndConversation();
               a.liveChatMain.append(e)
            }
            removeConfirmEndConversation(e) {
               $("#boxConfirmEndConversation").remove()
            }
            leaveGroup(e, t, i = "userLeave") {
               this.callAjax(a.apiLeaveGroup(), {
                  conversationId: o.conversationID,
                  senderId: e,
                  adminId: t
               }), o.leaveGroup(e), this.callAjax(a.apiSentMess(), {
                  ConversationID: o.conversationID,
                  SenderID: e,
                  MessageType: "notification",
                  Message: e + " leaved this consersation"
               }), a.tawkChatInputEditor.addClass("newConversation"), "userLeave" == i && (o.conversationID, o.listMember, o.switchboardID = void 0, $("#boxEndConversation").remove(), this.removeConfirmEndConversation(), a.listConversation.empty(), a.reset())
            }
            sendMissedMessage() {
               void 0 != o.conversationID && void 0 != o.listMember && (this.isMissed = !0, this.runSendMissedMessage = setTimeout(() => {
                  if (this.isMissed) {
                     let e = n.getEmployeeID(),
                        t = o.userID;
                     this.leaveGroup(e, t, "switchboardLeave"), this.sendMessToGroup(this.missedMessage, "missed")
                  }
               }, n.timeOutMissed))
            }
            deleteMessage(e) {
               let t = this,
                  i = function () {
                     t.getLiveChatItemByID(e).remove(), o.deleteMessage(e)
                  };
               this.callAjax(a.apiDeleteMessage(), {
                  MessageID: e
               }, i)
            }
            callNotification(e, t, i, s) {
               "granted" === Notification.permission ? this.notificationMessage(e, t, i, s) : "denied" !== Notification.permission && Notification.requestPermission().then(a => {
                  "granted" === a && this.notificationMessage(e, t, i, s)
               })
            }
            notificationMessage(e, t, i, s) {
               let n = e;
               if ("text" == i ? n += ": " + s : "sendPhoto" == i ? n += ": Photo sent." : "sendFile" == i && (n += ": File sent."), n != e) {
                  let o = new Notification(e, {
                     body: n,
                     icon: t
                  });
                  o.onclick = e => {
                     window.focus(), $(".widget").hasClass("active") || ($(".talk_button").click(), a.tawkChatInputEditor.focus())
                  }
               }
            }
            getClientMessID() {
               return "loadingClientMessID"
            }
            updateliveChatItemID(e) {
               this.getLiveChatItemByID("loadingClientMessID").attr("data-id", e)
            }
            closeRepMess() {
               $("#boxRepMess").removeClass("active").hide().find("#contentRepMess,#timeRepMess").empty(), this.dataAnswer = void 0
            }
            getTextInLiveChatItem(e) {
               let t;
               return e.hasClass("user"), t = 0 == e.find(".boxShowRepMess").length ? e.find(".liveChatContentText").html().trim() : e.find(".boxContentRoot").html().trim()
            }
            coppyText(e) {
               var t = '<textarea id="aux">' + e.replaceAll("<br>", "\n") + "</textarea>";
               $("body").append(t), $("#aux").select(), document.execCommand("copy"), $("#aux").remove()
            }
            isTimeShiftOver() {
               let e = new Date,
                  t = e.getHours(),
                  i = e.getMinutes();
               return 22 == t && !!(i > 30) || !!(t > 22) || !!(t < 8)
            }
            showNoticeShiftOver() {
               $(".notification10h30pm").remove(), a.listConversation.append(a.notification10h30pm())
            }
            getItemMessage(e) {
               return this.listMessages.find(t => t.messageID == e)
            }
            reactionMessage(e, t, i, s, a = "list") {
               let n = this.getItemMessage(e),
                  o = n.emotionMessage,
                  l = $('.liveChatItem[data-id="' + e + '"]').find('.btnReactedMess[data-type="' + t + '"]');
               if (s = s.toString(), 0 == o.length || void 0 == n.emotionMessage.find(e => e.type == t)) l.addClass("active").find("img").attr("src", i), o.push({
                  isChecked: !1,
                  linkEmotion: i,
                  listUserId: [s],
                  type: t
               }), this.isCheckedReaction = !1;
               else {
                  let d = o.find(e => e.type == t).listUserId,
                     r = d.indexOf(s);
                  if (-1 == r) l.find("span").html(2), d.push(s), this.isCheckedReaction = !1;
                  else if (-1 != r && d.length > 1) l.find("span").empty(), d.splice(r, 1), this.isCheckedReaction = !0;
                  else {
                     let c = o.map(e => e.type).indexOf(t);
                     o.splice(c, 1), l.removeClass("active"), this.isCheckedReaction = !0
                  }
               }
               0 == $('.liveChatItem[data-id="' + e + '"]').find(".btnReactedMess.active").length ? $('.liveChatItem[data-id="' + e + '"]').removeClass("hasReaction") : $('.liveChatItem[data-id="' + e + '"]').addClass("hasReaction")
            }
            init(e = "loadNew") {
               this.loadListMessages(e)
            }
         }
         let a = new t,
            n = new s,
            o = new i({
               fromWeb: e,
               clientSocket: socket
            });
         var l = !1,
            d = $("#liveChatContainer"),
            r = 0;
         $(document).on('click', '.talk_button', function () {
            a.changeBody("show"), n.updateUnread(), a.tawkChatInputEditor.focus(), $(this).hasClass("connected") || ($(this).addClass("connected"), n.init())
         }), $("#liveChatClose").click(function () {
            a.changeBody("hide")
         }), $("#addFile,#itemAddNewFile").click(function () {
            a.tawkChatinputAddFile.click()
         }), a.tawkChatinputAddFile.change(function () {
            a.previewFile()
         }), a.tawkChatInputEditor.focus(function () {
            n.updateUnread()
         }).keydown(function (e) {
            let t = $(this),
               i = t.val().trim(),
               s = i.split("\n");
            s.length;
            let o = a.listFile,
               l = parseInt(t.attr("rows"));
            if (13 == e.keyCode && !e.shiftKey && ("" != i || o.length > 0)) return e.stopPropagation(), n.sendMessToChat(), !1;
            13 == e.keyCode && e.shiftKey && l < 10 && t.attr("rows", l + 1)
         }).bind("paste", function (e) {
            let t = $(this),
               i = t.val().trim();
            n.rowMessInput(i);
            var s = (e.clipboardData || e.originalEvent.clipboardData).items;
            for (var o in s) {
               var l = s[o];
               if ("file" === l.kind) {
                  var d = l.getAsFile();
                  new FileReader().readAsDataURL(d), a.listFile.push(d)
               }
            }
            a.listFile.length > 0 && a.previewFile()
         }).keyup(function (e) {
            let t = $(this),
               i = t.val().trim(),
               s = i.split("\n"),
               n = s.length,
               l = a.listFile,
               d = parseInt(t.attr("rows"));
            "" != i || l.length > 0 ? (a.showBtnSendMessage(), 1 == i.length ? o.typing() : 0 == i.length && o.outTyping()) : a.reset(), 8 == e.keyCode && (n > 1 && t.attr("rows", d - 1), ("" == i || 1 == n) && (t.empty().attr("rows", 1), "" == i && o.outTyping()))
         }), a.listConversation.scroll(function () {
            let e = $(this),
               t = e.scrollTop();
            0 == t && (void 0 == n.page ? n.page = 1 : n.page++, n.loadListMessages("loadNew", n.page))
         }), $("#btnSendMess").click(function () {
            n.sendMessToChat()
         }), $(document).click(function (e) {
            a.removeContext()
         }).on("click", ".closePreview", function () {
            let e = $(this),
               t = e.attr("data-index");
            e.parent().remove(), a.listFile.splice(t, 1), a.previewFile(), 0 == $("div.itemPreview").length && $("#boxPreview").addClass("hidden")
         }).on("click", "#endConversation", function () {
            let e = $(this);
            e.hasClass("active") ? e.removeClass("active").next().hide() : e.addClass("active").next().css("display", "flex")
         }).on("click", "#btnEndConversation", function () {
            n.showBoxConfirmEndConversation()
         }).on("click", "#btnCancelConfirmEndConversation", function () {
            n.removeConfirmEndConversation()
         }).on("click", "#btnAcceptEndConversation", function () {
            let e = o.userID,
               t = n.getEmployeeID();
            n.leaveGroup(e, t)
         }).on("contextmenu", ".liveChatContext", function (e) {
            let t = $(this),
               i = t.parents(".liveChatItem"),
               s = i.attr("data-id"),
               n = "text";
            return (t.hasClass("image") || t.hasClass("downloadFile")) && (n = "notText"), i.hasClass("user") ? a.contextMenu(s, n) : a.contextMenuSwitchBoard(s, n), a.createPosition(e, s), !1
         }).on("click", ".contextMenuEditMessage", function () {
            n.closeRepMess();
            let e = n.getIDContextMenu(this),
               t = n.getLiveChatItemByID(e),
               i = n.getTextInLiveChatItem(t).replaceAll("<br>", "\n");
            n.rowMessInput(i), a.tawkChatInputEditor.val(i), n.editMessageID = e
         }).on("click", ".contextMenuDeleteMessage", function () {
            if (confirm("Are you sure you want to delete this message ?")) {
               let e = n.getIDContextMenu(this);
               n.deleteMessage(e)
            }
         }).on("click", ".contextMenuAnswerMessage", function () {
            let e = n.getIDContextMenu(this),
               t = n.getLiveChatItemByID(e),
               i = t.attr("data-time"),
               s = "L\xfac  " + a.getTime(i, "answer"),
               l = n.getTextInLiveChatItem(t);
            n.dataAnswer = {
               MessageID: e,
               SenderID: o.userID,
               SenderName: "Hỗ trợ kh\xe1ch h\xe0ng",
               CreateAt: i,
               MessageType: "text",
               Message: l
            }, $("#contentRepMess").html(l), $("#timeRepMess").html(s), $("#boxRepMess").addClass("active").show(), a.tawkChatInputEditor.focus(), a.showBtnSendMessage()
         }).on("click", "#closeRepMess", function () {
            n.closeRepMess()
         }).on("click", ".contextMenuCopyMessage", function () {
            let e = n.getIDContextMenu(this),
               t = n.getLiveChatItemByID(e),
               i = n.getTextInLiveChatItem(t);
            n.coppyText(i)
         }).on("mousemove", function (e) {
            if (l) {
               var t = d.width() - (e.clientX - d.offset().left);
               a.liveChatMain.css("width", t)
            }
         }).on("mouseup", function (e) {
            l = !1
         }).on("click", ".btnReactionMsg,.btnLikeReactionMsg", function () {
            console.log('anhlinhdzzz')
            let e = $(this),
               t = e.parents(".liveChatItem"),
               i = t.attr("data-id"),
               s = parseInt(e.attr("data-type")),
               l = a.baseUrlEmotion(s);
            n.reactionMessage(i, s, l, o.userID);
            let d = n.getItemMessage(i),
               r = d.messageType,
               c = d.message,
               h = void 0 != d.emotionMessage.find(e => e.type == s) ? d.emotionMessage.find(e => e.type == s).listUserId : [],
               v = n.isCheckedReaction;
            o.reactionMessage(i, s, l, v, r, c), n.callAjax(a.apiReactionMessage(), {
               MessageId: i,
               ListUserId: h.join(),
               Type: s
            }, null, null, !0)
         }), $(window).blur(function () {
            a.removeContext(), n.isTabActive = !1
         }).focus(function () {
            n.isTabActive = !0
         }), $("#drag").on("mousedown", function (e) {
            l = !0, r = e.clientX
         })
      }
   }, 500);

   var isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
         return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
      },
   }

   function get_Cookie_c(cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
         var c = ca[i]
         while (c.charAt(0) == ' ') {
            c = c.substring(1)
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
         }
      }
      return ''
   }

   function openQrChat() {
      let chat365_id_usc = 56387;
      let id_chat365_general = get_Cookie_c('id_chat365')
      let link_qr = `https://appchat365.timviec365.vn?apn=vn.timviec365.chat_365&ibi=vn.timviec365.chat365&isi=1623353330&link=https://chat365.timviec365.vn?userId=${btoa(id_chat365_general)}%26contactId=${btoa(chat365_id_usc)}%26type365=1`;
      link_qr += `&efr=1`;
      if (isMobile.any()) {
         window.open(link_qr);
      } else {
         $('#img_qr_chat').html('');
         let qr_box = $('#img_qr_chat')[0];
         var QR_CODE = new QRCode(qr_box, {
            width: 390,
            height: 390,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L,
         });
         QR_CODE.makeCode(link_qr);
         $('#box_qr_chat').show();
      }

   }
   $(document).on('click', '#box_qr_chat', function () {
      $('#box_qr_chat').hide();
   })
   // }, 1000);
})
