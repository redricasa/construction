import Material from "../models/materialModel.js";
import asyncHandler from "express-async-handler";

// -----------  Controller function to add a new material
// @desc    create material
// @route   POST /api/material/create
const createMaterial = asyncHandler(async (req, res) => {
    try {
        // Extract data from the request body
        const { itemName, bulk, type, purchaseDate, energyScore, price, quantity, purchaseOrderNo, address, condition} = req.body;

        const newMaterial = await Material.create({itemName, bulk, type, purchaseDate, energyScore, price, quantity, purchaseOrderNo, address, condition});
        // Respond with the saved material
        res.status(201).json(newMaterial);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

});

// ------------ Update material find by item ID ----------
const updateMaterial = asyncHandler(async (req, res) => {
    const material = await Material.findById(req.params.id);
    if (material) {
        material.itemName = req.body.itemName || material.itemName;
        material.bulk = req.body.bulk || material.bulk;
        material.type = req.body.type || material.type;
        material.purchaseDate = req.body.purchaseDate || material.purchaseDate;
        material.energyScore = req.body.energyScore || material.energyScore;
        material.price = req.body.price || material.price;
        material.quantity = req.body.quantity || material.quantity;
        material.purchaseOrderNo = req.body.purchaseOrderNo || material.purchaseOrderNo;
        material.address = req.body.address || material.address;
        material.condition = req.body.condition || material.condition;

        const newMaterial = await material.save()
        res.status(200).json({
            _id: newMaterial._id,
            itemName: newMaterial.itemName,
            bulk: newMaterial.bulk,
            type: newMaterial.type,
            purchaseDate: newMaterial.purchaseDate,
            energyScore: newMaterial.energyScore,
            price: newMaterial.price,
            quantity: newMaterial.quantity,
            purchaseOrderNo: newMaterial.purchaseOrderNo,
            address: newMaterial.address,
            condition: newMaterial.condition
        })
    } else {
        res.status(400);
        throw new Error('updateMaterial --- material not found or null')
    }


    // const updatedMaterial = await Material.findByIdAndUpdate(req.params._id, req.body, {
    //     new: true,
    // })

    // res.status(200).json(updatedMaterial);

    // res.status(200).json({ message: "UPDATE material" });
});

// ------------ READ material find item by ID --------------
const getMaterialById = asyncHandler(async (req, res) => {
    
    const material = await Material.findById(req.params._id);
    console.log("get material ---> ", material);

    if(!material) {
        res.status(400);
        throw new Error('getMaterialById--- material not found or null')
    }

    res.status(200).json(material);
    // res.status(200).json({ message: "READ a material" });
});

export { createMaterial, getMaterialById, updateMaterial };
