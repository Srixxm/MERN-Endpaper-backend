const express = require('express')
const router = express.Router()

const {getNews, getID, getNewsbyid, postNews} = require('../controllers/newscontroller')


router.route('/').post(postNews)

module.exports = router