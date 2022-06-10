var express = require('express');
var router = express.Router();
const {index, viewSingle} = require('./controller')
const {isLoginAdmin} = require('../middleware/auth')

router.use(isLoginAdmin);
/* GET home page. */
router.get('/', index);
router.get('/view/:id',viewSingle);
module.exports = router;
