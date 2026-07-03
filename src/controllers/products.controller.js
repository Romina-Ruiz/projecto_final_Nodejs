import {
  createProductModel,
  getProductsModel,
  getProductByIdModel,
  updateProductModel,
  deleteProductModel,
} from "../models/product.js";



export const createProduct = async (req, res) => {
  const { title, description, price, stock } = req.body;

  if (!title || !description || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = await createProductModel({
    title,
    description,
    price,
    stock,
  });

  res.status(201).json(newProduct);
};

export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await getProductByIdModel(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, stock } = req.body;

  if (!title || !description || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const updatedProduct = await updateProductModel(id, {
    title,
    description,
    price,
    stock,
  });

  if (!updatedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await deleteProductModel(id);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({
    message: "Producto eliminado",
    product: deletedProduct,
  });
};
