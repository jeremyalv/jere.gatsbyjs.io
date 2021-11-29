import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;
    height: 100%;

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 24px;    
           
    }

    @media (max-height: 500px) {
        visibility: hidden;
      }
`;


const Logo = ({ children }) => {
    return (
        <LogoWrap as={Link} to='/'>
            {children}
        </LogoWrap>
    )
};

export default Logo;
