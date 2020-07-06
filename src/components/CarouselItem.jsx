import React from "react";
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="./Assets/carousel_images/1.jpg"
      alt="image 1"
    />
    <div className="carousel-item__details">
      <div>
        <img src="./Assets/icons/play.png" alt="play" />
        <img src="./Assets/icons/plus.png" alt="plus" />
      </div>
      <p className="carousel-item__details--title">Titulo descriptivo</p>
      <p className="carousel-item__details--subtitle">2020 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
