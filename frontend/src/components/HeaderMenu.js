import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderMenu({ loggedIn, userEmail, loggedOut, addClass=''}) {
    if (!loggedIn) {
        addClass = 'header-menu_visible';
    }

    const { pathname } = useLocation();
    return (
        <div className={`header-menu ${addClass}`}>
            {loggedIn && <p className='header-menu__user-mail'>{userEmail}</p>}
            {loggedIn ?
                <Link className='header-menu__link hover' to="/sign-in" onClick={loggedOut}>Выйти</Link>
                :
                <Link className='header-menu__link hover' to={pathname === '/sign-up' ? '/sign-in' : '/sign-up'}>{pathname === '/sign-up' ? 'Войти' : 'Регистрация'}</Link>
            }
        </div>
    );
};