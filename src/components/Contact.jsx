function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
    };

    return (
        <section className="contact" id="contact">
            <div className="left-section-details">
                <h1 className="heading">Get in <span>touch</span></h1>
                <div className="address-contact">
                    <div className="address-list">
                        <span><i className='bx bx-map'></i></span>
                        <p>Colombo, Sri Lanka</p>
                    </div>
                    <div className="address-list">
                        <span><i className='bx bx-phone'></i></span>
                        <p>+94 70560 5698</p>
                    </div>
                    <div className="address-list">
                        <span><i className='bx bxs-envelope'></i></span>
                        <p>pramothrasanjana@gmail.com</p>
                    </div>
                    <br />
                    <div className="slide-link">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="https://github.com/Rasanjana-61"><i className='bx bxl-github'></i></a>
                        <a href="www.linkedin.com/in/pramodr001"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h1 className="heading">Contact <span>Me!</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-feild">
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input-feild">
                        <input type="number" placeholder="Enter your phone no:" />
                        <input type="text" placeholder="Enter your Subject email" />
                    </div>
                    <textarea cols="30" placeholder="Text Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
