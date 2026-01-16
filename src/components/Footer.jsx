function Footer() {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <p className="footer-text">Copyright &copy; 2026 By Pramod | All Right Reserved</p>
            <div className="footer-icon">
                <a href="#" onClick={scrollToTop}>
                    <i className='bx bx-up-arrow-alt'></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
