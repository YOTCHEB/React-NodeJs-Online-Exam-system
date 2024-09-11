import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Inline CSS Styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #00bcd4, #4caf50)', // Teal to Green gradient
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        background: '#2196f3', // Bright Blue header
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
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
        background: '#fff', // White background for main content
        borderRadius: '10px',
        margin: '20px auto',
        padding: '30px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    h1: {
        color: '#2196f3', // Bright Blue for headings
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        margin: '15px 0 5px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        border: '2px solid #2196f3',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        fontSize: '1em',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: '#2196f3', // Button color
        color: '#fff',
        fontSize: '1.1em',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
        background: '#1976d2', // Darker blue on hover
        transform: 'scale(1.05)',
    },
    footer: {
        background: '#2196f3', // Bright Blue footer
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        position: 'relative',
        bottom: 0,
        width: '100%',
    },
    footerText: {
        margin: 0,
    },
    footerLink: {
        color: '#ffeb3b', // Yellow links
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    footerLinkHover: {
        color: '#fff', // White on hover
    },
};

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedPassword = localStorage.getItem('adminPassword');

        if (storedPassword && password === storedPassword.split('-')[1]) {
            navigate('/admin'); // Redirect to admin dashboard
        } else {
            alert('Incorrect password!');
        }
    };

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
                <h1 style={styles.h1}>Admin Login</h1>
                <form id="login-form">
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    /><br />
                    <button
                        type="button"
                        onClick={handleLogin}
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.background}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.background}
                    >
                        Login
                    </button>
                </form>
            </main>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; 2024 Online Exam | <Link to="/contact" style={styles.footerLink}>Contact</Link> | <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link> | <Link to="/terms-of-service" style={styles.footerLink}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
};

export default AdminLogin;
