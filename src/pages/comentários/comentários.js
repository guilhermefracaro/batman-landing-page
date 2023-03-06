import React from "react";
import { Link } from "react-router-dom";

function Comentários() {
    return (
        <>
            <span style={{ display: 'block', padding: '20px', fontSize: '30px' }}>Comentários</span>
            <Link to='/'>
                <span style={{ display: 'block', padding: '20px' }}>Voltar para a página inicial</span>
            </Link>
        </>
    )
}

export default Comentários;