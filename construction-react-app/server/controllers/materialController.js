const Material = require('../models/materialModel');


// Controller function to add a new material
const createMaterial = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            itemName,
            bulk,
            location,
            purchaseDate,
            energyScore,
            itemId,
            price,
            quantity,
            purchaseOrderNo,
            address,
        } = req.body;

        // Create a new Material instance
        const newMaterial = new Material({
            itemName,
            bulk,
            location,
            purchaseDate,
            energyScore,
            itemId,
            price,
            quantity,
            purchaseOrderNo,
            address,
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
};


module.exports = {
    createMaterial
};
