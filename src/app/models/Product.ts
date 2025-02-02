import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", ProductSchema);
