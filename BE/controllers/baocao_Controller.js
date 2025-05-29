import UserBaoCao from '../models/baocao/UserBaoCao.js';
import UserCompany from '../models/user/UserCompany.js';
import * as functions from '../services/functions.js';
import New from '../models/new/New.js';
import TblPointAdded from '../models/tbl/TblPointAdded.js';
import jwt from 'jsonwebtoken';
import CountView from '../models/baocao/CountView.js';
import NopHoSo from '../models/NopHoSo.js';
import tblDonHang from '../models/tbl/tblDonHang.js';

// Đăng nhập
export const Login = async (req, res) => {
    try {
        const {
            UserName,
            PassWord,
        } = req.body

        if (UserName && PassWord) {
            const hashedPassword = functions.createMd5(PassWord)
            const checkExist = await UserBaoCao.findOne({ UserName: UserName, PassWord: hashedPassword }, { id: 1, UserName: 1 })

            if (checkExist) {
                const Token = await functions.createToken(checkExist, '1d')
                const RefreshToken = await functions.createToken(checkExist, '1y');
                return functions.success(res, "Đăng nhập thành công", { data: { Token, RefreshToken, data: checkExist } });
            }
            return functions.setError(res, 'Tài khoản hoặc mật khẩu không chính xác', 400)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Báo cáo 
var truyCap = 0
export const BaoCao = async (req, res) => {
    try {
        const {
            X
        } = req.body
        const currentYear = X && !isNaN(Number(X)) ? Number(X) : (new Date()).getFullYear()
        const startOfYear = new Date(currentYear, 0, 1, 0, 0, 0, 0)
        const startOfYearTime = functions.getTime(startOfYear)
        const time = functions.getTime()

        const usc_valid_id = await UserCompany.distinct('usc_id', {
            // baocao: 1 
            $and: [
                {
                    usc_phone_tk: { $ne: "" }
                },
                {
                    usc_phone_tk: { $ne: null }
                },
                {
                    usc_company: { $ne: "" }
                },
                {
                    usc_company: { $ne: null }
                },

            ]
        })

        // const usc_id_add_point_promise = TblPointAdded.distinct('usc_id', { added_day: { $gte: startOfYearTime }, point: { $gt: 0 }, usc_id: { $in: usc_valid_id } })
        // const usc_id_valid_point = await TblPointCompany.distinct('usc_id', { day_end: { $gte: time } })
        // const usc_id_point = usc_id_add_point.filter(id => usc_id_valid_point.includes)
        const count_view_promise = CountView.findOne({ id: 1 })
        // const count_usc_promise = UserCompany.countDocuments({ usc_active: 1, baocao: 1 })
        // const count_usc_new_promise = UserCompany.countDocuments({ usc_active: 1, usc_create_time: { $gte: startOfYearTime }, baocao: 1 })
        const count_usc_promise = UserCompany.countDocuments({ usc_active: 1, usc_id: { $in: usc_valid_id } })
        const count_usc_new_promise = UserCompany.countDocuments({ usc_active: 1, usc_create_time: { $gte: startOfYearTime }, usc_id: { $in: usc_valid_id } })
        // const count_tin_promise = New.countDocuments({ new_active: 1, baocao: 1 })
        // const count_tin_new_promise = New.countDocuments({ new_active: 1, new_create_time: { $gte: startOfYearTime }, baocao: 1 })
        const count_tin_promise = New.countDocuments({ new_active: 1, new_user_id: { $in: usc_valid_id } })
        const count_tin_new_promise = New.countDocuments({ new_active: 1, new_create_time: { $gte: startOfYearTime }, new_user_id: { $in: usc_valid_id } })

        // const total_point_promise = TblPointAdded.aggregate([
        //     { $match: { added_day: { $gte: startOfYearTime }, point: { $gt: 0 }, usc_id: { $in: usc_valid_id } } },
        //     {
        //         $group: {
        //             _id: null,
        //             total: { $sum: '$point' }
        //         }
        //     }
        // ])

        const count_giao_dich_mien_phi_promise = NopHoSo.countDocuments({ nhs_time: { $gte: startOfYearTime }, nhs_com_id: { $in: usc_valid_id } })
        const count_giao_dich_mat_phi_promise = tblDonHang.countDocuments({ timecreate: { $gte: startOfYearTime }, usc_id: { $in: usc_valid_id } })
        const tong_gia_tri_giao_dich_promise = tblDonHang.aggregate([
            { $match: { timecreate: { $gte: startOfYearTime }, usc_id: { $in: usc_valid_id } } },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$price' }
                }
            }
        ])
        /*
        Luồng mới
        NTD tự đăng ký, tự đăng tin mới tính
        Số giao dịch 
        1. Giao dịch miễn phí: ứng viên và nhà tuyển dụng: ứng viên ứng tuyển tin đăng của nhà tuyển dụng, nhà tuyển dụng liên hệ với ứng viên ứng tuyển vào tin.
        2. Giao dịch mất phí: giữa nhà tuyển dụng và web site: nhà tuyển dụng mua gói lọc hồ sơ, gói ghim tin.
        */

        const [
            // usc_id_add_point,
            count_view,
            count_usc,
            count_usc_new,
            count_tin,
            count_tin_new,
            // total_point,
            count_giao_dich_mien_phi,
            count_giao_dich_mat_phi,
            tong_gia_tri_giao_dich,
        ] = await Promise.all([
            // usc_id_add_point_promise,
            count_view_promise,
            count_usc_promise,
            count_usc_new_promise,
            count_tin_promise,
            count_tin_new_promise,
            // total_point_promise,
            count_giao_dich_mien_phi_promise,
            count_giao_dich_mat_phi_promise,
            tong_gia_tri_giao_dich_promise,
        ])

        // const totalPoint = total_point.length > 0 ? total_point[0].total : 0

        const returnData = {
            soLuongTruyCap: count_view && count_view?.count ? count_view.count : 1,
            soNguoiBan: count_usc, // Tất cả
            soNguoiBanMoi: count_usc_new,
            tongSoSanPham: count_tin, // Tất cả 
            soSanPhamMoi: count_tin_new,
            // soLuongGiaoDich: count_giao_dich_mien_phi + count_giao_dich_mat_phi, // 0
            // tongSoDonHangThanhCong: count_giao_dich_mien_phi + count_giao_dich_mat_phi, // 0
            soLuongGiaoDich: 0,
            tongSoDonHangThanhCong: 0,
            tongSoDongHangKhongThanhCong: 0,
            // tongGiaTriGiaoDich: totalPoint * 20000,
            tongGiaTriGiaoDich: tong_gia_tri_giao_dich.length > 0 ? tong_gia_tri_giao_dich[0].total : 0,
        }

        return res.json(returnData)

    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// Thêm người dung
export const addUser = async (req, res) => {
    try {
        const {
            password
        } = req.body
        const hashedPassword = functions.createMd5(password || 'job247')
        await UserBaoCao.deleteMany({})
        await UserBaoCao.create({
            id: 1,
            UserName: 'BaocaoTMDT',
            PassWord: hashedPassword,
        })

        return functions.success(res, 'Tạo thành công')
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

// middleware check login
export const checkTokenBaoCao = () => {
    return async (req, res, next) => {
        // check token, nếu không có token thì check xem trong hàm gọi có thông tin đăng nhập không
        // Check token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        // console.log('token', token);
        if (token) {
            // return res.status(402).json({ message: 'Missing token' });
            jwt.verify(token, process.env.NODE_SERCET, async (err, user) => {
                if (err) {
                    // console.log('invalid');
                    return res.status(402).json({ message: 'Invalid token' });
                };
                // console.log('valid');
                next()
            })
        } else {
            // Nếu có cả thông tin đăng nhập trong req
            const {
                UserName,
                PassWord,
            } = req.body
            // console.log('username', UserName);
            // console.log('pass', PassWord);

            if (UserName && PassWord) {
                const hashedPassword = functions.createMd5(PassWord)
                const checkExist = await UserBaoCao.findOne({ UserName: UserName, PassWord: hashedPassword }, { id: 1, UserName: 1 })

                if (checkExist) {
                    next()
                } else {
                    return res.status(402).json({ message: 'Invalid request' });
                }
            } else {
                return res.status(402).json({ message: 'Invalid request' });
            }
        }
    }
}

export const addView = async (req, res) => {
    try {
        const checkExist = await CountView.findOne({ id: 1 });
        if (checkExist) {
            await CountView.findOneAndUpdate({ id: 1 }, { $inc: { count: 1 } })
        } else {
            await CountView.create({
                id: 1,
                count: 1
            })
        }
        return functions.success(res, 'Count')
    } catch (error) {
        return functions.setError(res, error.message)
    }
}