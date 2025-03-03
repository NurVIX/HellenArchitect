import React from "react";
import "./imagesGrid.css";
import { Link } from "react-router-dom";



 const ImagesGrid = ({images}) => {
    return (
    <div className="mainContainer">
        <div className="imagesGrid">
            {images.map((image,index) => (
                <div key={index} alt={image.title}>
                    {image.link ? (
                        <Link href={image.link} alt={image.title}>
                            <img src={image.src} alt={image.title}/>
                        </Link>
                    ): (<img src={image.src} alt={image.className}/>

                )}
                    <p>{image.title}</p>
                </div>
            ))}
        </div>

    </div>
    
    );
 };

 export default ImagesGrid;


