import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSpring } from '@react-spring/web'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Button, Container } from "@mui/material";
import Logo from '../../Assets/img/logo.png';

function Navbar() {
  const navRef = useRef();
  const springs = useSpring({ from: { x: -100 }, to: { x: 0 } });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
   
   <Container>
     <header style={{ ...springs, margin:"0", marginTop:"10px", padding:"0" }} >
      <Link to="/" style={{ textDecoration: 'none',color:"var(--black-color)", whiteSpace:"nowrap", display:"flex" }}><img src={Logo} alt="LOGO" width={60}/> <h3 style={{padding:"15px 0 0 15px "}}>Arcadia Hospitality</h3></Link>
      <button className="nav-btn" onClick={showNavbar}><MenuIcon /></button>
      <nav ref={navRef}>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}><CloseIcon /></button>

        <Link to="/About" onClick={showNavbar} ><Button style = {{color:"var(--black-color)"}}>About</Button></Link>
        <Link to="/OurServices" onClick={showNavbar} ><Button style = {{color:"var(--black-color)"}}>Our Services</Button></Link>
        <Link to="/contact" onClick={showNavbar} ><Button style = {{color:"var(--black-color)"}}>Contact</Button></Link>
      </nav>
     
    </header>
   </Container>
  );
}

export default Navbar;
