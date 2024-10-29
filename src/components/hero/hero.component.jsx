import React from 'react';
import { Link } from 'react-router-dom'

const Hero = ({ data }) => {

    const { title, subtitle, links } = data ?? "";

    return (
        <section className="hero">
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
                                    {link.icon && <i className={`link-icon ${link.icon}`}></i>}
                                    {link.label}
                                </Link>
                            </div>
                        )) : ""
                }
            </div>
        </section>
    );
};

export default Hero;