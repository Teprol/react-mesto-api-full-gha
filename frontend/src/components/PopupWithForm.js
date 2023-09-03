export default function PopupWithForm({ children, title, name, isOpen, onClose, buttonText, onSubmit }) {
    return (
        <section
            className={`popup popup_${name} container ${isOpen && 'popup_opened'}`}
            // aria-label="Подтверждение на удаление карточки"
        >
            <div className="popup__container">
                <button className="popup__close button hover" type="button" onClick={onClose} />
                <form
                    className="popup__form"
                    action="#"
                    name={name}
                    method="post"
                    // noValidate=""
                    onSubmit={onSubmit}
                >
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    {/* <input className="popup__save" type="submit" value="Сохранить" /> */}
                    <button className="popup__save" type="submit">{buttonText}</button>
                </form>
            </div>
        </section>
    );
}
