/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');

const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

//* const cookieParser = require('cookie-parser');

const { errors } = require('celebrate');

const cors = require('cors');
const usersRout = require('./routes/users');
const cardsRout = require('./routes/cards');
const authRout = require('./routes/auth');
const auth = require('./middlewares/auth');
const errHandller = require('./middlewares/errHandller');
const NotFoundError = require('./errors/NotFoundError');
// логер
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(cors());

const limiter = rateLimit(
  {
    windowMs: 15 * 60 * 1000,
    max: 1100,
  },
);

const { PORT = 3000, dbUrl = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

//* парсер для куки, они теперь доступны в заголовках req.cookies
//* app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger); // подключаем логгер запросов
app.use(limiter);
//! Краш-тест сервера удалить после успеш ревью
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
// роуты регестрации
app.use('/', authRout);
// роут авторизация
app.use(auth);

// роут выхода из ака и удаления куки
// app.get('/signout', (req, res) => {
//   res.clearCookie('jwt').send({ message: 'Выход' });
// });

app.use('/users', usersRout);
app.use('/cards', cardsRout);
app.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});
app.use(errorLogger); // подключаем логгер ошибок
// центр. обработка ошибок
app.use(errors());
app.use(errHandller);

app.listen(PORT);
