import React from "react";
import { Navigate, Link } from 'react-router-dom';
import Authentication from './Authentication.js'
import useGetFormInput from '../hooks/useGetFormInput.js';

const Register = ({ loggedIn, onRegist }) => {
    //пользовательский хук который возвращает деструктуризированнные данные в виде значения и функции обработчика
    const { values, handleChange } = useGetFormInput({ email: '', password: '' });


    function handleSabmit(evt) {
        evt.preventDefault();
        onRegist(values);
    }

    return (
        loggedIn ?
            (<Navigate to="/" replace />)
            :
            (<>
                <Authentication title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSabmit}>
                    <input
                        className="authorization__import"
                        id="authorization-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                    <input
                        className="authorization__import"
                        id="authorization-password"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        required
                        value={values.password || ''}
                        onChange={handleChange}
                    />
                </Authentication>
                <p className="authorization__link-login">Уже зарегистрированы? <Link className="authorization__link hover" to='/sign-in'>Войти</Link></p>
            </>)
    )
}

export default Register;