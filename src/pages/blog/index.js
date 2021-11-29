import React from 'react'
import Layout from '../layout';
import { graphql, Link } from 'gatsby';
import Card from '../../components/Card';

const BlogPage = ({ data }) => {
    console.log(data.allMdx.nodes);
    const nodes = data.allMdx.nodes;

    return (
        <Layout pageTitle="Blog Posts" surpressHydrationWarning>
            {nodes.map(node => {
                        let { title } = node.frontmatter;
                        let nodeId = node.id
                        let slug = node.slug;


                        return (
                            <Card
                                key={nodeId}
                                title={title}
                                slug={slug}
                                description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}>

                            </Card>
                        );
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
                slug
            }
        }
    }
`;

export default BlogPage;
