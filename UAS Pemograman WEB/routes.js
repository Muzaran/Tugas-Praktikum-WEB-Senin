const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getPurchaseTransactions,
  createPurchaseTransaction,
  updatePurchaseTransaction,
  deletePurchaseTransaction,
  getOutgoingTransactions,
  createOutgoingTransaction,
  updateOutgoingTransaction,
  deleteOutgoingTransaction,
} = require("./controllers");

// Rute untuk CRUD kategori
router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// Rute untuk CRUD produk
router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Rute untuk CRUD supplier
router.get("/suppliers", getSuppliers);
router.post("/suppliers", createSupplier);
router.put("/suppliers/:id", updateSupplier);
router.delete("/suppliers/:id", deleteSupplier);

// Rute untuk CRUD transaksi pembelian produk dari supplier
router.get("/purchase-transactions", getPurchaseTransactions);
router.post("/purchase-transactions", createPurchaseTransaction);
router.put("/purchase-transactions/:id", updatePurchaseTransaction);
router.delete("/purchase-transactions/:id", deletePurchaseTransaction);

// Rute untuk CRUD transaksi barang/produk keluar
router.get("/outgoing-transactions", getOutgoingTransactions);
router.post("/outgoing-transactions", createOutgoingTransaction);
router.put("/outgoing-transactions/:id", updateOutgoingTransaction);
router.delete("/outgoing-transactions/:id", deleteOutgoingTransaction);

module.exports = router;
