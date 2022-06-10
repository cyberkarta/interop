var express = require('express');
var router = express.Router();
const {createRekamMedis, rekammedis, viewSingle} = require('./controller')

router.post('/rekammedis/create', createRekamMedis);
router.get('/rekammedis', rekammedis);
router.get('/rekammedis/:id',viewSingle);
module.exports = router;
