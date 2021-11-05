import React, { useRef, useState } from 'react';
import '../Styles/signin.css';
import { Link, useHistory } from 'react-router-dom';

const Signin = () => {
    const container = useRef(null);
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        nickname: "",
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const ob = {
            nombre_usuario: form.name, 
            nick_usuario: form.nickname, 
            email_usuario: form.email, 
            contrasena_usuario: form.password
        }
        fetch("http://localhost:8080/signin", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ob)
        })
        .then((res) => res.json())
        .then((result) => {
            if(!result.valid){
                alert("Hubo un error")
            } else {
                history.push("/")
                setForm({
                    name: "",
                    nickname: "",
                    email: "",
                    password: ""
                })
            }
        })
    }
    const handleClick = () => {
        const { value } = container.current.classList
        if (value.includes("right-panel-active")) {
            container.current.classList.value = "container"
        }
        else {
            container.current.classList.value = "container right-panel-active"
        }
    }
    return (
        <div class="container" ref={container}>
            <div class="form-container sign-up-container">
                <form onSubmit={handleSubmit} action="#">
                    <h1>Crear cuenta</h1>
                    <input name="name" onChange={handleChange} value={form.name} type="text" class="form-control" placeholder="Nombre" />
                    <input name="nickname" onChange={handleChange} value={form.nickname} type="text" class="form-control" placeholder="Usuario" />
                    <input name="email" onChange={handleChange} value={form.email} type="email" class="form-control" placeholder="Email" />
                    <input name="password" onChange={handleChange} value={form.password} type="password" class="form-control" placeholder="Contraseña" />
                    <button className="Iniciar">Registrarse</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Iniciar Sesión</h1>
                    <input type="text" class="form-control" placeholder="Usuario" />
                    <input type="password" class="form-control" placeholder="Contraseña" />
                    <Link to="/signin">¿Olvidaste tu contraseña?</Link>
                    <button className="Iniciar">Ingresar</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>¡Volviste!</h1>
                        <p>Ingresa para seguir conectado con esta gran comunidad.</p>
                        <button className="ghost" onClick={handleClick}>Iniciar Sesión</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>¡Hola amiguito!</h1>
                        <p>Crea una cuenta para ser parte de esta bonita comunidad.</p>
                        <button className="ghost" onClick={handleClick}>Crear cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signin;
