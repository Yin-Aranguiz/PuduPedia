import React, { useState } from 'react';
import './SignLog.css';
import Header from '../../LandingPage/Header/Header';
import { useNavigate, Link } from 'react-router-dom';

const SignAndLog = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	const handleSignUpClick = () => {
		setIsSignUp(true);
	};

	const handleSignInClick = () => {
		setIsSignUp(false);
	};

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');


	const handleSubmitRegister = async (e) => {
		e.preventDefault();
	
		if (!username || !email || !password || !confirm) {
			alert('Por favor, completa todos los campos antes de continuar.');
			return;
		}

		if (password !== confirm) {
			alert('Las contraseñas no coinciden.');
			return;
		}
	
		try {
			const response = await fetch('http://localhost:3001/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, email, password }),
			});
	
			if (response.ok) {
				const data = await response.json();
	
				// Almacena el token en localStorage
				localStorage.setItem('accessToken', data.accessToken);
	
				alert(`Usuario registrado con éxito. ¡Bienvenido a Pudupedia!\nDatos: ${JSON.stringify(data)}`);
	
				// Redirige al usuario a la página de inicio
				navigate('/'); 
			} else {
				const errorData = await response.json();
				alert(`Error al crear el usuario: ${errorData.error}`);
			}
	
		} catch (error) {
			console.error('Error al crear el usuario', error);
			alert('Hubo un error al intentar crear el usuario. Por favor, intenta de nuevo.');
		}
	};

	const handleSubmitLogin = async (e) => {
		e.preventDefault();
	
		if (!username || !password) {
			alert('Por favor, ingresa tu nombre de usuario y contraseña.');
			return;
		}
	
		try {
			const response = await fetch('http://localhost:3001/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});
	
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem('accessToken', data.accessToken);
				alert('Sesión iniciada con éxito. ¡Bienvenido de nuevo!');
				navigate('/'); // Redirige a la landingPage
			} else {
				const errorData = await response.json();
				alert(`Error al ingresar a la cuenta: ${errorData.error}`);
			}
	
		} catch (error) {
			console.error('Error al iniciar sesión', error);
			alert('Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo.');
		}
	};

	return (
		<div className='login'>
			<Header />
			<div className={`container ${isSignUp ? 'rightPanelActive' : ''}`}>
				<div className="formContainer signUpContainer">
					<form action="#" method='get'>
						<h1>Crea una Cuenta</h1>
						<span></span>
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							onChange={(e) =>
								setUsername(e.target.value)
							}
							placeholder="Nombre de Usuario"
							required
						/>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}
							placeholder="Email"
							required
						/>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) =>
								setPassword(e.target.value)
							}
							placeholder="Contraseña"
							required
						/>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							value={confirm}
							onChange={(e) =>
								setConfirm(e.target.value)
							}
							placeholder="Confirmar Contraseña"
							required
						/>
						<button
							className="signUp"
							type="submit"
							value="submit"
							onClick={(e) => handleSubmitRegister(e)}
						>Crear Cuenta</button>
					</form>
				</div>
				<div className="formContainer signInContainer">
					<form action="#" method='get'>
						<h1>Ingresa</h1>
						<span></span>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}
							placeholder="Email"
							required
						/>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) =>
								setPassword(e.target.value)
							}
							placeholder="Contraseña"
							required
						/>
						<Link to="/forgot-password">¿Olvidaste tu Contraseña?</Link>
						<button
							className="signIn"
							type="submit"
							value="submit"
							onClick={(e) => handleSubmitLogin(e)}
						>Ingresar</button>
					</form>
				</div>
				<div className="overlayContainer">
					<div className="overlay">
						<div className="overlayPanel overlayLeft">
							<h1 className='question'>¿Ya tienes una cuenta?</h1>
							<button className="ghost" onClick={handleSignInClick}>Ingresa</button>
						</div>
						<div className="overlayPanel overlayRight">
							<h1 className='question'>¿Aún no te registras?</h1>
							<button className="ghost" onClick={handleSignUpClick}>Crea una Cuenta</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignAndLog;