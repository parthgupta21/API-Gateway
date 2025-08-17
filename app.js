require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

app.use(express.json());          // parse JSON
app.use(logger);                  // log every request
app.use(auth);                    // auth check

app.use("/", routes);             // load routes

app.use(errorHandler);            // global error handler

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
