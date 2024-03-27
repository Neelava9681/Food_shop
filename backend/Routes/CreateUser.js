const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt")



router.post(
  "/createuser",
  [
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const salt= await bcrypt.genSalt(10);
    let secPassword= await bcrypt.hash(req.body.password, salt)

    try {
      await user.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      return res.status(200).json({ success: true });
      // res.json({success:true});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  // [
  //   body("email").isEmail(),
  //   // password must be at least 5 chars long
  //   body("password", "incorrect password").isLength({ min: 5 }),
  // ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    let email = req.body.email;
    console.log(email)
    try {
      let userData = await user.findOne({ email: email });
      if (!userData) {
        return res.status(400).json({ error: "enter valid email" });
      }
      if (req.body.password !== userData.password) {
        return res.status(400).json({ error: "enter valid password" });
      }
      return res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
    }
    );

module.exports = router;
