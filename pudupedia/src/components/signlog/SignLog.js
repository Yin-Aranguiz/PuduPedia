import React from "react";
import "./SignLog.css";
import "./SignLogInt.js"
const SignAndLog = () => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');
	
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
	
  return ( 
    <div className="bothContainer">
            <div class="container" id="container">
      	<div class="form-container sign-up-container">
      		<form action="#">
      			<h1>Crea una cuenta</h1>
      			<span></span>
      			<input type="text" placeholder="Nombre de Usuario" />
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Contraseña" />
      			<input type="password" placeholder="Confirmar Contraseña" />
      			<button className="signUp">Crear Cuenta</button>
      		</form>
      	</div>
      	<div class="form-container sign-in-container">
      		<form action="#">
      			<h1>Ingresa</h1>
      			<span></span>
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Contraseña" />
      			<a href="#">¿Olvidaste tu Contraseña?</a>
      			<button className="signUp">Ingresar</button>
      		</form>
      	</div>
      	<div class="overlay-container">
      		<div class="overlay">
      			<div class="overlay-panel overlay-left">
      				<h1 className="question">¿Ya tienes una cuenta?</h1>
      				<button class="ghost" id="signIn">Ingresa</button>
      			</div>
      			<div class="overlay-panel overlay-right">
      				<h1 className="question">¿Aún no te registras?</h1>
      				<button class="ghost" id="signUp">Crea una Cuenta</button>
      			</div>
      		</div>
      	</div>
      </div>
    </div>
   );
}
 
export default SignAndLog;