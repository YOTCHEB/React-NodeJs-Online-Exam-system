
import React from 'react';
import styles from './PrivacyPolicy .css'; // Assuming you use CSS modules for styles

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Privacy Policy</h1>
            </header>
            <main className={styles.main}>
                <h2>Introduction</h2>
                <p>
                    Welcome to Online Exam. We are committed to protecting your privacy. This privacy policy explains how we collect, use, and disclose information about you when you use our services.
                </p>
                <h2>Information We Collect</h2>
                <p>
                    We may collect personal information such as your name, email address, and other details that you provide to us. We also collect information about your usage of our services.
                </p>
                <h2>How We Use Your Information</h2>
                <p>
                    We use your information to provide and improve our services, communicate with you, and for other purposes described in this policy.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy, please contact us at <a href="mailto:support@onlineexam.com">support@onlineexam.com</a>.
                </p>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
