const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description:{ type:String,rquired:true},
    images: { type: Array, required: true },
    brand: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
  });

productSchema.index({ description: 'text', name: 'text' });
const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;