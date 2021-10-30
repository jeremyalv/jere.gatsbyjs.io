import React from 'react'
import Layout from '../layout';
import { graphql, Link } from 'gatsby';

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
                            <article key={nodeId}>
                            <Link to={`/blog/${slug}`}>
                                {title}
                            </Link>
                            </article>
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
