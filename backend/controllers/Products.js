import Product from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      order: [["id", "DESC"]],
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Products Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Products Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Products Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
