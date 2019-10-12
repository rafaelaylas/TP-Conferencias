import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={updateInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={updateInput}
            />
            <button className="button" type="submit">Iniciar sesión</button>
          
          </form>
        
          <p className="login__container--register">
            No tienes ninguna cuenta
            {' '}
            <Link to="/register">
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};


export default Login;
