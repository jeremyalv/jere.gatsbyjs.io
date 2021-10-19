import React from 'react'
import Layout from './layout';
import { title } from '../components/index.module.css'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <main>
      <Layout className={title} pageTitle="Home">
        <p>I'm making this blog through the Gatsby tutorial</p>
        <StaticImage
          alt="Mountain Image"
          src="../assets/Mountain.jpg"
        />
      </Layout>
    </main>
  ) 
}

export default IndexPage
