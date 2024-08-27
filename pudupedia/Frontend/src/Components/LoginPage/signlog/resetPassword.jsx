import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import Header from '../../LandingPage/Header/Header';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/user/forgot-password-security', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, answer }),
            });

            if (response.ok) {
                setSuccess(true);
                setError('');
                alert('Respuesta correcta. Ahora puedes cambiar tu contraseña.');
                navigate('/reset-password'); // Redirige a la página para restablecer la contraseña
            } else {
                const errorData = await response.json();
                setSuccess(false);
                setError(errorData.message || 'Error al verificar la información.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccess(false);
            setError('Error en el servidor. Intenta nuevamente.');
        }
    };

    return (
        <div>
            <Header/>
        <div className='wholeSecurity'>
        <div className="forgotPasswordSecurity">
            <div className='securityTitle'><p>Recuperar Contraseña</p></div>
            <div className='securityForm'><form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="username">Nombre de Usuario:</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Nombre de Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="answer">Respuesta a la Pregunta de Seguridad:</label>
                <input
                    id="answer"
                    type="text"
                    placeholder="Respuesta a la Pregunta de Seguridad"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />

                <button type="submit">Verificar</button>
            </form> </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </div>
        </div>
    );
};

export default ResetPassword;