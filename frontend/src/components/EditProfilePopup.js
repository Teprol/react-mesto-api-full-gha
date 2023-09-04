import { render } from '@testing-library/react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import React from 'react';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    // привяжемся к контексту с инфой о пользователе
    const currentUser = React.useContext(CurrentUserContext);
    // стейт переменая имя пользователя
    const [name, setName] = React.useState('');
    // стейт переменная описание профиля пользователя
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    // функция записи имени в стейт из инпута
    function changeName(e) {
        // e.preventDefault();
        setName(e.target.value);
    };

    // запись описания в стейт из инпута
    function changeDescription(e) {
        setDescription(e.target.value);
    };

    // отправка запроса на сервер с новой инфой о пользователе
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    };

    return (
        <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <div>
                    <input
                        className="popup__input popup__input_name input"
                        type="text"
                        placeholder="Введите ваше имя"
                        name="name"
                        id="input-profile-name"
                        required=""
                        minLength={2}
                        maxLength={40}
                        value={name || ''}
                        onChange={changeName}
                    />
                    {/* !СПАН */}
                    <span className="popup__error input-profile-name-error" />
                </div>
                <div>
                    <input
                        className="popup__input popup__input_description input"
                        type="text"
                        placeholder="Введите ваше хоби"
                        name="about"
                        id="input-profile-description"
                        required=""
                        minLength={2}
                        maxLength={200}
                        value={description || ''}
                        onChange={changeDescription}
                    />
                    {/* !СПАН */}
                    <span className="popup__error input-profile-description-error" />
                </div>
            </div>
        </PopupWithForm>
    );
}