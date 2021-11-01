import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const BlogPost = ({ data }) => {
    const fm = data.mdx.frontmatter
    const body = data.mdx.body;
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle={fm.title}>
            <p>Posted {fm.date}</p>
            <GatsbyImage
                image={image}
                alt={fm.hero_image_alt}
            />
            <p>
                Photo Credit: {" "}
                <a href={fm.hero_image_credit_link}>
                    {fm.hero_image_credit_text}
                </a>
            </p>

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
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
            childImageSharp {
                gatsbyImageData
            }
            }
        }
        body
        }
    }
  
`;

export default BlogPost;