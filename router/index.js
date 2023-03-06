const express = require('express')
const router = express.Router()

// 用户相关路由
router.use('/users',require('./user'))

// 持卡者相关路由
router.use('/chikazhe',require('./chikazhe'))

// 饭卡路由
router.use('/fanka',require('./fanka'))

// 消费路由
router.use('/history',require('./history'))

module.exports = router