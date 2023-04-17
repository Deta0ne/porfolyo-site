// src/pages/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [imageData, setImageData] = useState({ images: [], current_index: 0 });

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (imageData.images.length > 0) {
      const timer = setTimeout(() => {
        const newIndex =
          (imageData.current_index + 1) % imageData.images.length;
        setImageData({
          ...imageData,
          current_index: newIndex,
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [imageData]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: "software",
            per_page: 10,
          },
          headers: {
            Authorization:
              "Client-ID gxjXa7XvXl-Fd4l3IlANj6ExoYPDl5b_iSR_1O2ejmw",
          },
        }
      );
      setImageData({ images: response.data.results, current_index: 0 });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to my portfolio</h1>
      {imageData.images.length > 0 && (
        <img
          className="random-image"
          src={imageData.images[imageData.current_index].urls.regular}
          alt={imageData.images[imageData.current_index].alt_description}
        />
      )}
    </div>
  );
};

export default Home;
