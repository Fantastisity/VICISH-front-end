import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Dropdown1, Dropdown2, Dropdown3 } from "./Dropdown";
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo1.png';
import { Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu,NavL } from './NavBarElem'

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
            <img className = "logo" src={logo} alt='logo' style={{filter: "brightness(10%)"}}/>
          </NavLogo>
            <NavMenu style={{fontFamily: "Geneva", fontSize: "19px"}}>
              <NavItem>
                <NavL to='/'>Home</NavL>
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                <NavLink to='life' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Life in Australia <i className="fas fa-caret-down" style={{marginLeft: "5px"}} /></NavLink>
                {dropdown1 && <Dropdown1 />}
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                <NavLink to='learn' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Learning English <i className="fas fa-caret-down" style={{marginLeft: "5px"}}/></NavLink>
                {dropdown2 && <Dropdown2 />}
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                <NavLink to='social' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Explore Local Culture<i className="fas fa-caret-down" style={{marginLeft: "5px"}}/></NavLink>
                {dropdown3 && <Dropdown3 />}
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;