const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');
class brandController {
    async create(req, res) {        // для создания типа
        const { name } = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }

    async getAll(req, res) {        // для получения
        const brands = await Brand.findAll(); // вернет все сущес-ие записи которые есть в БД
        return res.json(brands);
    }
};

module.exports = new brandController();