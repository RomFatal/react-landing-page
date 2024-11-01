import React from 'react';
import ImageFetcher from '../imageFetcher.component';
import { ReactComponent as ArrowScroll } from '../../assets/arrow-scroll.svg';
import Button from '../button/button.component';
import './hero.style.scss'
import { Link } from 'react-router-dom';
const Hero = ({ data }) => {

    const { title, subtitle, links } = data ?? "";
    const imgPath = '/img/home'
    return (
        <section className="hero">
            <div class="image-container">
            <ImageFetcher imgUrl={`${imgPath}-small.jpg`} className="hero-img hero-img-small hidden" />
            <ImageFetcher imgUrl={`${imgPath}-large.jpg`} className="hero-img" />
            </div>

            <div className="hero-content absolute left-[20%] top-[20%] text-left max-w-[554px]">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-label mt-8">{subtitle}</p>

                <div className="hero-links mt-10 ">

                    {
                        links ?
                            links.map((link, index) => (
                                <div key={index} className="hero-link inline">
                                    <Button label={link.label} href={link.href} className={`hero-link ${link.primary ? "primary" : "secondary"}`} icon={link.icon} color='#FF9900' hoverColor='#ED8E00' />
                                </div>
                            )) : ""
                    }
                </div>
                <div className='arrows-container inline-block mt-24'>
                    <Link className='arrows-scroll'>
                        <ArrowScroll className="" />
                        <ArrowScroll />
                        <ArrowScroll />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;