import React from 'react';
import { Link } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #f06, #ff9)', // Vibrant gradient
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        background: '#f06', // Bright pink header
        color: '#fff',
        padding: '15px 0',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
    },
    nav: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ff0', // Yellow on hover
    },
    main: {
        flex: 1,
        padding: '20px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
    },
    galleryItem: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    footer: {
        background: '#f06',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
    },
    footerText: {
        margin: 0,
    },
    footerLink: {
        color: '#ff0',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const AlbumPage = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}><Link to="/" style={styles.navLink} activeStyle={styles.navLinkHover}>Home</Link></li>
                        <li style={styles.navItem}><Link to="/about" style={styles.navLink} activeStyle={styles.navLinkHover}>About</Link></li>
                        <li style={styles.navItem}><Link to="/contact" style={styles.navLink} activeStyle={styles.navLinkHover}>Contact</Link></li>
                        <li style={styles.navItem}><Link to="/results" style={styles.navLink} activeStyle={styles.navLinkHover}>Results</Link></li>
                        <li style={styles.navItem}><Link to="/admin" style={styles.navLink} activeStyle={styles.navLinkHover}>Admin Dashboard</Link></li>
                    </ul>
                </nav>
            </header>

            <main style={styles.main}>
                <section style={styles.gallery}>
                    <img src="asset/HHH.jpg" alt="Image 1" style={styles.galleryItem} />
                    <img src="asset/images (1).jpg" alt="Image 2" style={styles.galleryItem} />
                    <img src="asset/images (12).jfif" alt="Image 3" style={styles.galleryItem} />
                    <img src="asset/images (2).jfif" alt="Image 4" style={styles.galleryItem} />
                    <img src="asset/images (4).jpg" alt="Image 5" style={styles.galleryItem} />
                    <img src="asset/Screenshot (1).png" alt="Image 6" style={styles.galleryItem} />
                    <img src="asset/Screenshot (10).png" alt="Image 7" style={styles.galleryItem} />
                    <img src="asset/Screenshot (11).png" alt="Image 8" style={styles.galleryItem} />
                    <img src="asset/Screenshot (12).png" alt="Image 9" style={styles.galleryItem} />
                    {/* Repeat the above <img> tags as needed */}
                </section>
            </main>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; 2024 Takenolab | <Link to="/contact" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Contact</Link> | 
                    <Link to="/privacy-policy" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Privacy Policy</Link> | 
                    <Link to="/terms-of-service" style={styles.footerLink} activeStyle={styles.footerLinkHover}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default AlbumPage;
