const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    itemName: String,
    itemId: String,
    condition: {
        type: String,
        enum: ['Used', 'New'],
    },
    price: {
        type: Number,
        get: (v) => v.toFixed(2),
        set: (v) => parseFloat(v.toFixed(2)),
    },
    personCheckOut: String,
    personCheckIn: String,
    dateCheckOut: {
        type: Date,
        default: Date.now,
    },
    dateCheckIn: {
        type: Date,
        default: Date.now,
    },
    amountCheckOut: {
        type: Number,
        validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer.',
        },
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
    },
    purchaseOrderNo:{
        type: Number,
        validate: {
        validator: Number.isInteger,
        message: 'Purchase order number must be an integer.',
        },
    }

});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
