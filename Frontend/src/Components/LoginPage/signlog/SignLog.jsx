import React, { useState } from 'react';
import './SignLog.css';
import { useAuth } from '../../LoginPage/signlog/AuthContext/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const SignAndLog = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();

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
	const [securityQuestion, setSecurityQuestion] = useState('');
	const [securityAnswer, setSecurityAnswer] = useState('');

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
	
		if (!username || !email || !password || !confirm || !securityQuestion || !securityAnswer) {
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
				body: JSON.stringify({ username, email, password, securityQuestion, securityAnswer }),
			});
	
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem('accessToken', data.accessToken);
				alert(`Usuario registrado con éxito. ¡Bienvenido a Pudupedia!`);
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

	const { login } = useAuth(); 
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
	  
		  if (response.ok) {
			const data = await response.json();
			localStorage.setItem('accessToken', data.accessToken);
			login({ token: data.accessToken, user: data.user }); // Asegúrate de pasar el objeto correcto
			alert('Sesión iniciada con éxito. ¡Bienvenido de nuevo!');
			navigate('/'); // Redirige a la página de inicio
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
						<input
							type="text"
							name="securityQuestion"
							id="securityQuestion"
							value={securityQuestion}
							onChange={(e) => setSecurityQuestion(e.target.value)}
							placeholder="Pregunta de Seguridad"
							required
						/>
						<input
							type="text"
							name="securityAnswer"
							id="securityAnswer"
							value={securityAnswer}
							onChange={(e) => setSecurityAnswer(e.target.value)}
							placeholder="Respuesta de Seguridad"
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
						<Link to="/forgot-password-security">¿Olvidaste tu Contraseña?</Link>
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