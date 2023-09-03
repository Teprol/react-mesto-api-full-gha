import React from 'react';
// import avatar from '../images/image.jpg';
import { api } from '../utils/Api.js';
import Card from './Card.js'

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
    // подключение к контексту инфы о пользователе
    const { name, about, avatar } = React.useContext(CurrentUserContext);

    return (
        <main className="main container page__main">
            <section className="profile main__profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <img
                            src={avatar}
                            alt="аватарка автора"
                            className="avatar profile__avatar"
                        />
                        <button
                            className="profile__avatar-edit"
                            type="button"
                            aria-label="Редактировать аватар"
                            onClick={onEditAvatar}
                        />
                    </div>
                    <div className="profile-info">
                        <div className="profile-info__header">
                            <h1 className="profile-info__name">{name}</h1>
                            <button className="edit-button button hover" type="button" onClick={onEditProfile} />
                        </div>
                        <p className="profile-info__description">{about}</p>
                    </div>
                </div>
                <button
                    className="add-button button hover profile__add-button"
                    type="button"
                    onClick={onAddPlace}
                />
            </section>
            <section className="elements">
                <ul className="elements__list list">
                    {/* {cards} */}
                    {cards.map((card) => {
                        return <Card cardObject={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
                    })}
                </ul>
            </section>
        </main>
    );
};