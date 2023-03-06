import React from "react";
import { Link } from "react-router-dom";

function Contato() {
    return (
        <>
            <span style={{ display: 'block', padding: '20px', fontSize: '30px' }}>Contato</span>
            <Link to='/'>
                <span style={{ display: 'block', padding: '20px' }}>Voltar para a página inicial</span>
            </Link>
        </>
    )
}

export default Contato;