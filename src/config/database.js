import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected successfully to ${response.connection.host}:${response.connection.port}`
    );
  } catch (error) {
    console.log(error.message);
  }
};
