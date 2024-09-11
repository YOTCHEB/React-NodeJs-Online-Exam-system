import React from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    body: {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #ff9a8b, #ff6a00)', // Gradient background
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
    },
    header: {
        backgroundColor: '#ff6a00', // Bright orange for header
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    nav: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        display: 'inline',
        margin: '0 15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ffeb3b', // Yellow on hover
    },
    main: {
        flex: 1,
        padding: '40px',
        textAlign: 'center',
        background: '#fff', // White background for main content
        borderRadius: '10px',
        margin: '20px auto',
        width: '90%',
        maxWidth: '1000px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    hero: {
        background: 'linear-gradient(135deg, #ff6a00, #ff9a8b)', // Gradient background for hero section
        color: '#fff',
        padding: '50px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        position: 'relative',
    },
    heroHeading: {
        fontSize: '3em',
        margin: 0,
    },
    heroText: {
        fontSize: '1.2em',
        margin: '10px 0 30px',
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#ffeb3b', // Bright yellow buttons
        color: '#333',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        margin: '5px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#fbc02d', // Darker yellow on hover
        transform: 'scale(1.05)', // Slightly scale up button
    },
    section: {
        marginBottom: '40px',
    },
    infoSection: {
        backgroundColor: '#e3f2fd', // Light blue background
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    infoSectionHeading: {
        fontSize: '2.2em',
        color: '#0288d1', // Dark blue for headings
        marginBottom: '10px',
    },
    infoSectionText: {
        fontSize: '1.2em',
        lineHeight: 1.6,
    },
    callToAction: {
        backgroundColor: '#dce775', // Light green background
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '40px',
    },
    callToActionHeading: {
        fontSize: '2em',
        color: '#388e3c', // Dark green for heading
        marginBottom: '10px',
    },
    callToActionText: {
        fontSize: '1.2em',
        lineHeight: 1.6,
    },
    footer: {
        backgroundColor: '#ff6a00', // Bright orange footer
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
    },
    footerText: {
        margin: 0,
    },
    footerLink: {
        color: '#ffeb3b', // Yellow footer links
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const HomePage = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
                        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
                        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
                        <li style={styles.navItem}><Link to="/results" style={styles.navLink}>Results</Link></li>
                        <li style={styles.navItem}><Link to="/admin" style={styles.navLink}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>

            <main style={styles.main}>
                <section style={styles.hero}>
                    <h1 style={styles.heroHeading}>Welcome to Takenolab</h1>
                    <p style={styles.heroText}>Your go-to platform for online exams.</p>
                    <Link to="/register-page" style={{ ...styles.button, ...styles.buttonHover }}>Start Exam</Link>
                    <Link to="/photo-album" style={{ ...styles.button, ...styles.buttonHover }}>View Photo Album</Link>
                </section>

                <section style={styles.infoSection}>
                    <h2 style={styles.infoSectionHeading}>Why Web Development Matters</h2>
                    <p style={styles.infoSectionText}>
                        Web development is crucial for building interactive and engaging websites. It encompasses a wide range of practices, from front-end development (the visual part of the website) to back-end development (the server-side operations). Effective web development ensures that websites are not only functional but also accessible and user-friendly.
                    </p>
                </section>

                <section style={styles.infoSection}>
                    <h2 style={styles.infoSectionHeading}>The Importance of Web Design</h2>
                    <p style={styles.infoSectionText}>
                        Web design is about creating visually appealing and intuitive interfaces. Good web design improves the user experience (UX) by making navigation easy and ensuring that the site is aesthetically pleasing. Key principles of web design include visual hierarchy, typography, and responsive design, which ensures the website looks great on all devices.
                    </p>
                </section>

                <section style={styles.infoSection}>
                    <h2 style={styles.infoSectionHeading}>Responsive Design</h2>
                    <p style={styles.infoSectionText}>
                        Responsive design allows a website to adapt to different screen sizes and devices. This approach ensures that users have a consistent experience whether they are on a desktop, tablet, or smartphone. By using fluid grids, flexible images, and media queries, responsive design helps maintain usability across various platforms.
                    </p>
                </section>

                <section style={styles.infoSection}>
                    <h2 style={styles.infoSectionHeading}>Web Accessibility</h2>
                    <p style={styles.infoSectionText}>
                        Web accessibility means making websites usable by people with disabilities. This includes designing with considerations for screen readers, keyboard navigation, and color contrast. By adhering to accessibility standards, developers ensure that all users, regardless of their abilities, can access and interact with web content effectively.
                    </p>
                </section>

                <section style={styles.callToAction}>
                    <h2 style={styles.callToActionHeading}>Join Us Today!</h2>
                    <p style={styles.callToActionText}>
                        Ready to make your online presence shine? Join Takenolab and explore the latest in web development and design. Our platform offers you a suite of tools and resources to enhance your skills and build amazing websites. Sign up today to get started!
                    </p>
                    <Link to="/sing" style={{ ...styles.button, ...styles.buttonHover }}>Sign Up Now</Link>
                </section>
            </main>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; 2024 Takenolab | <Link to="/contact" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Contact</Link> | 
                    <Link to="/privacy-policy" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Privacy Policy</Link> | 
                    <Link to="/terms-of-service" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;




// import React from 'react';
// import { Link } from 'react-router-dom';

// // Inline CSS Styles
// const styles = {
//     body: {
//         margin: 0,
//         fontFamily: 'Arial, sans-serif',
//         background: 'linear-gradient(135deg, #ff9a8b, #ff6a00)', // Gradient background
//         color: '#333',
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//         overflowX: 'hidden',
//     },
//     header: {
//         backgroundColor: '#ff6a00', // Bright orange for header
//         color: '#fff',
//         padding: '20px',
//         textAlign: 'center',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     },
//     nav: {
//         listStyle: 'none',
//         padding: 0,
//         margin: 0,
//     },
//     navItem: {
//         display: 'inline',
//         margin: '0 15px',
//     },
//     navLink: {
//         color: '#fff',
//         textDecoration: 'none',
//         fontWeight: 'bold',
//         transition: 'color 0.3s ease',
//     },
//     navLinkHover: {
//         color: '#ffeb3b', // Yellow on hover
//     },
//     main: {
//         flex: 1,
//         padding: '40px',
//         textAlign: 'center',
//         background: '#fff', // White background for main content
//         borderRadius: '10px',
//         margin: '20px auto',
//         width: '90%',
//         maxWidth: '1000px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     },
//     hero: {
//         background: 'linear-gradient(135deg, #ff6a00, #ff9a8b)', // Gradient background for hero section
//         color: '#fff',
//         padding: '50px 20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//         position: 'relative',
//     },
//     heroHeading: {
//         fontSize: '3em',
//         margin: 0,
//     },
//     heroText: {
//         fontSize: '1.2em',
//         margin: '10px 0 30px',
//     },
//     button: {
//         display: 'inline-block',
//         backgroundColor: '#ffeb3b', // Bright yellow buttons
//         color: '#333',
//         padding: '10px 20px',
//         textDecoration: 'none',
//         borderRadius: '5px',
//         fontWeight: 'bold',
//         margin: '5px',
//         transition: 'background-color 0.3s ease, transform 0.3s ease',
//     },
//     buttonHover: {
//         backgroundColor: '#fbc02d', // Darker yellow on hover
//         transform: 'scale(1.05)', // Slightly scale up button
//     },
//     section: {
//         marginBottom: '40px',
//     },
//     infoSection: {
//         backgroundColor: '#e3f2fd', // Light blue background
//         color: '#333',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
//     infoSectionHeading: {
//         fontSize: '2.2em',
//         color: '#0288d1', // Dark blue for headings
//         marginBottom: '10px',
//     },
//     infoSectionText: {
//         fontSize: '1.2em',
//         lineHeight: 1.6,
//     },
//     callToAction: {
//         backgroundColor: '#dce775', // Light green background
//         color: '#333',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         marginTop: '40px',
//     },
//     callToActionHeading: {
//         fontSize: '2em',
//         color: '#388e3c', // Dark green for heading
//         marginBottom: '10px',
//     },
//     callToActionText: {
//         fontSize: '1.2em',
//         lineHeight: 1.6,
//     },
//     footer: {
//         backgroundColor: '#ff6a00', // Bright orange footer
//         color: '#fff',
//         textAlign: 'center',
//         padding: '15px',
//         position: 'relative',
//         bottom: 0,
//         width: '100%',
//         boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
//     },
//     footerText: {
//         margin: 0,
//     },
//     footerLink: {
//         color: '#ffeb3b', // Yellow footer links
//         textDecoration: 'none',
//         fontWeight: 'bold',
//         transition: 'color 0.3s ease',
//     },
//     footerLinkHover: {
//         color: '#fff', // White on hover
//     },
// };

// const HomePage = () => {
//     return (
//         <div style={styles.body}>
//             <header style={styles.header}>
//                 <nav>
//                     <ul style={styles.nav}>
//                         <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
//                         <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
//                         <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
//                         <li style={styles.navItem}><Link to="/results" style={styles.navLink}>Results</Link></li>
//                         <li style={styles.navItem}><Link to="/admin" style={styles.navLink}>Admin Dashboard</Link></li>
//                     </ul>
//                 </nav>
//             </header>

//             <main style={styles.main}>
//                 <section style={styles.hero}>
//                     <h1 style={styles.heroHeading}>Welcome to Takenolab</h1>
//                     <p style={styles.heroText}>Your go-to platform for online exams.</p>
//                     <Link to="/signup" style={{ ...styles.button, ...styles.buttonHover }}>Start Exam</Link>
//                     <Link to="/photo-album" style={{ ...styles.button, ...styles.buttonHover }}>View Photo Album</Link>
//                 </section>

//                 {/* Other sections remain the same */}
//             </main>

//             <footer style={styles.footer}>
//                 <p style={styles.footerText}>
//                     &copy; 2024 Takenolab | <Link to="/contact" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Contact</Link> | 
//                     <Link to="/privacy-policy" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Privacy Policy</Link> | 
//                     <Link to="/terms-of-service" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Terms of Service</Link>
//                 </p>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;


