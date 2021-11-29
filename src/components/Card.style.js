import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div` 
    border: 2px solid rgba(211, 211, 211, 1);
    border-radius: 1rem;
    padding: 1rem;
    width: 70%;
    margin: 1rem;

    @media (max-width: 768px) {
        width: 70%;
        font-size: 1rem;
    }
`;


export const TitleBox = styled.div` 
    font-size: 2rem;
    color: #4402A8;
    margin: 4px;
`;


export const DescriptionBox = styled.div`
    /* border: 1px solid rgba(211, 211, 211, 0.7);
    border-radius: 1rem; */
    padding: 0.5rem;
    width: 70%;
`;

export const CardLink = styled(Link)`
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

    &:active {
        color: black;
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