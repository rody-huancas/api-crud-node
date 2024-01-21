import Router from "express";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
