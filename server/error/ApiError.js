class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {    // страница не найдена
        return new ApiError(404, message);
    }

    static internal(message) {      // сервер столкнулся с ошибкой, которая помешала ему выполнить запрос 
        return new ApiError(500, message);
    }

    static forbidden(message) {     // доступа нет
        return new ApiError(403, message);
    }
};

module.exports = ApiError;