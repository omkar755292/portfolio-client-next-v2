"use client";
import axios from "axios";
import styles from '../_lib/styles/project.module.css';
import { useEffect, useState } from "react";
import Link from "next/link";

function Project() {
    const [projects, setProject] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const response = await axios.get('/api/projects');
                setProject(response.data);
            } catch (error) {
                setError('Error fetching projects');
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };
        getAllProjects();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading...</p>; // Loading message
    }

    if (error) {
        return <p className={styles.error}>{error}</p>; // Error message
    }

    if (projects.length === 0) {
        return <p className={styles.noProjectsFound}>No projects found</p>; // No Projects message
    }

    // Render Project function
    const renderProject = projects.map((project) => (
        <div className={styles.projectCard} key={project._id}>
            <div className={styles.imageContainer}>
                <img src={project.projectImagePath} alt="projectImg" />
                <div className={styles.overlay}>
                    <p>{project.title}</p>
                </div>
            </div>
            <div>
                <Link href={project.projectUrl} passHref>
                    <button className={styles.projectViewButton}>View</button>
                </Link>
            </div>
        </div>
    ));

    return (
        <div className={styles.projectSection}>
            <div className={styles.projectInfo}>
                <h2>My Recent Work</h2>
                <p>Here are a few past projects I've worked on. Want to see more? <a href='https://dribbble.com/omkar13021' target='_blank' rel='noopener noreferrer'>click here</a></p>
            </div>
            <div className={styles.projectContainer}>
                {renderProject}
            </div>
        </div>
    );
}

export default Project;
