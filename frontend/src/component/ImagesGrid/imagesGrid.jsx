import React from "react";
import "./imagesGrid.css";
import { Link } from "react-router-dom";



const ImagesGrid = ({images}) => {
    return (
    <div className="mainContainer">
        <div className="imagesGrid">
            <div>
                {images.map((image,index) => (
                    <div key={index} alt={image.title}>
                        {image.link ? (
                            <Link to={image.link} alt={image.title}>
                                <img className={image.className} src={image.src} alt={image.title}/>
                            </Link>
                        ): (<img className={image.className} src={image.src} alt={image.className}/>

                    )}
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
 };

 export default ImagesGrid;


