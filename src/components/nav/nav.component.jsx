import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from '../dynamicIcon.componenet';
import './nav.style.scss'
const Nav = ({ sectionsData, items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="nav" >
      {items && Object.keys(items).length === Object.keys(sectionsData).length &&
        Object.entries(items).map(([key, value], index) => {
          const colorHue = `hsl(${sectionsData[value.name].colorHue}, 95%, 45%)`;
          const backgroundcolorHue = `hsl(${sectionsData[value.name].colorHue}, 50%, 90%)`;
          const iconName = sectionsData[value.name].icon;

          return (
            <Link to={value.link} key={index} style={{ color: colorHue, backgroundColor: hoveredIndex === index ? `${backgroundcolorHue}` : '' }}
              className="nav-link" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {<DynamicIcon iconName={iconName} className={`nav-icon inline w-[16px] mr-1 pb-1 ${iconName}`} />}
              <span className="text-[19px]">{sectionsData[value.name].title}</span>
            </Link>
          )
        })}
    </div>
  );
};

export default Nav;