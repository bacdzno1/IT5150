//Define functions
const { rejects } = require("assert");
const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data');
const { data } = require("jquery");

// 
const callAPI = async (url, data, token = '', timeout = 0, isFormData = false, headers) => {
    try {
        const formData = new FormData();
        if (!isFormData) {
            for (const [key, value] of Object.entries(data)) {
                if (key === 'CV' || key === 'Image' || key === "Logo" || key === "avatar") {
                    formData.append(key, value);
                } else {
                    formData.append(key, value);
                }
            }
        }
        const body = isFormData ? data : formData;
        const response = await axios.post(url, body, {
            headers: {
                ...headers,
                "authorization": token
            },
            timeout: timeout,
            contentType: false,
            processData: false,
        })
        return response;
    } catch (err) {
        const error = {
            message: err.response?.data.error.message || err,
            code: err.response?.data.code || 500,
            result: err.response?.data.result || null
        }
        throw error
    }
}
// 
const Call = async (url, data, token = '', timeout = 0, isFormData = false, headers) => {
    try {
        const response = await callAPI(url, data, token, timeout, isFormData, headers);
        return response.data;
    } catch (error) {
        throw error
    }
}

// Lưu lại lịch sử gọi OTP
async function HistoryCountOTP(dataapi, timeout) {
    try {
        const response = await Call('http://localhost:3050/api/topcv1s/user/HistoryCountOTP', dataapi, '', timeout, true);
        // console.log(">>> response: ", response);
        return response.data;
    } catch (error) {
        console.error('Lỗi rồi:', error);
        throw error;
    }
}

// Xac thực mã otp
async function ConfirmOTPByAccount(data, timeout) {
    try {
        const response = await Call('http://localhost:3050/api/topcv1s/user/ConfirmOTPByAccount', data, '', timeout, true);
        console.log(">>> response: ", response);
        return response.data;
    } catch (error) {
        console.error('Lỗi rồi:', error);
        throw error;
    }
}

module.exports = {
    HistoryCountOTP,
    ConfirmOTPByAccount
}