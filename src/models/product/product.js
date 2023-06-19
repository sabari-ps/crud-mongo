const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    productName: {
        type: String,required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        max: 500,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', productSchema);