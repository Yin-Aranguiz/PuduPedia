import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPage.css';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/user/change-password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword, confirmPassword }),
            });

            if (response.ok) {
                alert('Contraseña cambiada con éxito.');
                navigate('/signlog'); // Redirige al login después de cambiar la contraseña
            } else {
                const result = await response.json();
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al cambiar la contraseña.');
        }
    };

    return (
        <div className="change-password-container">
            <h2 className="change-password-title">Cambiar Contraseña</h2>
            <form onSubmit={handleSubmit} className="change-password-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">Nueva Contraseña:</label>
                    <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Nueva Contraseña:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Cambiar Contraseña</button>
            </form>
        </div>
    );
};

export default ChangePassword;