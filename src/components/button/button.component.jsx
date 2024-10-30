import React from 'react';
import { Link } from 'react-router-dom'
import DynamicIcon from '../dynamicIcon.componenet';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import './button.style.scss'
const Button = ({ label, icon: Icon, href, className, color = '#000', iconFillType = 'fill', arrow: Arrow, arrowFillType = 'fill', ...props
}) => {
    const iconProps = iconFillType === 'fill' ? { fill: color } : { stroke: color };
    const arrowProps = arrowFillType === 'fill' ? { fill: color } : { stroke: color };


    return (
        className.includes("primary") ?
            <Link to={href} className={`button ${className}`} style={{ backgroundColor: `${color}` }}  {...props}>
                <span className="button-label">{label}</span>
                <ArrowRight className='inline' />
            </Link>
            :
            <Link to={href} className={`button ${className}`} color={color} {...props}>
                 {<DynamicIcon iconName={Icon} className={`link-icon inline w-[16px] mr-1 ${Icon}`} />}
                <span className="button-label ">{label}</span>
            </Link>
    )
};

export default Button;
