import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Logo, NavbarLinks, Navbar } from '../components/Navbar';
import { Container, BlogTitle, PageBodyContainer } from '../components/styles/Layout.style';
import '../utils/font-awesome';

const Layout = ({ pageTitle, children }) => {
    
    return (
        <Container>
            <title>{pageTitle}</title>

            {/* Navigation */}
            <Navbar />

            {/* Page body */}
            <PageBodyContainer>
                <main>
                    <BlogTitle>
                        {pageTitle}
                    </BlogTitle>
                    {children}
                </main>
            </PageBodyContainer>
        </Container>
    )
};

export default Layout;
