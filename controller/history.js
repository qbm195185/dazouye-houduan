const { run } = require('../model/index')

exports.getall = async (req, res, next) => {
    try {
        // log(req.headers)
        const sql = `select * from table_fanka_history`
        run(res, sql)
    } catch (error) {
        next(error)
    }
}


exports.getone = async(req,res,next)=>{
    try {
        let {id} = req.params;
        const sql = `select * from table_fanka_history where id=${Number(id)}`
        run(res,sql)
    } catch (error) {
        next(error)
    }
}

exports.addone = async(req,res,next)=>{
    try {
        let id = req.body.id
        let daytime = req.body.daytime
        let sum = req.body.sum
        let op = req.body.op
        const sql = `insert into table_fanka_history(ID,DAYTIME,SUM,OP) values(${id},'${daytime}',${Number(sum)},'${op}')`
        console.log(sql);
        run(res,sql)
    } catch (error) {
        next(error)
    }
}