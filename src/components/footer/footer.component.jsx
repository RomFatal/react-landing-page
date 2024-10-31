import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './footer.style.scss';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import Button from '../button/button.component';


const Footer = ({ data }) => {

    const { intro, form } = data;

    // Form state to capture user inputs
    const [formData, setFormData] = useState({});

    if (!intro && !form) {
        return (<p>Loading...</p>);
    }
    // Handler for input changes
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        console.log('Form data:', formData);
    };

    return (
        <div className="footer">
            <div className="footer-content">

                {/* Intro Section */}
                <div className="footer-intro inline-block">
                    <h2>{intro.title}</h2>
                    <div
                        className="footer-intro-text"
                        dangerouslySetInnerHTML={{ __html: intro.text }}
                    />
                    <Link to={intro.link.href} className="footer-link " style={{ color: '#FF9900' }}>
                        {intro.link.label}
                        <ArrowRight className='inline ml-1' fill='orange' />
                    </Link>
                </div>

                {/* Form Section */}
                <div className="footer-form inline-block">
                    <h3>{form.title}</h3>
                    <form name={form.name} onSubmit={handleSubmit}>
                        {/* <ArrowSelect /> */}
                        {form.fields.map((field, index) => {
                            if (field.type === 'text') {
                                return (
                                    <input
                                        key={index}
                                        type="text"
                                        name={field.name}
                                        placeholder={field.name}
                                        className={`form-input ${field.size === 'half' ? 'half-width' : 'full-width'}`}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    />
                                );
                            } else if (field.type === 'textarea') {
                                return (
                                    <textarea
                                        key={index}
                                        name={field.name}
                                        placeholder={field.name}
                                        className={`form-textarea ${field.size === 'full' ? 'full-width' : ''}`}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    />
                                );
                            } else if (field.type === 'options') {
                                return field.layout === 'select' ? (
                                    <select
                                        key={index}
                                        name={field.name}
                                        className={`form-select ${field.size === 'half' ? 'half-width' : 'full-width'}`}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    >
                                        {field.options.map((option, i) => (
                                            <option key={i} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <div key={index} className={`form-buttons radio-toolbar ${field.size === 'full' ? 'full-width' : 'half-width'}`}>
                                        {field.options.map((option, i) => (
                                            <label key={i} className="form-button-option">
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    value={option.value}
                                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })}
                        <div className="hero-link inline">
                        </div>
                        <Button label={form.submitLabel} type="submit" className="form-submit-button mt-2 primary" color='#FF9900' hoverColor='#ED8E00' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;