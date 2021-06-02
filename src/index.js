const express = require("express");
const dotenv = require("dotenv-safe");
const cors = require("cors");
const routes = require("./routes.js");

// Const app
const app = express();

// express configuration
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configure dotenv
dotenv.config();

// Routes
app.use(routes);

// application port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
