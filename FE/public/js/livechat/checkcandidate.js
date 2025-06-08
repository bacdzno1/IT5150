
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
let cate = "";
let city = "";
let sentence = "Xin chào tôi thấy bạn đang tìm kiếm việc làm, tôi có thể giúp gì cho bạn ?";
let sentence2 = `Bạn đang tìm việc làm à?`;
let nameUser = ""
let id_ungvien = ""
//! Here
const tokenName = "accessToken"
const roleName = "type"
const takeData = async () => {
    try {
        //! Here
        let infor = getCookie("infor");
        if (infor) {
            infor = JSON.parse(decodeURIComponent(infor));
            id_ungvien = infor.use_id
        }
        console.log(infor);
        console.log(infor.use_first_name.trim())
        console.log(infor.use_first_name.trim().split(" ")[infor.use_first_name.trim().split(" ").length - 1])
        //! Here
        const response = await fetch("http://localhost:3052/api/topcv1s/candidate/takeInforCan", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookie(tokenName)}`, // Add Bearer token
                // No need to set 'Content-Type' for FormData, it will be set automatically
            },
            body: {}
        });
        const data = await response.json();
        cate = String(data.cate);
        city = String(data.city);
        nameUser = infor.use_first_name;
        if (cate && city) {
            //! Here
            sentence = `Xin chào ${infor.use_first_name}, TopCv1s.com có thể giúp gì cho bạn ?`
            sentence2 = `Bạn đang tìm việc làm ${cate} tại ${city} à?`
            if (infor && infor.use_first_name) {
                sentence2 = `${infor.use_first_name.trim().split(" ")[infor.use_first_name.trim().split(" ").length - 1]} đang tìm việc làm ${cate} tại ${city} à?`;
                sentence = sentence2
            }
        };
    }
    catch (e) {
        console.log("error takeData ...", e)
    }
}

const Main = async () => {

    // Example usage
    //! Here
    const token_base365 = getCookie(tokenName);
    console.log(token_base365);
    const role = getCookie(roleName);
    console.log(role);
    if ((typeof token_base365 != "undefined") && (typeof role != "undefined") && (Number(role) == 2)) {
        await takeData();
        console.log("Thêm thẻ livechat");
        const script = document.createElement('script');
        script.src = "https://timviec365.vn/timviecejs/livechatai/app.js"
        document.head.append(script);
    }
}
Main()