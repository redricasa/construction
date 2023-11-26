import express from 'express';
const router = express.Router();
import { createMaterial, 
    getMaterialById,
    updateMaterial} from '../controllers/materialController.js'; 

router.post('/create', createMaterial);
router.get('/:id', getMaterialById);
router.put('/:id/update', updateMaterial);
// TODO - GET all available materials in db


export default router;
