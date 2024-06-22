const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtSecret = "iMeeLdsbhdgjhewkwejg#@$"


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
  [
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   const email = req.body.email;
   const password=req.body.password;
    console.log(email)
    try {
      let userData = await user.findOne({ email: email });
      if (!userData) {
        return res.status(400).json({ error: "enter valid email" });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      const data={
        user:{
          id:userData.id
        }
      }


      const authToken = jwt.sign(data, jwtSecret)

      return res.json({ success: true, authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
    }
    );

module.exports = router;
