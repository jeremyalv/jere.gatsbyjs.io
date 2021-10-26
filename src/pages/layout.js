import React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Logo, NavbarLinks, Navbar } from '../components/Navbar';
import { container, heading, siteTitle, pageBodyContainer } from '../components/layout.module.css';
import {
    navLinks,
    navLinkItem,
    navLinkText,
    toggle
 } from '../components/navigation.module.css';
import '../utils/font-awesome';

const Layout = ({ pageTitle, children }) => {
    
    return (
        <div className={container}>
            {/* Site heading */}
            <title className={siteTitle}>{pageTitle}</title>

            {/* Navigation */}
            <Navbar />

            {/* Page body */}
            <main className={pageBodyContainer}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>
    )
};

export default Layout;
