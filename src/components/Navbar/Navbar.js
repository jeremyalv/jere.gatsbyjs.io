import React, { useState } from 'react';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

// Component Styles
const Navigation = styled.nav`
  font-size: 1.2rem;
  height: 10vh;
  display: flex;
  background-color: white;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  z-index: 2;
  // align-self: center;

  @media (max-width: 768px) {
    border-bottom: none;
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 5vw;

  @media (max-width: 768px) {
    position: absolute;
    top: 0px;
    right: 12px;
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    justify-content: flex-start;
    margin-top: 5vh;
    padding-top: 5vh;
    background-color: #fff;
    transition: all 0.3s ease-out;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const Navbar = () => {
    // const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation>
          <Logo>
              <StaticImage 
                  alt="Logo" 
                  src="../../assets/logo.svg" 
                  height={70}
                  />
              </Logo>
            <Toggle 
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>

            {navbarOpen ? (
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}

        </Navigation>
    )
};

export default Navbar;
