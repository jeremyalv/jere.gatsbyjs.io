import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const BlogPost = ({ data }) => {
    const { title, date } = data.mdx.frontmatter;
    const body = data.mdx.body;

    return (
        <Layout pageTitle={title}>
            {date}
            <MDXRenderer>
                {body}
            </MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
        }
    }
`;

export default BlogPost;