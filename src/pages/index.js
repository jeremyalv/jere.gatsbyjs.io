import React from 'react'
import Layout from './layout';
import { title } from '../components/index.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout className={title} pageTitle="Home">
        <p>I'm making this blog through the Gatsby tutorial</p>
      </Layout>
    </main>
  ) 
}

export default IndexPage
