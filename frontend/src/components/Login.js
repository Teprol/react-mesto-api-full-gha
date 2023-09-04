import React from "react";
import { Navigate } from 'react-router-dom';
import Authentication from './Authentication.js'
import useGetFormInput from '../hooks/useGetFormInput.js';

const Login = ({ loggedIn, onLogin }) => {
    //пользовательский хук который возвращает деструктуризированнные данные в виде значения и функции обработчика
    const { values, handleChange } = useGetFormInput({ email: '', password: '' });

    function handleSabmit(evt) {
        evt.preventDefault();
        onLogin(values);
    }

    return (
        loggedIn ?
            (<Navigate to="/" replace />)
            :
            (<Authentication title="Вход" buttonText="Войти" onSubmit={handleSabmit}>
                <input
                    className="authorization__import"
                    id="authorization-email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={values.email}
                />
                <input
                    className="authorization__import"
                    id="authorization-password"
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    required
                    onChange={handleChange}
                    value={values.password}
                />
            </Authentication>)
    )
}

export default Login;