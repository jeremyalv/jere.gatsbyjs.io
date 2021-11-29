import React from 'react'
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Image, Name, WelcomeMessage } from '../components/styles/Home.style';


const IndexPage = () => {
  return (
    <main>
        <Layout pageTitle="Home">
        <WelcomeMessage>
          Hi! I'm <Name>Jeremy</Name>
        </WelcomeMessage>

        {/* <Image>
          <StaticImage
            alt="Mountain Image"
            src="../assets/Mountain.jpg"
            width={400}
          />
        </Image> */}
      </Layout>
    </main>
  ) 
}

export default IndexPage
