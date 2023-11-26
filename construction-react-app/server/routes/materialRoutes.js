const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.post('/create', materialController.createMaterial);
router.get('/list', materialController.getMaterials);
router.get('/:id', materialController.getMaterialById);
router.put('/:id/update', materialController.updateMaterial);
router.delete('/:id/delete', materialController.deleteMaterial);

module.exports = router;
