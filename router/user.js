const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user.js')
const {body,param,validationResult} = require('express-validator')

// 登录
router.post('/login',[
    body('usename').notEmpty().withMessage('用户名不能为空'),
    body('useid').notEmpty().withMessage('用户id不能为空'),
    body('usetype').notEmpty().withMessage('usetype不能为空')
],(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next()
},userCtrl.user_login)

// 获取当前登录用户
router.get('/',userCtrl.user)

module.exports = router