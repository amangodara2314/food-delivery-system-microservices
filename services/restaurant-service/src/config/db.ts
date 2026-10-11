import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

const connectDb = async (): Promise<void> => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    process.exit(1);
  }
};

const disconnectDb = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
};

export { connectDb, disconnectDb };
