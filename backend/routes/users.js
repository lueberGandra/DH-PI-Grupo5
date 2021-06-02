const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/search/:searchParam/:searchValue', controller.search)
router.post('/search/:searchParam/:searchValue', controller.search)
router.post('/:id/delete', controller.delete)
router.get('/:id/recover', controller.recover)
router.post('/:id/update', controller.update)
router.get('/:id', controller.show)
router.get('/login', controller.login)
router.get('/list', controller.showAll)
router.post('/add', controller.create)

module.exports = router;
