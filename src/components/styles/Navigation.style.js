import styled from "styled-components";

export const NavLinks = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-left: 0;
`;

export const NavLinkText = styled.div` 
    display: block;
    padding: 15px 5px;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
`;

export const NavLinkItem = styled.div`
    order: 2;
    text-align: center;
    display: none;

    & :active {
        & NavLinkText {
            background-color: rgba(68, 2, 168, .5);
            color: black;
            text-decoration: underline;
            transition: background-color 0.5s ease;
        }
    }
`;

export const Toggle = styled.div` 
    order: 1;
    font-size: 1.2rem;
`;

export const Active = styled.div` 
    & NavLinkItem {
        display: block;
    }
`;

