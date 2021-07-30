import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ImageSlider.scss";

import getProjectImages from "../getProjectImages";

export default function ImageSlider({ projectSlider, closeProjectSlider }) {
  const [projectImages, setProjectImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  const handleImgIndex = (moveIndex, jumpDirectly = false) => {
    if (jumpDirectly) {
      setImgIndex(moveIndex);
    } else {
      setImgIndex((prevValue) => {
        const newIndex = prevValue + moveIndex;

        if (newIndex >= projectImages.length) {
          setImgIndex(0);
        } else if (newIndex < 0) {
          setImgIndex(projectImages.length - 1);
        } else {
          setImgIndex(newIndex);
        }
      });
    }
  };

  useEffect(() => {
    const getImages = () => {
      const imgArray = getProjectImages(
        projectSlider.project,
        projectSlider.totalImages,
      );
      setProjectImages(imgArray);
    };

    getImages();
  }, [projectSlider]);

  return (
    <div id="project-image-slider" onClick={closeProjectSlider}>
      <div id="project-image-container">
        <img
          className="project-screenshot"
          src={projectImages[imgIndex]}
          alt="react-ecommerce screenshot"
        />
      </div>
      <div className="image-nav-container">
        <button className="image-nav-btn" onClick={() => handleImgIndex(-1)}>
          <FontAwesomeIcon icon="chevron-left" className="icon" />
        </button>
        <p className="image-index">
          {imgIndex + 1} / {projectImages.length}
        </p>
        <button className="image-nav-btn" onClick={() => handleImgIndex(1)}>
          <FontAwesomeIcon icon="chevron-right" className="icon" />
        </button>
      </div>
      <div className="all-image-slider-container">
        <div className="all-image-slider">
          {projectImages.map((projectImage, index) => {
            return (
              <div
                className={`image-preview ${
                  imgIndex === index ? "inFocus" : ""
                }`}
                onClick={() => handleImgIndex(index, true)}
                key={index}
              >
                <img
                  className="each-image"
                  src={projectImage}
                  alt={`${projectSlider.project} screenshot`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
