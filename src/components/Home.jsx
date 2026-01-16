import { useEffect } from 'react'
import Typed from 'typed.js'

function Home() {
    useEffect(() => {
        const typed = new Typed('.type-animation', {
            strings: ['fullstack developer', 'Mobile app developer', 'UI/UX designer'],
            typeSpeed: 50,
            loop: true,
            backSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi I'm Pramod Rasanjana</h1>
                <h2>I am <span className="type-animation"></span></h2>
                <p>I am a 3rd-year undergraduate at SLIIT with a strong academic background. I have hands-on experience in web development through industry-level projects and enjoy building practical, real-world applications.</p>

                <div className="btn-group">
                    <button>Hire me</button>
                    <button>Let's talk</button>
                </div>

                <div className="social-media">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="https://github.com/Rasanjana-61"><i className='bx bxl-github'></i></a>
                    <a href="www.linkedin.com/in/pramodr001"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>

            <div className="home-img">
                <img src="/home-photo.jpg" alt="Pramod Rasanjana" />
            </div>
        </section>
    )
}

export default Home
