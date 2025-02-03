import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("⚠️ Debes definir MONGODB_URI en tu archivo .env.local");
}

// Variable para almacenar la conexión y evitar múltiples conexiones
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("📡 Usando conexión existente a MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔌 Conectando a MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("✅ Conectado a MongoDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Almacenar la conexión en `global` para evitar múltiples conexiones en desarrollo
(global as any).mongoose = cached;
