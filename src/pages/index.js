import React from 'react'
import Layout from './layout';
import { title, image } from '../components/home.module.css'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <main>
      <Layout className={title} pageTitle="Home">
        <p>I'm making this blog through the Gatsby tutorial</p>
        <StaticImage
          className={image}
          alt="Mountain Image"
          src="../assets/Mountain.jpg"
          width={400}
        />
      </Layout>
    </main>
  ) 
}

export default IndexPage
