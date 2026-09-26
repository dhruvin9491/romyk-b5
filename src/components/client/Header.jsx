import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLIENT_ROUTE } from '../../constants/routeConstant';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Icecream', to: '/icecream' },
        { label: 'Services', to: '/services' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact Us', to: '/contact' }
    ];

    const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname === to;

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to={CLIENT_ROUTE.HOME} onClick={() => setMenuOpen(false)}><img src="/assets/images/logo.png" alt="Romyk Ice Cream" /></Link>
                    <button className="navbar-toggler" type="button" onClick={() => setMenuOpen((open) => !open)} aria-controls="navbarSupportedContent" aria-expanded={menuOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {navItems.map((item) => (
                                <li className={`nav-item${isActive(item.to) ? ' active' : ''}`} key={item.label}>
                                    <Link className="nav-link" to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="login_bt">
                                <Link to="/login">
                                    Login{" "}
                                    <span style={{ color: '#222222' }}>
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </span>
                                </Link>
                            </div>
                            <div className="fa fa-search form-control-feedback" />
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;