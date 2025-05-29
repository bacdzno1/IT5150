const jwt = require('jsonwebtoken');

function checkToken(typeRequired) {
    return (req, res, next) => {

        const token = req.headers.authorization?.split(' ')[1] || req.cookies.accessToken;

        if (!token) {
            res.redirect('/');
        }
    
        try {
            const decoded = jwt.decode(token);
    
            const { auth, type } = decoded.data;
            
            if (type == typeRequired) {
                if(auth == 1){
                    next();
                }
                else {
                    res.redirect('/otp');
                }
            } else {
                res.redirect('/');
            }
        } catch (err) {
            res.redirect('/');
            console.error('Invalid token:', err.message);
            res.status(401).send('Invalid token');
        }
        };
    }

    
module.exports = {checkToken};
