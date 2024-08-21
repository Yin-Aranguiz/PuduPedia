import React, { useState } from 'react';
import './SignLog.css'; 

const SignAndLog = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");


	const handleSubmit = (e) => {
			e.preventDefault();
			console.log(
					username,
					email,
					password,
					confirm,
			);
	};

  return (
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
						 onClick={(e) => handleSubmit(e)}
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
      		<a href="#">¿Olvidaste tu Contraseña?</a>
      		<button 
						 className="signIn" 
						 type="submit"
						 value="submit"
						 onClick={(e) => handleSubmit(e)}
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
  );
};

export default SignAndLog;