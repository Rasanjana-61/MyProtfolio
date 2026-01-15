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
                        <p>Abuja, wusa zone 4. Nigeria</p>
                    </div>
                    <div className="address-list">
                        <span><i className='bx bx-phone'></i></span>
                        <p>+23478790875890</p>
                    </div>
                    <div className="address-list">
                        <span><i className='bx bxs-envelope'></i></span>
                        <p>lucasjacob11@gmail.com</p>
                    </div>
                    <br />
                    <div className="slide-link">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-github'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
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
