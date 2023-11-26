const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    itemName: String,
    itemId: String,
    bulk: Boolean,
    price: {
        type: Number,
        get: (v) => v.toFixed(2),
        set: (v) => parseFloat(v.toFixed(2)),
    },
    location: String,
    quantity: {
        type: Number,
        validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer.',
        },
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    purchaseOrderNo:{
        type: Number,
        validate: {
        validator: Number.isInteger,
        message: 'Purchase order number must be an integer.',
        },
    },
    energyScore: Number,
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
    },
    personCheckOut: String,
    dateCheckedOut: {
        type: Date,
        default: Date.now,
    }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
