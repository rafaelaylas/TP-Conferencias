import React from 'react'
import '../assets/styles/userLogued.css'

const userLogued = ({ user, onLogout }) => {
  const logout = () => {
    onLogout();
    window.FB.logout(() => {});
  }
  return (
    <nav className="navbar navbar-light bg-light">
      {user.picture && (
        <img 
          src={user.picture.data.url} 
          className="UserImage"
          alt={user.name}
        />
      )}
      <span>{user.name}</span>
        <a className="nav-item nav-link" href="#" onClick={logout}>
        Salir
      </a> 
    </nav>
    )
}

export default userLogued;