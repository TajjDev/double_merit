import React, { useEffect, useState } from 'react'
import "./academic.css"
import image1 from "/src/assets/image/imgo.jpg"
import image2 from "/src/assets/image/imgt.jpg"
import image3 from "/src/assets/image/imgth.jpg"
import image4 from "/src/assets/image/imgfo.jpg"
import image6 from "/src/assets/image/imgfi.jpg"
import image7 from "/src/assets/image/imgs.jpg"
import image5 from "/src/assets/image/bgOnee.jpg"
import image9 from "/src/assets/image/afterSchoolCare.png"
import image10 from "/src/assets/image/image10.jpeg"
import image11 from "/src/assets/image/image11.jpeg"
import image12 from "/src/assets/image/image12.jpeg"
import image13 from "/src/assets/image/image13.jpeg"
import image14 from "/src/assets/image/image14.jpeg"
import image15 from "/src/assets/image/image15.jpeg"
import image16 from "/src/assets/image/image16.jpeg"
import image17 from "/src/assets/image/image17.jpeg"
import image18 from "/src/assets/image/image18.jpeg"
import image19 from "/src/assets/image/image19.jpeg"


const Academic = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenT, setIsOpenT] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [isOpenedCulture, setIsOpenedCulture] = useState(false)
    const [isOpenedex, setIsOpenedex] = useState(false)
    const [isOpenedmad, setIsOpenedmad] = useState(false)
    const [currentIndexex, setCurrentIndexex] = useState(0)
    const [currentIndexmad, setCurrentIndexmad] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentIndexT, setCurrentIndexT] = useState(0)
    const [currentIndexed, setCurrentIndexed] = useState(0)
    const [currentCulture, setCurrentCulture] = useState(0)
    useEffect(() =>{
        if(isOpen || isOpenT || isOpened || isOpenedCulture || isOpenedex || isOpenedmad){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen, isOpenT, isOpened, isOpenedCulture, isOpenedex, isOpenedmad])
    const images = [
        image1,
        image2,
        image3,
        image4,
   ]
    const imagesT = [
        image5,
        image6,
        image7,
        image5,

    ]
    const imagesex = [
        image14,
        image15,

    ]
    const imagesmad = [
        image16,
        image17,
        image18,
        image19,

    ]
    const imagesed = [
        image9,
    ]
    const imageCulture = [
        image10,
        image11,
        image12,
        image13,
        // image14,
        // image15,
        // image16,
        // image17,
        // image18,
        // image19
    ]
    const openOverlay = (index) => {
        setCurrentIndex(index);
        setIsOpen(true)
    };
    const openOverlayT = (index) => {
        setCurrentIndexT(index);
        setIsOpenT(true)
    };
    const openOverlayED = (index)=>{
        setCurrentIndexed(index)
        setIsOpened(true)
    }
    const openOverlayCulture = (index)=>{
        setCurrentCulture(index)
        setIsOpenedCulture(true)
    }
    const openOverlayex = (index)=>{
        setCurrentIndexex(index)
        setIsOpenedex(true)
    }
    const openOverlaymad = (index)=>{
        setCurrentIndexmad(index)
        setIsOpenedmad(true)
    }
    const closeOverlay = () => setIsOpen(false)
    const closeOverlayT = () => setIsOpenT(false)
    const closeOverlayed = () => setIsOpened(false)
    const closeOverlayCulture = () => setIsOpenedCulture(false)
    const closeOverlayex = () => setIsOpenedex(false)
    const closeOverlaymad = () => setIsOpenedmad(false)

    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const prevImageT = () =>
        setCurrentIndexT((prev) => (prev === 0 ? imagesT.length - 1 : prev - 1));
    const prevImageCulture = () =>
        setCurrentCulture((prev) => prev === 0 ? imageCulture.length - 1 : prev - 1);
    const prevImagex = () =>
        setCurrentIndexex((prev) => (prev === 0 ? imagesex.length - 1 : prev - 1));
    const prevImagemad = () =>
        setCurrentIndexmad((prev) => (prev === 0 ? imagesmad.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const nextImageex = () =>
        setCurrentIndexex((prev) => (prev === imagesex.length - 1 ? 0 : prev + 1));
    const nextImagemad = () =>
        setCurrentIndexmad((prev) => (prev === imagesmad.length - 1 ? 0 : prev + 1));
    const nextImageT = () =>
        setCurrentIndexT((prev) => (prev === imagesT.length - 1 ? 0 : prev + 1));
    const nextImageCulture = () => setCurrentCulture((prev) =>prev === imageCulture.length - 1 ? 0 : prev + 1);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);

    }, []);
    useEffect(() => {
        const handleKeyT = (e) => {
            if (e.key === "Escape") setIsOpenT(false);
            if (e.key === "ArrowRight") nextImageT();
            if (e.key === "ArrowLeft") prevImageT();
        };
        window.addEventListener("keydown", handleKeyT);
        return () => window.removeEventListener("keydown", handleKeyT);
    }, []);
    useEffect(() => {
        const handleKeyCulture = (e) => {
            if (e.key === "Escape") setIsOpenedCulture(false);
            if (e.key === "ArrowRight") nextImageCulture();
            if (e.key === "ArrowLeft") prevImageCulture();
        };
        window.addEventListener("keydown", handleKeyCulture);
        return () => window.removeEventListener("keydown", handleKeyCulture);
    }, []);
    useEffect(() => {
        const handleKeyex = (e) => {
            if (e.key === "Escape") setIsOpenedex(false);
            if (e.key === "ArrowRight") nextImageex();
            if (e.key === "ArrowLeft") prevImagex();
        };
        window.addEventListener("keydown", handleKeyex);
        return () => window.removeEventListener("keydown", handleKeyex);
    }, []);
    useEffect(() => {
        const handleKeymad = (e) => {
            if (e.key === "Escape") setIsOpenedmad(false);
            if (e.key === "ArrowRight") nextImagemad();
            if (e.key === "ArrowLeft") prevImagemad();
        };
        window.addEventListener("keydown", handleKeymad);
        return () => window.removeEventListener("keydown", handleKeymad);
    }, []);
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
    const [touchStartXTed, setTouchStartXTed] = useState(null);
    const handleTouchStartTed = (e) => setTouchStartXTed(e.touches[0].clientX);
    const handleTouchEndTed = (e) => {
        if (!touchStartXTed) return;
        const distance = e.changedTouches[0].clientX - touchStartXTed;
        // if (distance > 50) prevImage();
        // if (distance < -50) nextImage();
        if (distance > 50) prevImageT();
        if (distance < -50) nextImageT();
        setTouchStartXTed(null);
    };
    const [touchStartXCul, setTouchStartXCul] = useState(null);
    const handleTouchStartCul = (e) => setTouchStartXCul(e.touches[0].clientX);
    const handleTouchEndCul = (e) => {
        if (!touchStartXCul) return;
        const distance = e.changedTouches[0].clientX - touchStartXCul;
        // if (distance > 50) prevImage();
        // if (distance < -50) nextImage();
        if (distance > 50) prevImageCulture();
        if (distance < -50) nextImageCulture();
        setTouchStartXCul(null);
    };
    const [touchStartXex, setTouchStartXex] = useState(null);
    const handleTouchStartex = (e) => setTouchStartXex(e.touches[0].clientX);
    const handleTouchEndex = (e) => {
        if (!touchStartXex) return;
        const distance = e.changedTouches[0].clientX - touchStartXex;
        // if (distance > 50) prevImage();
        // if (distance < -50) nextImage();
        if (distance > 50) prevImagex();
        if (distance < -50) nextImageex();
        setTouchStartXex(null);
    };

    const [touchStartXmad, setTouchStartXmad] = useState(null);
    const handleTouchStartmad = (e) => setTouchStartXmad(e.touches[0].clientX);
    const handleTouchEndmad = (e) => {
        if (!touchStartXmad) return;
        const distance = e.changedTouches[0].clientX - touchStartXmad;
        // if (distance > 50) prevImage();
        // if (distance < -50) nextImage();
        if (distance > 50) prevImagemad();
        if (distance < -50) nextImagemad();
        setTouchStartXmad(null);
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
                <div  style={{marginBottom:"20px"}}  id="act">
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
                        <h4 className='h3'>School Excursion</h4>
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
                 <div  style={{marginBottom:"20px"}}  id="act">
                    <div id="graduate">
                        <h4 className='h3'>Cultural Day</h4>
                        <div id="graduateImg">
                            <img src={image10} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayCulture(0)} />
                            <img src={image11} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayCulture(1)} />
                            <img src={image12} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayCulture(2)} />
                            <img src={image13} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayCulture(3)} />
                        </div>
                        {isOpenedCulture && (
                            <div className="overlay" onClick={closeOverlayCulture}>
                                <p id='pic'>swipe for next</p>
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStartCul} onTouchEnd={handleTouchEndCul}>

                                    <button className="nav-btn left desktop-only" onClick={prevImageCulture}>
                                        <p>{p}</p>
                                    </button>
                                    <img src={imageCulture[currentCulture]} alt="Full" />
                                    <button className='nav-btn right desktop-only' onClick={nextImageCulture}>
                                        <p>{pp}</p>
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                    
                   <div id="cultural">
                        <h4 className='h3'>School Excursion</h4>
                        <div id="graduateImg">
                            <img src={image16} alt="Thumbnail" className='thumbnail' onClick={() => openOverlaymad(0)} />
                            <img src={image17} alt="Thumbnail" className='thumbnail' onClick={() => openOverlaymad(1)} />
                            <img src={image18} alt="Thumbnail" className='thumbnail' onClick={() => openOverlaymad(2)} />
                            <img src={image19} alt="Thumbnail" className='thumbnail' onClick={() => openOverlaymad(3)} />
                        </div>
                        {isOpenedmad && (
                            <div className="overlay" onClick={closeOverlaymad}>
                                <p id='pic'>swipe for next</p>
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStartmad} onTouchEnd={handleTouchEndmad}>
                                    <button className="nav-btn left desktop-only" onClick={prevImagemad}>
                                        <p>{p}</p>
                                    </button>
                                    <img src={imagesmad[currentIndexmad]} alt="Full" />
                                    <button className='nav-btn right desktop-only' onClick={nextImagemad}>
                                        <p>{pp}</p>
                                    </button>
                                </div>
                            </div>
                        )}
                         </div>
                         
                </div>
                
                <div id="act">
                    
                    <div  id="cultural">
                        <h4 className='h3'>Walimah-tul-Quran </h4>
                        <div style={{alignSelf:"center"}} id="graduateImg">
                            <img src={image14} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayex(0)} />
                            <img src={image15} alt="Thumbnail" className='thumbnail' onClick={() => openOverlayex(1)} />
                        </div>
                        {isOpenedex && (
                            <div className="overlay" onClick={closeOverlayex}>
                                <p id='pic'>swipe for next</p>
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStartex} onTouchEnd={handleTouchEndex}>
                                    <button className="nav-btn left desktop-only" onClick={prevImagex}>
                                        <p>{p}</p>
                                    </button>
                                    <img src={imagesex[currentIndexex]} alt="Full" />
                                    <button className='nav-btn right desktop-only' onClick={nextImageex}>
                                        <p>{pp}</p>
                                    </button>
                                </div>
                            </div>
                        )}
                         </div>
                         <div  id="graduate">
                        <h4>After School Care Service</h4>
                        <img  style={{alignSelf:"center"}} src={image9} alt="Thumbnail" className='thumbnail2' onClick={() => openOverlayED(0)}  />
                        {isOpened && (
                            <div className="overlay" onClick={closeOverlayed}>
                                {/* <p id='pic'>swipe for next</p> */}
                                <div className="popup" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStartTed} onTouchEnd={handleTouchEndTed}>
                                <img src={imagesed[currentIndexed]} alt="Full" />
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
