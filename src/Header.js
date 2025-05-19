import { NavLink } from 'react-router-dom';
import logo from './assets/logo.jpeg';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Little Lemon Logo"/>
                </NavLink>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/booking">Reservations</NavLink></li>
                    <li><NavLink to="/order">Order Online</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;