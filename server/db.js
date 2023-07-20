const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME,            // Назавание БД
    process.env.DB_USER,            // Полользователь
    process.env.DB_PASSWORD,        // Пароль
    {
        dialect: 'postgres',        // БД (будет postgres)
        host: process.env.DB_HOST,  // Адрес
        port: process.env.DB_PORT   // Порт
    }   
);

/* 
Sequelize -> это ORM для реляционных БД на node.js
ORM -> это некая технология, которая позволяет связывать програмный код с БД, то есть не пишем на 
прямую SQL запрос, а вызываем готовую функцию и объект дабавляется в БД
*/