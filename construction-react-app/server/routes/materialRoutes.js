const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.post('/create', materialController.createMaterial);
router.get('/:id', materialController.getMaterialById);
router.put('/:id/update', materialController.updateMaterial);
// TODO - GET all available materials in db

module.exports = router;
