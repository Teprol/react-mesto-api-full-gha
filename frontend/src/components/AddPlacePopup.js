import React from "react";
import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const cardTitle = React.useRef();
    const cardLink = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: cardTitle.current.value,
            link: cardLink.current.value,
        });
    };

    React.useEffect(() => {
        cardTitle.current.value = '';
        cardLink.current.value = '';
    }, [isOpen])

    return (
        <PopupWithForm title="Новое место" name="card" isOpen={isOpen} onClose={onClose} buttonText="Создать" onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <div>
                    <input
                        className="popup__input popup__input_name input"
                        type="text"
                        placeholder="Название"
                        name="name"
                        id="input-name"
                        required=""
                        minLength={2}
                        maxLength={30}
                        ref={cardTitle}
                    />
                    <span className="popup__error input-name-error" />
                </div>
                <div>
                    <input
                        className="popup__input popup__input_description input"
                        type="URL"
                        placeholder="Ссылка на картинку"
                        name="link"
                        id="input-link"
                        required=""
                        ref={cardLink}
                    />
                    <span className="popup__error input-link-error" />
                </div>
            </div>
        </PopupWithForm>
    );
};