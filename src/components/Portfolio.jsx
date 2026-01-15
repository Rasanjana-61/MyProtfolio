function Portfolio() {
    const portfolioItems = [
        {
            image: '/portfolio1.jpg',
            title: 'PackPal – Smart Bag Selling System',
            description: 'A full-stack bag-selling e-commerce system featuring authentication, customization, real-time stock updates, secure checkout, and admin dashboards.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: '#'
        },
        {
            image: '/portfolio2.jpg',
            title: 'ZenTrack – Wellness & Habit Tracking App',
            description: 'A wellness mobile app for habit tracking, mood journaling, hydration reminders, and progress insights.',
            technologies: ['Kotlin', 'SharedPreferences', 'Android Studio'],
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
