import React from 'react';
import '../Styles/signin.css';

const Signin = () => {
    return (
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Crear cuenta</h1>
			<input type="text" class="form-control" placeholder="Nombre" />
            <input type="text" class="form-control" placeholder="Usuario" />
			<input type="email" class="form-control" placeholder="Email" />
			<input type="password" class="form-control" placeholder="Contraseña" />
			<button>Registrarse</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Iniciar Sesión</h1>
			<input type="text" class="form-control" placeholder="Usuario" />
			<input type="password" class="form-control" placeholder="Contraseña" />
			<a href="#">¿Olvidaste tu contraseña?</a>
			<button>Ingresar</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>¡Volviste!</h1>
				<p>Ingresa para seguir conectado con esta gran comunidad.</p>
				<button class="ghost" id="signIn">Iniciar Sesión</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>¡Hola amiguito!</h1>
				<p>Crea una cuenta para ser parte de esta bonita comunidad.</p>
				<button class="ghost" id="signUp">Crear cuenta</button>
			</div>
		</div>
	</div>
</div>

    )
};

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

export default Signin;
