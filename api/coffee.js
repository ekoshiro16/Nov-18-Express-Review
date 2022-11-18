// Steps to building a subrouter
// 1) Import everything you need
const express = require("express"); 
const { fetchAllCoffee, insertNewCoffeeBrand } = require("../db/coffee");

// 2) Create a new Express subrouter instance
    // In general, you will name this subrouter some noun that matches the purpose of this subrouter 
const coffeeRouter = express.Router(); 

// 3) Write your route handlers
coffeeRouter.get("/", async (req, res, next) => {
    try {
        const coffeeData = await fetchAllCoffee(); 

        res.send(coffeeData); 
    } catch (error) {
        console.error(error)
    }
});

coffeeRouter.post("/", async (req, res, next) => {
    try {
        console.log("This is req.body: ", req.body);
        const newCoffeeData = req.body; 

        const newCoffeeBrand = await insertNewCoffeeBrand(newCoffeeData);

        if (!newCoffeeBrand.data.length) {
            res.send({error: true, message: "Failed to create coffee"})
        } else {
            res.send({data: newCoffeeBrand, message: "Coffee created successfully!"});
        }

 
    } catch (error) {
        console.error(error); 
    }
})

// 4) Export your subrouter
module.exports = coffeeRouter; 