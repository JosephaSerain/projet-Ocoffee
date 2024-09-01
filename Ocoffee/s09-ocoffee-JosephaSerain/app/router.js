const express = require("express");

const router = express.Router();

const coffeeController = require("./controllers/coffeeController");


router.get("/", coffeeController.showLatestCoffees);

router.get("/catalogue", coffeeController.showAllCoffees);

router.get("/cafe/:id", coffeeController.showCoffee);

router.get("/a-propos", (req, res)=> {
    res.status(200).render('a-propos');
})

router.get("/404-not-found", (req, res)=> {
    res.status(404).render('error-404');

});

module.exports = router;