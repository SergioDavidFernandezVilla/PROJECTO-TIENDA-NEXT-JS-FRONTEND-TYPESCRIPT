import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/mongodb";
import { Product } from "../../models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB(); // Conectar a MongoDB

  if (req.method === "GET") {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: "Error al guardar el producto" });
    }
  }

  return res.status(405).json({ message: "Método no permitido" });
}
