import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import HeaderMenu from './HeaderMenu.js'
import React from 'react';

export default function Header({ loggedIn, userEmail, loggedOut, openBurgerMenu, isOpenBurgerMenu }) {
    


    const { pathname } = useLocation();
    return (
        <>
            {loggedIn && isOpenBurgerMenu && <HeaderMenu loggedIn={loggedIn} userEmail={userEmail} loggedOut={loggedOut} addClass='header-menu_mobile'></HeaderMenu>}

            <header className="header page__header">
                <Link to="/">
                    <img
                        className="logo hover"
                        src={logo}
                        alt="логотип"
                    />
                </Link>
                {loggedIn && <button className='header__burger-button' onClick={openBurgerMenu}></button>}
                <HeaderMenu loggedIn={loggedIn} userEmail={userEmail} loggedOut={loggedOut}></HeaderMenu>
            </header>
        </>
    );
};