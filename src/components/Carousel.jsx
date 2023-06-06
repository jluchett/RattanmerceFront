import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`${styles.image} ${
            index === currentImageIndex ? styles.active : ''
          }`}
        />
      ))}

      <button className={styles.prevButton} onClick={handlePrev}>
        Prev
      </button>

      <button className={styles.nextButton} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
