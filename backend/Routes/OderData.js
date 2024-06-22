const express = require("express");
const router = express.Router();
const Oder = require("../models/Orders");
const Orders = require("../models/Orders");

router.post("/oderData", async (req, res) => {
  let data = req.body.order_data;
  console.log(data);
  await data.splice(0, 0, { Oder_date: req.body.order_date });

  let eID = await Oder.findOne({ email: req.body.email });
  if (eID === null) {
    try {
      await Oder.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("server Error", error.message);
    }
  } else {
    try {
      await Oder.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: { $each: data } } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send("server Error", error.message);
    }
  }
});

// router.post("/myOrderData", async (res, req) => {
//   try {
//     let myData = await Oder.findOne({ email: req.body.email });
//     res.json({ orderData: myData });
//   } catch (error) {
//     res.send("server Error"+error.message);
//   }
// });

router.post("/myOrderData", async (req, res) => {
  try {
    let myData = await Orders.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
  }
});


module.exports = router;
