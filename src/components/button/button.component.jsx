import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import DynamicIcon from '../dynamicIcon.component';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import './button.style.scss'
const Button = ({ label, icon: Icon, href, className, color, hoverColor, type = "button", ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false)
    return (
        href ? (
            className.includes("primary") ?
                <Link to={href} className={`button ${className}`} style={{ backgroundColor: isHovered ? `${hoverColor}` : `${color}` }} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} {...props}>
                    <span className="button-label pr-4">{label}</span>
                    <ArrowRight className='inline' />
                </Link>
                :
                <Link to={href} className={`button ${className}`} style={{ color: isHovered ? `${hoverColor}` : `${color}`, backgroundColor: '', }} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} {...props}>
                    {<DynamicIcon iconName={Icon} className={`link-icon inline w-[16px] mr-2 pb-1 ${Icon}`} />}
                    <span className="button-label ">{label}</span>
                </Link>) : (<button
                    type={type}
                    className={`button ${className}`}
                    style={{ backgroundColor: isHovered ? `${hoverColor}` : `${color}` }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    {...props}
                >
                    {Icon && <DynamicIcon iconName={Icon} className={`link-icon inline w-[16px] mr-2 pb-1 ${Icon}`} />}
                    <span className="button-label">{label}</span>
                    <ArrowRight className='inline' />
                </button>)
    )
};

export default Button;
