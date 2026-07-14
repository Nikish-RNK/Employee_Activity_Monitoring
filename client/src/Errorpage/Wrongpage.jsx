import React from 'react';
import Errorpageimg from '../Components/Admin-Dashboard/assets/images/errorimg.avif';

const Errorpage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>WELL, LOOKS LIKE YOU'VE LOST YOUR PAGE</h1>
            <img src={Errorpageimg} alt="404 Error" style={styles.image} />
            <h2 style={styles.subtitle}>
                HERE IS A{' '}
                <a href="/aside" style={styles.link}>
                    HOME PAGE
                </a>
            </h2>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        color: '#333',
        fontFamily: "'Arial', sans-serif",
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#ff6b6b',
        textTransform: 'uppercase',
    },
    image: {
        maxWidth: '60%',
        height: 'auto',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#555',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    linkHover: {
        color: '#0056b3',
    },
};

export default Errorpage;
