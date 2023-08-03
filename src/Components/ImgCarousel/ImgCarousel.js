import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './ImgCarousel.css';

const ImgCarousel = ({ slides }) => {

    const [active, setActive] = useState(0);


    if (!slides || !Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    const length = slides.length;

    const nextSlide = () => {
        setActive((prevActive) => (prevActive === length - 1 ? 0 : prevActive + 1));
    };

    const prevSlide = () => {
        setActive((prevActive) => (prevActive === 0 ? length - 1 : prevActive - 1));
    };

    return (
        <section className='slider'>
            <FaChevronLeft className='left-arrow' onClick={prevSlide} />
            <FaChevronRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => (
                <div
                    className={index === active ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === active && (
                        <img src={slide.image} alt='travel image' className='image' />
                    )}
                </div>
            ))}
        </section>
    );
};

export default ImgCarousel;
