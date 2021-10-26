import React from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const toTitleCase = (sentence) => {
    let titleCasedSentence = sentence.toLowerCase().split(' ')
    titleCasedSentence = titleCasedSentence.map(word => word[0].toUpperCase() + word.slice(1))
    titleCasedSentence = titleCasedSentence.join(' ')

    return titleCasedSentence
}

const BlogPage = ({ data }) => {
    const nodes = data.allMdx.nodes

    return (
        <Layout pageTitle="Blog Posts" surpressHydrationWarning>
            {nodes.map(node => {
                        let { title, date } = node.frontmatter;
                        let nodeId = node.id
                        let body = node.body


                        return (
                            <article key={nodeId}>
                                <h1>{title}</h1>
                                {date}

                                <MDXRenderer>
                                    {body}
                                </MDXRenderer>
                            </article>
                        );
                        // let sentence = node.name.split('-').join(' ')
                        // let nodeId = node.id
                        // sentence = toTitleCase(sentence)

                        // return <li key={nodeId}>{sentence}</li>
                    }
                )
            }
        </Layout>
    )
};

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
            }
        }
    }
`;

export default BlogPage;
