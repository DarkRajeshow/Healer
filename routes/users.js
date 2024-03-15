import express from "express";
import User from "../models/User.js";
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/", async (req, res) => {
  const userData = req.body;

  console.log(userData);

  try {
    const response = await User.create(userData); // Use userData instead of body
    console.log(response);
    res.render("index", { title: 'healer.com' });
  } catch (error) {
    console.log(error);
  }
})

export default router;
