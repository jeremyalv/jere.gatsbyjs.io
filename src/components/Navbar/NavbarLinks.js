import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
    text-decoration: none;
    color: #000;
    margin: 0px 1rem;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 0.2s ease-in;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: #4402A8;
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: #4402A8;
        font-weight: bold; 
        ::after {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`;

const NavbarLinks = () => {
    return (
        <>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/about'>About</NavItem>
            <NavItem to='/blog'>Blog</NavItem>
        </>
    )
};

export default NavbarLinks;