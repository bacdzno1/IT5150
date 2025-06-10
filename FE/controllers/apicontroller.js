const axios = require('axios');
const function_new = require('../function/function_new');
const functions = require('../function/functions');

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

        const response = await axios.post('http://localhost:3050/api/topcv1s/new/getTagCate', {
            id: id,
        })

        const tag = response.data.data.data

        res.status(200).json({ tag });

    } catch (error) {
        console.error('Error in getTagCate:', error);
        return functions.setError(res, error.message);
    }
}

exports.setError = (res, message, code = 500) => {
	return res.status(code).json({ result: false, data: null, code, error: { message } });
};