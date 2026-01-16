function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h1 className="heading">About <span>me!</span></h1>
                <div className="about-img">
                    <img src="/about.jpg" alt="About me" />
                    <div className="circle-spin"></div>
                </div>
                <h2 className="text-typing-about">Frontend developer</h2>
                <div className="text-about-content">
                    <p>I am a passionate full-stack developer and IT undergraduate who enjoys building modern, scalable web applications. I have experience working with the MERN stack, Java, PHP, and cloud-based technologies. I love solving real-world problems through clean code, learning new technologies, and continuously improving my skills as a developer.</p>
                    <button>Read more</button>
                </div>
            </div>
        </section>
    )
}

export default About
