import React, {useState} from "react";
import "./slide.css";


const ImageSlide = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);



    const previousImage = () =>{
        const firstSlide = currentIndex === 0;
        const nextSlide = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(nextSlide)
        };

    const NextImage = () =>{
        const lastSlide = currentIndex === slides.length - 1;
        const nextSlide = lastSlide ? 0 : currentIndex + 1; 
        setCurrentIndex(nextSlide)
        };

    const openPhoto = () => setIsPhotoOpen(true);
    const closePhoto = (e) => {
        if (e.target === e.currentTarget) { setIsPhotoOpen(false);
        }
    };
    

    return (
        <>
        <div className="slideStyle">
            <div className="previousSlide" onClick={previousImage}>❰</div>
            <img
                src={slides[currentIndex].src}
                alt={slides[currentIndex].title}
                className="ImageSlides"
                onClick={openPhoto}
                style={{cursor:"pointer"}}
            />
            <div className="nextSlide" onClick={NextImage}>❱</div>
        </div>

        {isPhotoOpen && (
            <div className="backgroundPhotoPopup" onClick={closePhoto}>
                    <div className="previousSlide" onClick={previousImage}>❰</div>
                    <img
                        src={slides[currentIndex].src}
                        alt={slides[currentIndex].title}
                        className="Photopopup"
                    />
                    <div className="nextSlide" onClick={NextImage}>❱</div>
                </div>  
        )}
        </>
        );
};

export default ImageSlide;
