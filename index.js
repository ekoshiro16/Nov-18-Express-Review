// Building Your Express Server 

// 1) Importing (i.e. requiring) everything you need
const express = require("express");
const morgan = require("morgan");
// const client = require("./db");

// 2) Create a new Express server instance
const app = express(); 

// 3) Set up our middlewares 
app.use(morgan("dev"));
// Body parsing middleware
    // 2 types of body parsing middleware
        // 1) JSON body parser
        // 2) URLENcodedForm body parser
app.use(express.json());
app.use(express.urlencoded( { extended: false } ))

// This middleware is used to authenticate users based on an Authorization header 
// app.use(async (req, res, next) => {
//     console.log("Middleware auth function has started to run:")
//     const prefix = 'Bearer ';
//     const auth = req.header('Authorization');
    
//     if (!auth) { // nothing to see here
//         console.log("No auth header if statement triggered")
//       next();
//     } else if (auth.startsWith(prefix)) {
//       const token = auth.slice(prefix.length);
//       try {
//         const parsedToken = jwt.verify(token, JWT_SECRET);
        
//         const id = parsedToken && parsedToken.id
//         if (id) {
//           req.user = await getUserById(id);
//           next();
//         }
//         console.log("Middleware for authentication has finished.")
//       } catch (error) {
//         next(error);
//       }
//     } else {
//       next({
//         name: 'AuthorizationHeaderError',
//         message: `Authorization token must start with ${ prefix }`
//       });
//     }
//   });

// Step 4) Set up your subrouters
const coffeeRouter = require("./api/coffee"); 
app.use("/api/coffee", coffeeRouter);

// const userRouter = require("./api/user");
// app.use("/api/users", userRouter)

// request to ellesWebsite.com/api/users/login


// app.get("/users", (req, res, next) => {
//     try {
//         if (req.user) {
//             // Go and do whatever I need to do
//         } else {
//             res.send({ errorMessage: "You are not a valid user in our database."})
//         }
//     } catch (error) {
        
//     }
// })

// Last step) Make sure that your express server is connected to a port and is up and running

    // Last step a) If you've already got your DB client setup, then you'll also need to connect your db client connection as well
const client = require("./db/index");
client.connect();

app.listen(3000, () => {
    console.log("We are running on port 3000")
});