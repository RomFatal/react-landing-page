import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import DynamicIcon from '../dynamicIcon.componenet';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import './button.style.scss'
const Button = ({ label, icon: Icon, href, className, color, hoverColor, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false)
    return (
        className.includes("primary") ?
            <Link to={href} className={`button ${className}`} style={{ backgroundColor: isHovered ? `${hoverColor}` : `${color}` }} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} {...props}>
                <span className="button-label pr-4">{label}</span>
                <ArrowRight className='inline' />
            </Link>
            :
            <Link to={href} className={`button ${className}`} style={{ color: isHovered ? `${hoverColor}` : `${color}`, backgroundColor: 'rgba(80, 91, 104, 0.9)', }} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} {...props}>
                {<DynamicIcon iconName={Icon} className={`link-icon inline w-[16px] mr-2 pb-1 ${Icon}`} />}
                <span className="button-label ">{label}</span>
            </Link>
    )
};

export default Button;
