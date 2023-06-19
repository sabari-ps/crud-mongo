const Product = require("../../models/product/product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const finalProducts = products.map((product) => ({
      id: product._id,
      productName: product.productName,
      price: product.price,
      description: product.description,
      createdAt: product.createdAt,
      category: product.category,
    }));
    res.json({
      success: true,
      message: "Products listed successfully!",
      data: {
        products: products,
      },
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save().then(() => {
      console.log("Product added successfully!");
      res.json({
        success: true,
        message: "Product created successfully!",
        data: product,
      });
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to create the product!",
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product Not Found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product found!",
        data: {
          product: product,
        },
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to get the product!",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      res.status(404).json({
        success: false,
        message: "No product found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: {
        product: product,
      },
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Failed to update the product!",
    });
  }
};
