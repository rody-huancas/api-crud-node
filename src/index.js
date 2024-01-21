import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
