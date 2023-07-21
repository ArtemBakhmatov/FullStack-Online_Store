const uuid = require('uuid'); // генерирует случайные родномные id которые не будут повторятся
const path = require('path');

const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
class deviceController {
    async create(req, res, next) {        // для создания типа
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    });
                });
            }

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
        
    }

    async getAll(req, res) {        // для получения всех девайсов
        let {brandId, typeId, limit, page} = req.query;  // получение из строки запроса
        let devices;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit; // отступ в offset товаров
        // page -> страница
        // limit -> это кол-во девайсов которые будут отображаться на одной странице
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: {brandId}, limit, offset });
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: {typeId}, limit, offset });
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: {brandId, typeId}, limit, offset });
        }

        return res.json(devices);

        // findAndCountAll() -> предназначена для пагинации
    }

    async getOne(req, res) {        // для получения одного девайса
        const {id} = req.params;    // выцепляем из deviceRouter.js '/:id'
        const device = await Device.findOne(
            { 
                where: {id},
                include: [{ model: DeviceInfo, as: 'info' }]
            }
        );
        return res.json(device);
    }
};

module.exports = new deviceController();

