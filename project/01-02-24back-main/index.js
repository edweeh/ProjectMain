const express = require("express");
const cors = require("cors");
const signupRoute = require('./routes/signupRoute');
const adminRoute = require('./routes/adminRoute');
const loginRoute = require('./routes/loginRoute');
const categoryRoute = require('./routes/categoryRoute');
const db = require("./Connection/Database");

const app = express(); // Removed "new" before express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("hi database");
});

app.use("/signup", signupRoute);
// app.use("/login", loginRouter);

app.use("/admin", adminRoute);

app.use("/category", categoryRoute);




app.listen(3001, (request, response) => { // Changed from (3000, (request, response) => ...) to (3000, () => ...)
    console.log("Server is running on port 3001");
});
