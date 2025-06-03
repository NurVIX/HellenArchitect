import React from "react";
import "./imagesGrid.css";
import { Link } from "react-router-dom";

const ImagesGrid = ({ images, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
        {images.map((image, index) => (
          <div key={index} className={image.className}>
            {image.link ? (
              <div className="imageContainer">
                <Link to={image.link}>
                  <div className="imageTitleOverlayBackground">
                    <div className="imageTitleOverlayText">{image.title}</div>
                  </div>
                  <img
                    className="gridImage"
                    src={image.src}
                    alt={image.title}
                  />
                </Link>
              </div>
            ) : (
              <img
                className="gridImage"
                src={image.src}
                alt={image.title}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default ImagesGrid;
