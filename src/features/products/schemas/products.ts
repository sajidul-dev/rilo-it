import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
