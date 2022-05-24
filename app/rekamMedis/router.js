var express = require('express');
var router = express.Router();
const {index, viewCreate, actionCreate, viewSingle, viewEdit,actionEdit} = require('./controller')

/* GET home page. */
router.get('/:id', index);
router.get('/create/:id',viewCreate);
router.get('/view/:id',viewSingle);
router.get('/edit/:id',viewEdit);
router.post('/create/:id',actionCreate);
router.put('/edit/:id',actionEdit);
module.exports = router;
