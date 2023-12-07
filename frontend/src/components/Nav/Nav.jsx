import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './Nav.scss';
/* import Game from '../Game/Game.jsx'; */
import Menu from '../Menu/Menu.jsx';
import logo from '../../assets/logos/cogg logo - NOIR SF-06.webp';

function Nav() {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = sessionStorage.getItem("loggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []); 

    return (
        <nav>
            <section className='nav'>
                <Link to={`/`}>
                    <img className='logoImg' src={logo} alt="Cogg Logo" /> 
                </Link>

                {isLoggedIn && (
                    <div className='admin-overlay'>
                        <p>Mode édition</p>
                        <Link className='homeLink' to={`/modifier`}>
                            <button type='button' className='edit button'>Modifier les projets</button>
                        </Link>
                    </div>
                )}

                {location.pathname === '/' ? (
                    <Menu />
                ) : (
                    <Link className='homeLink' to={`/`}>
                        HOME
                    </Link>
                )}
            </section>
        </nav>
    );
}

export default Nav;