import Material from '../models/materialModel.js';
import asyncHandler from 'express-async-handler'; 



// -----------  Controller function to add a new material
const createMaterial = asyncHandler(async (req, res) => {
    try {
        // Extract data from the request body
        const {
            itemName,bulk,location,purchaseDate,energyScore,itemId,price,quantity,purchaseOrderNo,address,
        } = req.body;
        // const materialExists = await Material.findOne({itemId});
        // Create a new Material instance
        const newMaterial = new Material({
            itemName,bulk,location,purchaseDate,energyScore,itemId,price,quantity,purchaseOrderNo,address,
        });

        // Save the new material to the database
        const savedMaterial = await newMaterial.save();

        // Respond with the saved material
        res.status(201).json(savedMaterial);
    } catch (error) {
        // Handle errors
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
