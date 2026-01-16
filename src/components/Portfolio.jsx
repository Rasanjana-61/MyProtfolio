function Portfolio() {
    const portfolioItems = [
        {
            image: '/portfolio1.jpg',
            title: 'Online food recipe management system',
            description: 'A full-stack web application for managing online food recipes and customer orders, featuring meal browsing, recipe viewing, secure user authentication, and an admin dashboard with a responsive user-friendly interface.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            link: 'https://github.com/Rasanjana-61/Online-Food-Recipe-System.git'
        },
        {
            image: '/portfolio2.jpg',
            title: 'Car rental management system',
            description: 'A web application for managing car rentals, allowing users to browse vehicles, select rental dates, make reservations, and manage bookings with secure authentication and an admin dashboard.',
            //technologies: ['Kotlin', 'SharedPreferences', 'Android Studio'],
            technologies: ['Java', 'JSP', 'SQL', 'Tomcat'],
            link: 'https://github.com/Rasanjana-61/online-car-rental-system.git'
        },
        {
            image: '/portfolio3.jpg',
            title: 'Online garment management system',
            description: 'A full-stack web application designed to manage garment production, inventory, and orders efficiently. The system allows users to manage products, track orders, handle customer requests, and monitor stock levels through a secure admin dashboard and a responsive user-friendly interface.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB',],
            link: 'https://github.com/Rasanjana-61/FabricLK-Garment-Management-System.git'
        },
        
        {
            image: '/portfolio4.jpg',
            title: 'CrownCrest – Hotel Reservation System',
            description: 'A web-based hotel booking system with secure backend staff and role management.',
            technologies: ['Java', 'JSP', 'SQL', 'Tomcat'],
            link: 'https://github.com/Rasanjana-61/CarRentalSystem.git'
        
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
                            {item.link && item.link !== '#' && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <i className='bx bxl-github'></i>
                                    <span>Code</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
