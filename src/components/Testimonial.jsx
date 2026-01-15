import { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Testimonial() {
    const testimonials = [
        {
            image: '/testimonial1.jpg',
            name: 'John paul',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial2.jpg',
            name: 'Joy simon',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial3.jpg',
            name: 'Alxender brown',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial4.jfif',
            name: 'Courage stephen',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial5.jfif',
            name: 'Abigail John',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial6.jfif',
            name: 'James timothy',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        },
        {
            image: '/testimonial7.jfif',
            name: 'William Henry',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iste, illo ducimus quas perspiciatis rerum eum earum eveniet voluptatem.'
        }
    ];

    useEffect(() => {
        const swiper = new Swiper('.slider-wrapper', {
            modules: [Navigation, Pagination],
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                700: {
                    slidesPerView: 2
                },
                1240: {
                    slidesPerView: 3
                },
            }
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className="testimonial">
            <h1 className="heading">Valuable <span>Testimonial</span></h1>

            <div className="slide-container swiper">
                <div className="slider-wrapper">
                    <div className="slide-list swiper-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div className="slide-items swiper-slide" key={index}>
                                <div className="image-slide">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div className="circle-spin"></div>
                                </div>
                                <h2>{testimonial.name}</h2>
                                <p>{testimonial.text}</p>
                                <div className="slide-link">
                                    <a href="#"><i className='bx bxl-facebook'></i></a>
                                    <a href="#"><i className='bx bxl-github'></i></a>
                                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
