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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo quasi at corporis perspiciatis voluptatem molestiae itaque et maiores consectetur commodi atque maxime vero similique totam recusandae in, voluptates fugiat? Architecto dolore quasi natus veniam consectetur? Est autem vero hic sit, aliquam non impedit delectus.</p>
                    <button>Read more</button>
                </div>
            </div>
        </section>
    )
}

export default About
