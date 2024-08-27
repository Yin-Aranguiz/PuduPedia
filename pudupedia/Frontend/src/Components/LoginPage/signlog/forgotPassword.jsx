import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/user/change-password', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, currentPassword, newPassword }),
            });

            if (response.ok) {
                setSuccess(true);
                setError('');
                alert('Contraseña cambiada con éxito.')
                navigate('/'); 
            } else {
                const errorData = await response.json();
                setSuccess(false);
                setError(errorData.message || 'Error al cambiar la contraseña.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccess(false);
            setError('Error en el servidor. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='forgot-password-container'>
            <h2 className='forgot-password-title'>Cambiar Contraseña</h2>
            <form className='forgot-password-form' onSubmit={handleSubmit}>
                <label className='forgot-password-label' htmlFor="email">Correo Electrónico:</label>
                <input
                    className='forgot-password-input'
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className='forgot-password-label' htmlFor="currentPassword">Contraseña Actual:</label>
                <input
                    className='forgot-password-input'
                    id="currentPassword"
                    type="password"
                    placeholder="Contraseña Actual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
                <label className='forgot-password-label' htmlFor="newPassword">Nueva Contraseña:</label>
                <input
                    className='forgot-password-input'
                    id="newPassword"
                    type="password"
                    placeholder="Nueva Contraseña"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button className='forgot-password-button' type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Cambiar Contraseña'}
                </button>
            </form>
            {success && <p className='forgot-password-success'>Contraseña cambiada con éxito.</p>}
            {error && <p className='forgot-password-error'>{error}</p>}
            <Link className='forgot-password-link' to="/">Volver a la página de inicio</Link>
        </div>
    );
};

export default ForgotPassword;
