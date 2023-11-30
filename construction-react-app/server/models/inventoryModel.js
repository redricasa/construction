import mongoose from 'mongoose';



const materialSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    itemName: String,
    bulk: {
        type: String,
        enum: ['Yes', 'No'],
    },
    price: {
        type: Number,
        required: [true, "price must be an integer"]
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
        required: [true, "amount purchased must be an integer"]
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    purchaseOrderNo:{
        type: Number,
        required: [true, "purchase Order Number must be an integer"]
    },
    energyScore: Number,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    
},
{
    timestamps: true
});

const Material = mongoose.model('Material', materialSchema);

export default Material;
