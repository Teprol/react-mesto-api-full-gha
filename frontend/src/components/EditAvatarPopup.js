import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    // реф на инпут ввода ссылки на картинку для аватарки
    const avatarInput = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarInput.current.value,
        });
    };

    React.useEffect(() => {
        avatarInput.current.value = '';
    }, [isOpen]);

    return (
        <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <div>
                    <input
                        className="popup__input popup__input_description input"
                        type="URL"
                        placeholder="Ссылка на картинку"
                        name="avatar"
                        id="input-avatar"
                        required=""
                        ref={avatarInput}
                    />
                    <span className="popup__error input-avatar-error" />
                </div>
            </div>
        </PopupWithForm>
    );
}