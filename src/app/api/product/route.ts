import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/mongodb";
import { Product } from "../../models/Product";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Verificar que el cuerpo tenga los datos requeridos
    if (!body.name || !body.price || !body.stock) {
      return Response.json({ error: "Faltan datos requeridos" }, { status: 400 });
    }

    const newProduct = new Product({
      name: body.name,
      price: body.price,
      stock: body.stock
    });

    console.log("Producto recibido:", body);  // Para depurar

    await newProduct.save();
    
    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error al guardar el producto:", error);  // Para depurar el error
    return Response.json({ error: "Error al guardar el producto" }, { status: 500 });
  }
}

