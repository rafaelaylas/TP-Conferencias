import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/loginButton.css'

const LoginButton = ({ onLogin }) => {
    
  const facebookLoginHandler = (response) =>{
    if(response.status === "connected"){
        // leer datos del usuario
        // Llamar a la funcion onLogin de nuestro componente padre 
        window.FB.api('/me?fields=id,name,email,picture', userData => onLogin(userData));
    }
  }
  const facebookLogin = () => {
      // Si no hay SDK de FB
      if(! window.FB) return;

      // Chequear para ver si hay alguna sesion activa
      window.FB.getLoginStatus(response => {
          if(response.status === "connected") {
              // leer los datos del usuario
              facebookLoginHandler(response);
          }else{
              // intentar iniciar sesion
            window.FB.login(facebookLoginHandler, {scope: 'public_profile, email'});
          }
      });

    };
  
  return (
    <div className="logginWrapper">
      <Link onClick={facebookLogin} className="login" to="/">
        <span>
          Conectame con facebook
        </span>
      </Link>
    </div>
)  
}

export default LoginButton;