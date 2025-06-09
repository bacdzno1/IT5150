import axios from "axios";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import path, { dirname } from "path";
import * as fs from 'node:fs';
import puppeteer from 'puppeteer';
import Users from '../models/user/Users.js';
const tokenCRM = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMzMxMiJ9fQ.wMM_Rbn3Fhu1bNUgfd-kiO850tk6vdzgjyC052oPoz8`;
import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import UserTempNoAuth from '../models/user/UserTempNoAuth.js'
import UserCompany from "../models/user/UserCompany.js";
import * as XLSX from 'xlsx';

// hàm khi thành công
export const success = (res, messsage = '', data = []) => {
	return res.status(200).json({ data: { result: true, message: messsage, ...data }, error: null });
};

// hàm thực thi khi thất bại
export const setError = (res, message, code = 500) => {
	return res.status(code).json({ result: false, data: null, code, error: { message } });
};

// hàm call api bằng axios
export const getDataAxios = async (url, condition, token, timeout = undefined) => {
	try {
		let headers = { 'Content-Type': 'multipart/form-data' };
		if (token) headers = {
			'Content-Type': 'multipart/form-data',
			'Authorization': `Bearer ${token}`
		};
		return await axios({
			timeout: timeout,
			method: 'post',
			url: url,
			data: condition,
			headers
		}).then(async (response) => {
			return response.data;
		});
	} catch (error) {
		return null;
	}
};

// hàm check token
export const checkToken = (conditions, type) => {
	return async (req, res, next) => {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		if (!token) {
			return res.status(402).json({ message: 'Missing token' });
		}
		jwt.verify(token, process.env.NODE_SERCET, async (err, user) => {
			if (err) {
				return res.status(402).json({ message: 'Invalid token' });
			};
			// console.log("Type đầu vào",type)

			// Tạm thời bỏ yêu cầu xác thực tài khoản ứng viên 
			// console.log('user.data.auth', user.data.auth);
			// console.log('user.data.auth == 0', user.data.auth == 0);
			// console.log('type', type);
			// console.log('user.data.type', user.data.type);
			// console.log('user.data.type == 2', user.data.type == 2);
			if (user.data.auth == 0 && !type) {
				// Nếu là ứng viên mới đăng ký thì không cần xác thực
				if (user.data.type == 2) {
					// // console.log('is allow', isAllow)
					// if (!isAllow) {
					// 	return setError(res, "Vui lòng xác thực tài khoản", 401);
					// }
				} else {
					return setError(res, "Vui lòng xác thực tài khoản", 401);
				}
			}
			if (conditions == 1 && user.data.type == 2) {
				return setError(res, "Please log in to your employer account", 403);
			} else if (conditions == 2 && user.data.type == 1) {
				return setError(res, "Please log in to your candidate account", 403);
			}
			if (user.data.type == 2) {
				// tài khoản ứng viên
				req.iduv = user.data.use_id;
				req.type = 2;
			} else if (user.data.type == 1) {
				// tài khoản nhà tuyển dụng
				req.idNTD = user.data.usc_id;
				req.type = 1;
			}
			next();
		});
	};
};

export const checkToken2 = (type) => {
	return async (req, res, next) => {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		if (!token) {
			return res.status(402).json({ message: 'Missing token' });
		}
		jwt.verify(token, process.env.NODE_SERCET, async (err, user) => {
			if (err) {
				return res.status(402).json({ message: 'Invalid token' });
			};
			// console.log("Type đầu vào",type)
			if (user.data.auth == 0 && !type) {
				// Nếu là ứng viên mới đăng ký thì không cần xác thực
				if (user.data.type == 2) {
					const isAllow = await checkAllowNoAuth(user.data.use_id, token)
					// console.log('is allow', isAllow)
					if (!isAllow) {
						return setError(res, "Vui lòng xác thực tài khoản", 401);
					}
				} else {
					return setError(res, "Vui lòng xác thực tài khoản", 401);
				}
			}
			// if (conditions == 1 && user.data.type == 2) {
			// 	return setError(res, "Vui lòng đăng nhập tài khoản nhà tuyển dụng", 403);
			// } else if (conditions == 2 && user.data.type == 1) {
			// 	return setError(res, "Vui lòng đăng nhập tài khoản nhà ứng viên", 403);
			// }
			if (user.data.type == 2) {
				// tài khoản ứng viên
				req.iduv = user.data.use_id;
				req.type = 2;
			} else if (user.data.type == 1) {
				// tài khoản nhà tuyển dụng
				req.idNTD = user.data.usc_id;
				req.type = 1;
			}
			next();
		});
	};
};
// hàm tạo token
export const createToken = async (data, time) => {
	if (data.use_id) {
		const result = await Users.findOne({ use_id: data.use_id }, { use_logo: 1, usc_search: 1, use_create_time: 1 }).lean();
		const date = getDate(result.use_create_time * 1000);
		if (result) {
			if(result.use_logo){
				data.use_logo = `${process.env.DOMAIN_API}/pictures/${date}/${result.use_logo}`;
			}
			data.usc_search = result.usc_search;
		}
	}
	return jwt.sign({ data }, process.env.NODE_SERCET, { expiresIn: time });
};

// hàm xác thực mật khẩu
export const verifyPassword = async (inputPassword, hashedPassword) => {
	const md5Hash = crypto.createHash('md5').update(inputPassword).digest('hex');
	return md5Hash === hashedPassword;
};

// hàm tạo mật khẩu md5
export const createMd5 = (password) => {
	return crypto.createHash('md5').update(password).digest('hex');
};

// hàm validate phone
export const checkPhone = async (phone) => {
	const phoneNumberRegex = /^(?:\+63|0|\+1)?([1-9][0-9]{8,9})$/;
	return phoneNumberRegex.test(phone);
};

// hàm validate email
export const checkEmail = async (email) => {
	// eslint-disable-next-line no-useless-escape
	const gmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return gmailRegex.test(email);
};

// hàm check password
export const checkPassWord = (password) => {
	var passReg = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
	const result = passReg.test(password);
	return result;
};

// hàm lấy id lớn nhất
export const getMaxId = async (model, field) => {
	let maxId = await model.findOne({}, { [field]: 1, }).sort({ [field]: -1, }).limit(1).lean();
	if (maxId) {
		maxId = Number(maxId[`${field}`]) + 1;
	} else maxId = 1;
	return maxId;
};

// hàm upload file
export const uploadFile = async (folder, file, time, allowedExtensions) => {
	try {
		const path1 = `./pictures/${folder}/`;
		const filePath = `./pictures/${folder}/${time}_${file.name}`;
		const fileCheck = path.extname(filePath);
		if (allowedExtensions && allowedExtensions.includes(fileCheck.toLocaleLowerCase()) === false) {
			console.log('Wrong extention')
			return false;
		}
		if (!fs.existsSync(path1)) {
			fs.mkdirSync(path1, { recursive: true });
		}
		fs.readFile(file.path, (err, data) => {
			if (err) {
				console.log('Error fs readfile')
				return false;
			}
			fs.writeFile(filePath, data, (err) => {
				if (err) {
					console.log('Error fs writefile')
					return false;
				}
			});
		});
		return `${time}_${file.name}`;
	} catch (error) {
		console.log(error.message)
		return false
	}
};

// hàm tạo link title
export const createLinkTilte = (input) => {
	// eslint-disable-next-line no-useless-escape
	input = input.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	let str = input.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
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
	str = str.toLowerCase();
	str = str.replaceAll(' ', '-');
	return str;
};

// hàm random số
export const randomNumber = () => {
	return Math.floor(Math.random() * 900000) + 100000;
}
//ham gửi mail mới
export const SendOtpMail = async(email, otp) => {
	try {
			const subject = `Topcv1s.com - Verify OTP`
			const bodyStr = `Your account verify otp is: ${otp}`
			const body = Buffer.from(bodyStr, "utf-8").toString("base64");

			await SendmailNew(email, subject, body)
	} catch (error) {
			console.log("🚀 ~ SendOtpMail ~ error:", error?.message)
	}
}
export const SendmailNew = async (email, subject, mailContent) => {
    try {
        const payload = {
            email,    
            subject,    
            mailContent, 
            domain :'TOPCV1S.COM'    
        };

        const response = await axios.post('http://210.245.108.202:3024/api/timviec/candidate/site_vt/sendMail', payload);

        if (response.data && response.data.success) {
            console.log('Email sent successfully:', response.data);
            return true;
        } else {
            console.log('Failed to send email:', response.data);
            return false;
        }
    } catch (e) {
        console.log('Error sending email:', e);
        return false;
    }
};

// từ khoá ngành nghề
export const tuKhoa = [
	{
		id: 1, arr: 'kế toán, kiểm toán, kế toán viên, Accountant, Accounting Executive, accounting consultant, junior accountant, Head of Accounting, chief accountant, Genenal Accountant, account receivable, ar accountant, Senior Accountant, Accounting Officer, Accounting Intern, kế toán kho,  trợ lý kiểm toán, kế toán thuế, kế toán tài chính, kế toán nội bộ, kế toán ngân hàng, kế toán doanh nghiệp, kế toán bán hàng, kế toán tiền lương, kế toán trưởng, kế toán tổng hợp, kế toán dịch vụ, kế toán chi phí, kế toán chi tiêu,  kế toán thực tập, thực tập sinh kế toán, kế toán công nợ, kế toán vật tư, kế toán nguyên vật liệu, kế toán doanh thu, kế toán doanh thu nội bộ, kế toán văn phòng, kế toán hành chính, nhân viên hành chính kế toán, kế toán giá thành, kế toán cao cấp, kế toán quản trị, kế toán thanh toán, kế toán chi nhánh, kế toán chứng từ logistics, kế toán chứng từ xây dựng, kế toán xây dựng, kế toán sản xuất, kế toán xuất nhập tồn, kế toán nhà máy, kế toán pháp lý, kiểm toán viên, kiểm toán nhà nước, kế toán thu ngân, kế toán kiểm kê, kế toán hỗ trợ, kế toán dự án, kế toán tài sản, kiểm toán viên, kiểm toán nội bộ, kiểm toán xây dựng, kiểm toán nhà nước, kiểm toán viên cao cấp, trợ lý kiểm toán viên, thủ quỹ, kế toán nhập liệu'
	},
	{
		id: 2, arr: 'nhân viên hành chính, hành chính văn phòng, nhân viên văn phòng, hành chính nhân sự, hành chính tổng hợp, hành chính trường học, hành chính kiểm soát, hành chính lễ tân, lễ tân hành chính, admin hành chính, thực tập hành chính văn phòng, thực tập sinh hành chính nhân sự, front office, front office manager, trợ lý hành chính văn phòng, trưởng phòng hành chính văn phòng, trưởng phòng hành chính nhân sự, trưởng nhóm hành chính, leader team hành chính, HR Manager, General Affairs Leader, General Affairs, trưởng phòng hành chính, Office Secretary, phó phòng hành chính'
	},
	{
		id: 32, arr: 'thư ký, trợ lý, Assistant, sale admin, thư ký giám đốc, trợ lý giám đốc, trợ lý hành chính văn phòng, trợ lý giám đốc hành chính, Office Secretary, thư ký văn phòng, trợ lý dự án, trợ lý giám đốc dự án, trợ lý nhóm hàng, trợ ký kỹ sư, trợ lý điều hành, Assistant manager, Assistant General Manager, trợ lý tổng giám đốc, thư ký tổng giám đốc, trợ lý chủ tịch hđqt, trợ lý chủ tịch hội đồng quản trị, thư ký thương mại, trợ lý khối vận hành, trợ lý luật sư'
	},
	{
		id: 3, arr: 'sinh viên, làm thêm, thực tập sinh'
	},
	{
		id: 4, arr: 'xây dựng, công trình, công trường, thi công, việc làm xây dựng, kỹ sư xây dựng, kiến trúc sư, kỹ sư giám sát, kỹ sư thiết kế cấp thoát nước, kỹ sư thiết kế điều hoà thông khí, kỹ sư kết cấu,  kiến trúc sư công trình, kỹ sư công trình biển, kỹ sư triển khai bản vẽ, giám sát xây dựng, giám sát thi công, kỹ sư kinh tế xây dựng, chỉ huy trưởng, kỹ thuật cầu đường, trưởng bộ phận hiện trường, kỹ sư thiết kế điện công trình, kỹ sư giám sát hoàn thiện, kiểm soát chất lượng công trình, kiểm soát kinh tế xây dựng, kỹ thuật dự toán, bóc tách dự toán, kỹ sư dự toán xây dựng, kỹ sư qs, kỹ sư quản lý khối lượng công trường, qs thầu, giám đốc thi công, nhân viên thi công, nhân viên quản lý hồ sơ chất lượng, kiến trúc sư quy hoạch, thợ điện nước, trưởng phòng cấp phối bê tông, cán bộ hồ sơ, cán bộ thanh quyết toán, cán bộ an toàn xây dựng, nhân viên kỹ thuật hiện trường, kỹ thuật hiện trường'
	},
	{
		id: 5, arr: 'điện, điện tử, nhân viên QC điện tử, kỹ sư điều hoà, kỹ sư điện, kỹ sư hệ thống điện, kỹ sư điện lạnh, kỹ sư quản lý sản phẩm, kỹ sư thiết kế điện công nghiệp, thầu cơ điện, kỹ sư cơ điện, kỹ sư MEP, kỹ sư nhiệt lạnh, công nhân điện, thợ điện, thợ gò hàn, thợ hàn, thợ gò'
	},
	{
		id: 8, arr: 'khách sạn, nhà hàng, F&B, nhân viên nhà hàng, lễ tân nhà hàng, lễ tân khách sạn, quản lý khách sạn, nhân viên giám sát vệ sinh công cộng khách sạn, giám sát vệ sinh khác sạn, public area supervisor, quản lý nhà hàng, quản lý F&B, tổ trưởng F&B, trưởng dịch vụ ẩm thực, giám sát F&B, giám sát bộ phận ẩm thực, nhân viên F&B attendant, trưởng bộ phận nhà hàng, F&B attendant, quản lý chuỗi nhà hàng, nhân viên buồng phòng, giám sát bộ phận buồng phòng'
	},
	{
		id: 9, arr: 'nhân viên kinh doanh, nhân viên kinh doanh dự án, chuyên viên kinh doanh, đại diện thương mại, trưởng phòng điều phối, giám sát kinh doanh, nhân viên kinh doanh nội thất, nhân viên kinh doanh ô tô, nhân viên kinh doanh xe máy, nhân viên kinh doanh dịch vụ, nhân viên hỗ trợ kinh doanh'
	},
	{
		id: 11, arr: 'cơ khí, chế tạo, kỹ sư thiết kế cơ khí, giám sát cơ điện, kỹ sư cơ khí, kỹ sư cơ điện, nhân viên vận hành máy, máy cnc, kỹ sư m&e, nhân viên bộ phận khuôn mẫu, kỹ thuật linh kiện, thiết kế khuôn nhựa, nhân viên QE'
	},
	{
		id: 12, arr: 'lao động phổ thông, công nhân'
	},
	{
		id: 13, arr: 'nhân viên IT, chuyên viên IT, công nghệ thông tin, lập trình viên, tester, software, developer, business analyst, lập trình viên php, lập trình viên java, lập trình viên .NET, lập trình viên android, lập trình viên React Native, lập trình viên Mobile, lập trình viên Unity, thực tập sinh lập trình viên, lập trình viên fulltrack, lập trình viên Nodejs, lập trình viên kiến trúc, lập trình viên html, lập trình viên Web, lập trình viên backend, lập trình viên frontend, lập trình viên ReactJS, lập trình viên Angular, lập trình viên Python, lập trình viên cao cấp, phân tích dữ liệu, kỹ sư phần mềm, phát triển phần mềm, trưởng phòng phát triển phần mềm, nhân viên kiểm thử phần mềm, Product Owner, Data Analyst, nhân viên erp, nhân viên triển khai erp, IT support, Chuyên viên phân tích nghiệp vụ'
	},
	{
		id: 26, arr: 'kỹ sư máy tính, quản trị hệ thống, nhân viên quản trị hệ thống, IT mạng phần cứng, trưởng nhóm big data, network engineer, IT Helpdesk, kỹ sư hệ thống, devops engineer, Embedded Systems Engineer, nhân viên bảo mật, System Engineer, Linux System Engineer, IT System Engineer, IT Senior Test Engineer, nhân viên kỹ thuật máy tính, quản trị dữ liệu, Kỹ Sư Tích Hợp Hệ Thống'
	},
	{
		id: 14, arr: 'Marketing, PR, Marketing Manager, Digital Marketing, chuyên Viên Digital Marketing, chuyên viên Marketing, quản trị website, nhân viên seo, chuyên viên seo, trưởng phòng marketing, nhân viên marketing online, giám đốc marketing, Growth Manager, Biên tập viên Social Media, Product Marketing, trade marketing, CMO'
	},
	{
		id: 100, arr: 'truyền thông, nhân viên truyền thông, trưởng nhóm truyền thông, truyền thông content, truyền thông marketing, xử lý sự vụ truyền thông, nhân viên trực page online, Media Executive, biên tập viên youtube, giám đốc truyền thông'
	},
	{
		id: 77, arr: 'quảng cáo, tiếp thị, Google Ads, facebook ads, chuyên viên quảng cáo, chạy ads, chuyên viên chạy quảng cáo, nhân viên chạy quảng cáo, nhân viên quảng cáo,  chạy quảng cáo facebook, nhân viên kinh doanh quảng cáo, nhân viên tiếp thị, nhân viên tiếp thị sản phẩm, trợ lý tiếp thị, thực tập trợ lý tiếp thị, Trade Marketing Manager, quản lý tiếp thị thương mại, chuyên viên tiếp thị trực tuyến, nhân viên tiếp thị thực địa, chuyên viên tiếp thị sản phẩm, Visual Merchandise, nhân viên trưng bày sản phẩm'
	},
	{
		id: 17, arr: 'đào tạo, training, chuyên viên quản lý đào tạo, tư vấn tuyển sinh, quản lý khoá học, giáo viên, giảng viên, trợ giảng, trợ giảng tiếng anh, xác nhận khoá học, học vụ, nhân viên học vụ, admin học vụ, giáo viên học vụ, điều phối học vụ, Class managerment officer, Điều Phối Viên Học Thuật'
	},
	{
		id: 102, arr: 'thư viện, nhân viên thư viện, quản lý thư viện, nhân viên thủ thư, cán bộ thư viện'
	},
	{
		id: 18, arr: "nhân viên kỹ thuật,kỹ thuật công đoạn,nhân viên ei,kỹ thuật ei,nhân viên kỹ thuật y tế,kỹ thuật sản xuất,trưởng nhóm kỹ thuật,trưởng phòng kỹ thuật,cán bộ kỹ thuật,kỹ sư công nghiệp,kỹ sư công nghiệp ei"
	},
	{
		id: 47, arr: "kỹ thuật ứng dụng, chuyên viên kỹ thuật y tế ứng dụng"
	},
	{
		id: 65, arr: "hoá học, sinh học, nhân viên vi sinh, nhân viên lý hoá, cử nhân hoá học, kỹ sư hoá chất, kỹ thuật viên hoá học, kỹ sư công nghệ hoá học"
	},
	{
		id: 19, arr: "y tế, nhân viên y tế, cán bộ y tế, nhân viên kỹ thuật y tế, y tá, bác sĩ, dược sĩ, y sĩ, trình dược viên, điều dưỡng, kỹ sư thiết bị y tế, chuyên viên kỹ thuật y tế ứng dụng, điều dưỡng viên, nhân viên hỗ trợ bệnh nhân, bác sĩ sản phụ, nhân viên phụ tá bác sĩ, bác sĩ nha khoa, nha sĩ, phụ tá nha khoa, trợ thủ nha khoa, phụ tá nha khoa, trợ thủ nha, phụ tá nha"
	},
	{
		id: 20, arr: "quản trị kinh doanh, thực tập sinh quản trị kinh doanh, chuyên viên quản trị dịch vụ khách hàng, giám sát kinh doanh, quản lý kinh doanh, giám sát phát triển kinh doanh"
	},
	{
		id: 21, arr: "dịch vụ, nhân viên tư vấn dịch vụ, dịch vụ showroom, dịch vụ ăn uống, dịch vụ ẩm thực, chuyên viên quản trị dịch vụ khách hàng, dịch vụ khách hàng, trưởng phòng dịch vụ khách hàng, nhân viên CS, giám sát dịch vụ, Senior Accountants"
	},
	{
		id: 22, arr: "phiên dịch, biên dịch, biên phiên dịch, phiên dịch tiếng Hàn, phiên dịch tiếng Trung, phiên dịch tiếng Nhật, phiên dịch tiếng Anh, phiên dịch tại chỗ, On Site Translator, IT comtor, biên phiên dịch tiếng đài loan, ctv biên dịch, cộng tác viên dịch, ctv dịch bài, thực tập sinh tiếng anh"
	},
	{
		id: 23, arr: "may mặc, quản lý đơn hàng may mặc, trưởng phòng kỹ thuật may mặc, tổ trưởng tổ ủi, nhân viên kỹ thuật may mặc, nhân viên kỹ thuật EI ngành may, nhân viên may mặc, Nhân Viên Kỹ Thuật Chuyền May, quản lý phòng may mẫu, công nhân may"
	},
	{
		id: 24, arr: "kiến trúc, thiết kế nội thất, nhân viên thiết kế, thiết kế nhôm kính, kỹ sư thiết kế, kiến trúc sư, trưởng phòng quản lý thiết kế, Kỹ Sư Shop Drawing, chuyên viên kiểm soát thiết kế, chuyên viên thiết kế, thiết kế kiến trúc, trưởng phòng thiết kế, trưởng phòng tối ưu thiết kế, kiến trúc sư cảnh quan, kỹ sư thiết kế điện công trình, thiết kế thi công, điều phối thiết kế"
	},
	{
		id: 25, arr: "xuất nhập khẩu, nhân viên xuất nhập khẩu, chuyên viên xuất nhập khẩu, nhân viên chứng từ, nhân viên chứng từ xnk, nhân viên thu mua, nhân viên chứng từ xuất nhập khẩu, nhân viên chứng từ logistics, nhân viên phòng mua hàng, Giám Đốc Logistics, trưởng nhóm giao nhận xuất nhập khẩu, nhân viên kinh doanh xuất nhập khẩu, nhân viên sale xuất nhập khẩu, trợ lý xuất nhập khẩu, cán bộ xuất nhập khẩu, nhân viên hỗ trợ xuất nhập khẩu, bộ phận chứng từ xuất nhập khẩu, nhân viên phòng xuất khẩu, giám đốc xuất nhập khẩu"
	},
	{
		id: 27, arr: "nhân sự, hr, chuyên viên nhân sự, cán bộ nhân sự, chuyên viên nhân sự tổng hợp, trưởng phòng nhân sự, chuyên viên nhân sự giáo viên, HR Executive, chuyên viên tuyển dụng, headhunter, chuyên viên C&B, giám sát C&B, chuyên viên quản trị nhân sự, HR Manager, trưởng nhóm đào tạo, trưởng nhóm tuyển dụng, chuyên viên quản lý nhân sự, chuyên viên kiểm soát nhân sự"
	},
	{
		id: 28, arr: "mỹ thuật, thiết kế đồ hoạ, thiết kế đồ hoạ game, desinger, nhân viên desinger, nhân viên dựng phim, Ux Designer, Graphic Designer, thực tập sinh thiết kế đồ hoạ, UX UI Designer, Web App Designer, Fashion Designer, game desinger, app desinger, Designer Intern, thực tập sinh thiết kế, thiết kế thời trang, nhân viên thiết kế, thợ photoshop, trưởng phòng thiết kế, thiết kế bao bì sản phẩm, hoạ viên"
	},
	{
		id: 29, arr: "tư vấn, nhân viên tư vấn, consultant, tư vấn viên, nhân viên tư vấn chăm sóc khách hàng, tư vấn online"
	},
	{
		id: 45, arr: "chăm sóc khách hàng, nhân viên chăm sóc khách hàng, chuyên viên chăm sóc khách hàng, nhân viên trực tổng đài, nhân viên telesales, nhân viên đặt lịch hẹn cho khách, trực tổng đài, Nhân Viên Online Sales, nhân viên tư vấn chăm sóc khách hàng"
	},
	{
		id: 30, arr: "bảo vệ, vệ sĩ, nhân viên bảo vệ, bảo vệ toà nhà, nhân viên an ninh, bảo vệ nội bộ, giám sát an ninh, trợ lý giám sát an ninh, giám sát dịch vụ toà nhà, giám sát camera"
	},
	{
		id: 31, arr: "oto, xe máy, ô tô, bán xe máy, bán ô tô, nhân viên bán hàng xe máy, nhân viên kinh doanh ô tô, sửa xe máy, thợ sửa xe máy, kỹ thuật điện ôtô, nhân viên rửa và chăm sóc oto, rửa oto, sửa chữa ô tô, nhân viên kỹ thuật sơn ô tô, sale ô tô, thợ làm nội thất ô tô, bán hàng ô tô, bán phụ tùng ô tô, cố vấn dịch vụ ô tô, nhân viên gara oto, kỹ sư ô tô, thợ điện điều hoà ô tô, thợ máy gầm ô tô"
	},
	{
		id: 33, arr: "bất động sản, kinh doanh bất động sản, chuyên viên tư vấn bất động sản, nhân viên môi giới bất động sản, chuyên viên kinh doanh bất động sản, nhân viên kinh doanh bất động sản, chuyên viên kế hoạch bất động sản"
	},
	{
		id: 34, arr: "du lịch, hướng dẫn viên, nhân viên kinh doanh du lịch, điều hành tour, Sales Tours "
	},
	{
		id: 35, arr: "báo chí, truyền hình, phóng viên, phát thanh viên, MC, cộng tác viên báo chí, ctv báo chí, nhân viên tư vấn dịch vụ truyền hình, biên tập viên truyền hình, giám đốc trung tâm truyền thông số, biên tập viên sản xuất chương trình truyền hình, chuyên viên truyền thông dự án truyền hình, biên tập viên truyền hình, nhân viên đạo cụ, producer"
	},
	{
		id: 104, arr: "copywriter, biên tập viên, content, content marketing, content excutive, cộng tác viên nội dung, nhân viên content"
	},
	{
		id: 36, arr: "thực phẩm, đồ uống, kỹ thuật công nghệ thực phẩm, nhân viên hoá thực phẩm, trợ lý khối vận hành, nhân viên QC, nhân viên vệ sinh an toàn thực phẩm, nhân viên sản xuất, nhân viên kinh doanh phụ gia, nhân viên kinh doanh thịt đông lạnh, nhân viên chế biến thực phẩm, gia vị thực phẩm, hương liệu thực phẩm, thợ làm bánh, sản xuất in bao bì thực phẩm, trưởng bộ phận siêu thị, qc thực phẩm, giám đốc xuất khẩu bia, nước giải khát, vận hành khu chế biến, nhân viên trưng bày, kỹ thuật viên bia tươi"
	},
	{
		id: 37, arr: "ngành nghề khác"
	},
	{
		id: 38, arr: "vật tư, kỹ sư mua hàng, phó phòng mua hàng, nhân viên vật tư, quản lý kho vận, trưởng phòng quản lý thiết bị, lắp đặt thiết bị, thiết bị vệ sinh, kỹ thuật thiết bị, kỹ thuật viên vận hành thiết bị, thiết bị vật tư"
	},
	{
		id: 39, arr: "web desinger, thiết kế web, frontend web desinger, Web App Designer, nhân viên thiết kế web, thiết kế website"
	},
	{
		id: 40, arr: "in ấn, xuất bản, nhân viên thiết kế in ấn, thiết kế chế bản in ấn, kinh doanh sản phẩn in ấn, in ấn quảng cáo, quản lý xuất bản sách, nhân viên photocopy, thiết kế bình ghép file in ấn, ấn phẩm ngành in, nhân viên vận hành máy gia công in ấn, nhân viên in ấn, thợ vận hành máy sau in offset, thợ vận hành máy in offset, thợ in offset, thiết kế chế bản in opset, thợ in ấn, vận hành máy in"
	},
	{
		id: 41, arr: "nông nghiệp, ngư nghiệp, lâm nghiệp, kỹ thuật viên nông nghiệp, nhân viên giám sát nông trường, bán hàng nông nghiệp, kỹ sư nông nghiệp, kinh doanh thị trường phân bón, kinh doanh phân bón, kinh doanh phân hữu cơ, kỹ sư lâm nghiệp, kỹ sư ngư nghiệp, nhân viên thu mua nông sản, kinh doanh thuốc bảo vệ thực vật, giám sát chất lượng sản xuất thuỷ sản, nhân viên kinh doanh thuỷ sản, nhân viên quản lý về nông nghiệp, nhân viên kỹ thuật trại chăn nuôi, nhân viên kỹ thuật nuôi trồng thuỷ sản, nhân viên chăn nuôi, kỹ thuật nuôi trồng, quản lý sân vườn"
	},
	{
		id: 42, arr: "thương mại điện tử, nhân viên Trực nguồn Thương mại Điện tử, chuyên viên thanh toán thương mại điện tử, e-commerce, Chuyên viên vận hành thương mại điện tử"
	},
	{
		id: 43, arr: "nhập liệu, nhân viên đánh máy, đánh máy văn phòng, Data Entry, Typist, nhân viên kế toán nhập liệu, nhân viên nhập data kho, cộng tác viên nhập liệu, nhân viên nhập liệu, nhân viên xử lý nhập liệu, nhập liệu thời vụ, nhập liệu parttime, nhập liệu hồ sơ vay, công nhân nhập liệu, kế toán nhập liệu, nhập liệu văn bản, data capture"
	},
	{
		id: 46, arr: "sinh viên mới tốt nghiệp, thực tập, sinh viên mới ra trường, Internship, inter, thực tập sinh"
	},
	{
		id: 48, arr: "bưu chính viễn thông, bưu chính, viễn thông, nhân viên kỹ thuật viễn thông, giao dịch viên bưu cục, nhân viên bưu cục, điều hành bưu cục"
	},
	{
		id: 49, arr: "dầu khí, địa chất, Kỹ sư hóa dầu, nhân viên kiểm kê quy hoạch đất đai, nhân viên phòng thí nghiệm hóa dầu"
	},
	{
		id: 95, arr: "Nhân Viên Kỹ Thuật Trắc Địa Địa Chất, Kỹ Sư Trắc Địa, Kỹ Sư Khảo Sát Địa Hình, Kỹ Sư Trắc Đạc, kỹ sư hiện trường, Kỹ Sư Quản Lý Đất Đai, phụ tá trắc địa công trình"
	},
	{
		id: 50, arr: "giao thông vận tải, thủy lợi, cầu đường, kỹ sư thủy lợi, kỹ sư cầu đường, kỹ sư xây dựng cầu đường, Kỹ Sư Thiết Kế Giao Thông  Hạ Tầng, Kỹ Sư Giám Sát Công Trình Thoát Nước Đô Thị, Kỹ Sư Thiết Kế Đường Bộ, chỉ huy trưởng công trình"
	},
	{
		id: 51, arr: "khu chế xuất, khu công nghiệp"
	},
	{
		id: 52, arr: "làm đẹp, thể lực, spa, thẩm mỹ, Chăm Sóc Khách Hàng Spa Thẩm Mỹ,  Nhân viên Tư vấn làm đẹp, Nhân viên Spa, Quản lý Salon tóc, Thợ phụ uốn tóc, chuyên viên chăm sóc sức khỏe, tư vấn thẩm mỹ, bác sĩ thẩm mỹ, Kỹ Thuật Viên Spa, kỹ thuật viên thẩm mỹ, Bác Sĩ Da Liễu Thẩm Mỹ, Trình dược viên kênh spa, điều dưỡng viên hậu phẫu, Trainer đào tạo kĩ thuật ngành Spa, Thợ Nail, Kĩ Thuật Viên Nối Mi, kỹ thuật viên phun săm,  Kĩ Thuật Viên Massage, kỹ thuật viên spa"
	},
	{
		id: 53, arr: "luật, pháp lý, pháp chế, Nhân viên pháp lý, Trợ lý luật sư, Nhân viên tư vấn pháp lý, Trợ lý Luật sư, nhân viên thu hồi nợ pháp lý, Nhân Viên Pháp Chế, Chuyên Viên Tư Vấn Pháp Luật,  nhân viên tư vấn luật, Chuyên viên Pháp lý xử lý nợ, Nhân Viên Tổng Đài Thu Hồi Nợ Pháp Lý, cán bộ pháp lý, Nhân Viên Xử Lý Nợ Pháp Lý, Trợ Lý Pháp Lý, Trưởng phòng pháp lý, hỗ trợ pháp lý, pháp lý dự án, Chuyên Viên Nghiệp Vụ Công Chứng, IP Paralegal"
	},
	{
		id: 54, arr: "Kỹ Sư Phòng Cháy Chữa Cháy, kỹ sư môi trường, hse, Nhân Viên Xử Lý Vận Hành Nước, Nhân viên kỹ thuật môi trường, Kỹ sư công nghệ môi trường, Kỹ sư M&E, Kỹ sư thiết kế ME, nhân viên vận hành môi trường, M&E, Nhân Viên Xử Lý Nước Thải, Safety Supervisor, kỹ sư thiết kế môi trường, Kỹ Sư Cấp Thoát Nước, Nhân Viên Vi Sinh, EHS Staff, Nhân Viên HSE, nhân viên EHS, Environment Officer, Nhân Viên Hóa Sinh, Giám sát bào trì hệ thống xử lý nước, HSSE Manager, Nhân Viên Phân Tích Nước, Kỹ Sư Môi Trường & Năng Lượng"
	},
	{
		id: 55, arr: "Mỹ phẩm, thời trang, trang sức, Nhân viên bán hàng mỹ phẩm, Nhân viên kinh doanh mỹ phẩm, Kỹ sư bào chế sản phẩm Mỹ phẩm, Nhân Viên Sale Mỹ Phẩm,  Nhân Viên Tư Vấn Mỹ Phẩm, Kỹ Sư Hóa Pha Chế Mỹ Phẩm, Nhân Viên Make Up, Nhân viên kinh doanh Phân Phối Mỹ Phẩm, nhân viên tư vấn bán hàng nước hoa và mỹ phẩm, Nhân Viên Sale Phát Triển Thị Trường Mỹ Phẩm, Giám Sát Kinh Doanh Hóa Mỹ Phẩm, Nhân Viên Tư Vấn Mỹ Phẩm, Nhân Viên Huấn Luyện Đào Tạo Mỹ Phẩm, Quản lý Cửa hàng Thời trang, Nhân viên tư vấn Thời trang, Thiết kế thời trang, Nhân Viên Bán Hàng Thời Trang, Quản Lý Kinh Doanh Chuỗi Cửa Hàng Thời Trang, Nhân Viên Stylist, Giám Sát Cửa Hàng Thời Trang, Trợ Lý Kinh Doanh Thời Trang, Nhân Viên Bán Hàng Quần Áo, Thợ May Thời Trang, Nhân Viên Mua Hàng May Mặc Thời Tran,  Nhân Viên Đóng Đơn Hàng Thời Trang, Fashion Designer, nhân viên thiết kế trang sức, nhân viên tư vấn bán hàng trang sức, nhân viên bán hàng trang sức, Nhân Viên Gia Công Làm Đồ Trang Sức, Vẽ Tay Mẫu Trang Sức, Chuyên Viên Cung Ứng Hàng Trang Sức, Công Nhân Chế Tác Trang Sức, Nhân Viên Mài Đá Trang Sức, Công Nhân Sản Xuất Láp Ráp Trang Sức"
	},
	{
		id: 56, arr: "ngân hàng, chứng khoán, đầu tư, phó phòng quản lý rủi ro, giao dịch viên ngân hàng, chuyên viên môi giới chứng khoán, chuyên viên tư vấn chứng khoán, Nhân Viên Thu Hồi Nợ, Chuyên viên Môi giới Khách hàng Tổ chức, Chuyên viên khách hàng cá nhân, Chuyên viên Quan hệ khách hàng doanh nghiệp, Nhân viên tư vấn đầu tư chứng khoán, nhân viên tư vấn mở thẻ tín dụng, Nhân viên ngoại hối, Môi giới tập sự, Thực tập sinh chứng khoán, Chuyên viên thẩm định tín dụng, Nhân viên quản lý tín dụng cá nhân, Chuyên viên Dịch vụ khách hàng, Chuyên viên chăm sóc tài khoản chứng khoán, Nhân viên môi giới chứng khoán, Chuyên viên giao dịch trái phiếu, Chuyên viên Xử lý nợ Thế chấp"
	},
	{
		id: 107, arr: "tài chính, finance, nhân viên tài chính, chuyên viên tín dụng, trưởng phòng thẩm định, chuyên viên tư vấn tài chính, giám sát rủi ro, giám đốc tài chính, Chuyên Viên Hoạch Định Tài Chính, Chuyên Viên Tư Vấn Tài Chính, QUẢN LÝ TÀI CHÍNH, Treasury Staff,  Thu Nợ Hiện Trường"
	},
	{
		id: 57, arr: "Nghệ thuận, điện ảnh, biên tập viên video, nhân viên quản lý video hình ảnh, trợ lý sản xuất, Tuyển Dụng Biên Kịch, Nhân Viên Tổ Chức Sản Xuất, Đạo diễn, Nhân viên dựng phim, Nhân viên quay phim, tổ chức sản xuất phim, biên tập viên, Chuyên viên Biên tập Ý tưởng, Chuyên viên hậu kì âm thanh, Chuyên viên Âm thanh, Đánh giá Sản xuất Nội dung, Viết kịch bản, Họa Sĩ, Ca sĩ, nhân viên sản xuất phim, Nhân Viên Chụp Ảnh, Nhân Viên Chỉnh Sửa Hình Ảnh"
	},
	{
		id: 58, arr: "phát triển thị trường, Nhân Viên Phát Triển Đối Tác, Nhân Viên Kinh Doanh Thị Trường, Chuyên Viên Nghiên Cứu Thị Trường, Chuyên viên Khảo sát Thị trường, Business Development, NHÂN VIÊN PHÁT TRIỂN KHÁCH HÀNG, Nhân viên Phát triển Kinh doanh"
	},
	{
		id: 59, arr: "phục vụ, tạp vụ, Nhân Viên Phụ Bếp, Nhân Viên Phục Vụ Căn Tin, nhân viên chạy bàn, bồi bàn, Nhân Viên Bàn, Giám Sát Vệ Sinh, nhân viên buồng phòng, Waiter,Steward, bellman, giám sát đội vệ sinh, công nhân vệ sinh công nghiệp, giám sát vệ sinh công nghiệp, vệ sinh công nghiệp, giám sát mục tiêu vệ sinh, giám sát vệ sinh ngành công nghiệp"
	},
	{
		id: 81, arr: "Nhân viên giúp việc, Người giúp việc, người trông trẻ, Nhân Viên Chăm Sóc Người Cao Tuổi"
	},
	{
		id: 60, arr: "Nhân Viên Kết Nối Giao Thương, Nhân Viên Quản Lý Đối Tác, Nhân viên đối ngoại,  Chuyên Viên Đối Ngoại, Senior Corporate Affair Executive"
	},
	{
		id: 61, arr: "Trưởng Phòng, Phó tổng Giám đốc, Tổng Giám đốc, Quản lý, Team Leader, Trưởng phòng, Chỉ huy trưởng, Cửa hàng Trưởng, Phó phòng, Kế toán Trưởng, manager, Trưởng nhóm, CFO, Giám đốc tài chính, CEO, Trưởng Phòng, Trưởng nhóm, Trưởng bộ phận, Giám sát, Cán bộ Quản lý, Trưởng Ca, Phụ Trách, Trưởng Ban Quản Lý, quản đốc"
	},
	{
		id: 62, arr: "sản xuất, vận hành sản xuất, nhân viên vận hành, Công nhân sản xuất, Trưởng ca Sản Xuất, Tổ trưởng các bộ phận sản xuất, Công nhân, Quản Lí Sản Xuất, Công Nhân Sản Xuất Đóng Gói, Nhân Viên Lắp Ráp, Kỹ Thuật Viên Chất Lượng Dây Chuyền Sản Xuất, Nhân Viên Thống Kê Sản Xuất, Giám Sát Sản Xuất, quản lý sản xuất"
	},
	{
		id: 63, arr: "thẩm định, thẩm giám định, giám thẩm định, giám định, quản lý chất lượng, Nhân Viên QA, Quản Lý Dự án, Nhân Viên QC, Nhân Viên Kiểm Hàng, Nhân Viên Kiểm Soát Nội Bộ, Nhân Viên Iso, Nhân viên kiểm soát chất lượng, Test Lead, nhân viên kcs, chuyên viên kcs, nhân viên ksc"
	},
	{
		id: 64, arr: "thể dục, thể thao, gym, yoga, Nhân viên Lễ tân phòng Gym, Chuyên Viên Tư Vấn Thẻ Chăm Sóc Sức Khỏe, Quản Lý Phòng Gym, Huấn luyện viên bơi, cứu hộ,  Huấn luyện viên thể thao, giảng viên thể dục quân sự, PT gym, huấn luyện viên thể hình cá nhân, Fitness, Personal Trainer"
	},
	{
		id: 67, arr: "Freelancer, Freelancer Làm việc Tại Nhà, Cộng tác viên"
	},
	{
		id: 68, arr: "Công chức, viên chức, Cán Bộ Phòng Công Tác Sinh Viên"
	},
	{
		id: 71, arr: "điện tử viễn thông, Kỹ Thuật Viên Viễn Thông, Nhân Viên Kỹ Thuật Viễn Thông, Kỹ sư Điện tử viễn thông, Kỹ sư Viễn thông, Nhân Viên Vận Hành Nhà Trạm Viễn Thông "
	},
	{
		id: 73, arr: "hoạch định dự án, hoạch định, dự án, Project Manager, phó ban quản lý dự án, giám đốc ban quản lý dự án, giám đốc ban quản lý xây dựng, chuyên viên ban đầu tư, kỹ sư dự án, trưởng phòng giải phóng mặt bằng, Chuyên Viên Hoạch Định, Chuyên Viên Phát Triển Dự Án, Nhân Viên Dự Án, Thư Ký Dự Án, Nhân Viên Quản Lý Dự Án, CHUYÊN VIÊN HỒ SƠ THẦU, Nhân Viên Dự Toán, Nhân Viên Phát Triển Đầu Tư Dự Án, Nhân Viên Làm Hồ Sơ Dự án, Kỹ Sư Dự án Công Trình, Điều Phối Dự án, dự toán công trình, Project Management, Product Project Manager, điều phối viên dự án, Project Coordinator, Điều Phối Viên Phát Triển Cộng Đồng"
	},
	{
		id: 75, arr: "lương cao"
	},
	{
		id: 79, arr: "Việc làm Tết, việc làm thời vụ tết"
	},
	{
		id: 87, arr: "tìm việc làm thêm, part time, làm thêm tại nhà, bán thời gian, việc làm thêm ca tối, việc làm thêm online, việc làm buổi tối, cộng tác viên"
	},
	{
		id: 83, arr: "việc làm thời vụ, thời vụ"
	},
	{
		id: 88, arr: "Nhân Viên Kỹ Thuật Nuôi Trồng Thủy Sản, Nhân Viên Nuôi Tôm, Nhân Viên Kỹ Thuật Nuôi Trồng Thủy Sản, Kỹ Sư Chế Biến Thủy Sản"
	},
	{
		id: 89, arr: " Kỹ Sư Công Nghệ Thực Phẩm, Công Nhân Sơ Chế"
	},
	{
		id: 90, arr: " chăn nuôi, thú y, Nhân Viên Chăn Nuôi,  Nhân Viên Kinh Doanh Thức Ăn Chăn Nuôi, nhân viên tiêm gia cầm, dược sỹ nghiên cứu và bào chế thuốc thú y"
	},
	{
		id: 91, arr: "kỹ sư an toàn lao động, Giám Sát An Toàn Lao Động, Nhân Viên An Toàn Lao Động, Cán Bộ An Toàn Lao Động, Nhân Viên HSE, Heath & safety officer, Kỹ Thuật Viên Phòng Cháy Chữa Cháy, Safety Supervisor, Điều phối viên An Toàn"
	},
	{
		id: 92, arr: "nhân viên ticketing, Nhân viên đặt vé máy bay, Booker Vé Máy Bay, Nhân viên tư vấn vé máy bay, CTV Bán vé máy bay"
	},
	{
		id: 94, arr: "Nhân viên Hỗ trợ Sự kiện, Nhân Viên Tổ Chức Sự Kiện, Chuyên Viên Truyền Thông, Nhân Viên Kinh Doanh Tư Vấn Truyền Thông, Nhân Viên Tư Vấn Sự Kiện Event,  Event Supervisor, Event Executive Planner"
	},
	{
		id: 97, arr: "bảo trì, sửa chữa, thi công, Nhân Viên Bảo Trì, Kỹ Thuật Viên Bảo Trì, Nhân Viên Kỹ Thuật Thi Công Và Bảo Trì Hệ Thống,  Nhân viên kỹ thuật bảo trì"
	},
	{
		id: 98, arr: "Nhân viên Hải quan, Chuyên Viên Khai Hải Quan, Nhân viên khai thác tàu biển"
	},
	{
		id: 101, arr: "Startup"
	},
	{
		id: 103, arr: "Nhân Viên Thống Kê, Nhân viên kiểm kê"
	},
	{
		id: 105, arr: "xuất khẩu lao động, Nhân viên tư vấn tuyển sinh xuất khẩu lao động, Nhân viên tư vấn Xuất khẩu lao động, Nhân viên phát triển thị trường xuất khẩu lao động, Nhân Viên Xuất Khẩu Lao Động, Công Nhân Xuất Khẩu Lao Động, Thực Tập Sinh Xuất Khẩu Lao Động"
	},
	{
		id: 106, arr: "Công nghệ cao"
	},
	{
		id: 108, arr: "thu ngân, Cashier, kế toán thu ngân"
	},
	{
		id: 10, arr: "nhân viên bán hàng, Nhân Viên Tư Vấn Bán Hàng, Nhân Viên Hỗ Trợ Bán Hàng, chuyên viên tư vấn bán hàng"
	}
];

// hàm gọi api crm khi NTD đăng tin
export const upNew = async (link, id, title, comid) => {
	try {
		const linkk = `https://work247.vn/${link}-${id}`;
		const arrAPI = {
			'com_id': comid,
			'title': title,
			'link': linkk,
			'id_new': id
		};
		const result = await getDataAxios(`${process.env.API_REGISTER_FAIL_CRM}/api/customer/add_new_3312`,
			arrAPI, tokenCRM);
		return result;
	} catch (error) {
		return false;
	}
};

// hàm gọi api CRM chuyển giỏ khách hàng
export const editCompanyCRM = async (arrAPI, usc_id) => {
	const result = await getDataAxios(`${process.env.API_REGISTER_FAIL_CRM}/api/customer/edit/${usc_id}`,
		arrAPI, tokenCRM);
	return result;
};

// hàm render link avatar nhà tuyển dụng 
export const getAvatarNTD = (time, img) => {
	try {
		if (img) {
			// const year = new Date(time).getFullYear();
			// const month = new Date(time).getMonth() + 1;
			// const date = new Date(time).getDate();
			// return `${process.env.DOMAIN_API}/pictures/${year}/${month}/${date}/${img}`;
			const date = getDate(time * 1000);
			return `${process.env.DOMAIN_API}/pictures/${date}/${img}`;
		}
		return null;
	} catch (error) {
		return null;
	}
};

// hàm render link avatar nhà tuyển dụng 
export const getAvatarNTD2 = (time, img) => {
	try {
		if (img) {
			// const year = new Date(time).getFullYear();
			// const month = new Date(time).getMonth() + 1;
			// const date = new Date(time).getDate();
			// return `${process.env.DOMAIN_API}/pictures/${year}/${month}/${date}/${img}`;
			const date = getDate(time * 1000);
			return `${process.env.DOMAIN_API_TIMVIECHAY}/pictures/${date}/${img}`;
		}
		return null;
	} catch (error) {
		return null;
	}
};

// hàm render image NTD 
export const getImageNTD = (img) => {
	try {
		if (img) {
			const arr = [];
			for (let i = 0; i < img.split(',').length; i++) {
				const element = img.split(',')[i];
				arr.push(`${process.env.DOMAIN_API}/pictures/images_company/${element}`);
			}
			return arr;
		}
		return null;
	} catch (error) {
		return null;
	}
};

// hàm gọi api axios
export const callAPI = async (api, data) => {
	try {
		for (let i = 0; i < api.length; i++) {
			await getDataAxios(`${api[i]}`, data);
		}
	} catch (error) {
		return null;
	}
};

// hàm gửi opt sms
export const sendOtpSMS = async (phone, otp) => {
	try {
		const data = JSON.stringify({
			"ApiKey": "B4AC997EA37B66E821AA87556E98A6",
			"Content": `TIMVIEC365 bạn đã lấy lại MK tại https://timviec365.vn/ mã OTP:${otp}`,
			"Phone": `${phone}`,
			"SecretKey": "80A7A1845725B74E5766A5BFB0B167",
			"IsUnicode": "1",
			"Brandname": "TIMVIEC365",
			"SmsType": "2"
		});
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_post_json/',
			headers: {
				'Content-Type': 'application/json',
				'Cookie': 'ASP.NET_SessionId=ymrgrfikgqbknj2z51bjx4ts'
			},
			data: data
		};

		await axios.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error.message);
			});
	} catch (error) {
		return null;
	}
};

// hàm gọi api lưu thông tin khách hàng
export const callApiAddCrm = async (data) => {
	try {
		const result = await getDataAxios(`${process.env.API_REGISTER_FAIL_CRM}/api/customer/add`,
			data, tokenCRM);
		return result;
	} catch (error) {
		return null;
	}
};

// hàm copy file
export const copyFile = async (linkOld, linkNew, pathNew) => {
	try {
		if (pathNew) {
			if (!fs.existsSync(pathNew)) {
				fs.mkdirSync(pathNew, { recursive: true });
			}
		}
		fs.copyFile(linkOld, linkNew, (err) => {
			if (err) {
				console.log(err);
				return false;
			}
		});
		return true;
	} catch (error) {
		return false;
	}

};

// hàm xoá file
export const deleteFile = (file) => {
	try {
		const filePath = file;
		// Check tồn tại, tránh lỗi 
		fs.access(filePath, fs.constants.F_OK, (err) => {
			if (err) {
				console.log('Xóa file không tồn tại', filePath);
			} else {
				fs.unlink(filePath, (err) => {
					if (err) console.log(err);
				});
			}
		})
	} catch (error) {
		console.log(error.message);
	}
};

// Hàm kiểm tra file tồn tại
export const checkFileExist = (link) => {
	try {
		fs.access(link, fs.constants.F_OK, (err) => {
			if (err) {
				console.log(err);
				return false
			} else {
				return true
			}
		})
		return false
	} catch (error) {
		return false
	}
}

// Hàm xóa file cũ (dành cho file tạm thời)
export const deleteOldFiles = async (directory, hour = 24) => {
	try {
		fs.readdir(directory, (err, files) => {
			if (err) {
				console.log('Error reading directory:', err);
				return;
			}

			files.forEach(file => {
				const filePath = path.join(directory, file);
				fs.stat(filePath, (err, stats) => {
					if (err) {
						console.log('Error getting file stats:', err);
						return;
					}

					if (stats.isDirectory()) {
						// If it's a directory, recursively call deleteOldFiles
						deleteOldFiles(filePath);
					} else {
						// Check if the file is older than one hour
						const now = new Date();
						const oneHourAgo = new Date(now - hour * 60 * 60 * 1000);
						if (stats.birthtime < oneHourAgo) {
							fs.unlink(filePath, err => {
								if (err) {
									console.log('Error deleting file:', err);
									return;
								}
								// console.log('Deleted:', filePath);
								console.log('Deleted:', filePath, `${hour}h`);
							});
						}
					}
				});
			});
		});
		// console.log('deleteOldFiles', directory, `${hour}h`, 'Done');
	} catch (error) {
		console.log(error.message);
	}
}

// Hàm xóa thư mục rỗng (dành cho thư mục tạm thời)
export const deleteEmptySubfolders = async (dirPath) => {
	try {
		if (!fs.existsSync(dirPath)) {
			console.log(`Directory ${dirPath} does not exist.`);
			return;
		}

		// Function to check if a directory is empty
		function isDirectoryEmpty(dir) {
			return fs.readdirSync(dir).length === 0;
		}

		// Function to recursively delete empty subfolders
		function deleteEmptySubfoldersRecursively(currentDir) {
			const files = fs.readdirSync(currentDir);

			files.forEach(file => {
				const filePath = path.join(currentDir, file);
				if (fs.statSync(filePath).isDirectory()) {
					deleteEmptySubfoldersRecursively(filePath);
					if (isDirectoryEmpty(filePath)) {
						fs.rmdirSync(filePath);
						console.log(`Deleted empty folder: ${filePath}`);
					}
				}
			});
		}

		deleteEmptySubfoldersRecursively(dirPath);

		console.log('deleteEmptySubfolders', "Done");
	} catch (error) {
		console.log(error.message);
	}
}

// hàm upload CV
export const uploadCV = async (folder, file, time, type) => {
	const path1 = `./upload/${folder}/`;
	const filePath = `./upload/${folder}/${time}_${file.name}`;
	const fileCheck = path.extname(filePath);
	if (['.jpg', '.png', '.jpeg', '.gif', '.pdf', '.doc', '.docx'].includes(fileCheck.toLocaleLowerCase()) === false) {
		return false;
	}
	if (!fs.existsSync(path1)) {
		fs.mkdirSync(path1, { recursive: true });
	}
	fs.readFile(file.path, (err, data) => {
		if (err) {
			console.log(err);
			return false;
		}
		fs.writeFile(filePath, data, (err) => {
			if (err) {
				return false;
			} else if (type === 1) {
				fs.rename(`./upload/${folder}/${file.name}`, `./upload/${folder}/cv_${time}${fileCheck}`, function (err) {
					if (err) return false;
				});
				return `upload/${folder}/cv_${time}${fileCheck}`;
			}
		});
	});
	return `upload/${folder}/${time}_${file.name}`;
};

// hàm gọi api axios che thông tin CV
export const hideInfoCV = async (id, link, UserCvUpload) => {
	try {
		// let link = ''
		const data = JSON.stringify([{ id: id, link: encodeURI(link) }]);
		// console.log(data)
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'http://43.239.223.148:8011/hide_cv_vieclamhay',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data
		};
		await axios.request(config)
			.then(async (response) => {
				console.log('đây là data trả về',response.data)
				const element = response.data[0];
				if (element && element.link) {
					await UserCvUpload.findOneAndUpdate({ id_upload: element.id }, {
						link_scan: element.link,
						scanned: 1
					});
					link = element.link
				}
			})
			.catch((error) => {
				console.log('lỗi ảnh rồi :',error.message);
			});

		return ''
	} catch (error) {
		console.log('lỗi gì gì đó :' ,error.message)
		return '';
	}

};

// hàm random String
export const randomString = (length) => {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

// hàm lấy năm tháng ngày chuyển về dạng yyyy/mm/dd
export const getDate = (date) => {
	let time;
	if (date) {
		time = new Date(date).toISOString().slice(0, 10).replaceAll('-', '/');
	} else {
		time = new Date().toISOString().slice(0, 10).replaceAll('-', '/');
	}
	return time;
};

// hàm render pdf 
export const renderPdfFromUrl = async (link, userID, idCV) => {
	let returnData = false
	const browser = await puppeteer.launch({
		headless: 'chrome',
		args: [
			'--no-sandbox',
			'--disabled-setupid-sandbox',
			'--font-render-hinting=none',
			'--force-color-profile=srgb',
			'--disable-web-security',
			// '--disk-cache-size=0',
		],
		// defaultViewport: null,
		ignoreHTTPSErrors: true,
	});

	const page = await browser.newPage();
	try {
		const session = await page.target().createCDPSession();
		// const session = await page.createCDPSession();
		await session.send('DOM.enable');
		await session.send('CSS.enable');
		const website_url = link;
		// Open URL in current page
		// await page.setViewport({ width: 1920, height: 1080 });
		await page.goto(website_url, { waitUntil: ['load', 'domcontentloaded', 'networkidle0'] }); // 2s, font hiển thị đúng
		// await page.reload({ waitUntil: ['load', 'domcontentloaded', 'networkidle0'] });
		await page.waitForSelector('#loadingDone');
		// await page.waitForSelector('')
		await page.emulateMediaType('print');
		await page.evaluateHandle('document.fonts.ready');

		// Downlaod the PDF
		const pdf = await page
			.pdf({
				margin: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
				printBackground: true,
				// preferCSSPageSize: true,
				// scale: 0.5
			})
			.then(function (data) {
				return data;
			});
			// userName = createLinkTilte(userName) != '' ? createLinkTilte(userName) : `ung-vien`;
			const path1 = `./dowload/cv_pdf/user_${userID}/cvid_${idCV}`;
		const filePath = `./dowload/cv_pdf/user_${userID}/cvid_${idCV}/${idCV}-topcv1s.pdf`;
		if (!fs.existsSync(path1)) {
			fs.mkdirSync(path1, { recursive: true });
		}
		fs.writeFile(filePath, pdf, (err) => {
			if (err) {
				// return false;
				returnData = false
			} else {
				returnData = true
			}
			// console.log('pdf success')
		});
	} catch (e) {
		console.log('renderPdfFromUrl', 'link', link, '\n', e)
		// return false;
		returnData = false
	} finally {
		if (page) {
			await page.close()
		}
		if (browser) {
			await browser.close();
		}
	}

	return returnData
};

// hàm render file ảnh
export const renderImageFromUrl = async (link, path1, filePath) => {
	let returnData = false
	const docHeight = () => {
		const body = document.body;
		const html = document.documentElement;
		return Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
	};
	const browser = await puppeteer.launch({
		headless: 'chrome',
		args: [
			'--no-sandbox',
			'--disabled-setupid-sandbox',
			'--font-render-hinting=none',
			'--force-color-profile=srgb',
			'--disable-web-security',
		],
		// defaultViewport: null,
		ignoreHTTPSErrors: true,
	});

	const page = await browser.newPage();
	try {
		const website_url = link;
		// Open URL in current page
		await page.goto(website_url, { waitUntil: ['domcontentloaded', 'networkidle0'] }); // 2s, font hi?n th? d�ng
		const height = await page.evaluate(docHeight);
		// await page.setViewport({ width: 1500, height: height })
		//To reflect CSS used for screens instead of print
		await page.emulateMediaType('screen');
		await page.waitForSelector('#loadingDone');

		// await page.waitForNavigation({ waitUntil: ["domcontentloaded", "networkidle0"] })
		const image = await page.screenshot({
			height: `${height}px`,
			fullPage: true,
			margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		});
		// await browser.close();

		if (!fs.existsSync(path1)) {
			fs.mkdirSync(path1, { recursive: true });
		}
		fs.writeFile(filePath, image, (err) => {
			if (err) {
				// return false;
				returnData = false
			} else {
				returnData = true
			}
			// console.log('image success')
		});
	} catch (e) {
		console.log('renderImageFromUrl', 'link', link, '\n', e)
		// return {
		// 	result: false,
		// 	message: e.message,
		// };
		returnData = false
	} finally {
		if (page) {
			await page.close()
		}
		if (browser) {
			await browser.close()
		}
	}
	console.log('xong ảnh rồi')

	return returnData
};

// hàm lấy thời gian giây
export const getTime = (time) => {
	let result = 0;
	if (time) {
		result = Math.round(new Date(time).getTime() / 1000);
	} else {
		result = Math.round(new Date().getTime() / 1000);
	}
	return result;
};

// hàm gọi api xử lí ứng viên đăng kí lỗi sang CRM
export const callApiUVError = async (data, id) => {
	try {
		data.from = `uv365com`;
		const result = await getDataAxios(`${process.env.API_REGISTER_FAIL_CRM}/api/customer/edit/${id}`,
			data, tokenCRM);
		return result;
	} catch (error) {
		return null;
	}
};

// hàm gọi api xử lí ứng viên đăng kí lỗi sang CRM
export const callApiAddUVError = async (data, id) => {
	try {
		data.from = `uv365com`;
		data.link_multi = `https://work247.vn/admin/modules/user/edit_tmp.php?type=tv365com&record_id=${id}`;
		if (!data.name) data.name = `Chưa cập nhật`;
		if (!data.address) data.address = `Chưa cập nhật`;
		data.city = 0;
		data.district = 0;
		data.type = 2;
		data.group = 200;
		data.status = 12;
		data.resoure = 3;
		data.email = '';
		data.id_cus_from = id;

		const result = await getDataAxios(`${process.env.API_REGISTER_FAIL_CRM}/api/customer/add`,
			data, tokenCRM);
		return result;
	} catch (error) {
		return null;
	}
};

// hàm so sánh thời gian hiện tại
export const checkDate = (date) => {
	return (new Date(date).getTime() < new Date().getTime());
};

// hàm render cv ứng viên đã tạo
export const getCV = (id, name_cv) => {
	return `${process.env.DOMAIN_API}/upload/cv_uv/uv_${id}/${name_cv}`;
};

// hàm lấy token nếu có
export const getTokenUser = async (req) => {
	try {
		if (req.headers && req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			const result = jwt.decode(token).data;
			return result.use_id ? result.use_id : result.usc_id;
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};


export const getTokenJustUser = async (req) => {
	try {
		if (req.headers && req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			const result = jwt.decode(token).data;
			return result.use_id ? result.use_id : null;
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};

// hàm render pdf 
export const renderLetterPdfFromUrl = async (link, filePath) => {
	try {
		const browser = await puppeteer.launch({
			headless: 'chrome',
			args: [
				'--no-sandbox',
				'--disabled-setupid-sandbox',
				'--font-render-hinting=none',
				'--force-color-profile=srgb',
				'--disable-web-security',
			],
		});
		const page = await browser.newPage();
		const session = await page.target().createCDPSession();
		await session.send('DOM.enable');
		await session.send('CSS.enable');
		const website_url = link;
		// Open URL in current page
		await page.goto(website_url, { waitUntil: 'networkidle2' }); // 2s, font hiển thị đúng
		await page.emulateMediaType('screen');
		await page.evaluateHandle('document.fonts.ready');
		// Downlaod the PDF
		const pdf = await page
			.pdf({
				margin: {
					top: '50px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
				printBackground: true,
			})
			.then(function (data) {
				return data;
			});
		await browser.close();

		fs.writeFile(filePath, pdf, (err) => {
			if (err) {
				return false;
			}
		});
	} catch (e) {
		return false;
	}
};

// hàm render avatar Ứng viên
export const getAvatarCandi = (time, use_logo) => {
	if (use_logo) {
		const date = getDate(time * 1000);
		return `${process.env.DOMAIN_API}/pictures/${date}/${use_logo}`;
	}
	return '';
};

// body mail xem ứng viên
export const bodyMailViewCandidateInformation = (name, namecom, text, lists_job) => {
	return `<!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml">
 
 <head>
	 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	 <title>Xác thực đăng ký ứng viên</title>
	 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	 <meta name="robots" content="noindex,nofollow" />
 </head>
 
 <body style="width: 100%;background-color: #eeeeee;padding: 0;margin: 0;font-family: Aria Regular,sans-serif;padding-top: 20px;padding-bottom: 20px;color: #000">
	 <table style="width: 600px;margin: 0 auto;border-collapse: collapse;">
		 <tr>
			 <td>
				 <table width="100%" style="background: #fff;border-collapse: collapse;" cellpadding="0" cellspacing="0">
					 <tr>
						 <td style="padding-top:18px;padding-right:20px;text-align: right;">
							 <img width="135px" height="50px" src="https://work247.vn/images/logo_new_white.png" alt="Tìm việc làm nhanh">
						 </td>
					 </tr>
					 <tr>
						 <td style="padding: 40px 25px 0;">
							 <table width="100%" cellpadding="0" cellspacing="0">
								 <tr>
									 <td style="padding-bottom:30px">
										 <i style="color:#04111d;font-weight: 600;font-size: 20px;">Xin chào <span style="color:#2767a5">${name}</span> !!!</i>
									 </td>
									 <tr>
										 <td style="line-height: 22px;font-size: 17px;color:#030f1b;padding-bottom: 30px;">Cám ơn bạn đã tin tưởng <a style="color: #f89700">Work247.vn</a> là cầu nối giúp bạn tìm kiếm công việc mong muốn.</td>
									 </tr>
									 <tr>
										 <td style="line-height: 22px;font-size: 17px;color:#030f1b"><span style="color:#2767a5">Hồ sơ của bạn</span> trên website Work247.vn đã được
											 ${namecom} xem.
												 ${text}
										 </td>
									 </tr>
									 ${lists_job}
							 </table>
						 </td>
						 </tr>
						 <tr style="background-image: url('https://work247.vn/images/fotter_mail.png');background-size: 100% 100%;background-repeat: no-repeat;">
							 <td style="padding-left: 30px;">
								 <table width="100%" cellpadding="0" cellspacing="0">
									 <tr>
										 <td style="padding-bottom: 10px;font-size: 17px;color:#040f1a;font-weight: 600;">Liên hệ với bộ phận hỗ trợ</td>
									 </tr>
									 <tr>
										 <td style="padding-bottom: 10px;color: #2196f3;font-size:16px;font-weight: 600">
											 <img width="27px" height="27px" style="vertical-align: middle;" src="https://work247.vn/images/mail_phone.png" alt="Hotline"> 0971.335.869 | 024 36.36.66.99
										 </td>
									 </tr>
									 <tr>
										 <td style="padding-bottom: 30px;font-size: 17px;color:#040f1a;font-weight: 600;">
											 Trân trọng!
										 </td>
									 </tr>
								 </table>
							 </td>
						 </tr>
				 </table>
			 </td>
			 </tr>
			 <tr>
				 <td>
					 <table width="100%" cellspacing="0" cellpadding="0">
						 <tr>
							 <td style="font-weight:600;padding-top: 30px;padding-bottom:10px;text-align: center;font-size: 17px;"><b>Chú ý:</b> Đây là mail tự động không nhận mail phản hồi</td>
						 </tr>
					 </table>
				 </td>
			 </tr>
	 </table>
 </body>
 
 </html>`;
};

// mức lương
export const ViewSalary = (params) => {
	const result = [
		{ 0: "Chọn mức lương" },
		{ 1: "Thỏa thuận" },
		{ 2: "1 triệu - 3 triệu" },
		{ 3: "3 triệu - 5 triệu" },
		{ 4: "5 triệu - 7 triệu" },
		{ 5: "7 triệu - 10 triệu" },
		{ 6: "10 triệu - 15 triệu" },
		{ 7: "15 triệu - 20 triệu" },
		{ 8: "20 triệu - 30 triệu" },
		{ 9: "Trên 30 triệu" },
		{ 10: "Trên 50 triệu" },
		{ 11: "Trên 100 triệu" }].find((item, key) => key == params);
	if (result) return result[`${params}`];
};

// hàm so sánh thời gian
export const CompareTime = (conditions, fields, from_date, to_date) => {
	if (from_date) conditions[fields] = { $gt: getTime(from_date) };
	if (to_date) conditions[fields] = { $lt: getTime(to_date) };
	if (from_date && to_date) conditions[fields] = { $gt: getTime(from_date), $lt: getTime(to_date) };
};

export const checkFbToken = () => {
	return async (req, res, next) => {
		try {
			const authHeader = req.headers['authorization'];
			const token = authHeader && authHeader.split(' ')[1];
			const key = req.body.key;
			if (!token) {
				// return res.status(400).json({ message: 'Missing token' });
				setError(res, 'Missing token', 400)
			} else
				if (!key) {
					// return setError(res, 'Missing data')
					setError(res, 'Missing data', 400)
				} else {
					const __filename = fileURLToPath(import.meta.url);
					const __dirname = dirname(__filename);
					const path = `${__dirname}/fb_keys/${key}.json`;
					const relativePath = `./fb_keys/${key}.json`
					// Check file
					fs.access(path, fs.constants.F_OK | fs.constants.R_OK, async (err) => {
						if (err) {
							console.log(err)
							setError(res, 'Key file không chính xác', 400)
						} else {
							const { default: serviceAccount } = await import(relativePath, { assert: { type: 'json' } })
							admin.initializeApp({
								credential: admin.credential.cert(serviceAccount)
							});

							admin.auth().verifyIdToken(token)
								.then(decodedToken => {
									req.user = decodedToken; // Attach decoded user information to the request object
									next();
									// success(res, 'Test', decodedToken)
								})
								.catch(error => {
									console.log('Error verifying Firebase ID token:', error);
									setError(res, 'Unauthorized', 400)
								});
						}
					})
				}
		} catch (error) {
			console.log(error.message)
			setError(res, 'Có lỗi xảy ra', 500)
		} finally {
			if (admin.apps.length > 0) {
				admin.app().delete()
			}
		}

	}
}

export const checkAllowNoAuth = async (use_id) => {
	try {
		const userNoAuth = await UserTempNoAuth.findOne({ use_id: use_id }).lean()
		if (userNoAuth) {
			// Chỉ cho phép trong ngày hôm đó
			const create_time = new Date(userNoAuth.createdAt)
			create_time.setHours(0, 0, 0, 0)
			const now = new Date()
			now.setHours(0, 0, 0, 0)
			// console.log(create_time, now, create_time === now)
			if (getTime(now) === getTime(create_time)) {
				return true
			}
		}
		return false
	} catch (error) {
		return false
	}
}

export const uploadVideo = async (folder, file, time) => {
	const path1 = `./upload/${folder}/`;
	const filePath = `./upload/${folder}/${time}_${file.name}`;
	const fileCheck = path.extname(filePath);
	if (['.mp4'].includes(fileCheck.toLocaleLowerCase()) === false) {
		return false;
	}
	if (!fs.existsSync(path1)) {
		fs.mkdirSync(path1, { recursive: true });
	}
	fs.readFile(file.path, (err, data) => {
		if (err) {
			console.log(err);
			return false;
		}
		fs.writeFile(filePath, data, (err) => {
			if (err) {
				return false;
			}
		});
	});
	return `upload/${folder}/${time}_${file.name}`;
}

export const getUserType = async (req) => {
	try {
		if (req.headers && req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			const result = jwt.decode(token).data;
			return result.type ? result.type : null;
		} else {
			return null;
		}
	} catch (error) {
		return null
	}
}

export const uploadBlogImg = async (folder, file, time) => {
	const path1 = `./pictures/${folder}/`;
	const filePath = `./pictures/${folder}/${time}_${file.name}`;
	const fileCheck = path.extname(filePath);
	if (['.jpg', '.png', '.jpeg'].includes(fileCheck.toLocaleLowerCase()) === false) {
		return false;
	}
	if (!fs.existsSync(path1)) {
		fs.mkdirSync(path1, { recursive: true });
	}
	fs.readFile(file.path, (err, data) => {
		if (err) {
			console.log(err);
			return false;
		}
		fs.writeFile(filePath, data, (err) => {
			if (err) {
				return false;
			}
		});
	});
	return `${folder}/${time}_${file.name}`;
}

export const checkAdminToken = () => {
	return async (req, res, next) => {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		if (!token) {
			return res.status(402).json({ message: 'Missing token' });
		}
		jwt.verify(token, process.env.NODE_SERCET, async (err, user) => {
			if (err) {
				return res.status(402).json({ message: 'Invalid token' });
			}
			if (user.data.type == 3) {
				req.adminID = user.data.adm_id
				req.type = 3
			} else {
				return setError(res, 'Vui lòng đăng nhập tài khoản admin')
			}
			next();
		})
	}
}

export const safeJSONparse = (jsonStr) => {
	try {
		const result = JSON.parse(jsonStr)
		return result
	} catch (error) {
		console.log('Lỗi JSON parse: ', jsonStr?.length > 200 ? jsonStr.substring(0, 200) : jsonStr)
		return {}
	}
}

export const renderPdfFromUrlNew = async (link) => {
	let returnData = false
	const browser = await puppeteer.launch({
		headless: 'chrome',
		args: [
			'--no-sandbox',
			'--disabled-setupid-sandbox',
			'--font-render-hinting=none',
			'--force-color-profile=srgb',
			'--disable-web-security',
			// '--disk-cache-size=0',
		],
		// defaultViewport: null,
		ignoreHTTPSErrors: true,
	});

	const page = await browser.newPage();
	try {
		const session = await page.target().createCDPSession();
		// const session = await page.createCDPSession();
		await session.send('DOM.enable');
		await session.send('CSS.enable');
		const website_url = link;
		// Open URL in current page
		// await page.setViewport({ width: 1920, height: 1080 });
		await page.goto(website_url, { waitUntil: ['load', 'domcontentloaded', 'networkidle0'] }); // 2s, font hiển thị đúng
		// await page.reload({ waitUntil: ['load', 'domcontentloaded', 'networkidle0'] });
		await page.waitForSelector('#loadingDone');
		// await page.waitForSelector('')
		await page.emulateMediaType('print');
		await page.evaluateHandle('document.fonts.ready');
		function delay(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		}
		//chờ 1,5s cho font chữ tải xong
		await delay(1500);
		let pdf = await page
			.pdf({
				margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
				printBackground: true,
				format: "A4",
			})
			.then(function (data) {
				console.log('đã in xong')
				return data;
			});
		// await browser.close();
		// return {
		// 	result: true,
		// 	file: pdf,
		// };
		returnData = {
			result: true,
			file: pdf,
		}
	} catch (e) {
		console.log('renderPdfFromUrlNew', 'link', link, '\n', e);
		// return {
		// 	result: false,
		// 	message: e.message,
		// };
		returnData = {
			result: false,
			message: e.message,
		}
	} finally {
		if (page) {
			await page.close()
		}
		if (browser) {
			await browser.close()
		}
	}

	return returnData
};

// Link title kĩ hơn 
export const createLinkTilte2 = (str) => {
	try {
		if (!str) return "";
		return createLinkTilte(str).replace(/[^a-zA-Z0-9\-]/g, '').replace(/-+/g, '-');
	} catch (error) {
		return ""
	}
}

// Regex tiếng việt
export function toLowerCaseNonAccentVietnamese(str) {
	if (!str) return ""
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
	str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
	str = str.replace(/-/g, "");
	return str;
}
export const allVietnameseRegex = (str) => {
	try {
		if (!str) return ""
		return toLowerCaseNonAccentVietnamese(str)
			.replace(/a/g, '[aàáạảãâầấậẩẫăằắặẳẵAÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]')
			.replace(/e/g, '[eèéẹẻẽêềếệểễEÈÉẸẺẼÊỀẾỆỂỄ]')
			.replace(/i/g, '[iìíịỉĩIÌÍỊỈĨ]')
			.replace(/o/g, '[oòóọỏõôồốộổỗơờớợởỡOÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]')
			.replace(/u/g, '[uùúụủũưừứựửữUÙÚỤỦŨƯỪỨỰỬỮ]')
			.replace(/y/g, '[yỳýỵỷỹYỲÝỴỶỸ]')
			.replace(/d/g, '[dđDĐ]')
	} catch (error) {
		return ""
	}
}

export const getNewTagFromXlsx = () => {
	try {
		const filePath = './services/data_category_city_joblike.xlsx';
		const fileBuffer = fs.readFileSync(filePath);
		// Read the Excel file
		const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

		// Assuming you want to read data from the second sheet
		const sheetName = workbook.SheetNames[1]; // Index 1 for the second sheet

		const sheet = workbook.Sheets[sheetName];

		// Convert the sheet to JSON object, ignoring the first row (header)
		const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

		// Create an array of objects with data from the second and third columns
		const dataArray = data.slice(1).map((row) => {
			return {
				tag: row[1], // Second column
				job: createLinkTilte2(row[2])  // Third column
			};
		});
		return dataArray;

	} catch (error) {
		console.log(error.message);

		return []
	}
}

export const getCateFromXlsx = () => {
	try {
        const filePath = './services/Data_Cate_Philippine.xlsx';
        const fileBuffer = fs.readFileSync(filePath);

        const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0]; 
        const sheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dataArray = data.slice(1).map((row) => {
			return {
				cat_name_vn: row[4], 
				cat_alias_vn: createLinkTilte2(row[4]) ,
				cat_count : row[3],
				cat_name: row[5] ,
				cat_alias: createLinkTilte2(row[5]) ,
			};
		});
		return dataArray;

    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getTagCateFromXlsx = () => {
	try {
        const filePath = './services/Data_Cate_Philippine.xlsx';
        const fileBuffer = fs.readFileSync(filePath);

        const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const result = [];
        let currenttag = '';

        data.slice(1).forEach(row => {
            const tag_cate_id = row[0];
            const tag_vn = row[1] ? row[1].trim() : '';
            const tag_name = row[2] ? row[2].trim() : '';

            if (tag_cate_id) {
                currenttag= tag_cate_id;
                result.push({
                    tag_cate_id: currenttag,
                    tag_vn: [],
					tag_name :[],
                });
            }

            if (tag_vn && tag_name) {
                const tagObj = result.find(p => p.tag_cate_id === currenttag);
                tagObj.tag_vn.push(tag_vn);
                tagObj.tag_name.push(tag_name);
            }
        });

        return result;

    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getCityDistrictPhilippinesFromXlsx = () => {
	try {
        const filePath = './services/Data_Cate_Philippine.xlsx';
        const fileBuffer = fs.readFileSync(filePath);

        const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[2];
        const sheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const result = [];
        let currentProvince = '';

        data.slice(1).forEach(row => {
            const province = row[1];
            const district = row[2];

            if (province) {
                currentProvince = province;
                result.push({
                    province: currentProvince,
                    districts: []
                });
            }

            if (district) {
                const provinceObj = result.find(p => p.province === currentProvince);
                provinceObj.districts.push(district);
            }
        });

        return result;

    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const checkAlias = async (str, excludeId) => {
	try {
		if (!str) {
			return ''
		}

		const linkStr = `${createLinkTilte2(str)}`
		// Check trùng alias với 
		// Trang cố định 
		const fix_page = [
			'dang-nhap',
			'dang-ky',
			'dang-ky-ung-vien',
			'dang-ky-nha-tuyen-dung',
			'dang-nhap-nha-tuyen-dung',
			'dang-nhap-ung-vien',
			'quen-mat-khau',
			'quen-mat-khau-nha-tuyen-dung',
			'doi-mat-khau-nha-tuyen-dung',
			'otp',
			'dang-ky-tai-cv',
			'tim-ung-vien',
			'tim-kiem-tin-tuc',
			'cv-xin-viec',
			'tim-viec-lam',
			'tin-tuc',
			'quan-ly-nha-tuyen-dung',
		]

		const fix_index = fix_page.findIndex((item) => item == linkStr)
		if (fix_index != -1) {
			return `${process.env.DOMAIN_API_TIMVIECHAY}/${fix_page[fix_index]}`
		}

		const fix_page_multi = [
			'cv-xin-viec',
			'tim-viec-lam',
		]

		const fix_index_multi = fix_page_multi.findIndex((item) => item == linkStr || linkStr.startsWith(item))
		if (fix_index_multi != -1) {
			return `Link start with ${fix_page_multi[fix_index_multi]}`
		}

		// page dynamic
		// tinh thanh, nganh nghe, tag
		// if (linkStr.startsWith('tim-viec-lam')) {
		// 	const page_multi = []
		// 	const nganhngheAlias = await Category.distinct('cat_alias')
		// 	const tinhThanhAlias = await City.distinct('cit_alias')
		// 	const tagAlias = getNewTagFromXlsx().map((item) => createLinkTilte2(item.tag))

		// 	for (let i = 0; i < nganhngheAlias.length; i++) {
		// 		const nganhnghe = nganhngheAlias[i];
		// 		page_multi.push(`tim-viec-lam-${nganhnghe}`)
		// 		for (let i = 0; i < tinhThanhAlias.length; i++) {
		// 			const tinhthanh = tinhThanhAlias[i];
		// 			page_multi.push(`tim-viec-lam-tai-${nganhnghe}-tai-${tinhthanh}`)
		// 		}
		// 	}
		// 	for (let i = 0; i < tinhThanhAlias.length; i++) {
		// 		const tinhthanh = tinhThanhAlias[i];
		// 		page_multi.push(`tim-viec-lam-tai-tai-${tinhthanh}`)
		// 	}
		// 	for (let i = 0; i < tagAlias.length; i++) {
		// 		const tag = tagAlias[i];
		// 		page_multi.push(`tim-viec-lam-${tag}`)
		// 		for (let i = 0; i < tinhThanhAlias.length; i++) {
		// 			const tinhthanh = tinhThanhAlias[i];
		// 			page_multi.push(`tim-viec-lam-tai-${tag}-tai-${tinhthanh}`)
		// 		}
		// 	}

		// 	const page_multi_index = page_multi.findIndex((item) => item == linkStr)
		// 	if (page_multi_index != -1) {
		// 		return `${process.env.DOMAIN_API_TIMVIECHAY}/${page_multi[page_multi_index]}`
		// 	}
		// }

		// cv
		// if (linkStr.startsWith('mau-cv-xin-viec')) {
		// 	const page_multi = []
		// 	const nganhNgheCvAlias = await NganhCv.distinct('alias')
		// 	const ngonNguAlias = await LanguageCv.distinct('alias')
		// 	for (let i = 0; i < nganhNgheCvAlias.length; i++) {
		// 		const nganhnghe = nganhNgheCvAlias[i];
		// 		page_multi.push(`mau-cv-xin-viec-${nganhnghe}`)
		// 	}
		// 	for (let i = 0; i < ngonNguAlias.length; i++) {
		// 		const ngonngu = ngonNguAlias[i];
		// 		page_multi.push(`mau-cv-xin-viec-${ngonngu}`)
		// 	}

		// 	const page_multi_index = page_multi.findIndex((item) => item == linkStr)
		// 	if (page_multi_index != -1) {
		// 		return `${process.env.DOMAIN_API_TIMVIECHAY}/${page_multi[page_multi_index]}`
		// 	}
		// }

		// công ty 
		const checkCom = await UserCompany.findOne({
			usc_alias: linkStr,
			...(excludeId && !isNaN(Number(excludeId)) && { usc_id: { $ne: Number(excludeId) } })
		})
		if (checkCom) {
			return `${process.env.DOMAIN_API_TIMVIECHAY}/${checkCom.usc_alias}`
		}

		// tin 
		const endOfStr = linkStr.split('-').filter(item => item.trim() != '').pop()
		console.log(endOfStr)
		if (!isNaN(Number(endOfStr))) {
			return 'news link'
		}

		return ''
	} catch (error) {
		console.log('checkAlias', checkAlias);
		return ''
	}
}

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const uploadBlogFile = async (folder, file, time) => {
	try {
		const path1 = `./upload/${folder}`;
		const filePath = `./upload/${folder}/${time}_${file.name}`;
		const fileCheck = path.extname(filePath);
		if (['.doc', '.docx', '.pdf', '.xls', '.xlsx', '.txt'].includes(fileCheck.toLocaleLowerCase()) === false) {
			return false;
		}
		if (!fs.existsSync(path1)) {
			fs.mkdirSync(path1, { recursive: true });
		}
		fs.readFile(file.path, (err, data) => {
			if (err) {
				console.log(err);
				return false;
			}
			fs.writeFile(filePath, data, (err) => {
				if (err) {
					return false;
				}
			});
		});
		// return `${folder}/${time}_${file.name}`;
		return `${file.name}`;
	} catch (error) {
		console.log(error.message);
		return false
	}
}

// Await without pause
export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Xuất dữ liệu kinh nghiệm từ CV của ứng viên
 * @param {String} jsonCV Chuỗi JSON CV 
 */
export const getUvTimeExp = (jsonCV) => {
	try {
		const objectCV = safeJSONparse(jsonCV)
		let timeExp = 0
		// console.log('objectCV', objectCV);

		if (JSON.stringify(objectCV) != '{}') {

			// Lấy thông tin 
			if (objectCV?.experiences && Array.isArray(objectCV?.experiences)) {
				const exp_index = objectCV.experiences.findIndex((item) => item?.id == 'block02')
				// console.log('exp_index', exp_index);

				if (exp_index != -1) {
					const exp_data_array = objectCV.experiences[exp_index]?.content?.content
					// console.log('exp_data_array', exp_data_array);

					if (exp_data_array && Array.isArray(exp_data_array)) {
						if (exp_data_array.length > 0) {
							for (let i = 0; i < exp_data_array.length; i++) {
								const element = exp_data_array[i];
								// console.log('element', element);
								if (element?.date) {
									timeExp += calculateYearDifference(element.date)
								}
							}
						}
					}
				}
			}
		}

		return timeExp
	} catch (error) {
		console.log('updateUvTimeExpVN', error.message)
		return 0
	}
}

/**
 * Chuyển dữ liệu Thời gian từ String sang Date 
 * @param {string} dateStr Ngày tháng Năm dạng chuỗi 
 * @returns Ngày Tháng Năm dạng Date hoặc false nếu không chuyển được 
 */
function parseDate(dateStr) {
	try {
		const today = new Date();
		dateStr = dateStr.trim().toLowerCase();

		// Handle special case for "nay"
		if (dateStr === "nay") {
			return today;
		}

		// Normalize date string by replacing - with /
		dateStr = dateStr.replace(/-/g, "/");

		// Define possible date formats and their parsing logic
		const dateFormats = [
			{ regex: /^\d{1,2}\/\d{1,2}\/\d{4}$/, parse: str => new Date(str) },
			{
				regex: /^\d{1,2}\/\d{4}$/, parse: str => {
					const [month, year] = str.split('/');
					return new Date(year, month - 1);
				}
			},
			{ regex: /^\d{4}$/, parse: str => new Date(str, today.getMonth(), today.getDate()) }
		];

		for (const { regex, parse } of dateFormats) {
			if (regex.test(dateStr)) {
				return parse(dateStr);
			}
		}

		// throw new Error(`Unknown date format: ${dateStr}`);
		return false
	} catch (error) {
		console.log('parseDate', error);
		return false
	}
}

/**
 * Tính chêch lệch thời gian theo năm từ chuỗi 
 * @param {string} inputString Chuỗi thời gian đầu cuối (VD: 04/2001 - 05/2024)
 * @returns Chêch lệch theo năm (làm tròn xuống)
 */
function calculateYearDifference(inputString) {
	try {
		const dateParts = inputString.split(/\s*-\s*/);
		if (dateParts.length !== 2) {
			// throw new Error("Input should contain exactly two dates separated by '-'");
			return 0
		}

		const [startStr, endStr] = dateParts;
		// console.log('startStr', startStr);
		// console.log('endStr', endStr);

		const startDate = parseDate(startStr);
		const endDate = parseDate(endStr);

		if (!startDate || !endDate) {
			return 0
		}

		let yearsDifference = endDate.getFullYear() - startDate.getFullYear();

		// Adjust the difference based on the month and day
		if (endDate.getMonth() < startDate.getMonth() ||
			(endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate())) {
			yearsDifference--;
		}

		return yearsDifference;
	} catch (error) {
		console.log('calculateYearDifference', error);
		return 0
	}

}

export const array_muc_luong = {
	0: "Chọn mức lương",
	1: "Thỏa thuận",
	2: "1 triệu - 3 triệu",
	3: "3 triệu - 5 triệu",
	4: "5 triệu - 7 triệu",
	5: "7 triệu - 10 triệu",
	6: "10 triệu - 15 triệu",
	7: "15 triệu - 20 triệu",
	8: "20 triệu - 30 triệu",
	9: "Trên 30 triệu",
	10: "Trên 50 triệu",
	11: "Trên 100 triệu",
};

export const getMucLuong = (
	new_money_type,
	new_money_from,
	new_money_to,
	new_money,
) => {
	try {
		if (new_money_type == 0 || new_money_type == 5) {
			return new_money != 0 ? array_muc_luong[new_money] : "Thoả thuận";
		} else if (new_money_type == 1) return "Thoả thuận";
		else if (new_money_type == 2) return `Từ ${formatCurrency(new_money_from)}`;
		else if (new_money_type == 3) return `Đến ${formatCurrency(new_money_to)}`;
		else if (new_money_type == 4)
			return `${formatCurrency(new_money_from)} - ${formatCurrency(
				new_money_to
			)}`
				.replaceAll(".000.000", " triệu")
				.replaceAll("00.000", " triệu");
	} catch (error) {
		return "Chưa cập nhật";
	}
};

function formatCurrency(amount) {
	try {
		return amount.toLocaleString("vi-VN", {
			style: "currency",
			currency: "VND",
		});
	} catch (error) {
		return "Chưa cập nhật";
	}
}

export const getHanNop = (time) => {
	try {
		const currentTime = Date.now() / 1000;
		const inputTime = time;
		const tg = inputTime - currentTime;
		if (tg < 0) return "Đã hết hạn";
		if (tg < 60) {
			return `Còn ${Math.floor(tg)} giây`;
		} else if (tg >= 60 && tg < 3600) {
			return `Còn ${Math.floor(tg / 60)} phút`;
		} else if (tg >= 3600 && tg < 86400) {
			return `Còn ${Math.floor(tg / 3600)} giờ`;
		} else if (tg >= 86400 && tg < 2592000) {
			return `Còn ${Math.floor(tg / 86400)} ngày`;
		} else if (tg >= 2592000 && tg < 77760000) {
			return `Còn ${Math.floor(tg / 2592000)} tháng`;
		} else if (tg >= 77760000) {
			return `Còn ${Math.floor(tg / 77760000)} năm`;
		}
	} catch (error) {
		return "Chưa cập nhật";
	}
};

const removeVietnameseTonesTime = (str) => {
	try {
		if (!str) return ""
		str = str.toLowerCase();
		str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
		str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
		str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
		str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
		str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
		str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
		str = str.replace(/đ/g, "d");
		str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
		str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
		// str = str.replace(/-/g, "");
		return str;
	} catch (error) {
		console.log('removeVietnameseTonesTime', error.message)
	}
}

/**
 * Lấy số năm kinh nghiệm từ CV 
 * @param {Object} arrHtml Object từ JSON CV 
 * @returns Kinh nghiệm làm việc (theo năm)
 */
export const getUvTimeExp2 = (arrHtml) => {
	try {
		let cvExp = arrHtml.experiences.find((item) => item.id == 'block02' && item.status == '');
		if (cvExp) {
			let listExp = cvExp.content.content;
			// console.log(listExp)
			if (listExp.length) {
				let listYearExp = [];
				for (let itemExp of listExp) {
					let strTime = removeVietnameseTonesTime(itemExp.date),
						timeStart = 0,
						timeEnd = 0
					if (strTime && strTime.includes('-')) {
						let arrTime = strTime.split('-');
						// console.log('arrTime:', arrTime)
						if (arrTime.length == 2) {
							let strTimeStart = arrTime[0],
								strTimeEnd = arrTime[1]
							if (strTimeStart.includes('/')) {
								let arrTimeStart = strTimeStart.split('/')
								if (Number(arrTimeStart[arrTimeStart.length - 1].trim()) && Number(arrTimeStart[arrTimeStart.length - 1].trim()) > new Date().getFullYear() - 50) {
									timeStart = Number(arrTimeStart[arrTimeStart.length - 1].trim())
								}
							} else {
								if (Number(strTimeStart.trim()) && Number(strTimeStart.trim()) > new Date().getFullYear() - 50) {
									timeStart = Number(strTimeStart.trim())
								}
							}

							if (strTimeEnd.includes('/')) {
								let arrTimeEnd = strTimeEnd.split('/')
								if (Number(arrTimeEnd[arrTimeEnd.length - 1].trim()) && Number(arrTimeEnd[arrTimeEnd.length - 1].trim()) > new Date().getFullYear() - 50) {
									timeEnd = Number(arrTimeEnd[arrTimeEnd.length - 1].trim())
								}
							} else {
								if (Number(strTimeEnd.trim()) && Number(strTimeEnd.trim()) > new Date().getFullYear() - 50) {
									timeEnd = Number(strTimeEnd.trim())
								} else if (strTimeEnd.trim().toLowerCase() == 'nay' || strTimeEnd.trim().toLowerCase() == 'hien tai') {
									timeEnd = new Date().getFullYear()
								}
							}
						}
					} else {
						if (Number(strTime) && Number(strTime) > new Date().getFullYear() - 50) {
							timeStart = timeEnd = Number(strTime);
						}
					}
					if (timeStart && timeEnd) {
						//Check bỏ phần kinh nghiệm chồng chéo
						for (let i = timeStart; i <= timeEnd; i++) {
							if (i != 0 && listYearExp.indexOf(i) == -1) {
								listYearExp.push(i);
							}
						}
					}
				}
				let timeExp = listYearExp.length - 1;
				// console.log(timeExp);
				//Cập nhật kinh nghiệm
				if (timeExp) {
					return timeExp
				}
			}
		}
		return 0
	} catch (error) {
		console.log('getUvTimeExp2', error);
		return 0
	}
}

// hàm render pdf đến vị trí mới 
export const renderPdfFromUrlToDir = async (link, path1, filePath) => {
	let returnData = false
	const browser = await puppeteer.launch({
		headless: 'chrome',
		args: [
			'--no-sandbox',
			'--disabled-setupid-sandbox',
			'--font-render-hinting=none',
			'--force-color-profile=srgb',
			'--disable-web-security',
			// '--disk-cache-size=0',
		],
		// defaultViewport: null,
		ignoreHTTPSErrors: true,
	});

	const page = await browser.newPage();
	try {
		const session = await page.target().createCDPSession();
		// const session = await page.createCDPSession();
		await session.send('DOM.enable');
		await session.send('CSS.enable');
		const website_url = link;
		// Open URL in current page
		// await page.setViewport({ width: 1920, height: 1080 });
		await page.goto(website_url, { waitUntil: ['load', 'domcontentloaded', 'networkidle0'] }); // 2s, font hiển thị đúng
		// await page.reload({ waitUntil: ['load', 'domcontentloaded', 'networkidle0'] });
		await page.waitForSelector('#loadingDone');
		// await page.waitForSelector('')
		await page.emulateMediaType('print');
		await page.evaluateHandle('document.fonts.ready');

		// Downlaod the PDF
		const pdf = await page
			.pdf({
				margin: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
				printBackground: true,
				// preferCSSPageSize: true,
				// scale: 0.5
			})
			.then(function (data) {
				return data;
			});
		// await page.close()
		// await browser.close();
		// userName = createLinkTilte(userName) != '' ? createLinkTilte(userName) : `ung-vien`;
		if (!fs.existsSync(path1)) {
			fs.mkdirSync(path1, { recursive: true });
		}
		fs.writeFile(filePath, pdf, (err) => {
			if (err) {
				// return false;
				returnData = false
			} else {
				returnData = true
			}
			// console.log('pdf success')
		});
	} catch (e) {
		console.log('renderPdfFromUrl', 'link', link, '\n', e)
		// return false;
		returnData = false
	} finally {
		if (page) {
			await page.close()
		}
		if (browser) {
			await browser.close()
		}
	}

	return returnData
};

export const checkFetchFile = async (url) => {
	// try {
	// 	const res = await fetch(url);
	// 	let response = await axios.get(url);
	// 	if (response && response.data) {
	// 		// console.log("Dữ liệu trả về", response.data);
	// 		const buff = await res.blob();
	// 		return buff.type.startsWith('')
	// 	} else {
	// 		return false;
	// 	}

	// } catch (e) {
	// 	// console.log("checkImage", e);
	// 	return false;
	// }

	// New
	try {
        const res = await fetch(url);
        let response = await axios.get(url);
        if (response && response.data) { 
            if(Number(response.headers['content-length']) < 2000){
                return false;
            }
            const buff = await res.blob();
            return buff.type.startsWith('')
        } else {
            return false;
        }

    } catch (e) {
        // console.log("checkImage", e);
        return false;
    }
}

export const test = async () => {
	try {
		
	} catch (error) {
		console.log('test', error.message)
	}
}

export const randomString2 = (strInput) => {
	try {
		let seedStr = uuidv4()
		if (strInput) {
			if (Array.isArray(strInput)) {
				const formattedStrArr = strInput
					.map((item) => (
						typeof item === "string" ?
							item :
							JSON.stringify(item)
					))
					.filter((item) => !!item)
				seedStr = [seedStr, ...formattedStrArr].join("_")
			} else if (typeof strInput === "string") {
				seedStr = `${seedStr}_${strInput}`
			} else {
				seedStr = `${seedStr}_${JSON.stringify(strInput)}`
			}
		}
		return createMd5(seedStr)
	} catch (error) {
		console.log("🚀 ~ randomString2 ~ error:", error)
		return randomString(24);
	}
}

export const updateTimeTv = async (account) => {
    try {
		if(account){
			// console.log('nick nào',account)
			const config = {
				url: "https://api.timviec365.vn/api/getData/update_updateTime",
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					"Content-Type": "application/json"
				},
				data: {
					account: account,
					use_update_time: getTime(),
				}
			};
	
			let result = true;
			await axios.request(config)
				.then((res) => {
					console.log(res.data)
					result = res.data.data.data.message;
					console.log("Update time", result);
				})
				.catch((error) => {
					console.log("🚀 ~ sendOtpApi ~ error:", error?.message);
				});
	
			return result;
		}
		return true;
    } catch (error) {
        console.log("🚀 ~ sendOtpApi ~ error:", error?.message);
        return false;
    }
};