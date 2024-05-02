import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
        quantity: Number
    }
    , { timestamps: true })

export default mongoose.model('Product', ProductSchema) 