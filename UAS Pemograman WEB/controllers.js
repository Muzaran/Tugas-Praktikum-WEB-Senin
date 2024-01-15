const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Controller untuk CRUD kategori
const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });
    res.json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: {
        name,
      },
    });
    res.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    const deletedCategory = await prisma.category.delete({
      where: { id: categoryId },
    });
    res.json(deletedCategory);
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller untuk CRUD produk
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, stock, categoryId } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        stock,
        categoryId,
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const { name, stock, categoryId } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        stock,
        categoryId,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });
    res.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller untuk CRUD supplier
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await prisma.supplier.findMany();
    res.json(suppliers);
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSupplier = async (req, res) => {
  try {
    const { name, address } = req.body;
    const newSupplier = await prisma.supplier.create({
      data: {
        name,
        address,
      },
    });
    res.json(newSupplier);
  } catch (error) {
    console.error("Error creating supplier:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const supplierId = parseInt(req.params.id);
    const { name, address } = req.body;
    const updatedSupplier = await prisma.supplier.update({
      where: { id: supplierId },
      data: {
        name,
        address,
      },
    });
    res.json(updatedSupplier);
  } catch (error) {
    console.error("Error updating supplier:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const supplierId = parseInt(req.params.id);
    const deletedSupplier = await prisma.supplier.delete({
      where: { id: supplierId },
    });
    res.json(deletedSupplier);
  } catch (error) {
    console.error("Error deleting supplier:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller untuk CRUD transaksi pembelian produk dari supplier
const getPurchaseTransactions = async (req, res) => {
  try {
    const purchaseTransactions = await prisma.purchaseTransaction.findMany({
      include: {
        product: true,
        supplier: true,
      },
    });
    res.json(purchaseTransactions);
  } catch (error) {
    console.error("Error fetching purchase transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createPurchaseTransaction = async (req, res) => {
  try {
    const { productId, supplierId, quantity } = req.body;
    const newPurchaseTransaction = await prisma.purchaseTransaction.create({
      data: {
        productId,
        supplierId,
        quantity,
      },
    });
    res.json(newPurchaseTransaction);
  } catch (error) {
    console.error("Error creating purchase transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePurchaseTransaction = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.id);
    const { productId, supplierId, quantity } = req.body;
    const updatedPurchaseTransaction = await prisma.purchaseTransaction.update({
      where: { id: transactionId },
      data: {
        productId,
        supplierId,
        quantity,
      },
    });
    res.json(updatedPurchaseTransaction);
  } catch (error) {
    console.error("Error updating purchase transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deletePurchaseTransaction = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.id);
    const deletedPurchaseTransaction = await prisma.purchaseTransaction.delete({
      where: { id: transactionId },
    });
    res.json(deletedPurchaseTransaction);
  } catch (error) {
    console.error("Error deleting purchase transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller untuk CRUD transaksi barang/produk keluar
const getOutgoingTransactions = async (req, res) => {
  try {
    const outgoingTransactions = await prisma.outgoingTransaction.findMany({
      include: {
        product: true,
      },
    });
    res.json(outgoingTransactions);
  } catch (error) {
    console.error("Error fetching outgoing transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createOutgoingTransaction = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const newOutgoingTransaction = await prisma.outgoingTransaction.create({
      data: {
        productId,
        quantity,
      },
    });
    res.json(newOutgoingTransaction);
  } catch (error) {
    console.error("Error creating outgoing transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOutgoingTransaction = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.id);
    const { productId, quantity } = req.body;
    const updatedOutgoingTransaction = await prisma.outgoingTransaction.update({
      where: { id: transactionId },
      data: {
        productId,
        quantity,
      },
    });
    res.json(updatedOutgoingTransaction);
  } catch (error) {
    console.error("Error updating outgoing transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteOutgoingTransaction = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.id);
    const deletedOutgoingTransaction = await prisma.outgoingTransaction.delete({
      where: { id: transactionId },
    });
    res.json(deletedOutgoingTransaction);
  } catch (error) {
    console.error("Error deleting outgoing transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
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
};
