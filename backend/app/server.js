import express, { json, urlencoded } from "express";
// const bodyParser = require("body-parser"); /* deprecated */
import cors from "cors";
import morgan from 'morgan';

// Importing routes
import tutorialRoutes from './routes/turorial.routes.js';

const app = express();
var corsOptions = {
  // origin: "http://localhost:8081"
  origin: '*'
};

app.use(cors(corsOptions));
app.use(morgan('tiny'));

// // parse requests of content-type - application/json
app.use(json());  /* bodyParser.json() is deprecated */

// // parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

import { sequelize } from "./models/index.js";

sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// // simple route
app.get("/", (req, res) => {
  res.json({ message: "Application start point..." });
});

// Using routes
app.use('/api/tutorials', tutorialRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
