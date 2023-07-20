require('dotenv').config(); // при любом изменений в коде сервер перезапускается
const express = require('express'); // подключаем фреймворк для бэкенда
const cors = require('cors'); // нужен чтобы мы могли отпралять запросы с браузера
const fileUpload = require('express-fileupload'); // нужен для работы с файлами
const path = require('path');

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
 
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());    // нужен для того чтобы наше приложение мог парсить json формат
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);
app.use(errorHandler);     // обработка ошибок, последний Middleware, должен регис-ться в самом конце

const start = async () => {
    try {
        await sequelize.authenticate();     // с помощью его будет устанавливаться подключение к БД    
        await sequelize.sync();             // эта функция будет сверять состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // выводим результат
    } catch (e) {
        console.log(e)
    }
};

start();