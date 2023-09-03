// настройки для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// попап профиля
export const popupProfile = document.querySelector(".popup_profile");
// кнопка редактирования профиля
export const buttonEditPopup = document.querySelector(".edit-button");
// попап добавления карточки
export const popupCard = document.querySelector(".popup_card");
// кнопка добавления карточки
export const buttonAddCard = document.querySelector(".profile__add-button");
// попап смены аватарки
export const popupAvatarNode = document.querySelector(".popup_avatar");
// кнопка смены аватарки
export const buttonAvatar = document.querySelector(".profile__avatar-edit");
// объект с селекторами полей профиля
export const objectSelectors = {
  profileDescription: ".profile-info__description",
  profileName: ".profile-info__name",
  profileAvatar: ".profile__avatar"
}

// export const cohort = 'cohort-66';
// export const token = 'aa1ee32f-1c0f-4889-af2b-f7e1de805230';
