import Inventory from "../models/inventoryModel.js";
import asyncHandler from "express-async-handler";


// -----------  Controller function to add a new material
// @desc    create material
// @route   POST http://localhost:3000/api/inventory/create  
const createInventory = asyncHandler(async (req, res) => {
    try {
        const userId = req.user.id;
        const { bulk, type, condition, itemName,  purchaseDate, energyScore, price, quantity, purchaseOrderNo, street, city, state, zipcode} = req.body;

        const newMaterial = await Inventory.create({ user: userId, bulk, type, condition, itemName,  purchaseDate, energyScore, price, quantity, purchaseOrderNo, street, city, state, zipcode});
        res.status(201).json(newMaterial);
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            console.log('there was a validation error')
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const updateInventory = asyncHandler(async (req, res) => {
    const material = await Inventory.findById(req.params.id);
    if (material) {
        
        Object.assign(material, req.body);

        const updatedMaterial = await material.save();
        res.status(200).json(updatedMaterial);
    } else {
        res.status(404).json({ message: 'Material not found' });
    }
});



// ------------ Update material find by item ID ----------
// PUT {{baseURL}}/65646191f6f578b0f306a6c4/update
// @route http://localhost:8000/api/inventory/:id/update
// const updateInventory = asyncHandler(async (req, res) => {
//     const material = await Inventory.findById(req.params.id);
//     if (material) {
//         material.itemName = req.body.itemName || material.itemName;
//         material.bulk = req.body.bulk || material.bulk;
//         material.type = req.body.type || material.type;
//         material.purchaseDate = req.body.purchaseDate || material.purchaseDate;
//         material.energyScore = req.body.energyScore || material.energyScore;
//         material.price = req.body.price || material.price;
//         material.quantity = req.body.quantity || material.quantity;
//         material.purchaseOrderNo = req.body.purchaseOrderNo || material.purchaseOrderNo;
//         material.street = req.body.street || material.street;
//         material.city = req.body.city || material.city;
//         material.state = req.body.state || material.state;
//         material.zipcode = req.body.zipcode || material.zipcode;
//         material.condition = req.body.condition || material.condition;

//         const newMaterial = await material.save()
//         res.status(200).json({
//             _id: newMaterial._id,
//             itemName: newMaterial.itemName,
//             bulk: newMaterial.bulk,
//             type: newMaterial.type,
//             purchaseDate: newMaterial.purchaseDate,
//             energyScore: newMaterial.energyScore,
//             price: newMaterial.price,
//             quantity: newMaterial.quantity,
//             purchaseOrderNo: newMaterial.purchaseOrderNo,
//             street: newMaterial.street,
//             city: newMaterial.city,
//             state: newMaterial.state,
//             zipcode: newMaterial.zipcode,
//             condition: newMaterial.condition
//         })
//     } else {
//         res.status(400);
//         throw new Error('updateMaterial --- material not found or null')
//     }

// });

// ------------ READ material find item by ID --------------
// GET http://localhost:8000/api/inventory/:id
// @route {{baseURL}}/65646191f6f578b0f306a6c4
const getInventoryById = asyncHandler(async (req, res) => {
    const material = await Inventory.findById(req.params.id);

    if(!material) {
        res.status(400);
        throw new Error('getMaterialById--- material not found or null')
    }
    res.status(200).json(material);
});

//  ------ getAllInventoryByUser
// GET http://localhost:8000/api/inventory/get
const getAllInventoryByUser = asyncHandler(async (req, res) => {
    try {
        const allInventory = await Inventory.find({ user: req.user.id});
        res.status(200).json(allInventory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error - /get" });
    }
})

// DELETE http://localhost:8000/api/inventory/:id/delete
const deleteInventory = asyncHandler(async (req, res) => {
    const itemId = req.params.id;
    const inventoryEntry = await Inventory.findById(itemId);

    try {
        const result = await Inventory.deleteOne({ _id: itemId });
        if (result.deletedCount === 1) {
            res.json({ message: `Item id ${itemId} deleted 👍🏾` });
        } else {
            res.status(404).json({ message: 'Inventory entry not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


export { 
    createInventory, 
    getInventoryById, 
    updateInventory, 
    getAllInventoryByUser,
    deleteInventory
}
