const express = require('express')
const router = express.Router()
const fankaCtrl = require('../controller/fanka')


// 获取全部
router.get('/',fankaCtrl.getall)

// 获取单个
router.get('/getone/:id',fankaCtrl.getone)

// 改
router.post('/update',fankaCtrl.updatefanka)


// 增
router.post('/addfanka',fankaCtrl.addfanka)

// 删
router.get('/deletefanka/:id',fankaCtrl.deletefanka)

module.exports = router
