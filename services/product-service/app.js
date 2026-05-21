const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 59
  }
];

app.get("/", (req, res) => {
  res.send("Product Service Running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Product service running on port ${PORT}`);
});
