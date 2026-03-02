import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {

  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <header>
      <nav>
        <NavLink to="/">
          <img alt="Center for Gov logo" src={logo} className="header-logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="header-cta-button" onClick={navigateToContact}>Get a Quote</button>
          <span onClick={toggleMobileMenu}><FontAwesomeIcon icon={mobileMenuOpen ? faClose : faBars}></FontAwesomeIcon></span>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="mobile-nav-links">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</NavLink>
          <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};



export default Header;