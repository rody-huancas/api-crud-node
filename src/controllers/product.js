import Products from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.findById({ _id: id });
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const createProducts = async (req, res) => {
  try {
    const { body } = req;
    const data = await Products.create(body);
    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const data = await Products.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });

    res.json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndDelete(id);

    res.json({ msg: "Producto eliminado" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllProducts,
  createProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
