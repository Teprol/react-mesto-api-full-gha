// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const NoAuthError = require('../errors/NoAuthError');

const { SECRET_KEY = 'some-secret-key' } = process.env;

// todo сделать потом через куки
/**
// ?  под куки авторизацию, попробовать потом с переделкой ронт
//  const auth = (req, res, next) => {
//    const token = req.cookies.jwt;

//   if (!token) {
//     throw next(new NoAuthError('Необходима авторизация'));
//   }

//   let payload;

//   try {
//     payload = jwt.verify(token, 'some-secret-key');
//   } catch (err) {
//      throw next(new NoAuthError('Необходима авторизация'));
//    }

//    req.user = payload; // записываем пейлоуд в объект запроса

//   next(); // пропускаем запрос дальше
//  };
*/

// авторизация через токен
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw next(new NoAuthError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw next(new NoAuthError('Необходима авторизация'));
  }

  req.user = payload;

  next();
};

module.exports = auth;
