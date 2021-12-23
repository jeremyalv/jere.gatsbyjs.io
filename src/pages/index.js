import React from 'react'
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image'
import { CenteredImage, Name, RegularMessage, 
         WelcomeMessage, WelcomeMessageBox } from '../components/styles/Home.style';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

const IndexPage = () => {
  return (
    <main>
        <Layout pageTitle="">

        {/* Header message */}
        <WelcomeMessageBox>
          <WelcomeMessage>
            Hi! I'm <Name>Jeremy</Name>
          </WelcomeMessage>
          <RegularMessage>
            It's nice to meet you! 👋
          </RegularMessage>
        </WelcomeMessageBox>


        {/* Carousel for projects */}
        <Carousel variant='dark'>
          <Carousel.Item>
            <CenteredImage>
              <StaticImage 
                          src="../images/in-progress.jpg" 
                          alt="Coming soon..."
                          width={600} />
            </CenteredImage>
            <Carousel.Caption>
              <p>Coming soon...</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CenteredImage>
              <StaticImage 
                          src="../images/in-progress.jpg" 
                          alt="Coming soon..."
                          width={600} />
            </CenteredImage>
            <Carousel.Caption>
              <p>Coming soon...</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CenteredImage>
              <StaticImage 
                          src="../images/in-progress.jpg" 
                          alt="Coming soon..."
                          width={600} />
            </CenteredImage>
            <Carousel.Caption>
              <p>Coming soon...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Cards for blog posts */}
        {/* Featured post */}
        <Card className='text-center'>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>
              {/* TODO */}
            </Card.Title>
          </Card.Body>
        </Card>



        {/* Regular posts */}

      </Layout>
    </main>
  ) 
}

export default IndexPage
