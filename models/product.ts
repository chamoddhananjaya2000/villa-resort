import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
    maxlength: [100, "Name cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide a product description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a product price"],
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Please provide a product category"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)
