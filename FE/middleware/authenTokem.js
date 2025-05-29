const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.idNTD = decoded.idNTD; // Thêm idNTD vào req
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

