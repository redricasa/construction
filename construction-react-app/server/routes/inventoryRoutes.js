import express from 'express';
const router = express.Router();
import { updateInventory,
    createInventory,
    getInventory,
    getAllInventoryByUser} from '../controllers/inventoryController.js'; 

router.post('/create', createInventory);
router.get('/:id', getInventory);
router.get('/get', getAllInventoryByUser);
router.put('/:id/update', updateInventory);



export default router;
