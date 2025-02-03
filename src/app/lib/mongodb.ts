import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:password@localhost:27017/faketienda?authSource=admin";

if (!MONGODB_URI) {
  throw new Error("⚠️ Debes definir MONGODB_URI en tu archivo .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("📡 Usando conexión existente a MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔌 Conectando a MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "fakemanga",
      user: "user",
      pass: "naruto12",
    }).then((mongoose) => {
      console.log("✅ Conectado a MongoDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

(global as any).mongoose = cached;
