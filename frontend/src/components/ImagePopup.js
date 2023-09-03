export default function ImagePopup({ card, onClose }) {
    return (
        <section
            className={`popup popup_image-open container ${card.link && `popup_opened`}`}
            aria-label="Фотография в полном формате"
        >
            <div className="popup__container-iamge">
                <button className="popup__close button hover" type="button" onClick={onClose} />
                <img className="popup__image image" src={card.link} alt={card.name} />
                <h2 className="popup__image-title">{card.name}</h2>
            </div>
        </section>
    );
};