import { useEffect } from 'react'
import Typed from 'typed.js'

function Home() {
    useEffect(() => {
        const typed = new Typed('.type-animation', {
            strings: ['Frontend developer', 'Graphics designer', 'UI/UX designer'],
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
                <h1>Hi I'm Lucas Jacob</h1>
                <h2>I am <span className="type-animation"></span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda cupiditate atque porro, quae, cumque, earum ad tenetur sint dolorum repellat! Sit, quod ullam, aliquam animi tempora voluptas dolorum in omnis expedita, est molestias accusantium.</p>

                <div className="btn-group">
                    <button>Hire me</button>
                    <button>Let's talk</button>
                </div>

                <div className="social-media">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home
