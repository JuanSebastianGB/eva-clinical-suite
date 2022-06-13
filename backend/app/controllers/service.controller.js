import { Service, Area } from '../models/index';

/**
 * It creates a new service
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
export const create = async (req, res) => {
  try {
    const { name, campus_id } = req.body;
    if (!name)
      res.status(400).json({
        message: {
          error: 'Must have a name',
        },
      });
    const service = {
      name,
      campus_id,
    };
    const createdService = await Service.create(service);
    res
      .status(200)
      .json({ message: 'Service created successfully', createdService });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || 'Some error occurred while creating the Service',
    });
  }
};

/**
 * It finds all services and returns them in the response
 * @param req - The request object.
 * @param res - The response object.
 */
export const findAll = async (req, res) => {
  try {
    const services = await Service.findAll({
      include: [{ model: Area }],
    });
    if (services) res.status(200).json({ services });
    res.status(404).json({
      message: `Cannot find services`,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message ||
        'Something went wrong when trying to find all services',
    });
  }
};

/**
 * It finds a service by its id and returns it
 * @param req - The request object.
 * @param res - The response object.
 */
export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (service) res.status(200).json({ service });
    res.status(404).json({
      message: `Cannot find Service with id=${id}`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving Service with id= ${id}`,
    });
  }
};

/**
 * It updates a service in the database
 * @param req - The request object.
 * @param res - The response object.
 */
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.update(req.body, {
      where: { id },
    });
    console.log(service);
    if (service != 0) {
      console.log('cero');

      res
        .status(200)
        .json({ message: `Service with id=${id} updated successfully` });
    } else {
      console.log('diferetne');

      res.status(400).json({
        message: `Cannot update Service with id=${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || `Error updating Service with id= ${id}`,
    });
  }
};

/**
 * It deletes a Service from the database using the id in the request parameters
 * @param req - The request object contains information about the HTTP request that raised the event.
 * @param res - The response object.
 */
export const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.destroy({ where: { id } });
    if (service === 1)
      res
        .status(200)
        .json({ message: `Service with id=${id} Deleted successfully` });
    res.status(400).json({
      message: `Cannot delete Service with id=${id}. Maybe Service was not found!`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error deleting Service with id=${id}`,
    });
  }
};
