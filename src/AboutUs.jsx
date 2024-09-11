import React from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #f5f5f5, #e0f7fa)', // Light Gray to Light Cyan gradient
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        backgroundColor: '#00796b', // Teal
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 20px',
        fontSize: '1.2em',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ffeb3b', // Yellow on hover
    },
    main: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        margin: '20px auto',
        padding: '30px',
        width: '90%',
        maxWidth: '800px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    title: {
        color: '#00796b', // Teal
        marginBottom: '20px',
    },
    text: {
        marginBottom: '20px',
        lineHeight: '1.6',
    },
    footer: {
        backgroundColor: '#00796b', // Teal
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        position: 'relative',
        bottom: 0,
        width: '100%',
    },
    footerLink: {
        color: '#ffeb3b', // Yellow
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0 10px',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.navList}>
                        <li><Link to="/" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Home</Link></li>
                        <li><Link to="/about" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>About</Link></li>
                        <li><Link to="/contact" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Contact</Link></li>
                        <li><Link to="/results" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Results</Link></li>
                        <li><Link to="/admin" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.navLink.color}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
            <main style={styles.main}>
                <h1 style={styles.title}>About Us</h1>
                <p style={styles.text}>
                    Welcome to Online Exam, where we provide a comprehensive platform for conducting online exams. Our mission is to make the examination process smooth and accessible for both educators and students. With a user-friendly interface and robust features, we ensure an effective and efficient assessment experience.
                </p>
                <p style={styles.text}>
                    Our team is dedicated to continuously improving our platform to meet the evolving needs of the education sector. Thank you for choosing Online Exam!
                </p>
            </main>
            <footer style={styles.footer}>
                <p>
                    &copy; 2024 Online Exam | 
                    <Link to="/contact" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Contact</Link> | 
                    <Link to="/privacy-policy" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Privacy Policy</Link> | 
                    <Link to="/terms-of-service" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = styles.footerLinkHover.color} onMouseOut={(e) => e.currentTarget.style.color = styles.footerLink.color}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default AboutUs;
