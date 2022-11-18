// This db section is used to host all database-related functions

const pg = require('pg');

const client = new pg.Client(`postgres://localhost:5432/coffee`);

// const client = new pg.Client({
//     host: "localhost",
//     port: 5432,
//     name: "coffee",
//     username: "ellieo"
// })

module.exports = client; 