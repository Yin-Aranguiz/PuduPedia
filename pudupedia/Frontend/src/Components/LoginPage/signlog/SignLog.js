import React, { useState } from 'react';
import './SignLog.css';
import Header from '../../LandingPage/Header/Header';
import { useNavigate, Link } from 'react-router-dom';

const SignAndLog = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate(); // Definir useNavigate

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
				localStorage.setItem('accessToken', data.accessToken);
				alert(`Usuario registrado con éxito. ¡Bienvenido a Pudupedia!\nDatos: ${JSON.stringify(data)}`);
				navigate('/'); // Redirige al usuario a la página de inicio
			} else {
				const errorData = await response.json();
				alert(`Error al crear el usuario: ${errorData.error}`);
				console.log(errorData);
			}
	
		} catch (error) {
			console.error('Error al crear el usuario', error);
			alert('Hubo un error al intentar crear el usuario. Por favor, intenta de nuevo.');
		}
	};

	const handleSubmitLogin = async (e) => {
		e.preventDefault();
	
		if (!email || !password) {
			alert('Por favor, ingresa tu email y contraseña.');
			return;
		}
	
		try {
			const response = await fetch('http://localhost:3001/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});
	
			const contentType = response.headers.get('Content-Type');
	
			if (contentType && contentType.includes('application/json')) {
				const data = await response.json();
				if (response.ok) {
					localStorage.setItem('accessToken', data.accessToken);
					alert('Sesión iniciada con éxito. ¡Bienvenido de nuevo!');
					navigate('/'); // Redirige a la página de inicio
				} else {
					alert(`Error al ingresar a la cuenta: ${data.error}`);
				}
			} else {
				const text = await response.text(); // Lee la respuesta como texto
				alert(`Error inesperado: ${text}`);
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
					<form onSubmit={handleSubmitRegister}>
						<h1>Crea una Cuenta</h1>
						<input
							type="text"
							name="username"
							id="usernameRegister"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Nombre de Usuario"
							required
						/>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
						/>
						<input
							type="password"
							name="password"
							id="passwordRegister"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Contraseña"
							required
						/>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							value={confirm}
							onChange={(e) => setConfirm(e.target.value)}
							placeholder="Confirmar Contraseña"
							required
						/>
						<button className="signUp" type="submit">Crear Cuenta</button>
					</form>
				</div>
				<div className="formContainer signInContainer">
					<form onSubmit={handleSubmitLogin}>
						<h1>Ingresa</h1>
						<input
							type="email" 
							name="email"
							id="emailLogin"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Ingresa tu Email"
							required
						/>
						<input
							type="password"
							name="password"
							id="passwordLogin"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Contraseña"
							required
						/>
						<Link to="/forgot-password">¿Olvidaste tu Contraseña?</Link>
						<button className="signIn" type="submit">Ingresar</button>
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