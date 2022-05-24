var express = require('express');
var router = express.Router();
const {index, createView, actionCreate, viewEdit, actionEdit} = require('./controller')

/* GET home page. */
router.get('/', index);
router.get('/create', createView);
router.post('/create', actionCreate);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id',actionEdit);
module.exports = router;
