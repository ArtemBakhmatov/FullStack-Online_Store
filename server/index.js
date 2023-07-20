require('dotenv').config(); // при любом изменений в коде сервер перезапускается
const express = require('express'); // подключаем фреймворк для бэкенда
const cors = require('cors'); // нужен чтобы мы могли отпралять запросы с браузера

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
 
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json()); // нужен для того чтобы наше приложение мог парсить json формат
app.use('/api', router);

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