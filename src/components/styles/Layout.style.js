import styled from "styled-components";


export const Container = styled.div` 
    margin: auto;
    min-height: 600px;
    max-width: 1000px;
    font-family: sans-serif;
`;
export const BlogTitle = styled.span` 
    font-size: 2rem;
    color: #4402A8;
    font-weight: bold;
    margin: 1rem 0;

    &:hover {
        opacity: 0.8;
    }
`;

export const PageBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

// https://www.youtube.com/watch?v=-FZzPHSLauc&ab_channel=PedroTech
// for reference