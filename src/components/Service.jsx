function Service() {
    const services = [
        {
            icon: 'bx-window',
            title: 'FRONTEND DEVELOPMENT',
            technologies: 'React, Next.js, Tailwind'
        },
        {
            icon: 'bx-server',
            title: 'BACKEND DEVELOPMENT',
            technologies: 'Node.js, Express, Java'
        },
        {
            icon: 'bx-data',
            title: 'DATABASE MANAGEMENT',
            technologies: 'MongoDB, MySQL'
        },
        {
            icon: 'bx-mobile',
            title: 'MOBILE APP DEVELOPMENT',
            technologies: 'Kotlin, Android SDK'
        },
        {
            icon: 'bx-code-alt',
            title: 'UI/UX DESIGN TOOLS',
            technologies: 'Figma, Git'
        },
        {
            icon: 'bx-globe',
            title: 'WEB SERVICES & API',
            technologies: 'Stripe, REST APIs'
        }
    ];

    return (
        <section className="service" id="service">
            <h1 className="heading">My <span>Services</span></h1>
            <div className="service-content">
                {services.map((service, index) => (
                    <div className="service-box" key={index}>
                        <div className="service-icon">
                            <i className={`bx ${service.icon}`}></i>
                        </div>
                        <h2>{service.title}</h2>
                        <p className="service-text">{service.technologies}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service
