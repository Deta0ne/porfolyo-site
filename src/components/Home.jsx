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

  const jobTitles = ["Designer", "Software Engineer", "Developer"];
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    let timer;
    const typeTitle = async (title, index) => {
      if (index < title.length) {
        setCurrentTitle((prevTitle) => prevTitle + title[index]);
        timer = setTimeout(() => typeTitle(title, index + 1), 150);
      } else {
        timer = setTimeout(() => deleteTitle(title, index - 1), 1000);
      }
    };

    const deleteTitle = async (title, index) => {
      if (index >= 0) {
        setCurrentTitle((prevTitle) => prevTitle.slice(0, index));
        timer = setTimeout(() => deleteTitle(title, index - 1), 150);
      } else {
        const nextTitleIndex =
          (jobTitles.indexOf(title) + 1) % jobTitles.length;
        timer = setTimeout(() => typeTitle(jobTitles[nextTitleIndex], 0), 500);
      }
    };

    typeTitle(currentTitle, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to my portfolio</h1>
      <div className="typewriter-container">
        <span className="typewriter">{currentTitle}</span>
        <span className="blinking-cursor" />
      </div>
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
