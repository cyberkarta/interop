var express = require('express');
var router = express.Router();
const {index,actionLogin,actionLogout} = require('./controller')

/* GET home page. */
router.get('/', index);
router.post('/',actionLogin);
router.get('/logout', actionLogout);
module.exports = router;
