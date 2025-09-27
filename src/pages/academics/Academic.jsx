import React, { useEffect, useState } from 'react'
import "./academic.css"
import image1 from "/src/assets/image/imgo.jpg"
import image2 from "/src/assets/image/imgt.jpg"
import image3 from "/src/assets/image/imgth.jpg"
import image4 from "/src/assets/image/imgfo.jpg"
import image6 from "/src/assets/image/imgfi.jpg"
import image7 from "/src/assets/image/imgs.jpg"
import image5 from "/src/assets/image/bgOnee.jpg"


const Academic = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenT, setIsOpenT] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentIndexT, setCurrentIndexT] = useState(0)
    const images = [
        image1,
        image2,
        image3,
        image4
    ]
    const imagesT = [
        image5,
        image6,
        image7,
        image4
    ]
    const openOverlay = (index) => {
        setCurrentIndex(index);
        setIsOpen(true)
    };
    const openOverlayT = (index) => {
        setCurrentIndexT(index);
        setIsOpenT(true)
    };

    const closeOverlay = () => setIsOpen(false)
    const closeOverlayT = () => setIsOpenT(false)
    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const prevImageT = () =>
        setCurrentIndexT((prev) => (prev === 0 ? imagesT.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const nextImageT = () =>
        setCurrentIndexT((prev) => (prev === imagesT.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);

    });
    useEffect(() => {
        const handleKeyT = (e) => {
            if (e.key === "Escape") setIsOpenT(false);
            if (e.key === "ArrowRight") nextImageT();
            if (e.key === "ArrowLeft") prevImageT();
        };
        window.addEventListener("keydown", handleKeyT);
        return () => window.removeEventListener("keydown", handleKeyT);
    });
    const [touchStartX, setTouchStartX] = useState(null);
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        if (!touchStartX) return;
        const distance = e.changedTouches[0].clientX - touchStartX;
        if (distance > 50) prevImage();
        if (distance < -50) nextImage();
        // if (distance > 50) prevImageT();
        // if (distance < -50) nextImageT();
        setTouchStartX(null);
    };
    const [touchStartXT, setTouchStartXT] = useState(null);
    const handleTouchStartT = (e) => setTouchStartXT(e.touches[0].clientX);
    const handleTouchEndT = (e) => {
        if (!touchStartXT) return;
        const distance = e.changedTouches[0].clientX - touchStartXT;
        // if (distance > 50) prevImage();
        // if (distance < -50) nextImage();
        if (distance > 50) prevImageT();
        if (distance < -50) nextImageT();
        setTouchStartXT(null);
    };
    const p = "<"
    const pp = ">"
    return (
        <div id='acd'>
            <p id='acdP'>Academics</p>
            <div id="academic">
                <h3>Admissions</h3>
                <p>This citadel of excellence admits students annually into all classes, from Prep to Primary 5.The School's Management traditionally advertises admissions through social media, as well as other channel such as leaflets and the official website</p>
            </div>
            <div id="register">
                <h3>Registration Process</h3>
                <p>To register, kindly visit the school at 7, Ishaga Road opposite Mabo junction Ojuelegba, Surulere Lagos State, Nigeria. <br /> Alternately, you may book an appointment with the proprietress via: <br /> <a href="tel:+23407045071547">07045071547</a> <br /> <a href="mailto:doublemerit1@gmail.com">doublemerit1@gmail.com</a></p>
            </div>
            <div id="schAct">
                <h3 className='h3'>School Activities and outing</h3>
                <div id="act">
                    <div id="graduate">
                        <h4 className='h3'>School Graduation</h4>
                        <div id="graduateImg">
                            <img src={image1} alt="Thumbnail" className='thumbnail' onClick={() => openOverlay(0)} />
                            <img src={image2} alt="Thumbnail" className='thumbnail' onClick={() => openOverlay(1)} />
                            <img src={image3} alt="Thumbnail" className='thumbnail' onClick={() => openOverlay(2)} />
                            <img src={image4} alt="Thumbnail" className='thumbnail' onClick={() => openOverlay(3)} />
                        </div>
                        {isOpen && (
                            <div className="overlay" onClick={closeOverlay}>
                                <p id='pic'>swipe for next</p>
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

                                    <button className="nav-btn left desktop-only" onClick={prevImage}>
                                        <p>{p}</p>
                                    </button>
                                    <img src={images[currentIndex]} alt="Full" />
                                    <button className='nav-btn right desktop-only' onClick={nextImage}>
                                        <p>{pp}</p>
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                    <div id="cultural">
                        <h4 className='h3'>School Graduation</h4>
                        <div id="graduateImg">
                            <img src={image5} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayT(0)} />
                            <img src={image6} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayT(1)} />
                            <img src={image7} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayT(2)} />
                            <img src={image5} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayT(3)} />
                        </div>
                        {isOpenT && (
                            <div className="overlay" onClick={closeOverlayT}>
                                <p id='pic'>swipe for next</p>
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStartT} onTouchEnd={handleTouchEndT}>
                                    <button className="nav-btn left desktop-only" onClick={prevImageT}>
                                        <p>{p}</p>
                                    </button>
                                    <img src={imagesT[currentIndexT]} alt="Full" />
                                    <button className='nav-btn right desktop-only' onClick={nextImageT}>
                                        <p>{pp}</p>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Academic