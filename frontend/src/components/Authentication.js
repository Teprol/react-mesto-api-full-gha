import { React, memo } from "react";

const Authentication = memo(({ title, buttonText, children, onSubmit }) => {
    return (
        <section className="authorization" aria-label="Форма регистрации">
            <form
                className="authorization__form"
                name="registration"
                action="*"
                method="post"
                onSubmit={onSubmit}
            >
                <h1 className="authorization__title">{title}</h1>
                <fieldset className="authorization__fieldset">
                    {children}
                </fieldset>
                <button className="authorization__button" type="submit">
                    {buttonText}
                </button>
            </form>
        </section>
    );
});

export default Authentication;