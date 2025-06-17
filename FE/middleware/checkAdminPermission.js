const jwt = require('jsonwebtoken');
const data_get = require('../function/data');

function checkPermission() {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1] || req.cookies.adminToken;
        if (!token) {
            return res.redirect('/');
        }
        try {
            const decoded = jwt.decode(token);
            if (!decoded || !decoded.data) {
                return res.redirect('/');
            }
            if (!Array.isArray(decoded.data.modules)) {
                return res.redirect('/admin/403');
            }
            const { modules } = decoded.data;
            if (decoded.data.isFullModules === 1) {
                const availableModules = decoded.data.isFullModules === 1
                    ? data_get.data_left_admin
                    : data_get.data_left_admin.filter(module =>
                        modules.includes(module.module_id)
                    );
                res.locals.module_menu = availableModules;
                next();
            } else {
                res.redirect('/admin/403');
            }
        } catch (err) {
            console.error('Invalid token:', err.message);
            res.status(401).send('Invalid token');
        }
    };
}
module.exports = { checkPermission };