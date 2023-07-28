import mongoose from "mongoose";

export async function InitDB(dbConfig) {
  try {
    const url = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
    await mongoose.connect(url);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
