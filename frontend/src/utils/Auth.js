class Auth {
    constructor() {
        this._baseUrl = 'https://api.bobrov.nomoredomainsicu.ru';
    };

    //при ошибке выводит в консоль посвеченную надпись об ошибке
    infoError = (err, errInf) => {
        console.log(
            `%c${err}`,
            `color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;`
        );
        console.error(errInf);
    };

    // вывод ошибок в качестве пример api.infoError('текст ошибки', err);
    getStatus = (res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    };

    // регистрация пользователя
    regist = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password, email })
        }).then(this.getStatus)
    };

    // авторизация пользователя
    authorization = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        }).then(this.getStatus)
    };

    // проверка токена
    getToken = (token) => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify()
        }).then(this.getStatus)
    };
};

export const auth = new Auth();