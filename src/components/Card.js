import React from 'react'
import { Container, TitleBox, DescriptionBox, CardLink } from './Card.style';


const Card = ({ title, description, slug }) => {
    return (
        <Container>
            <CardLink to={`/blog/${slug}`}>
                <TitleBox>
                    {title}
                </TitleBox>
            </CardLink>

            <DescriptionBox>
                {description}
            </DescriptionBox>
        </Container>
    )
}

export default Card
