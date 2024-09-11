// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// // Inline CSS Styles
// const styles = {
//     body: {
//         fontFamily: 'Arial, sans-serif',
//         margin: 0,
//         padding: 0,
//         background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', // Gradient background
//         color: '#333',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         flexDirection: 'column',
//     },
//     header: {
//         background: '#ff6f61', // Vibrant coral header
//         color: '#fff',
//         padding: '15px 0',
//         width: '100%',
//         textAlign: 'center',
//         position: 'absolute',
//         top: 0,
//         zIndex: 1,
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
//         color: '#ffd700', // Gold on hover
//     },
//     main: {
//         background: '#fff', // White background for the main content
//         borderRadius: '10px',
//         padding: '30px',
//         width: '90%',
//         maxWidth: '400px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         textAlign: 'center',
//     },
//     heading: {
//         color: '#ff6f61', // Vibrant coral for the heading
//         marginBottom: '20px',
//     },
//     label: {
//         display: 'block',
//         margin: '15px 0 5px',
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     input: {
//         width: 'calc(100% - 20px)',
//         padding: '10px',
//         border: '2px solid #ff6f61',
//         borderRadius: '5px',
//         boxSizing: 'border-box',
//         marginBottom: '20px',
//         fontSize: '1em',
//     },
//     button: {
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         background: '#ff6f61', // Button color
//         color: '#fff',
//         fontSize: '1.1em',
//         cursor: 'pointer',
//         transition: 'background 0.3s ease, transform 0.3s ease',
//     },
//     buttonHover: {
//         background: '#e64a19', // Darker coral on hover
//         transform: 'scale(1.05)',
//     },
//     paragraph: {
//         marginTop: '10px',
//     },
//     link: {
//         color: '#ff6f61',
//         textDecoration: 'none',
//         fontWeight: 'bold',
//     },
//     linkHover: {
//         textDecoration: 'underline',
//     },
//     footer: {
//         background: '#ff6f61',
//         color: '#fff',
//         textAlign: 'center',
//         padding: '15px 0',
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//     },
//     footerText: {
//         margin: 0,
//     },
//     footerLink: {
//         color: '#ffd700',
//         textDecoration: 'none',
//         fontWeight: 'bold',
//         transition: 'color 0.3s ease',
//     },
//     footerLinkHover: {
//         color: '#fff',
//     },
// };

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             localStorage.setItem('loggedInUser', username);
//             navigate('/exam');
//         } else {
//             alert('Invalid username or password.');
//         }
//     };

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
//                 <h1 style={styles.heading}>Login</h1>
//                 <form id="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                     <label htmlFor="username" style={styles.label}>Username:</label>
//                     <input 
//                         type="text" 
//                         id="username" 
//                         name="username" 
//                         required 
//                         style={styles.input}
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <br />
//                     <label htmlFor="password" style={styles.label}>Password:</label>
//                     <input 
//                         type="password" 
//                         id="password" 
//                         name="password" 
//                         required 
//                         style={styles.input}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <br />
//                     <button 
//                         type="button" 
//                         style={{ ...styles.button, ...styles.buttonHover }}
//                         onClick={handleLogin}
//                     >
//                         Login
//                     </button>
//                 </form>
//                 <p style={styles.paragraph}>Don't have an account? <Link to="/register" style={styles.link}>Register</Link></p>
//             </main>

//             <footer style={styles.footer}>
//                 <p style={styles.footerText}>
//                     &copy; 2024 Online Exam | <Link to="/contact" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Contact</Link> | 
//                     <Link to="/privacy-policy" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Privacy Policy</Link> | 
//                     <Link to="/terms-of-service" style={{ ...styles.footerLink, ...styles.footerLinkHover }}>Terms of Service</Link>
//                 </p>
//             </footer>
//         </div>
//     );
// };

// export default LoginPage;
// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
    // Add similar styling as RegisterPage
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', // Gradient background
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    },
    header: {
        background: '#ff6f61', // Vibrant coral header
        color: '#fff',
        padding: '15px 0',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    main: {
        background: '#fff', // White background for the main content
        borderRadius: '10px',
        padding: '30px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
    h1: {
        color: '#ff6f61', // Vibrant coral for the heading
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
        border: '2px solid #ff6f61',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        fontSize: '1em',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: '#ff6f61', // Button color
        color: '#fff',
        fontSize: '1.1em',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
        background: '#e64a19', // Darker coral on hover
        transform: 'scale(1.05)',
    },
    p: {
        marginTop: '10px',
    },
    link: {
        color: '#ff6f61',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    linkHover: {
        textDecoration: 'underline',
    },
    footer: {
        background: '#ff6f61',
        color: '#fff',
        textAlign: 'center',
        padding: '15px 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    footerText: {
        margin: 0,
    },
};

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            navigate('/exam-conditions'); // Redirect to home or desired page after login
        } else {
            alert('Invalid username or password.');
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
                <h1 style={styles.h1}>Login</h1>
                <form id="login-form">
                    <label htmlFor="username" style={styles.label}>Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                    <br />
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                    <br />
                    <button 
                        type="button" 
                        onClick={handleLogin} 
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.background = styles.buttonHover.background}
                        onMouseOut={(e) => e.currentTarget.style.background = styles.button.background}
                    >
                        Login
                    </button>
                </form>
                <p style={styles.p}>Don't have an account? <Link to="/register" style={styles.link}>Register</Link></p>
            </main>
            <footer style={styles.footer}>
                <p style={styles.footerText}>&copy; 2024 Online Exam</p>
            </footer>
        </div>
    );
};

export default LoginPage;
