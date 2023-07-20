const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class typeController {
    async create(req, res) {        // для создания типа
        const { name } = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAll(req, res) {        // для получения
        const types = await Type.findAll(); // вернет все сущес-ие записи которые есть в БД
        return res.json(types);
    }
};

module.exports = new typeController();