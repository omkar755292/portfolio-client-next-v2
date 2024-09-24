export const metadata = {
    title: 'Blogs | Omkar Panchal',
    description: 'Explore my collection of blog posts on web development, technology trends, and personal insights. Join me as I share tips, tutorials, and experiences from my journey as a FullStack Developer.',
    keywords: 'Blogs, Omkar Panchal, Web Development, Technology, Tutorials, Personal Insights',
    author: 'Omkar Panchal',
    url: 'https://omkarcodes.online/blogs',
    robots: 'index, follow',
};


export default function BlogLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
