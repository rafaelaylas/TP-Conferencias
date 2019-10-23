import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'
// import userConferencesApi from '../hooks/userConferencesApi';



const CarouselItem = ({ _id, cover, title, date, type, speaker }) => {
  function CustomAlert() {
  
    window.FB.getLoginStatus(response => {
      if(response.status === "connected") {
          // leer los datos del usuario
          const userId = response.authResponse.userID 
          confirm(userId);
          const data = {
            conferenceId: _id,
            useId: userId
           
          }
          // userConferencesApi.insertUserConference(data)
          fetch(`http://localhost:3006/api/conferences/${data.conferenceId}/${data.useId}`
          , {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
          console.log(response);

      }else{
        confirm("no conectado!");
      }
    });
  }
  return(
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={CustomAlert}/>
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${date} ${type} ${speaker} ${_id}`}</p>
    </div>
  </div>
  )
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  speaker: PropTypes.string,
  cover: PropTypes.string,
};

export default CarouselItem;
