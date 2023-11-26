const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');

router.post('/create', toolController.createTool);
router.get('/list', toolController.getTools);
router.get('/:id', toolController.getToolById);
router.put('/:id/update', toolController.updateTool);
router.delete('/:id/delete', toolController.deleteTool);

module.exports = router;
