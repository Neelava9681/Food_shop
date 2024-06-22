const express = require("express");
const router = express.Router();

router.post("/foodData",(req,res)=>{
    try {
        // console.data(global.food_items)
        res.send([global.food_items, global.foodCategory])
    } catch (error) {
        console.log(error)
        res.send("server error")
    }
})

module.exports= router;