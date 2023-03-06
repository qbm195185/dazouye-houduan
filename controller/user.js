const { run } = require('../model/index')
const jwt = require('../util/jwt')
const { jwtSercret } = require('../config/config.default')

// 获取用户
exports.user = async (req, res, next) => {
    try {
        let usename = req.params
        const sql = `select * from table_user where usename = "${usename}"`
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

// 
exports.user_login = async (req, res, next) => {
    try {
        const { usename, useid, usetype } = req.body

        const token = await jwt.sign({
            username:usename
        },jwtSercret,{
            expiresIn:60*60*24
        })
        console.log(token)
        const sql = `select * from table_user where usename='${usename}' and useid='${useid}' and usetype=${Number(usetype)}`
        // console.log(sql);
        run(res,sql,token||null)
    } catch (error) {
        next(error)
    }
}