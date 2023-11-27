import Material from '../models/materialModel.js';
import asyncHandler from 'express-async-handler'; 



// -----------  Controller function to add a new material
// @desc    create material
// @route   POST /api/material/create 
const createMaterial = asyncHandler(async (req, res) => {
    try {
        // Extract data from the request body
        const {
            itemName,bulk,location,purchaseDate,energyScore,itemId,price,quantity,purchaseOrderNo,address,
        } = req.body;

        const newMaterial = await Material.create({
            itemName,bulk,location,purchaseDate,energyScore,itemId,price,quantity,purchaseOrderNo,address,
        });
        // Respond with the saved material
        res.status(201).json(newMaterial);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'CREATE material' });
});

// ------------ Update material find by item ID ----------
const updateMaterial = asyncHandler(async(req, res) => {
    const material = await Material.findById(req.material._id);

    res.status(200).json({ message: 'UPDATE material' });
})

// ------------ READ material find item by ID --------------
const getMaterialById = asyncHandler(async(req, res) => {
    const material = {
        _id: req.material._id,
        itemName: req.material.name,
        itemId: req.material.email,
        bulk: req.material.bulk,
        price: req.material.price,
        location: req.material.location,
        quantity:req.material.quantity,
        purchaseDate: req.material.purchaseDate,
        purchaseOrderNo: req.material.purchaseOrderNo,
        energyScore: req.material.energyScore,
        address: req.material.address
    }
    
    // res.status(200).json(material);
    res.status(200).json({ message: 'READ a material' });
})


export {
    createMaterial, 
    getMaterialById,
    updateMaterial
};
