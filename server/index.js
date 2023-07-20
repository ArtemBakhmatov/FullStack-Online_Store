require('dotenv').config(); // при любом изменений в коде сервер перезапускается
const express = require('express'); // подключаем фреймворк для бэкенда
const sequelize = require('./db');
 
const PORT = process.env.PORT || 3000;

const app = express();

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