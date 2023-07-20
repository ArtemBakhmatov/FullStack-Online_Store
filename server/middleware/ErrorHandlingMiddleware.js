const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Непредвиденная ошибка!" })
}

// err -> ошибка
// req -> запрос
// res -> ответ 
// next -> функция next вызвав которую мы передаем управление следующему в цепочке middleWare
// instanceof -> экземпляр