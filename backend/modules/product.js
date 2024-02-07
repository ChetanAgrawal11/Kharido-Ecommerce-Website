const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  product_id: { type: Number, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
