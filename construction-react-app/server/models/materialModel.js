import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
    itemName: String,
    bulk: {
        type: String,
        enum: ['Yes', 'No'],
    },
    price: {
        type: Number,
        validate: {
        validator: Number.isInteger,
        message: 'Price must be an integer.',
        },
    },
    type:  {
        type: String,
        enum: ['Material', 'Tool'],
    },
    condition:  {
        type: String,
        enum: ['Used', 'New'],
    },
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
    // address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    // },
    
},
{
    timestamps: true
});

const Material = mongoose.model('Material', materialSchema);

export default Material;
