"use client";
import axios from "axios";
import { useState } from "react";
import styles from '../_lib/styles/contace.module.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // For loading state
    const [error, setError] = useState(null); // For error handling
    const [success, setSuccess] = useState(null); // For success message

    const add = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('/api/message', { name, email, message });
            setSuccess('Message sent successfully!');
            console.log(response);
        } catch (error) {
            setError('Error sending message. Please try again.');
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.socialMediaLinks}>
                    <a href="https://x.com/omkar15183788" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/icons/twitter.png' alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/onkaar._" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/icons/instagram.png' alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/omkarpanchalcse" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/icons/linkedin.png' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/omkar755292" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/icons/github.png' alt="GitHub" />
                    </a>
                    <a href="mailto:omkarpanchal.cse@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/icons/email.png' alt="Email" />
                    </a>
                </div>
                <div>
                    <h2>Contact Me</h2>
                    <img src='/assets/images/avatar.svg' alt="Avatar" />
                </div>
                <form className={styles.contactForm} onSubmit={add}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        placeholder='Message'
                        required
                    ></textarea>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>{success}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;
