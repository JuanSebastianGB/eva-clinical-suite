import db, { Campus, Service, Area } from "../models/index.js";
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      res
        .status(400)
        .json({
          message: {
            error: "Must have a name"
          }
        });
    const campus = {
      name
    }
    const createdCampus = await Campus.create(campus);
    res
      .status(200)
      .json({ message: 'Campus created successfully', createdCampus })
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Some error occurred while creating the Campus"
      });
  }
}

export const findAll = async (req, res) => {
  try {
    const campuses = await Campus.findAll({
      include: [{
        model: Service,
        include: [{ model: Area }]
      }]
    });
    if (campuses)
      res
        .status(200)
        .json({ campuses });
    res
      .status(404)
      .json({
        message: `Cannot find Campuses`
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Something went wrong when trying to find all campuses"
      });
  }
}

export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const campus = await Campus.findByPk(id);
    if (campus)
      res
        .status(200)
        .json({ campus });
    res
      .status(404)
      .json({
        message: `Cannot find Campus with id=${id}`
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || `Error retrieving Campus with id= ${id}`
      });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const campus = await Campus.update(req.body, {
      where: { id }
    });
    if (campus)
      res
        .status(200)
        .json({ message: `Campus with id=${id} updated successfully` });
    res
      .status(400)
      .json({
        message: `Cannot update Campus with id=${id}`
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || `Error updating Campus with id= ${id}`
      });
  }
}

export const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const campus = await Campus.destroy({ where: { id } });
    if (campus === 1)
      res
        .status(200)
        .json({ message: `Campus with id=${id} Deleted successfully` });
    res
      .status(400)
      .json({
        message: `Cannot delete Campus with id=${id}. Maybe Campus was not found!`
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || `Error deleting Campus with id=${id}`
      });
  }

}

export function deleteAll(req, res) {
  Campus.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Campuses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all campuses."
      });
    });
}


