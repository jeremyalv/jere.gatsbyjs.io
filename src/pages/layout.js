import React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Logo, NavbarLinks, Navbar } from '../components/Navbar';
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    toggle
 } from '../components/navigation.module.css';
import '../utils/font-awesome';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
                }
            }
        }
    `);

    const siteTitleName = data.site.siteMetadata.title;

    return (
        <div className={container}>
            {/* Site heading */}
            <title>{pageTitle} | {siteTitleName}</title>

            {/* Navigation */}
            <Navbar />

            {/* Page body */}
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>
    )
};

export default Layout;
