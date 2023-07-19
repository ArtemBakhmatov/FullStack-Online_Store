require('dotenv').config(); // при любом изменений в коде сервер перезапускается
const express = require('express'); // подключаем фреймворк для бэкенда
 
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // выводим результат