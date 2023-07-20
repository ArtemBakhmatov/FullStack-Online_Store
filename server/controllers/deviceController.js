const uuid = require('uuid'); // генерирует случайные родномные id которые не будут повторятся
const path = require('path');

const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');
class deviceController {
    async create(req, res, next) {        // для создания типа
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
        
    }

    async getAll(req, res) {        // для получения всех девайсов
        
    }

    async getOne(req, res) {        // для получения одного девайса
        
    }
};

module.exports = new deviceController();

