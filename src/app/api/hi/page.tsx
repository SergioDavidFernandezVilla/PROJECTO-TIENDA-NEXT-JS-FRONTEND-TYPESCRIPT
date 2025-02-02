import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../product/Product";
import { connectDB } from "@/app/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB(); // Conectar a MongoDB


  return res.status(405).json({ message: "Método no permitido" });
}
