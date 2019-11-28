import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import LoginButton from '../components/LoginButton';
import UserLogued from '../components/UserLogued';
import * as storage from '../utils/storage'
import Layout from '../components/Layout';

function Login() {
  // implementar un hook
  const [user, setUser] = useState(null);

  const onLogin = (newUser) => {
    // almacenar los datos en el localStorage
    storage.setUser(newUser);
    setUser(newUser);
  }

  const onLogout = () => {
    storage.clear();
    setUser(null);
  }

  useEffect(() =>{
    // CheckSession es una funcion interna de useEfect()
    const userFromStorage = storage.getUser(); // Leer el user del storage
    if(userFromStorage){
      setUser(userFromStorage);
    }
  }, []);
  
  return (
    <div className="container-fluid">
      <Layout>
        <Header>
          {user && <UserLogued user={user} onLogout={onLogout} />}
        </Header>
      </Layout>
      <div
        className="row" 
        style={{ padding: '24px 16px'}}
      >
        {!user && <LoginButton onLogin={onLogin} />}
      </div>
    </div>
  );
}

export default Login;



