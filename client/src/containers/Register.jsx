import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from "../actions";
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';
import ApiController from '../controller/ApiController';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSave = (e) => {
    console.log("nombre", form.name);
    let data = {
      // id: form.id,
      name: form.name,
      email: form.email,
      password: form.password
    }
    console.log(data);
    ApiController.insertUser(data);
    
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    console.log(form);
    console.log(form.email);
    props.history.push('/');
  }
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={updateInput}
            />
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
            <button onClick={handleSave} className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/login" className="register__container--login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  registerRequest,
};

Register.propTypes = {
  registerRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);