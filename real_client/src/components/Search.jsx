import React from 'react'
import '../assets/styles/components/Search.scss';

const Search = ({children}) => (
  <section className="main">
    <h2 className="main__title">¿A que conferencia te gustaria asistir?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
    {children}
  </section>
  
);

export default Search;