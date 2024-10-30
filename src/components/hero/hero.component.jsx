import React from 'react';
import { Link } from 'react-router-dom'
import ImageFetcher from '../imageFetcher';
import DynamicIcon from '../dynamicIcon.componenet';
import { ReactComponent as ArrowScroll } from '../../assets/arrow-scroll.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
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
            <ImageFetcher imgData={imgData} className="" />

            <div className="hero-header">
                <h1>{title}</h1>
                <p className="hero-label">{subtitle}</p>
            </div>
            <div className="hero-links">

                {
                    links ?
                        links.map((link, index) => (
                            <div key={index} className="hero-link">
                                <Link href={link.href} className={`hero-link ${link.primary ? "primary" : ""}`}>
                                    {<DynamicIcon iconName={link.icon} className={`link-icon ${link.icon}`} />}
                                    {link.label}
                                </Link>
                            </div>
                        )) : ""
                }
            </div>
            <ArrowScroll />
            <ArrowScroll />
            <ArrowScroll />
            <ArrowRight fill='orange' />

        </section>
    );
};

export default Hero;