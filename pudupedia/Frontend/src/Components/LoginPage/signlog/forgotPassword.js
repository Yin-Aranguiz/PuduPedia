import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Usa navigate en lugar de history

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess(true);
                setError('');
                navigate('/check-your-email'); // Redirige a CheckYourEmail
            } else {
                const errorData = await response.json();
                setSuccess(false);
                setError(errorData.message || 'Error al enviar el correo de recuperación.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccess(false);
            setError('Error en el servidor. Intenta nuevamente.');
        }
    };

    return (
        <div>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Enviar Correo de Recuperación</button>
            </form>
            {success && <p>Correo de recuperación enviado. Por favor revisa tu correo.</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
};

export default ForgotPassword;