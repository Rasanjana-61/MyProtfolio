import { useState, useEffect } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Sticky header
            setIsSticky(window.scrollY > 100);

            // Active section detection
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header .navbar a');

            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <h1 className="logo-top">Pramod</h1>
            <i
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu}
            ></i>
            <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a
                    href="#home"
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={handleNavClick}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={handleNavClick}
                >
                    About
                </a>
                <a
                    href="#service"
                    className={activeSection === 'service' ? 'active' : ''}
                    onClick={handleNavClick}
                >
                    Services
                </a>
                <a
                    href="#portfolio"
                    className={activeSection === 'portfolio' ? 'active' : ''}
                    onClick={handleNavClick}
                >
                    Portfolio
                </a>
                <a
                    href="#contact"
                    className={activeSection === 'contact' ? 'active' : ''}
                    onClick={handleNavClick}
                >
                    Contact
                </a>
            </div>
        </header>
    )
}

export default Header
