import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Card({ cardObject, onCardClick, onCardLike, onCardDelete }) {
    // контекст с объектом инфой пользователя
    const { _id: userId } = React.useContext(CurrentUserContext);
    // проверка является ли создатель карточки текущим пользователем
    // const isOwn = cardObject.owner._id === userId;
    const isOwn = cardObject.owner === userId;
    // ставил пользователь лайк или нет
    const isLiked = cardObject.likes.some((like) => {
        // return like._id === userId;
        return like === userId;
    });

    // функция которая прокидывает объект карточки
    function handleImageClick() {
        onCardClick(cardObject);
    };

    function handleLikeClick() {
        onCardLike(cardObject);
    };

    function handleDeleteClick() {
        onCardDelete(cardObject);
    }

    return (
        <li className="elements__item">
            <article className="element">
                <img src={cardObject.link} alt={cardObject.name} className="element__image image" onClick={handleImageClick} />
                {isOwn && <button className="element__button-close button hover" type="button" onClick={handleDeleteClick} />}
                <div className="element__content-container">
                    <h2 className="element__title">{cardObject.name}</h2>
                    <div className="element__container-like">
                        <button className={`element__like button ${isLiked && 'element__like_active'}`} type="button" onClick={handleLikeClick} />
                        <p className="element__like-count">{cardObject.likes.length}</p>
                    </div>
                </div>
            </article>
        </li>
    );
};