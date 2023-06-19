const express = require("express");
const mongodb = require("mongoose");

const productRoutes = require("./routes/products/index");

const app = express();

const port = 3000;

// const dbURL = 'mongodb+srv://Sabari:Sabari123@crud-demo.zqhuj9n.mongodb.net/?retryWrites=true&w=majority'

const { mongoDbURL } = require("./config/index");

mongodb
  .connect(mongoDbURL)
  .then(() => {
    console.log("Connected to MongoDB!");

    // Middlewares
    app.use(express.json());
    app.use("/products", productRoutes);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Failed to connect database!", err));
