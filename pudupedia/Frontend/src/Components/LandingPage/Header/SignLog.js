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
      			<h1>Create Account</h1>
      			<span></span>
      			<input type="text" placeholder="Name" />
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<button>Sign Up</button>
      		</form>
      	</div>
      	<div class="form-container sign-in-container">
      		<form action="#">
      			<h1>Sign in</h1>
      			<span></span>
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<a href="#">Forgot your password?</a>
      			<button>Sign In</button>
      		</form>
      	</div>
      	<div class="overlay-container">
      		<div class="overlay">
      			<div class="overlay-panel overlay-left">
      				<h1></h1>
      				<p></p>
      				<button class="ghost" id="signIn">Sign In</button>
      			</div>
      			<div class="overlay-panel overlay-right">
      				<h1></h1>
      				<p></p>
      				<button class="ghost" id="signUp">Sign Up</button>
      			</div>
      		</div>
      	</div>
      </div>
    </div>
   );
}
 
export default SignAndLog;