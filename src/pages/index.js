import React from 'react'
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Image, Name, RegularMessage, WelcomeMessage } from '../components/styles/Home.style';


const IndexPage = () => {
  return (
    <main>
        <Layout pageTitle="">
        <WelcomeMessage>
          Hi! I'm <Name>Jeremy</Name>
        </WelcomeMessage>

        <RegularMessage>
          I do code for fun.
        </RegularMessage>

      </Layout>
    </main>
  ) 
}

export default IndexPage
