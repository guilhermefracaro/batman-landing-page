import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/BATMAN-LOGO.png';

function Footer() {
    return (
        <footer>
            <img id='logo' src={logo} alt="" />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Guilherme Marini Fracaro</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
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
        </footer>
    )
}

export default Footer;