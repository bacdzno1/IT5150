
import * as functions from '../services/functions.js';
import * as fs from 'node:fs';
import UserCompany from '../models/user/UserCompany.js';
import Users from '../models/user/Users.js';
import UserCvUpload from '../models/user/UserCvUpload.js';
import TblPointCompany from '../models/tbl/TblPointCompany.js';
import HistoryCountOtp from '../models/history/HistoryCountOtp.js';
import "dotenv/config";
import SaveCandidateCv from '../models/save/SaveCandidateCv.js';
import UserTempNoAuth from '../models/user/UserTempNoAuth.js';
import UserVidUpload from '../models/user/UserVidUpload.js';
import TblCvPreview from '../models/tbl/TblCvPreview.js';
import SampleCv from '../models/sample/SampleCv.js';
import jwt from 'jsonwebtoken';
import New from '../models/new/New.js';
import NewGhimTin from '../models/new/NewGhimTin.js';
import NopHoSo from '../models/NopHoSo.js';
import TblLuuHoSoUv from '../models/tbl/TblLuuHoSoUv.js';
import ConfigFireBaseOTP from '../models/user/ConfigFireBaseOTP.js';
import cron from 'node-cron'

// Thiết lập cron job để reset `count` về 0 vào lúc 00:00 mỗi ngày
cron.schedule('0 0 * * *', async () => {
    try {
        await ConfigFireBaseOTP.updateMany({}, { $set: { count: 0 } });
        console.log("Đã reset giá trị count về 0 cho tất cả các bản ghi");
    } catch (error) {
        console.error("Có lỗi xảy ra khi reset giá trị count:", error);
    }
});

// Hàm đăng kí tài khoản nhà tuyển dụng khi vượt qua validate
const EmployersValidateSuccess = async (data, file) => {
    try {
        const { phoneTK, email, password, nameCompany, city, district, phone } = data;
        const image = [];
        let logo = '';
        const time = functions.getTime();
        if (file && file.Image) {
            if (Array.isArray(file.Image)) {
                for (let i = 0; i < file.Image.length; i++) {
                    const element = file.Image[i];
                    const date = functions.getDate();
                    if (i === 0) {
                        const checkUpload = await functions.uploadFile(`${date}`, element, time);
                        if (!checkUpload) return false;
                        logo = checkUpload;
                    }
                    const checkUpload = await functions.uploadFile(`images_company/${date}`, element, time);
                    if (!checkUpload) return false;
                    image.push(`${date}/${checkUpload}`);
                }
            } else return false;
        }

        const hashedPassword = functions.createMd5(password);
        const alias = functions.createLinkTilte(nameCompany.trim());
        const otp = functions.randomNumber();
        const dataUpdate = {
            'usc_phone_tk': phoneTK,
            'usc_email': email,
            'usc_name': '',
            'usc_name_add': '',
            'usc_name_phone': phone,
            'usc_name_email': email,
            'usc_pass': hashedPassword,
            'usc_company': nameCompany.trim(),
            'usc_alias': alias,
            'usc_address': "",
            'usc_phone': phone,
            'usc_logo': logo,
            'usc_size': '',
            'DateOfIncorporation': "",
            'usc_website': '',
            'usc_city': city,
            'usc_district': district,
            'usc_create_time': time,
            'usc_update_time': time,
            'usc_mst': "",
            'usc_authentic': '1',
            'usc_otp': otp,
            'usc_company_info': '',
            'image_com': image.join(','),
            'usc_boss': '',
            'financial_sector': [{ id: '' }],
        };

        const check = await UserCompany.findOneAndUpdate({ usc_phone_tk: phoneTK }, { usc_id: 1 }).lean();
        if (check) {
            await UserCompany.findOneAndUpdate({ usc_phone_tk: phoneTK }, dataUpdate);
        } else {
            var maxid1 = await functions.getMaxId(UserCompany, 'usc_id');
            dataUpdate.usc_id = maxid1;
            await UserCompany.create(dataUpdate);

            let id_up = await functions.getMaxId(TblPointCompany, 'id_up');
            // Thu dọn nếu tk mới trùng id với tk cũ bị xóa 
            await TblPointCompany.deleteMany({
                usc_id: maxid1
            })
            const listNewId = await New.distinct('new_id', { new_user_id: maxid1 })
            if (listNewId.length > 0) {
                await New.deleteMany({ new_id: { $in: listNewId } })
                await NewGhimTin.deleteMany({ new_id: { $in: listNewId } })
            }
            await NopHoSo.deleteMany({ nhs_com_id: maxid1 })
            await TblLuuHoSoUv.deleteMany({ id_ntd: maxid1 })
            // Hết thu dọn 

            await TblPointCompany.create({
                id_up,
                usc_id: maxid1,
                point: 0,
                point_usc: 0,
                day_reset_point: 0,
                day_end: 0
            });
        }

        return true;
    } catch (error) {
        console.log(error.message)
        return false;
    }
};

// đăng ký nhà tuyển dụng
export const RegisterEmployers = async (req, res, next) => {
    try {
        const phoneTK = req.body.phoneTK;
        const email_notlower = req.body.email;
        const password = req.body.password;
        const rePassword = req.body.rePassword;
        const nameCompany = req.body.nameCompany;
        const city = Number(req.body.city);
        const district = req.body.district;
        const file = req.files;
        const arrMessage = {};
        const email = email_notlower.toLowerCase();
        if (phoneTK && password && rePassword && nameCompany && city) {

            const checkNameCom = await UserCompany.findOne({ usc_company: nameCompany }).lean();
            const checkTrung = await UserCompany.findOne({ usc_phone_tk: phoneTK }).lean();
            const checkmail = await UserCompany.findOne({ usc_email: email }).lean();
            const checkPhoneTK = await functions.checkPhone(phoneTK);
            const checkPassWord = functions.checkPassWord(password);

            if (!checkPhoneTK) return functions.setError(res, 'Nhập số điện thoại không hợp lệ', 400);
            if (checkNameCom) arrMessage.nameCompany = `Tên công ty đã được đăng ký, vui lòng kiểm tra lại.`;
            if (checkTrung) arrMessage.phoneTK = `Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.`;
            if (checkmail) arrMessage.phoneTK = `Email này đã được sử dụng, vui lòng kiểm tra lại.`;
            if (password !== rePassword) arrMessage.password = `Nhập password và re-password không khớp.`;
            if (!checkPassWord) arrMessage.password = `Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.`;

            if (JSON.stringify(arrMessage) !== '{}') {
                return functions.setError(res, arrMessage, 400);
            }
            const checkRegister = await EmployersValidateSuccess(req.body, file);
            if (checkRegister) {
                const checkInfo = await UserCompany.findOne({ usc_phone_tk: phoneTK }, { usc_id: 1, usc_authentic: 1, usc_email: 1, usc_company: 1, usc_logo: 1 }).lean();
                const token = await functions.createToken({ usc_id: checkInfo.usc_id, auth: checkInfo.usc_authentic, type: 1 }, '60d');

                return functions.success(res, 'Register successfully', { token, checkInfo });
            }
            return functions.setError(res, 'Some error occurred', 400);
        }

        return functions.setError(res, "Missing data", 400);
    } catch (error) {
        console.log(error.message);
        return functions.setError(res, error.message);
    }
};

// đăng nhập nhà tuyển dụng
export const Login = async (req, res, next) => {
    try {
        const username = req.body.userName;
        const password = req.body.password;
        const userName = username.toLowerCase();
        if (userName && password) {
            const hashedPassword = functions.createMd5(password);
            const check = await UserCompany.findOne({
                $or: [
                    { usc_email: userName },
                    { usc_phone_tk: userName }
                ],
                usc_pass: hashedPassword
            }, {
                usc_id: 1, usc_phone: 1, usc_phone_tk: 1, usc_email: 1,
                usc_company: 1, usc_city: 1, usc_district: 1, usc_address: 1,
                usc_authentic: 1, usc_logo: 1, usc_alias: 1, usc_create_time: 1
            }).lean();
            if (check) {
                const logo = functions.getAvatarNTD(check.usc_create_time, check.usc_logo);
                await UserCompany.updateOne({ usc_id: check.usc_id }, { usc_time_signin: functions.getTime() });
                const conditionsToken = { usc_id: check.usc_id, phone: check.usc_phone_tk, usc_email: check.usc_email, auth: check.usc_authentic, type: 1, usc_company: check.usc_company, logo };
                const token = await functions.createToken(conditionsToken, '60d');
                const reFreshToken = await functions.createToken(conditionsToken, '1y');
                const time = new Date();
                time.setMinutes(0);
                time.setMilliseconds(0);
                time.setSeconds(0);
                const data = { token, reFreshToken, user: conditionsToken };

                return functions.success(res, 'Đăng nhập thành công', data);
            }
            return functions.setError(res, 'Tài khoản hoặc mật khẩu không chính xác', 400);
        }
        return functions.setError(res, 'Nhập thiếu thông tin tài khoản hoặc mật khẩu', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// !quên mật khẩu nhà tuyển dụng
export const EmployersForgotPass = async (req, res, next) => {
    try {
        const username = req.body.phoneTK;
        const phoneTK = username.toLowerCase();

        if (phoneTK) {
            const checkExists = await UserCompany.findOne({
                $or: [
                    { usc_email: phoneTK },
                    { usc_phone_tk: phoneTK }
                ]
            }, {
                usc_id: 1, usc_company: 1, usc_pass: 1, usc_email: 1,
                usc_phone: 1, usc_city: 1, usc_district: 1, usc_address: 1
            }).lean();
            if (checkExists) {
                const id = checkExists.usc_id;
                let check = '';
                if (id) {
                    check = await UserCompany.findOne({ usc_id: id }).lean();
                    if (check) {
                        delete check.password
                        const conditionsToken = { auth: 1, type: 1, check };
                        conditionsToken.usc_id = id
                        const token = await functions.createToken(conditionsToken, '60d');
                        return functions.success(res, 'Xác nhận tài khoản hợp lệ. Vui lòng nhập mật khẩu mới', { token, data: check, id });
                    }
                    return functions.setError(res, "Tài khoản không tồn tại, vui lòng kiểm tra lại.", 400);
                }
            }
            return functions.setError(res, 'Tài khoản không tồn tại, vui lòng kiểm tra lại.', 400);
        }
        return functions.setError(res, 'Nhập đầy đủ các trường', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// đổi mật khẩu nhà tuyển dụng
export const UpdatePasswordEmployers = async (req, res, next) => {
    try {
        const idNTD = req.idNTD;
        const passwordOld = req.body.passwordOld;
        const password = req.body.password;
        const rePassword = req.body.password;
        const type = Number(req.body.type);
        if (type === 1) {
            if (password && rePassword) {
                const checkPassWord = functions.checkPassWord(password);
                if (checkPassWord) {
                    if (password === rePassword) {
                        const hashedPassword = functions.createMd5(password);
                        const checkUpdate = await UserCompany.findOneAndUpdate({
                            usc_id: idNTD
                        }, { usc_pass: hashedPassword });
                        if (checkUpdate) {
                            return functions.success(res, "Đổi mật khẩu thành công.");
                        }
                        return functions.setError(res, 'Không tìm thấy tài khoản.', 404);
                    }
                    return functions.setError(res, 'Nhập password và re-password không khớp.', 400);
                }
                return functions.setError(res, 'Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.', 400);
            }
            return functions.setError(res, 'Missing data', 400);
        } else {
            if (password && rePassword && idNTD && passwordOld) {
                const hashOldPass = functions.createMd5(passwordOld);
                const checkExists = await UserCompany.findOne({ usc_id: idNTD, usc_pass: hashOldPass }).lean();
                if (checkExists) {
                    const checkPassWord = functions.checkPassWord(password);
                    if (checkPassWord) {
                        if (password === rePassword) {
                            const hashedPassword = functions.createMd5(password);
                            const checkUpdate = await UserCompany.findOneAndUpdate({
                                usc_id: idNTD
                            }, { usc_pass: hashedPassword });
                            if (checkUpdate) {
                                return functions.success(res, "Đổi mật khẩu thành công.");
                            }
                            return functions.setError(res, 'Không tìm thấy tài khoản.', 404);
                        }
                        return functions.setError(res, 'Nhập password và re-password không khớp.', 400);
                    }
                    return functions.setError(res, 'Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.', 400);
                }
                return functions.setError(res, 'Mật khẩu không chính xác', 400);
            }
            return functions.setError(res, 'Missing data', 400);
        }
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// lấy thông tin tài khoản
export const infoNTD = async (req, res, next) => {
    try {
        const idNTD = req.idNTD;
        const data = await UserCompany.findOne({
            usc_id: idNTD
        }, {
            usc_email: 1,
            usc_phone_tk: 1,
            usc_company: 1,
            usc_boss: 1,
            usc_size: 1,
            usc_phone: 1,
            usc_mst: 1,
            financial_sector: 1,
            DateOfIncorporation: 1,
            usc_website: 1,
            usc_city: 1,
            usc_district: 1,
            usc_address: 1,
            usc_company_info: 1,
            image_com: 1,
            usc_name: 1,
            usc_name_add: 1,
            usc_name_phone: 1,
            usc_name_email: 1,
            usc_create_time: 1,
            usc_logo: 1,
        }).lean();
        if (data.DateOfIncorporation != 0) data.DateOfIncorporation = new Date(data.DateOfIncorporation * 1000);
        data.usc_logo = functions.getAvatarNTD(data.usc_create_time, data.usc_logo);
        data.image_com = functions.getImageNTD(data.image_com);
        data.usc_create_time = new Date(data.usc_create_time * 1000);
        const point = await TblPointCompany.findOne({ usc_id: idNTD }, { point_usc: 1 }).lean();
        const endPoint = point ? point.point_usc : 0;
        return functions.success(res, 'get data success', { point: endPoint, data });
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// !cập nhật thông tin (Chưa cập nhật nhà tuyển dụng sang các site khác)
export const UpdateInfoEmployers = async (req, res, next) => {
    try {
        const idNTD = req.idNTD;

        // Tên công ty
        const nameCompany = req.body.nameCompany;

        // Tổng giám đốc
        const usc_boss = req.body.usc_boss;

        // Quy mô công ty
        const quyMo = Number(req.body.quyMo);

        // Số điện thoại cố định
        const phone = req.body.phone;

        // Mã số thuế
        const mst = req.body.mst;

        // Lĩnh vực hoạt động
        const financial_sector = req.body.financial_sector;

        // Ngày thành lập công ty
        const DateOfIncorporation = req.body.DateOfIncorporation;

        // Website
        const website = req.body.website;

        // Thành phố
        const city = req.body.city;

        // Quận huyện
        const district = req.body.district;

        // Địa chỉ
        const address = req.body.address;

        // Giới thiệu về công ty
        const inforCompany = req.body.inforCompany;

        // Image
        const file = req.files;

        // Người liên hệ
        const nameContact = req.body.nameContact;

        // Địa chỉ liên hệ
        const addressContact = req.body.addressContact;

        // Số điện thoại liên hệ
        const phoneContact = req.body.phoneContact;

        // Email liên hệ 
        const emailContact = req.body.emailContact;

        // List link ảnh đã có (gửi lại để kiểm tra xem giữ ảnh nào, xóa ảnh nào)
        const existImage = req.body.existImage;

        if (nameCompany && phone && inforCompany && nameContact && addressContact && phoneContact && emailContact) {
            var messageCheck = '';
            const checkNameCom = await UserCompany.findOne({ usc_company: nameCompany, usc_id: { $ne: idNTD } }).lean();
            const checkTrung = await UserCompany.findOne({ usc_phone: phoneContact, usc_id: { $ne: idNTD } }).lean();
            const checkPhone = await functions.checkPhone(phoneContact);
            const checkEmail = await functions.checkEmail(emailContact);
            const checkAlias = await functions.checkAlias(nameCompany.trim(), idNTD)
            console.log(checkAlias)
            console.log(nameCompany)
            if (!checkEmail) messageCheck = "Nhập email không hợp lệ, vui lòng kiểm tra lại.";
            if (!checkPhone) messageCheck = "Nhập số điện thoại không hợp lệ, vui lòng kiểm tra lại.";
            if (checkNameCom) messageCheck = "Tên công ty đã được đăng ký, vui lòng kiểm tra lại.";
            if (checkTrung) messageCheck = "Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.";
            if (checkAlias) messageCheck = `Tên công ty bị trùng với ${checkAlias}. Vui lòng kiểm tra lại.`;
            if (messageCheck !== '') {
                return functions.setError(res, messageCheck, 400);
            }
            const checkExists = await UserCompany.findOne({ usc_id: idNTD }, { usc_create_time: 1, usc_logo: 1, image_com: 1 }).lean();

            console.log('existImage', existImage)
            let exist_image = existImage && typeof existImage === 'string' ? existImage.split(',') : []
            console.log('anh ', exist_image)
            if (exist_image.length > 0) {
                exist_image = exist_image.map(link => link.replace(/.*images_company\//, ""))
            }
            console.log('exist_image', exist_image)
            let image = exist_image;
            console.log('image', image);
            const time = functions.getTime();
            // Nếu có ảnh mới 
            if (file && file.Image) {
                if (Array.isArray(file.Image)) {
                    for (let i = 0; i < file.Image.length; i++) {
                        const element = file.Image[i];
                        const date = functions.getDate(checkExists.usc_create_time * 1000);
                        const checkUpload = await functions.uploadFile(`images_company/${date}`, element, time);
                        if (!checkUpload) return functions.setError(res, 'Upload thất bại', 400);
                        image.push(`${date}/${checkUpload}`);
                    }

                    // Xóa ảnh cũ
                    const oldImage = checkExists.image_com
                    if (oldImage && typeof oldImage === 'string') {
                        const old_image = oldImage.split(",")
                        const del_image = old_image.filter(img => !image.includes(img))
                        console.log(del_image)
                        if (Array.isArray(del_image)) {
                            for (let i = 0; i < del_image.length; i++) {
                                const element = del_image[i];
                                functions.deleteFile(`./pictures/images_company/${element}`)
                            }
                        }
                    }
                    image = image.join(',');
                    // console.log('image', image);
                    await UserCompany.findOneAndUpdate({ usc_id: idNTD }, { "image_com": image });
                } else return functions.setError(res, 'Upload thất bại', 400);
            } else if (exist_image) {
                // console.log('exist_image', exist_image);
                // Xóa ảnh cũ
                const oldImage = checkExists.image_com
                if (oldImage && typeof oldImage === 'string') {
                    const old_image = oldImage.split(",")
                    const del_image = old_image.filter(img => !exist_image.includes(img))
                    if (Array.isArray(del_image)) {
                        for (let i = 0; i < del_image.length; i++) {
                            const element = del_image[i];
                            functions.deleteFile(`./pictures/images_company/${element}`)
                        }
                    }
                }
                await UserCompany.findOneAndUpdate({ usc_id: idNTD }, { "image_com": exist_image.join(',') });
            }

            if (file && file.Logo) {
                const date = functions.getDate(checkExists.usc_create_time * 1000);
                const checkUpload = await functions.uploadFile(`${date}`, file.Logo, time);
                functions.deleteFile(`./pictures/${date}/${checkExists.usc_logo}`);
                if (!checkUpload) return functions.setError(res, 'Upload logo thất bại', 400);
                await UserCompany.findOneAndUpdate({ usc_id: idNTD }, { "usc_logo": checkUpload });
            }

            const arrFinanSector = [];
            if (Array.isArray(financial_sector) && financial_sector.length > 0) {
                financial_sector.map(item => arrFinanSector.push({ id: item.trim() }))
            }

            const fields = {
                usc_company: nameCompany.trim(),
                usc_size: quyMo,
                usc_address: address,
                usc_city: city,
                usc_district: district,
                usc_phone: phone,
                usc_website: website,
                usc_mst: mst,
                usc_update_time: time,
                DateOfIncorporation: new Date(DateOfIncorporation).getTime() / 1000,
                usc_name: nameContact,
                usc_name_add: addressContact,
                usc_name_phone: phoneContact,
                usc_name_email: emailContact,
                usc_company_info: inforCompany,
                financial_sector: arrFinanSector,
                usc_boss: usc_boss,
                usc_alias: functions.createLinkTilte2(nameCompany.trim())
            };
            await UserCompany.findOneAndUpdate({ usc_id: idNTD }, fields);
            return functions.success(res, "Cập nhật thông tin thành công");
        }
        return functions.setError(res, 'Missing data', 400);
    }
    catch (error) {
        return functions.setError(res, error.message);
    }
};

export const RegisterCandidate = async (req, res, next) => {
    try {
        const phoneTK = req.body.phoneTK;
        const password = req.body.password;
        const rePassword = req.body.rePassword;
        const jobName = req.body.jobName;
        const nganhNghe = req.body.nganhNghe;
        const jobCity = req.body.jobCity;
        const name = req.body.name;
        const jobDistrict = req.body.jobDistrict;
        const email_notlower = req.body.email;
        const email = email_notlower.toLowerCase();
        const files = req.files;

        if (phoneTK && password && rePassword && jobName && nganhNghe && jobCity && name && jobDistrict && email) {
            const checkPhoneTK = await functions.checkPhone(phoneTK);
            const checkPassWord = functions.checkPassWord(password);
            const checkExistsEmail = await Users.findOne({ use_mail: email }, { use_mail: 1 }).lean();
            const checkExistsPhone = await Users.findOne({ use_phone: phoneTK }, { use_phone: 1 }).lean();
            if (!checkPhoneTK) {
                return functions.setError(res, "Nhập đúng định dạng số điện thoại.", 400);
            }
            if (!checkPassWord) {
                return functions.setError(res, 'Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.', 400);
            }
            if (checkExistsEmail) {
                return functions.setError(res, "Email này đã được sử dụng, vui lòng kiểm tra lại.", 400);
            }
            if (checkExistsPhone) {
                return functions.setError(res, "Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.", 400);
            }

            // Tạo tk 
            const arrCityJob = [];
            const arrNganhNghe = [];
            const arrDistrictJob = [];
            const date = functions.getDate()
            const time = functions.getTime()
            const use_id = await functions.getMaxId(Users, 'use_id');

            if (typeof nganhNghe === 'string' && nganhNghe !== "") {
                nganhNghe.split(',').filter((item) => !isNaN(Number(item.trim()))).map(item => arrNganhNghe.push({ id: item.trim() }))
            }
            if (typeof jobCity === 'string' && jobCity !== "") {
                jobCity.split(',').filter((item) => !isNaN(Number(item.trim()))).map(item => arrCityJob.push({ id: item.trim() }))
            }
            if (typeof jobDistrict === 'string' && jobDistrict !== "") {
                jobDistrict.split(',').filter((item) => !isNaN(Number(item.trim()))).map(item => arrDistrictJob.push({ id: item.trim() }))
            }

            let logo = ''
            if (files && files.Image) {
                logo = await functions.uploadFile(`${date}`, files.Image, time, ['.jpg', '.png', '.jpeg', '.gif', '.jfif', '.png'])
                if (logo === false) {
                    return functions.setError(res, "Ảnh không hợp lệ", 400);
                }
            }

            await Users.create({
                use_id,
                use_phone: phoneTK,
                use_pass: functions.createMd5(password),
                use_time: time,
                use_authentic: 1,
                use_job_name: jobName,
                use_city_job: arrCityJob,
                use_nganh_nghe: arrNganhNghe,
                use_create_time: time,
                use_update_time: time,
                use_logo: logo,
                // birthday: new Date(birthday).getTime() / 1000,
                // exp_years: exp,
                use_name: name,
                use_district_job: arrDistrictJob,
                use_mail: email,
            })

            // Trong trường hợp tk mới trùng id tk cũ bị xóa 
            await candidateCleanUp(use_id)

            const Token = await functions.createToken({ use_id, phone: phoneTK, type: 2, auth: 0, userName: name }, '60d');

            return functions.success(res, 'Đăng ký thành công', {
                Token,
                use_id,
                phone: phoneTK,
                email: email,
                use_mail: email,
                type: 2,
                auth: 0,
                userName: name,
                use_logo: functions.getAvatarCandi(time, logo),
                usc_search: 1,
            })
        }
        return functions.setError(res, 'Cần nhập đầy đủ thông tin.', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Hàm dọn dẹp nếu ứng viên bị xóa thủ công
const candidateCleanUp = async (iduv) => {
    try {
        if (iduv && !isNaN(Number(iduv))) {
            const use_id = Number(iduv)
            // if (!isNaN(use_id)) {
            // const checkExist = await Users.findOne({ use_id: use_id })
            // if (checkExist) {
            // Xóa CV 
            await SaveCandidateCv.deleteMany({ iduser: use_id })
            await UserCvUpload.deleteMany({ use_id: use_id })
            await UserVidUpload.deleteMany({ use_id: use_id })
            // Xóa hồ sơ ứng tuyển 
            await NopHoSo.deleteMany({ nhs_use_id: use_id })
            // Xóa ứng viên đã lưu 
            await TblLuuHoSoUv.deleteMany({ id_uv: use_id })
        }
    } catch (error) {
        console.log('candidateCleanUp\n', error);
    }
}

// Luồng đăng ký đăng tải mới 
export const CandidateRegisterByUploadCV = async (req, res, next) => {
    try {
        const id = req.iduv
        const file = req.files;
        const birthday = req.body.birthday;
        const exp = req.body.exp;
        const bangcap = req.body.bangcap;
        let type = req.body.type;
        if (!type) type = 1
        // console.log('id', id)
        // console.log('file', file)
        // console.log('birthday', birthday)
        // console.log('exp', exp)
        // console.log('bangcap', bangcap)
        if (file && file.CV && birthday && !isNaN(Number(exp)) && bangcap && id) {
            const checkUser = await Users.findOne({ use_id: id })
            if (checkUser) {

                const time = functions.getTime();
                const upload = type == 1 ? (await functions.uploadCV(`uv_${id}`, file.CV, time)) : (await functions.uploadVideo(`uv_vid_${id}`, file.CV, time))

                await Users.findOneAndUpdate({ use_id: id }, {
                    $set: {
                        birthday: functions.getTime(new Date(birthday)),
                        exp_years: Number(exp),
                    }
                })

                let idupload = 0
                if (type == 1) {
                    const id_upload = await functions.getMaxId(UserCvUpload, 'id_upload');
                    await UserCvUpload.create({
                        id_upload,
                        use_id: id,
                        link: upload,
                        timecreate: time
                    });
                    functions.hideInfoCV(id_upload, `${process.env.DOMAIN_API}/${upload}`, UserCvUpload);
                    idupload = id_upload
                } else {
                    const id_upload = await functions.getMaxId(UserVidUpload, 'id_upload');
                    await UserVidUpload.create({
                        id_upload,
                        use_id: id,
                        link: upload,
                        timecreate: time
                    })
                    idupload = id_upload
                }
                return functions.success(res, 'Tải file lên thành công')
            }
            return functions.setError(res, 'Not found', 404);
        }
        return functions.setError(res, "Missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// upload avatarCV
export const uploadAvatarCV = async (req, res, next) => {
    try {
        let image64 = req.body.image64;
        if (image64) {
            const type = image64.substring(5, image64.indexOf(';'));
            const str = functions.randomString(15);
            let fileName;
            if (type === 'image/png') {
                image64 = image64.replace('data:image/png;base64,', '');
                fileName = str + '.png';
            } else {
                image64 = image64.replace('data:image/jpeg;base64,', '');
                fileName = str + '.jpg';
            }
            image64 = image64.replace(' ', '+');
            const fileData = Buffer.from(image64, 'base64');
            if (!fs.existsSync("./tmp/")) {
                fs.mkdirSync("./tmp/", { recursive: true });
            }
            fs.writeFileSync(`./tmp/${fileName}`, fileData);

            functions.deleteOldFiles('./tmp/')

            return functions.success(res, "Upload thành công", { path: `./tmp/${fileName}`, img: `${process.env.DOMAIN_API}/tmp/${fileName}` });
        }
        return functions.setError(res, "Missing data", 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

// đăng kí tài khoản ứng viên theo luồng tạo CV trước
export const CreateCVInOrderToRegister = async (req, res, next) => {
    try {
        const { phone, username, password, jobName, address, ddlv, nganhNghe, dataCVJson, idcv, lang, height_cv, rePassword, district } = req.body;
        const email_notlower = req.body.email
        const email = email_notlower.toLowerCase();
        const arrCityJob = [];
        const arrNganhNghe = [];
        const arrDistrictJob = [];
        let logo = '';
        if (phone && password && nganhNghe && ddlv && idcv && dataCVJson && district) {
            const checkPhoneTK = await functions.checkPhone(phone);
            if (checkPhoneTK) {
                const checkPassWord = functions.checkPassWord(password);
                if (checkPassWord) {
                    if (password === rePassword) {
                        const checkExistsEmail = await Users.findOne({ use_mail: email }, { use_phone: 1 }).lean();
                        const checkExistsPhone = await Users.findOne({ use_phone: phone }, { use_phone: 1 }).lean();
                        if (checkExistsEmail) {

                            return functions.setError(res, "Email này đã được sử dụng, vui lòng kiểm tra lại.", 400);
                        }
                        if (checkExistsPhone) {

                            return functions.setError(res, "Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại.", 400);
                        }
                        const checkExists = await Users.findOne({
                            $or: [
                                { use_phone: phone },
                                { use_mail: email }
                            ],
                        }, { use_phone: 1 }).lean();
                        ddlv.split(',').map(item => arrCityJob.push({ id: item.trim() }));
                        nganhNghe.split(',').map(item => arrNganhNghe.push({ id: item.trim() }));
                        district.split(',').map(item => arrDistrictJob.push({ id: item.trim() }));
                        if (!checkExists) {
                            const time = functions.getTime();
                            const use_id = await functions.getMaxId(Users, 'use_id');

                            const idSave = await functions.getMaxId(SaveCandidateCv, 'id');

                            const dataCV = JSON.parse(dataCVJson).avatar;
                            const jsonCV = JSON.parse(dataCVJson)
                            // console.log(dataCV, typeof dataCV)
                            const date = functions.getDate();
                            let linkNew = '';
                            if (dataCV !== "/images/cv/no_avatar.jpg") {
                                const nameFileOld = dataCV.split('/').pop();
                                linkNew = `./upload/cv_uv/uv_${use_id}/${nameFileOld}`;
                                logo = `./pictures/${date}/${nameFileOld}`;

                                await functions.copyFile(`./tmp/${nameFileOld}`, linkNew, `./upload/cv_uv/uv_${use_id}`);
                                await functions.copyFile(`./tmp/${nameFileOld}`, logo, `./pictures/${date}`);

                                jsonCV.avatar = `${process.env.DOMAIN_API}/upload/cv_uv/uv_${use_id}/${nameFileOld}`
                                logo = nameFileOld;
                                functions.deleteFile(`./tmp/${nameFileOld}`);
                            }
                            const new_user = await Users.create({
                                use_id,
                                use_phone: phone,
                                use_mail: email,
                                use_pass: functions.createMd5(password),
                                use_time: time,
                                use_authentic: 1,
                                use_name: username,
                                address: address,
                                use_job_name: jobName,
                                use_city_job: arrCityJob,
                                use_nganh_nghe: arrNganhNghe,
                                use_create_time: time,
                                use_update_time: time,
                                use_res: 1,
                                use_logo: logo,
                                use_district_job: arrDistrictJob,
                            });
                            console.log(new_user)

                            // Trong trường hợp tk mới trùng id tk cũ bị xóa 
                            await candidateCleanUp(use_id)

                            const new_cv = await SaveCandidateCv.create({
                                id: idSave,
                                iduser: use_id,
                                idcv,
                                lang,
                                // html: dataCVJson,
                                html: JSON.stringify(jsonCV),
                                nameimg: linkNew != '' ? linkNew.replace('.', '..') : null,
                                status: 2,
                                createdate: time,
                                height_cv,
                                // cv_name,
                                name_cv_hide: `u_cv_hide_${time}.png`,
                                name_cv: `u_cv_${time}.png`,
                            });

                            console.log(new_cv)

                            const Token = await functions.createToken({ use_id, phone, type: 2, auth: 0 }, '60d');

                            // Tạm thời chưa cần xác thực
                            await UserTempNoAuth.deleteMany({ use_id: use_id })
                            await UserTempNoAuth.create({
                                use_id: use_id,
                                token: Token,
                            })

                            const linkHide = `http://localhost:9020/xem-cv-u${use_id}-c${idcv}-t1`;
                            const linkNoHide = `http://localhost:9020/xem-cv-u${use_id}-c${idcv}-t0`;

                            functions.renderImageFromUrl(
                                linkHide,
                                `./upload/cv_uv/uv_${use_id}`,
                                `./upload/cv_uv/uv_${use_id}/u_cv_hide_${time}.png`,
                                use_id
                            );

                            functions.renderImageFromUrl(
                                linkNoHide,
                                `./upload/cv_uv/uv_${use_id}`,
                                `./upload/cv_uv/uv_${use_id}/u_cv_${time}.png`,
                                use_id
                            );

                            await SampleCv.findOneAndUpdate({ id: idcv }, { $inc: { download: 1 } })
                            const link = `http://localhost:9020/xem-cv2-u${use_id}-c${idcv}`;
                            // functions.renderPdfFromUrl(link, use_id, idcv);

                            // functions.renderImageFromUrl(
                            //     link,
                            //     `./dowload/cv_pdf/user_${use_id}/cvid_${idcv}`,
                            //     `./dowload/cv_pdf/user_${use_id}/cvid_${idcv}/${idcv}-topcv1s.png`,
                            //     use_id
                            // )

                            let base64StringPDF = ""
                            let pdf = await functions.renderPdfFromUrlNew(link)
                            if (pdf.result) {
                                let buffer = pdf.file
                                buffer = new Buffer.from(buffer, "base64");
                                base64StringPDF = buffer.toString("base64");
                            }

                            console.log('Dữ liệu API trả về:', {
                                Token,
                                use_id,
                                phone: phone,
                                type: 2,
                                auth: 0,
                                userName: username,
                                use_logo: functions.getAvatarCandi(time, logo),
                                usc_search: 1,
                                base64StringPDF
                            });

                            return functions.success(res,
                                'Đăng ký tài khoản thành công',
                                {
                                    Token,
                                    use_id,
                                    phone: phone,
                                    type: 2,
                                    auth: 0,
                                    userName: username,
                                    use_logo: functions.getAvatarCandi(time, logo),
                                    usc_search: 1,
                                    base64StringPDF
                                });

                        }

                        return functions.setError(res, "Email này đã được sử dụng, vui lòng kiểm tra lại.", 400);
                    }

                    return functions.setError(res, "Mật khẩu nhập lại không chính xác", 400);
                }

                return functions.setError(res, 'Mật khẩu phải ít nhất 6 ký tự, bao gồm có ít nhất 1 chữ và 1 số.', 400);
            }
            return functions.setError(res, "Nhập đúng định dạng số điện thoại.", 400);
        }
        return functions.setError(res, "Missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// đăng nhập ứng viên
export const LoginCandidate = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user_name = username.toLowerCase();
        console.log(user_name)
        if (user_name, password) {
            const checkExits = await Users.findOne({
                $or: [
                    { use_phone: user_name },
                    { $expr: { $eq: [{ $toLower: "$use_mail" }, user_name] } }
                ],
                use_pass: functions.createMd5(password)
            }, { use_id: 1, use_authentic: 1, use_mail: 1, use_name: 1, use_phone: 1 }).lean();
            if (checkExits) {
                await Users.updateOne({ use_id: checkExits.use_id }, {
                    use_update_time: functions.getTime()
                });

                const updateTV = await functions.updateTimeTv(checkExits.use_phone);
                console.log(updateTV)

                const data = {
                    use_id: checkExits.use_id,
                    auth: checkExits.use_authentic,
                    type: 2,
                    userName: checkExits.use_name,
                    use_phone: checkExits.use_phone,
                    use_mail: checkExits.use_mail,
                    use_logo: functions.getAvatarCandi(checkExits.use_create_time, checkExits.use_logo)
                };
                console.log(data);
                console.log(checkExits.use_logo)

                console.log('1234')
                const Token = await functions.createToken(data, '60d');
                const RefreshToken = await functions.createToken(data, '1y');

                // Đã đăng nhập thì phải xác thực nếu chưa
                await UserTempNoAuth.deleteMany({ use_id: Number(checkExits.use_id) })
                console.log(data)

                return functions.success(res, "Đăng nhập thành công", { data: { Token, RefreshToken, data } });
            }
            return functions.setError(res, "Tài khoản hoặc mật khẩu không chính xác", 400);
        }
        return functions.setError(res, "missing data", 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// quên mật khẩu tài khoản ứng viên
export const ForgotPassUv = async (req, res, next) => {
    try {
        const user_name = req.body.username;
        const username = user_name.toLowerCase();
        if (username) {
            const checkExists = await Users.findOne({
                $or: [
                    { use_phone: username },
                    { $expr: { $eq: [{ $toLower: "$use_mail" }, username] } }
                ],
            }, { use_id: 1, use_pass: 1, use_name: 1 }).lean();
            if (checkExists) {
                const id = checkExists.use_id;
                await Users.updateOne({ use_id: id }, {
                    use_update_time: functions.getTime()
                });
                let check = '';
                if (id) {
                    check = await Users.findOne({ use_id: id }).lean();
                    if (check) {
                        delete check.password
                        const conditionsToken = { auth: 1, type: 2, check };
                        conditionsToken.use_id = id
                        const token = await functions.createToken(conditionsToken, '60d');
                        return functions.success(res, 'Xác nhận tài khoản hợp lệ. Vui lòng nhập mật khẩu mới', { token, data: check, id });
                    }
                    return functions.setError(res, "Tài khoản không tồn tại, vui lòng kiểm tra lại.", 400);
                }
            }
            return functions.setError(res, 'Không tìm thấy tài khoản', 404);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
};

// đổi mật khẩu ứng viên
export const changePassUv = async (req, res) => {
    try {
        const iduv = req.iduv;
        const { passowrdOld, password, rePassword, type } = req.body;
        if (type == 1) {
            // send by otp
            if (password && rePassword) {
                if (password === rePassword) {
                    const check = functions.checkPassWord(password);
                    if (check) {
                        await Users.findOneAndUpdate({ use_id: iduv }, {
                            use_pass: functions.createMd5(password)
                        });
                        const result = await Users.findOne({ use_id: iduv }, { use_id: 1, phone: 1, use_authentic: 1 }).lean();
                        // console.log(result)
                        const conditionsToken = { use_id: result.use_id, phone: result.phone, type: 2, auth: result.use_authentic };
                        const token = await functions.createToken(conditionsToken, '60d');
                        return functions.success(res, 'Đổi mật khẩu thành công', { token });
                    }
                    return functions.setError(res, 'Password chưa đủ mạnh', 400);
                }
                return functions.setError(res, 'Nhập lại password không chính xác', 400);
            }
            return functions.setError(res, "Missing data", 400);
        }
        if (type == 2) {
            // người dùng đổi mật khẩu
            if (passowrdOld && password && rePassword) {
                if (password === rePassword) {
                    const check = functions.checkPassWord(password);
                    if (check) {
                        const checkUpdate = await Users.findOneAndUpdate({ use_id: iduv, use_pass: functions.createMd5(passowrdOld) }, {
                            use_pass: functions.createMd5(password)
                        });
                        if (checkUpdate) {
                            const result = await Users.findOne({ use_id: iduv }, { use_id: 1, phone: 1, use_authentic: 1 }).lean();
                            const conditionsToken = { use_id: result.use_id, phone: result.phone, type: 2, auth: result.use_authentic };
                            const token = await functions.createToken(conditionsToken, '60d');
                            return functions.success(res, 'Đổi mật khẩu thành công', { token });
                        }
                        return functions.setError(res, 'Mật khẩu cũ chưa chính xác', 400);
                    }
                    return functions.setError(res, 'Password chưa đủ mạnh', 400);
                }
                return functions.setError(res, 'Nhập lại password không chính xác', 400);
            }
            return functions.setError(res, "Missing data", 400);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

// đổi mật khẩu ntd
export const changePassNtd = async (req, res) => {
    try {
        const idNTD = req.idNTD;
        const { passowrdOld, password, rePassword, type } = req.body;
        if (type == 1) {
            // send by otp
            if (password && rePassword) {
                if (password === rePassword) {
                    const check = functions.checkPassWord(password);
                    if (check) {
                        await UserCompany.findOneAndUpdate({ usc_id: idNTD }, {
                            usc_pass: functions.createMd5(password)
                        });
                        const result = await UserCompany.findOne({ usc_id: idNTD }, { usc_pass: 0 }).lean();
                        const conditionsToken = { usc_id: result.usc_id, phone: result.usc_phone_tk, type: 1, auth: result.usc_authentic };
                        const token = await functions.createToken(conditionsToken, '60d');
                        return functions.success(res, 'Đổi mật khẩu thành công', { token });
                    }
                    return functions.setError(res, 'Password chưa đủ mạnh', 400);
                }
                return functions.setError(res, 'Nhập lại password không chính xác', 400);
            }
            return functions.setError(res, "Missing data", 400);
        }
        if (type == 2) {
            // người dùng đổi mật khẩu
            if (passowrdOld && password && rePassword) {
                if (password === rePassword) {
                    const check = functions.checkPassWord(password);
                    if (check) {
                        const checkUpdate = await Users.findOneAndUpdate({ usc_id: idNTD, usc_pass: functions.createMd5(passowrdOld) }, {
                            use_pass: functions.createMd5(password)
                        });
                        if (checkUpdate) {
                            const result = await UserCompany.findOne({ usc_id: idNTD }, { usc_pass: 0 }).lean();
                            const conditionsToken = { usc_id: result.usc_id, phone: result.usc_phone_tk, type: 1, auth: result.usc_authentic };
                            const token = await functions.createToken(conditionsToken, '60d');
                            return functions.success(res, 'Đổi mật khẩu thành công', { token });
                        }
                        return functions.setError(res, 'Mật khẩu cũ chưa chính xác', 400);
                    }
                    return functions.setError(res, 'Password chưa đủ mạnh', 400);
                }
                return functions.setError(res, 'Nhập lại password không chính xác', 400);
            }
            return functions.setError(res, "Missing data", 400);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        console.log(error.message)
        return functions.setError(res, error.message);
    }
};

export const GetAuthenticateOtp = async (req, res) => {
    try {
        const username = req.body.username;
        const type = req.body.type;
        if (type == 2) {
            const checkExists = await Users.findOne({
                $or: [
                    { use_phone: username },
                    { use_mail: username }
                ],
            }, { use_id: 1, use_pass: 1, use_name: 1 }).lean();
            if (checkExists) {
                await Users.updateOne({ use_id: checkExists.use_id }, {
                    use_update_time: functions.getTime()
                });
                const otp = functions.randomNumber();
                const startDate = new Date(new Date().toISOString().slice(0, 10)).getTime() / 1000;
                const endDate = startDate + 24 * 60 * 60;

                const checkCountOtp = await HistoryCountOtp.find({
                    user_id: checkExists.use_id,
                    usc_phone: username,
                    type: 1,
                    create_time: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }).lean();

                if (checkCountOtp.length < 5) {
                    const id = await functions.getMaxId(HistoryCountOtp, 'id');
                    await HistoryCountOtp.create({
                        id,
                        user_id: checkExists.use_id,
                        usc_phone: username,
                        send_otp: otp,
                        create_time: functions.getTime(),
                        type: 1
                    });
                    await Users.updateOne({
                        use_mail: username,
                    }, { use_otp: otp });
                    // Gửi OTP qua email
                    // const checkSend = await functions.sendMail(
                    //     `Mã OTP lấy lại mật khẩu tài khoản`,
                    //     username,
                    //     checkExists.use_name,
                    //     otp, 
                    //     2
                    // );

                    return functions.success(res, 'Hãy xác thực OTP.', { id: checkExists.use_id });
                } else {
                    return functions.setError(res, "Hết lượt gửi otp trong ngày.", 400);
                }
            }
            return functions.setError(res, 'Không tìm thấy tài khoản', 404);
        } else {
            console.log(username)
            const checkExists = await UserCompany.findOne({
                $or: [
                    { usc_phone_tk: username },
                    { usc_email: username }
                ],
            }, { usc_id: 1, usc_pass: 1, usc_name: 1 }).lean();
            if (checkExists) {
                await UserCompany.updateOne({ usc_id: checkExists.cse_id }, {
                    usc_update_time: functions.getTime()
                });
                const otp = functions.randomNumber();
                const startDate = new Date(new Date().toISOString().slice(0, 10)).getTime() / 1000;
                const endDate = startDate + 24 * 60 * 60;

                const checkCountOtp = await HistoryCountOtp.find({
                    user_id: checkExists.usc_id,
                    usc_phone: username,
                    type: 2,
                    create_time: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }).lean();

                if (checkCountOtp.length < 5) {
                    const id = await functions.getMaxId(HistoryCountOtp, 'id');
                    await HistoryCountOtp.create({
                        id,
                        user_id: checkExists.usc_id,
                        usc_phone: username,
                        send_otp: otp,
                        create_time: functions.getTime(),
                        type: 2
                    });
                    await UserCompany.updateOne({
                        usc_email: username,
                    }, { usc_otp: otp });

                    return functions.success(res, 'Hãy xác thực OTP.', { id: checkExists.usc_id });

                } else {
                    return functions.setError(res, "Hết lượt gửi otp trong ngày.", 400);
                }
            }
            return functions.setError(res, 'Không tìm thấy tài khoản', 404);
        }
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const PreviewCv = async (req, res) => {
    try {
        // Xóa tất cả nếu đã quá 24 tiếng 
        const oneDayAgo = functions.getTime() - 3600 * 24
        await TblCvPreview.deleteMany({ createdate: { $lt: oneDayAgo } })

        const directoryPath = './tmp/previewcv';
        functions.deleteOldFiles(directoryPath, 1)

        const {
            idcv,
            dataCVJson,
            lang,
            height_cv,
        } = req.body

        if (idcv && dataCVJson) {
            const time = functions.getTime();
            const idSave = await functions.getMaxId(TblCvPreview, 'id');
            const iduser = await functions.getMaxId(TblCvPreview, 'iduser');

            const dataCV = JSON.parse(dataCVJson).avatar;
            const jsonCV = JSON.parse(dataCVJson)

            let linkNew = '';

            // console.log('jsonCV.avatar before', jsonCV.avatar);
            if (dataCV !== "/images/cv/no_avatar.jpg") {
                const nameFileOld = dataCV.split('/').pop();
                linkNew = `./tmp/previewcv/upload/cv_uv/uv_${iduser}/${nameFileOld}`;

                const result = functions.checkFileExist(`./tmp/${nameFileOld}`)
                await functions.copyFile(`./tmp/${nameFileOld}`, linkNew, `./tmp/previewcv/upload/cv_uv/uv_${iduser}`);
                // console.log('result', result);

                jsonCV.avatar = (result == true) ? `${process.env.DOMAIN_API}/tmp/previewcv/upload/cv_uv/uv_${iduser}/${nameFileOld}` : dataCV
            }
            // console.log('jsonCV.avatar after', jsonCV.avatar);

            await TblCvPreview.create({
                id: idSave,
                iduser: iduser,
                idcv,
                lang: lang || 1,
                // html: dataCVJson,
                html: JSON.stringify(jsonCV),
                nameimg: linkNew != '' ? linkNew.replace('.', '..') : null,
                status: 2,
                cv: 0,
                createdate: time,
                height_cv: height_cv || 0,
                name_cv_hide: `u_cv_hide_${time}.png`,
                name_cv: `u_cv_${time}.png`,
            })

            // puppeteer
            const linkNoHide = `http://localhost:9020/xem-cv3-u${iduser}-c${idcv}`;
            await functions.renderImageFromUrl(
                linkNoHide,
                `./tmp/previewcv/upload/cv_uv/uv_${iduser}`,
                `./tmp/previewcv/upload/cv_uv/uv_${iduser}/u_cv_${time}.png`,
                iduser
            );

            functions.deleteEmptySubfolders(directoryPath)

            return functions.success(res, 'Ảnh preview', { data: `${process.env.DOMAIN_API}/tmp/previewcv/upload/cv_uv/uv_${iduser}/u_cv_${time}.png` })
        }
        return functions.setError(res, "Missing data", 400);
    } catch (error) {
        console.log(error.message);
        return functions.setError(res, error.message);
    }
}

export const DetailCVPreview = async (req, res) => {
    try {
        const id = !isNaN(Number(req.body.id)) ? req.body.id : (await functions.getTokenUser(req));
        const idcv = Number(req.body.idcv);
        const data = {};
        if (idcv) {
            if (id) {
                const checkExists = await TblCvPreview.findOne({ idcv: idcv, iduser: id }).lean();
                if (checkExists) {
                    if (checkExists?.nameimg && typeof checkExists.nameimg === 'string') {
                        checkExists.nameimg = `${process.env.DOMAIN_API}` + checkExists.nameimg.replace('..', '').replace('./', '/')
                    }
                    data.result = checkExists;
                    data.type = 1;
                    let alias = '';
                    if (checkExists?.idcv) {
                        const sample = await SampleCv.findOne({ id: idcv }).lean()
                        if (sample) {
                            alias = sample.alias
                        }
                    }
                    data.alias = alias
                    return functions.success(res, 'get data success', { data });
                } else {
                    // const result = await SampleCv.findOne({ id: idcv }).lean();
                    // data.result = result;
                    // data.type = 0;
                }
            } else {
                // const result = await SampleCv.findOne({ id: idcv }).lean();
                // data.result = result;
                // data.type = 0;
            }

            // console.log('data', data);
            // return functions.success(res, 'get data success', { data });
            // return functions.setError(res, 'missing data', 400);
        }
        return functions.setError(res, 'missing data', 400);
    } catch (error) {
        return functions.setError(res, error.message);
    }
}

// Kiểm tra xác thức (khi cần)
// Lấy lại thông tin (khi cần)
export const getAccountDetail = async (req, res) => {
    try {
        const {
            id,
            type
        } = req.body

        let userId = Number(id) || 0
        let userType = Number(type) || 0

        if (req?.headers && req?.headers?.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            const result = jwt.decode(token).data;
            userType = Number(result?.type) || 0
            if (userType == 2) {
                userId = Number(result?.use_id) || 0
            }
            if (userType == 1) {
                userId = Number(result?.usc_id) || 0
            }
        }

        if (userId && userType) {
            let returnData = {
                name: '',
                phone: '',
                avatar: '',
                auth: 0,
                Token: '',
            }

            if (userType == 2) {
                const checkExists = await Users.findOne({ use_id: Number(userId) })
                if (checkExists) {
                    const tokenObj = {
                        use_id: checkExists.use_id,
                        auth: checkExists?.use_authentic,
                        type: 2,
                        userName: checkExists?.use_name,
                        use_phone: checkExists?.use_phone,
                    }
                    const Token = await functions.createToken(tokenObj, '60d');
                    returnData = {
                        name: checkExists?.use_name,
                        phone: checkExists?.use_phone,
                        avatar: functions.getAvatarCandi(checkExists?.use_create_time, checkExists?.use_logo) || '/images/candidate/ava_default.png',
                        auth: checkExists?.use_authentic,
                        use_mail: checkExists?.use_mail,
                        use_phone: checkExists?.use_phone,
                        use_city_job: checkExists?.use_city_job,
                        use_nganh_nghe: checkExists?.use_nganh_nghe,
                        use_district_job: checkExists?.use_district_job,
                        use_city: checkExists?.use_city,
                        use_district: checkExists?.use_district,
                        gender: checkExists?.gender,
                        address: checkExists?.address,
                        exp_years: checkExists?.exp_years,
                        salary: checkExists?.salary,
                        birthday: checkExists?.birthday,
                        use_job_name: checkExists?.use_job_name,
                        Token: Token,
                    }

                    return functions.success(res, 'Success', { data: returnData })
                }
            }

            if (userType == 1) {
                const checkExists = await UserCompany.findOne({ usc_id: Number(userId) })
                if (checkExists) {
                    const tokenObj = {
                        usc_id: checkExists?.usc_id,
                        phone: checkExists?.usc_phone_tk,
                        auth: checkExists?.usc_authentic,
                        type: 1,
                        usc_company: checkExists?.usc_company,
                    }
                    const Token = await functions.createToken(tokenObj, '60d');
                    returnData = {
                        name: checkExists?.usc_company,
                        phone: checkExists?.usc_phone_tk,
                        avatar: functions.getAvatarNTD(checkExists?.usc_create_time, checkExists?.usc_logo) || '/images/candidate/ava_default.png',
                        auth: checkExists?.usc_authentic,
                        Token: Token,
                    }

                    return functions.success(res, 'Success', { data: returnData })
                }
            }

            // return functions.success(res, 'Success', { data: returnData })

            return functions.setError(res, 'not found', 400);
        }
        return functions.setError(res, 'missing data', 400);

    } catch (error) {
        return functions.setError(res, error.message);
    }
}

export const isPhoneUsedEmployer = async (req, res) => {
    try {
        const {
            phone
        } = req.body

        if (phone && (await functions.checkPhone(phone))) {
            const checkExist = await UserCompany.findOne({ usc_phone_tk: phone })
            if (checkExist) {
                return functions.success(res, 'Thanh cong', { used: true })
            } else {
                return functions.success(res, 'Thanh cong', { used: false })
            }
        } else {
            return functions.setError(res, 'missing data', 400)
        }
    } catch (error) {
        return functions.setError(res, error?.message, 500)
    }
}