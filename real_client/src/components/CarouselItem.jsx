import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = ({ cover, title, date, type, speaker }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${date} ${type} ${speaker}`}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  speaker: PropTypes.string,
  cover: PropTypes.string,
};

export default CarouselItem;
