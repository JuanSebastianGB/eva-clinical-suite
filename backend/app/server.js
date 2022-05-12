import express, { json, urlencoded } from "express";
// const bodyParser = require("body-parser"); /* deprecated */
import cors from "cors";
import morgan from 'morgan';
import { sequelize } from "./models/index.js";


// Importing routes
// import tutorialRoutes from './routes/turorial.routes.js';
import campusRoutes from './routes/campus.routes.js';
import serviceRoutes from './routes/service.routes.js';
import areaRoutes from './routes/area.routes.js';

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


// sequelize.sync();
// // drop the table if it already exists
sequelize.sync({ force: false }).
  then(() => {
    console.log("Drop and re-sync db.");
  });

// // simple route
app.get("/", (req, res) => {
  res.json({ message: "Application start point" });
});

// Using routes
// app.use('/api/tutorials', tutorialRoutes);
app.use('/api/campuses', campusRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/areas', areaRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
