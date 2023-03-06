const { verify } = require('../util/jwt')
const { jwtSercret } = require('../config/config.default')

module.exports = async (req, res, next) => {
    console.log(req.headers);
    let token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null;
    if (!token) {
        return res.status(401).end()
    }
    try {
        const decodedToken = await verify(token, jwtSercret)
        console.log('token',decodedToken)
        next()
    } catch (error) {
        return res.status(401).end()
    }
}