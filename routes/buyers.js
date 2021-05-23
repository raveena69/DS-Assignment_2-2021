const router = require("express").Router();
let Buyer = require("../models/Buyer");

router.route("/add").post((req, res) => {

    const itemName = req.body.itemName;
    const category = req.body.category;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    const newBuyer = new Buyer({
        itemName,
        category,
        quantity,
        price
    })

    newBuyer.save().then(() => {
        res.json("Buyer Added")
    }).catch((err) => {
        consloe.log(err);
    })

})

router.route("/").get((req, res) => {

    Buyer.find().then((buyers) => {
        res.json(buyers)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    const {itemName, category, quantity, price} = req.body;

    const updateBuyer = {
        itemName,
        category,
        quantity,
        price
    }

    const update = await Buyer.findByIdAndUpdate(userId, updateBuyer)
     .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Buyer.findByIdAndDelete(userId)
     .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).sned({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    // await Buyer.findOne(email)
    await Buyer.findById(userId)
     .then((buyer) => {
         res.status(200).send({status: "User fetched", buyer})
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({status: "Error with get user", error: err.message});
     })
})

module.exports = router;