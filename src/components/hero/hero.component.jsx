import React from 'react';
import ImageFetcher from '../imageFetcher';
import { ReactComponent as ArrowScroll } from '../../assets/arrow-scroll.svg';
// import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import Button from '../button/button.component';
import './hero.style.scss'
const Hero = ({ data }) => {

    const { title, subtitle, links } = data ?? "";
    const imgPath = '/img/home'
    const imgData = {
        title,
        smallImageUrl: imgPath + '-small.jpg',
        largeImageUrl: imgPath + '-large.jpg',
    };
    return (
        <section className="hero">
            <ImageFetcher imgData={imgData} className="hero-img" />

            <div className="hero-content absolute left-[20%] top-[25%] text-left max-w-[554px]">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-label">{subtitle}</p>

                <div className="hero-links mt-10 ">

                    {
                        links ?
                            links.map((link, index) => (
                                <div key={index} className="hero-link inline ">
                                    <Button label={link.label} href={link.href} className={`hero-link ${link.primary ? "primary" : "secondary"}`} icon={link.icon} color='#FF9900' />
                                </div>
                            )) : ""
                    }
                </div>
                <ArrowScroll className="mt-10" />
                <ArrowScroll />
                <ArrowScroll />
            </div>
        </section>
    );
};

export default Hero;