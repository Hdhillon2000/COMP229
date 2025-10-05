const express = require('express');
const router = express.Router();
const qualificationCtrl = require('../controllers/qualifications.controller');

router.get('/', qualificationCtrl.getAll);
router.post('/', qualificationCtrl.create);
router.get('/:id', qualificationCtrl.getById);
router.put('/:id', qualificationCtrl.update);
router.delete('/:id', qualificationCtrl.remove);
router.delete('/', qualificationCtrl.removeAll);

module.exports = router;
