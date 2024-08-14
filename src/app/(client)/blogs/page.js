"use client"

import React, { useState, useEffect } from 'react';
import styles from '../_lib/styles/blog.module.css';
import axios from 'axios';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                if (response.data) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError('Failed to fetch blogs'); // Set error state
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        getAllBlogs();
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return <p className={styles.loading}>Loading...</p>; // Loading message
    }

    if (error) {
        return <p className={styles.error}>{error}</p>; // Error message
    }

    if (blogs.length === 0) {
        return <p className={styles.noBlogsFound}>No blogs found</p>; // No blogs message
    }

    const renderBlogs = blogs.map((blog) => (
        <div className={styles.blogPost} key={blog.id}>
            <article className={styles.blogArticle}>
                <h2>{blog.title}</h2>
                <p className={styles.blogContent}>{blog.content}</p>
            </article>
            <button className={styles.blogButton}>View</button>
            <span className={styles.postDate}>
                Posted on: {new Date(blog.updatedAt).toLocaleDateString()} by {blog.author}
            </span>
        </div>
    ));

    return (
        <div className={styles.blogContainer}>
            {renderBlogs}

            <div onClick={scrollToTop} className={styles.backTop}>
                <img src="/assets/icons/backtotop.png" alt="Back to Top" />
            </div>
        </div>
    );
}

export default Blogs;
