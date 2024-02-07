const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Product = require("../modules/product");
const fetchUser = require("../middleware/fetchUser");

router.get("/getproduct", fetchUser, async (req, res) => {
  const product = await Product.find({ user: req.user.id });
  res.send({ product });
});
router.post(
  "/createproduct",
  [body("category"), body("title"), body("price"), body("product_id")],
  fetchUser,
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ error: result.array() });
      }

      const product = new Product({
        user: req.user.id,
        category: req.body.category,
        title: req.body.title,
        price: req.body.price,
        product_id: req.body.product_id,
      });
      const allproduct = await product.save();
      res.json(allproduct);
    } catch (error) {
      //  These is the just the checking of the error we can also remove the catch block no issue with it
      res.status(500).json("Some error has been occured");
      console.log(error.message);
    }
  }
);
router.put("/deleteproduct/:id", fetchUser, async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted successfully", product });
});

module.exports = router;
