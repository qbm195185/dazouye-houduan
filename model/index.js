const { token } = require("morgan");
var oracledb = require("oracledb");
const { DB_CONFIG } = require('../config/config.default')
// const handleError = require('../middleware/error-handler')

async function run(res, sql, token) {
    let connection;
    try {
        // 连接数据库
        connection = await oracledb.getConnection(DB_CONFIG);
        const result = await connection.execute(sql, [], { autoCommit: true });
        console.log("result",result);
        formatResult(res, result, token)
    } catch (err) {
        res.json(401, err)
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                return err
            }
        }
    }
}


/**
 * 格式化sql查询的数据并返回到前端
 * @param {*} res 将整理好的数据返回到前端
 * @param {*} connection 数据库连接
 * @param {*} result sql查询后的数据
 */
async function formatResult(res, result, token) {
    try {
        const { metaData, rows, rowsAffected } = result
        if (rowsAffected) {
            res.json(200, result)
            return
        }
        let arr = []
        let total = 0
        console.log('foreach:');
        rows.forEach(item => {
            let obj = {}
            item.forEach((citem, index) => {
                obj[metaData[index].name] = citem
            })
            total = total + 1 // TOTAL为自己加的字段，数据总数
            arr.push(obj)
        })
        if (token) {
            res.json(200, {
                token: "Bearer " + token,
                total: total,
                users: arr
            })
            return
        }
        res.json(200, {
            total: total,
            users: arr
        })
    } catch (err) {
        console.error(err);
    }
}


exports.run = run