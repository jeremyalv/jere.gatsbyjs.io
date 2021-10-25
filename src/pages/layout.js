import React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
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
            {/* <header className={siteTitle}>{siteTitleName}</header> */}

            {/* Navigation */}
            <Logo>
                <StaticImage 
                    alt="Logo" 
                    src="../assets/logo_purple.svg" 
                    height={70}
                />
            </Logo>


            {/* Old ver. */}
            {/* <Router>
                <div>
                    <nav>
                        <ul className={navLinks}>
                            <StaticImage 
                            alt="Logo" 
                            src="../assets/logo_purple.svg" 
                            height={70}
                            />
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>Home</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>About</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText}>Blog</Link>
                            </li>
                            <li className={toggle}
                                onClick={toggleMenu}>
                                <a className={navLinkText}>
                                    <FontAwesomeIcon icon={'bars'} className={toggle} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router> */}

            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>
    )
};

export default Layout;
