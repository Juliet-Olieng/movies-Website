
import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import { getMovies } from "../../utils/utilities";
import {Carousel} from "react-responsive-carousel"
import './style.css'

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const Carousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0 to display the first image
  const [images, setImages] = useState([]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const movies = await getMovies();
        setImages(movies.results.slice(0, 4));
        console.log(movies);
      } catch (error) {
        console.error("Error occurred while fetching:", error.message);
      }
    };
    fetchImages();
  }, []);

  const imageSlides = images.map((image) => (
    <div className="indicator" key={image.id}>
      
      <img src={`${IMAGE_BASE_URL}${image.poster_path}`} alt={image.title} />
      <p>{image.title}</p>
      <p>{image.overview}</p>
    </div>
  ));

  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showThumbs={false} // Show the thumbnail navigation
        onClickItem={(index) => handleDotClick(index)} // Enable dot navigation
        className="container"
      >
        {imageSlides}
      </Carousel>
    </div>
  );
};

export default Carousels;

