/**
 * Modules
 */
import express from "express";
const app = express();

// Support
import routes from "./routes";

// Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Port
const port = process.env.PORT || 3000;

// Listening
app.listen(port);
