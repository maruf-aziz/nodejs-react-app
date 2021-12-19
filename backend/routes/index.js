import express from "express";

import {
  getAllProducts,
  createProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/", createProducts);
router.patch("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
