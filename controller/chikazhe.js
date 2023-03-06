
const { run } = require('../model/index')

// 获取全部持卡者
exports.getall = async (req, res, next) => {
    try {
        const sql = `select * from table_chikazhe`
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

// 获取单个持卡者
exports.getOne = async (req, res, next) => {
    try {
        const { use_num } = req.params
        // console.log(typeof(Number(use_num)));
        // res.send(req.params)
        const sql = `select * from table_chikazhe where use_num=${Number(use_num)}`
        run(res, sql)
    } catch (error) {
        next(error)
    }
}


// 修改持卡者
exports.updateChikazhe = async (req, res, next) => {
    try {
        // const {  use_num , id, name, male, tel, address="" } = req.body
        console.log("req",req.body);
        const use_num = req.body.USE_NUM
        const id = req.body.ID
        const name = req.body.NAME || null
        const male = req.body.MALE
        const tel = req.body.TEL || null
        const address = req.body.ADDRESS || null
        const sql = `update table_chikazhe set id=${Number(id)},name='${name}',male='${male}',tel=${tel},address='${address}' where use_num = ${use_num}`
        console.log(sql);
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

// 删除持卡者
exports.deleteChikazhe = async (req, res, next) => {
    try {
        const { use_num } = req.params
        console.log(typeof (use_num))
        const sql = `DELETE from TABLE_CHIKAZHE where USE_NUM=${Number(use_num)}`
        // console.log(sql)
        run(res, sql)
    } catch (error) {
        next(error)
    } 
}


// 增加持卡者
exports.addChikazhe = async (req, res, next) => {
    try {
        let use_num = req.body.USE_NUM;
        let id = req.body.ID;
        let name = req.body.NAME || null;
        let male = req.body.MALE || null;
        let tel = req.body.TEL || null;
        let address = req.body.ADDRESS || null;
        const sql = `insert into table_chikazhe(use_num,id,name,male,tel,address)values(${Number(use_num)}, ${Number(id)}, '${name}','${male}', '${tel}', '${address}')`;
        run(res, sql);
    } catch (error) {
        next(error);
    }
}