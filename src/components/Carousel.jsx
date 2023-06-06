// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css'; // Importa el archivo CSS separado

import img1 from '../assets/carrusel/furniture-image_2623072.png';
import img2 from '../assets/carrusel/istockphoto-1363661385-612x612.jpg';
import img3 from '../assets/carrusel/pngtree-rattan-sphere-wicker-chair-in-lobby-photo-image_2799498.jpg';
// Agrega todas las imágenes que desees mostrar en el carrusel

const images = [img1, img2, img3]; // Agrega las imágenes importadas al array de imágenes

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImage]);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    
  };

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <img className="carousel-image" src={images[currentImage]} alt="Carousel" />
      <button className="carousel-button prev-button" onClick={goToPreviousImage}>
      <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="carousel-button next-button" onClick={goToNextImage}>
      <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Carousel;


