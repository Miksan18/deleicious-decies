const router = require("express").Router();
const Menu = require("../models/menu");

/* GET ALL MENU ITEMS */

router.get("/", async(req,res)=>{
    try{
        const items = await Menu.find();
        res.json(items);
    }catch(err){
        res.status(500).json(err.message);
    }
});

/* ADD MENU ITEM (Admin) */

router.post("/", async(req,res)=>{
    try{
        const item = await Menu.create(req.body);
        res.json(item);
    }catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = router;