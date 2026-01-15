function Portfolio() {
    const portfolioItems = [
        {
            image: '/portfolio1.jpg',
            title: 'Online food recipe management system',
            description: 'A full-stack bag-selling e-commerce system featuring authentication, customization, real-time stock updates, secure checkout, and admin dashboards.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            link: 'https://github.com/Rasanjana-61/FinanceDashboard.git'
        },
        {
            image: '/portfolio2.jpg',
            title: 'Car rental management system',
            description: 'A wellness mobile app for habit tracking, mood journaling, hydration reminders, and progress insights.',
            //technologies: ['Kotlin', 'SharedPreferences', 'Android Studio'],
            technologies: ['Java', 'JSP', 'SQL', 'Tomcat'],
            link: '#'
        },
        {
            image: '/portfolio3.jpg',
            title: 'Online garment management system',
            description: 'A web-based hotel booking system with secure backend staff and role management.',
            technologies: ['Java', 'JSP', 'SQL', 'Tomcat'],
            link: '#'
        },
        {
            image: '/portfolio3.jpg',
            title: 'CrownCrest – Hotel Reservation System',
            description: 'A web-based hotel booking system with secure backend staff and role management.',
            technologies: ['Java', 'JSP', 'SQL', 'Tomcat'],
            link: '#'
        }
        
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading">My <span>Portfolio</span></h1>
            <div className="portfolio-content">
                {portfolioItems.map((item, index) => (
                    <div className="portfolio-card" key={index}>
                        <div className="portfolio-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="portfolio-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="tech-stack">
                                {item.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
