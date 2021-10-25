import React from 'react'
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 24px;
    }
`;

const Logo = (props) => {
    return (
        <LogoWrap as={Link} to='/'>
            {props.children}
        </LogoWrap>
    )
};

export default Logo;
