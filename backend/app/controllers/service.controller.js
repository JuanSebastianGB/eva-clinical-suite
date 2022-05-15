import { Service, Area } from '../models/index';

export const create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can't be empty"
    });
    return;
  }
  const service = {
    name: req.body.name,
    campus_id: req.body.campus_id
  };
  Service.create(service)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some errror ocurred in the creation of the service"
      });
    });
}


export const findAll = async (req, res) => {
  try {
    const services = await Service.findAll({
      include: [{ model: Area }]
    });

    res.json({ services })
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Something went wrong when trying to find all campuses"
      });
  }

}


