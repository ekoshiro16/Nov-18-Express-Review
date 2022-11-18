const client = require("./index");

async function fetchAllCoffee() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM "coffeeBrands"; 
        `)

        return rows; 
    } catch (error) {
        console.error(error); 
    }
};

async function insertNewCoffeeBrand(coffeeObj) {
    try {
        const { rows: [newCoffee] } = await client.query(`
            INSERT INTO "coffeeBrands"(name, price)
            VALUES ($1, $2)
            RETURNING *;
        `, [coffeeObj.name, coffeeObj.price]);

        return newCoffee; 
    } catch (error) {
        console.error(error); 
    }
}

module.exports = {
    fetchAllCoffee,
    insertNewCoffeeBrand
}