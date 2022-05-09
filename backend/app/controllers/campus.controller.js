import db from "../models/index.js";
const Campus = db.campuses;
const Op = db.Sequelize.Op;

// Create and Save a new Campus
export function create(req, res) {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Campus
  const campus = {
    name: req.body.name
  };

  // Save Campus in the database
  Campus.create(campus)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Campus."
      });
    });
}

// Retrieve all Campuses from the database.
export function findAll(req, res) {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Campus.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving campuses."
      });
    });
}

// Find a single Campus with an id
export function findOne(req, res) {
  const id = req.params.id;

  Campus.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Campus with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Campus with id=" + id
      });
    });
}

// Update a Campus by the id in the request
export function update(req, res) {
  const id = req.params.id;

  Campus.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Campus was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Campus with id=${id}. Maybe Campus was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Campus with id=${id}`
      });
    });
}

// Delete a Campus with the specified id in the request
export const _delete = (req, res) => {
  const id = req.params.id;

  Campus.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Campus was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Campus with id=${id}. Maybe Campus was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Campus with id=" + id
      });
    });
};

// Delete all Campuses from the database.
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

// find all Campuses
export function findAllPublished(req, res) {
  Campus.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving campuses."
      });
    });
}
