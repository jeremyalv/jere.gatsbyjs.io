import React from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';

const toTitleCase = (sentence) => {
    let titleCasedSentence = sentence.toLowerCase().split(' ')
    titleCasedSentence = titleCasedSentence.map(word => word[0].toUpperCase() + word.slice(1))
    titleCasedSentence = titleCasedSentence.join(' ')

    return titleCasedSentence
}

const BlogPage = ({ data }) => {
    const nodes = data.allFile.nodes

    return (
        <Layout pageTitle="Blog Posts" surpressHydrationWarning>
            {nodes.map(node => {
                        let sentence = node.name.split('-').join(' ')
                        let nodeId = node.id
                        sentence = toTitleCase(sentence)

                        return <li key={nodeId}>{sentence}</li>
                    }
                )
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
                id
            }
        }
    }
`

export default BlogPage
