import express from 'express';
const router = express.Router();
import { 
    createInventory, 
    getInventoryById, 
    updateInventory, 
    getAllInventoryByUser} from '../controllers/inventoryController.js'; 


router.post('/create', createInventory);
router.get('/:id', getInventoryById);
router.put('/:id/update', updateInventory);
router.get('/get', getAllInventoryByUser);



export default router;
