const axios = require('axios');
const function_new = require('../function/function_new');
const functions = require('../function/functions');
const { findDistrict } = require('../function/function_new');
const { HistoryCountOTP, ConfirmOTPByAccount } = require("../function/function_api");
const FormData = require('form-data');
const { token } = require('morgan');

// function setCookie(name, value, days) {
//     const d = new Date();
//     d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }

const setCookie = (res, name, value, options = {}) => {
    res.cookie(name, value, options);
};

exports.getDataBlogAjax = async (req, res) => {
    try {
        const payload = { id: 2 };
        const response = await axios.post('http://localhost:3053/api/topcv1s/new/getBlog', payload);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};
exports.getDataHomeAjax = async (req, res) => {
    try {
        const payload = { id: 2 };
        const response = await axios.post('43.239.223.188:3053/api/topcv1s/new/Home', payload);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};
exports.getDiscByCity = async (req, res) => {
    try {
        const { id } = req.body;

        const district = await function_new.findDistrict(parseInt(id));

        res.status(200).json({ district });

    } catch (error) {
        console.error('Error in getDiscByCity:', error);
        return functions.setError(res, error.message);
    }
};

exports.getTagCate = async (req, res) => {
    try {
        const { id } = req.body;

        const response = await axios.post('http://localhost:3053/api/topcv1s/new/getTagCate', {
            id: id,
        })

        const tag = response.data.data.data

        res.status(200).json({ tag });

    } catch (error) {
        console.error('Error in getTagCate:', error);
        return functions.setError(res, error.message);
    }
}

exports.SendOTPToAccount = async (req, res) => {
    try {
        const phone = req.body.phone;
        const type = req.body.type;
        let datamess = {
            result: false,
            message: "Có lỗi xảy ra vui lòng thử lại",
        };
        let otp = function_new.renderOTP();
        const dataapi = {
            "account": phone,
            "type": type,
            "otp": otp,
            "site": "topcv1s",
        }
        // console.log(">>> dataapi: ", dataapi);
        const dataHistoryCountOTP = await HistoryCountOTP(dataapi, 5000);
        // console.log(">>> dataHistoryCountOTP: ", dataHistoryCountOTP)
        if (dataHistoryCountOTP && dataHistoryCountOTP.result) {
            datamess = {
                result: true,
                data: dataHistoryCountOTP.data,
                message: dataHistoryCountOTP.message + dataHistoryCountOTP.count,
            };
        }
        // console.log(">>> datamess: ", res.json(datamess));

        return res.json(datamess);
    } catch (error) {
        datamess = {
            result: false,
            data: '',
            message: error.message,
        };
        return res.json(datamess);
    }
};

exports.ConfirmOTPByAccount = async (req, res) => {
    try {
        const phone = req.body.phone;
        const type = req.body.type;
        const otp = req.body.otp;
        let datamess = {
            result: false,
            message: "Có lỗi xảy ra vui lòng thử lại",
        };
        const dataapi = {
            "account": phone,
            "type": type,
            "otp": otp,
            "site": "topcv1s"
        }
        const dataConfirmOTPByAccount = await ConfirmOTPByAccount(dataapi, 5000);
        // console.log(">>> dataHistoryCountOTP 2: ", dataConfirmOTPByAccount)
        if (dataConfirmOTPByAccount && dataConfirmOTPByAccount.result) {
            let rstoken = dataConfirmOTPByAccount.data;
            console.log(">>> rstoken: ", rstoken);
            setCookie(res, "accessToken", rstoken, { maxAge: 60 * 86400000 });
            datamess = {
                result: true,
                data: dataConfirmOTPByAccount.data,
                message: dataConfirmOTPByAccount.message,
            };
        }
        return res.json(datamess);
    } catch (error) {
        datamess = {
            result: false,
            data: '',
            message: error.message,
        };
        return res.json(datamess);
    }
};

exports.setError = (res, message, code = 500) => {
	return res.status(code).json({ result: false, data: null, code, error: { message } });
};