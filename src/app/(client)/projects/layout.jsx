export const metadata = {
    title: 'Projects | Omkar Panchal',
    description: 'Explore a collection of my innovative projects as a FullStack Developer, showcasing skills in MERN Stack, WebRTC, and more.',
    keywords: 'FullStack Projects, MERN Stack Development, WebRTC, Socket.io',
    author: 'Omkar Panchal',
    url: 'https://omkarcodes.online',
    images: [
        '/assets/images/img-projects/p1.png', 
        '/assets/images/img-projects/p2.png', 
        '/assets/images/img-projects/p3.png', 
        '/assets/images/img-projects/p4.png', 
        '/assets/images/img-projects/p7.png', 
        '/assets/images/img-projects/goku2.png', 
        // Add more images as needed
    ],
    robots: 'index, follow',
};


export default function ProjectLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
