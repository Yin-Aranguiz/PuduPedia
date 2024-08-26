import React from 'react';
import { Link } from 'react-router-dom';

const CheckYourEmail = () => (
    <div>
        <h2>Verifica tu Correo Electrónico</h2>
        <p>Te hemos enviado un enlace para restablecer tu contraseña. Por favor revisa tu correo electrónico.</p>
        <Link to="/">Volver a la página de inicio</Link>
    </div>
);

export default CheckYourEmail;