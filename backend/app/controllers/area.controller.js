import { Area } from '../models/index';

export const findAll = (req, res) => {
    const areas = Area.findAll();
    res.json({ areas });
}

export const create = (req, res) => {
    const area = {
        name: req.body.name,
        servicio_id: req.body.servicio_id
    }
    Area.create(area)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
}