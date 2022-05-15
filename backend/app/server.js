import express, { json, urlencoded } from 'express';
const path = require('path');
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
// const bodyParser = require("body-parser"); /* deprecated */
import cors from "cors";
import morgan from 'morgan';
import { sequelize } from "./models/index.js";
import { options } from '../config/swagger';
// Importing routes
import campusRoutes from './routes/campus.routes.js';
import serviceRoutes from './routes/service.routes.js';
import areaRoutes from './routes/area.routes.js';


const app = express();


const specs = swaggerJsDoc(options);
const corsOptions = {
  // origin: "http://localhost:8081"
  origin: '*'
};

/* Middleware */

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs));

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(json());  /* bodyParser.json() is deprecated */
app.use(urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */


sequelize.sync({ force: false }).
  then(() => {
    console.log("Sync application.");
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.  ${options.apis})}`);
});
