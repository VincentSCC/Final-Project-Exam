import React, {useState} from "react";
import { Link } from 'react-scroll';
import './Navbar.css';
import Home from '../header/Header';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="nav">
            <h1 className="here">VINCENT T. TIMOD</h1>

            <div className="navbtn" onClick={handleMenuToggle}>
              <div className={`bar ${isMenuOpen ? 'bar--1' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'bar--2' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'bar--3' : ''}`}></div>


              {/* <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div> */}
            </div>

            <nav className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
              <ul>
                <div className="intro-divider"></div>

                <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuToggle}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenuToggle}>About</Link></li>
                <li><Link to="work" spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenuToggle}>Works</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={handleMenuToggle}>Contact</Link></li>
                
                <div className="intro-divider"></div>								
              </ul>
            </nav>
        </nav>
    );
}

export default Navbar