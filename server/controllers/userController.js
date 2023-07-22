const bcrypt = require('bcrypt'); // хешировать пароли и хранить их БД в октрытом виде
const jwt = require('jsonwebtoken'); 

const ApiError = require('../error/ApiError');
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role }, 
        process.env.SECRET_KEY,
        { expiresIn: '24h' } // отвечает за то, сколько живет токен (24 часа)
    )
}
class userController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Некоректный email или пароль!'));
        }

        const candidate = await User.findOne({ where: {email} });

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует!'));
        }

        const hashPassword = await bcrypt.hash(password, 5); // 5 -> 5 раз будем хэшировать
        const user = await User.create({ email, role, password: hashPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: {email} });

        if (!user) {
            return next(ApiError.internal('Пользователь не найден!'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        // bcrypt.compareSync() -> сравнение паролей (1-й ввел польз-ль, 2-й получаем из БД)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль!'));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {
        
    }
};

module.exports = new userController();