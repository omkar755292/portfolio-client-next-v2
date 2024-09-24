"use client"

import React, { useEffect } from 'react';
import styles from '../_lib/styles/blog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '@/app/redux/slices/blogsSlice';



function Blogs() {
    const dispatch = useDispatch();
    const { blogs, loading, error } = useSelector((state) => state.blogs);

    useEffect(() => {
        dispatch(fetchBlogs());
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
