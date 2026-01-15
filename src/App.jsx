import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Portfolio from './components/Portfolio'

import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from 'scrollreveal'

function App() {
    useEffect(() => {
        // Scroll Reveal Animations
        ScrollReveal({
            reset: true,
            distance: '100px',
            duration: 2500
        });

        ScrollReveal().reveal('.home-content, .heading, .service-box', { origin: 'top' });
        ScrollReveal().reveal('button, .portfolio-card, form, .text-typing-about', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img img, .service-box p, .left-section-details, .footer-text, .social-media', { origin: 'left' });
        ScrollReveal().reveal('.text-about-content, .home-content p, .footer-icon', { origin: 'right' });
    }, []);

    return (
        <>
            <Header />
            <Home />
            <About />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
