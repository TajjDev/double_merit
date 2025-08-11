import React, { useEffect, useState } from 'react'
// import Links from '../../links/Links'
import './topNavs.css'
import { Link } from 'react-router-dom'
import menu from '/src/assets/image/menuPh.png'
import cancle from '/src/assets/image/cancleBtn.png'
import logo from '/src/assets/image/logoVocity.png'

import Links from '../links/Link'

const Topnav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationOut, setAnimationOut] = useState(false);
    const [animationin, setAnimationin] = useState(false)
    const openMenu = () => {
        // setAnimationOut(false);
        setIsOpen(true);
    };
    const closeMenu = () => {
        setAnimationOut(true);
        setTimeout(() => {
            setIsOpen(false);
            setAnimationOut(false);
            setAnimationin(false)
        }, 300)
    }
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setAnimationin(true)
            }, 10);
        }
    }, [isOpen])
    const [activeLink, setActiveLink] = useState('')
    const handleLinkClick = (link) => {
        setActiveLink(link)
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [showDropDownMenu, setShowDropDownMenu] = useState(false)
    const toggleDrop = () => {
        setShowDropDownMenu(!showDropDownMenu)
        window.scrollTo(0, 0)
    }
    const toggle = () => {
        window.scrollTo(0, 0)
    }
    const [change, setChange] = useState(false)

    const functionWidth = () => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }
    useEffect(() => {
        functionWidth()
    }, [])

    const toggleMenu = () => {
        setShowDropDownMenu(!showDropDownMenu)
        setChange(!change)
    }

    const [navScroll, setNavScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setNavScroll(true)
            }
            else {
                setNavScroll(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className='navi'>
            <div id="thenav" >

                <div id="logo">
                    <div id="theLogo">
                        <img src={logo} alt="travel" />
                        <h2>Double Merit</h2>
                    </div>
                </div>



                {/* window.innerWidth < 795 ?  */}


                <div id='links'>
                    <div id="theL">
                        <Links className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { toggle; handleLinkClick('home') }} to={'/'} label={'Home'} />
                        <Links className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => { toggle; handleLinkClick('about') }} to={'/about'} label={'About Us'} />
                        <Links className={`nav-link ${activeLink === 'academics' ? 'active' : ''}`} onClick={() => { toggle; handleLinkClick('academics') }} to={'/academics'} label={'Academics'} />
                        <Links className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => { toggle; handleLinkClick('contact') }} to={'/contactUs'} label={'Contact Us'} />
                    </div >
                </div>
                {!isOpen && (
                    <button id='but' onClick={openMenu}> <img src={menu}
                        alt="" /> </button>)} 
                        {isOpen && (
                            <button className="cancel-btn" onClick=
                            {closeMenu}> <img src={cancle} alt="" /> </button>
                        )}
            </div>
            <div className="dropdown">


                {isOpen &&

                    <div className={`menu-content ${animationOut ? 'slide-out' : animationin ? 'slide-in' : ""}`}>
                        <div id='tabMob'>
                            <Links className={`nav-link `} onClick={() => {closeMenu(); toggleDrop; handleLinkClick('home') }} to={'/'} label=
                                {'Home'} />
                            <Links className={`nav-link `} onClick={() => {closeMenu(); toggleDrop; handleLinkClick('about') }} to={'/about'} label={'About Us'} />
                            <Links className={`nav-link `} onClick={() => {closeMenu(); toggleDrop; handleLinkClick('academics') }} to={'/academics'} label=
                                {'Academics'} />
                            <Links className={`nav-link `} onClick={() => {closeMenu(); toggleDrop; handleLinkClick('contact') }} to={'/contactUs'} label=
                                {'Contact Us'} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Topnav
