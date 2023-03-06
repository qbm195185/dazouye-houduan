const { run } = require('../model/index')

exports.getall = async (req, res, next) => {
    try {
        const sql = `select * from table_fanka_info`;
        run(res, sql)
    } catch (error) {
        next(error)
    }
}


exports.getone = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sql = `select * from table_fanka_info where id=${Number(id)}`
        console.log(sql);
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

exports.updatefanka = async (req, res, next) => {
    try {
        let id = req.body.id;
        let sum = req.body.sum;
        let lock = req.body.lock||0;
        const sql = `update table_fanka_info set SUM=sum+${Number(sum)},fankalock=${Number(lock)} where id = ${Number(id)}`
        // console.log(sql);
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

exports.addfanka = async(req,res,next) =>{
    try {
        let id = req.body.id;
        let sum = req.body.sum || 0;
        let lock = req.body.lock || 0;
        const sql = `insert into table_fanka_info (ID,SUM,FANKALOCK) values (${Number(id)},${Number(sum)},${Number(lock)})`
        console.log(sql);
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

exports.deletefanka = async(req,res,next) =>{
    try {
        let {id} = req.params;
        const sql = `delete from table_fanka_info where id=${Number(id)}`
        // console.log(sql);
        run(res, sql)
    } catch (error) {
        next(error)
    }
}

exports.addfanka