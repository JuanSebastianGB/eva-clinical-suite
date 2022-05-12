import { Area } from '../models/index';

const findAll = (req, res) => {
    const areas = Area.findAll();
    res.json({ areas });
}