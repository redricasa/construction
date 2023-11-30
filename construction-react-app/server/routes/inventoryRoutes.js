import express from 'express';
const router = express.Router();
import { 
    createInventory, 
    getInventoryById, 
    updateInventory, 
    getAllInventoryByUser} from '../controllers/inventoryController.js'; 

    // createInventory createInventory
router.post('/create', createInventory);
router.get('/:id', getInventoryById);
router.get('/get', getAllInventoryByUser);
router.put('/:id/update', updateInventory);



export default router;
