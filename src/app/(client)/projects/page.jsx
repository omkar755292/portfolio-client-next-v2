"use client";

import styles from '../_lib/styles/project.module.css';
import Link from "next/link";

function Project() {

    const projects = [
        {
            "_id": "1",
            "title": "Personal Portfolio and blog Website",
            "description": "A personal website designed to showcase my portfolio, projects, and blogs",
            "projectUrl": "https://omkarcodes.online/",
            "projectImagePath": "/assets/images/img-projects/avatar.svg",
        },
        {
            "_id": "2",
            "title": "Video Calling App",
            "description": "Created video calling app using WebRTC and Socket.io",
            "projectUrl": "https://videocalling.omkarcodes.online/",
            "projectImagePath": "/assets/images/img-projects/p7.png",

        },
        {
            "_id": "3",
            "title": "Telephone Dairy",
            "description": "A web-based application designed for efficient contact management",
            "projectUrl": "https://telephonediary.omkarcodes.online/",
            "projectImagePath": "/assets/images/img-projects/p3.png",
        },
        {
            "_id": "4",
            "title": "The Super Saiyan: Animation Game",
            "description": "An interactive browser game featuring Goku from the Dragon Ball series, built with HTML, CSS, and JavaScript",
            "projectUrl": "https://supersaiyan.omkarcodes.online/",
            "projectImagePath": "/assets/images/img-projects/goku2.png",
        },
        // {
        //     "_id": "5",
        //     "title": "Amazon Clone",
        //     "description": "A full-stack e-commerce web application that closely mimics the Amazon user interface",
        //     "projectUrl": "https://clone.omkarcodes.online/",
        //     "projectImagePath": "/assets/images/img-projects/amz.jfif",

        // },
        {
            "_id": "6",
            "title": "React Admin Panel",
            "description": "Implemented a React admin panel for efficient data management",
            "projectUrl": "https://admin.omkarcodes.online/",
            "projectImagePath": "/assets/images/img-projects/laptop.svg",

        },

    ]

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
                <button
                    className={styles.projectViewButton}
                    onClick={() => window.open(project.projectUrl, '_blank', 'noopener noreferrer')}
                >
                    View
                </button>
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
