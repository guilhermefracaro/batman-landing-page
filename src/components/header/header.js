import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/BATMAN-LOGO.png';

function Header() {
    return (
        <header>
            <img id="logo" src={logo}></img>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link to='/comentários'>
                        <li>Comentários</li>
                    </Link>            
                </ul>
            </nav>
        </header>
    )
}

export default Header;