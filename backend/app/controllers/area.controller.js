import { Area } from '../models/index';

/**
 * It takes a request and a response, and returns a JSON object containing all the areas
 * @param req - The request object. This is an object that represents the HTTP request and has
 * properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export const findAll = (req, res) => {
  const areas = Area.findAll();
  res.json({ areas });
};

/**
 * It creates a new area with the name and servicio_id from the request body and saves it to the
 * database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export const create = (req, res) => {
  const area = {
    name: req.body.name,
    servicio_id: req.body.servicio_id,
  };
  Area.create(area)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error',
      });
    });
};
