// TermsOfService.js
import React from 'react';
import styles from './TermsOfService.css'; // Assuming you use CSS modules for styles

const TermsOfService = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Terms of Service</h1>
            </header>
            <main className={styles.main}>
                <h2>Introduction</h2>
                <p>
                    Welcome to Online Exam. By using our services, you agree to comply with and be bound by these terms of service. Please read them carefully.
                </p>
                <h2>Usage of Services</h2>
                <p>
                    You agree to use our services only for lawful purposes and in accordance with our terms. We reserve the right to terminate your access if you violate these terms.
                </p>
                <h2>Limitation of Liability</h2>
                <p>
                    Our liability for any damages arising from the use of our services is limited to the maximum extent permitted by law.
                </p>
                <h2>Changes to Terms</h2>
                <p>
                    We may update these terms from time to time. We will notify you of any significant changes by posting the new terms on our website.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about these terms, please contact us at <a href="mailto:support@onlineexam.com">support@onlineexam.com</a>.
                </p>
            </main>
        </div>
    );
};

export default TermsOfService;
