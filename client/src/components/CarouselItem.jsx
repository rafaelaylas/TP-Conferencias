import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import removeIcon from '../assets/static/remove-icon.png';
import plusIcon from '../assets/static/plus-icon.png'
import * as storage from '../utils/storage'
import gravatar from '../utils/Gravatar'
// import usersApi from '../hooks/usersApi';


// const API = 'http://localhost:3006/api/users';

const CarouselItem = ({ _id, cover, title, date, description, speaker, infoSpeaker, from }) => {

  // const users = usersApi(API);
  // console.log(users);


  const [verDescript, setverDescript] = useState(false);

  function Agregar() {
    const userId = storage.getUser();
    const usId = userId.id;
    const  conferenceId = _id;

    fetch(`http://localhost:3006/api/conferences/${conferenceId}/${usId}`
    , {
      method: 'PUT', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => {
      window.location.reload();
    })
    .catch(error => console.error('Error:', error))
  }

  function mostrarDescripcion(){
    setverDescript(true)    
  }
  function ocultarDescripcion(){
    setverDescript(false)    
  }

  function Eliminar() {
    const userId = storage.getUser();
    const usId = userId.id;
    const  conferenceId = _id;

    fetch(`http://localhost:3006/api/conferences/delete/${conferenceId}/${usId}`
    , {
      method: 'PUT', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => {

      window.location.reload();
    })
    .catch(error => console.error('Error:', error))
  } 

  return(
  <div className="carousel-item" onMouseOut={ ocultarDescripcion }>
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">

      <div>
      {from == 'user' ?
        (<img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" title="Eliminar" onClick={Eliminar} />)
        :
        (<img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" title="Suscribirse" onClick={Agregar}/>)
      }
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${date} `}</p>

      { description ?
         (verDescript ? 
        (<p className="carousel-item__details--description">{`${description}`}</p>) 
        : 
        (<p className="carousel-item__details--subtitle" onClick={mostrarDescripcion}>Ver informacion</p>)
          ) : ''
        }
      {/* {console.log(users)} */}
      <div className="carousel-speaker">
        <img className="header__menu--profile" src={gravatar(speaker)} alt={speaker} />     
        <p className="carousel-item__details--subtitle">{`${infoSpeaker} `}</p>

      </div>
       {/* <p className="carousel-item__details--subtitle">{`${speaker}`}</p> */}

    </div>
  </div>
  )
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  speaker: PropTypes.string,
  infoSpeaker: PropTypes.string,
  cover: PropTypes.string,
  from: PropTypes.string,
};

export default CarouselItem;
