/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from '../dynamicIcon.componenet';

const Nav = ({ sectionsData, items }) => {
  return (
    <div className="nav" >
      {items && Object.keys(items).length === Object.keys(sectionsData).length &&
        Object.entries(items).map(([key, value], index) => {
          const colorHue = `hsl(${sectionsData[value.name].colorHue}, 50%, 50%)`;
          const iconName = sectionsData[value.name].icon;

          return(
          <Link to={value.link} key={index} style={{ color: colorHue }} className="nav-link">
            {<DynamicIcon iconName={iconName} className={`nav-icon ${iconName}`}/>}
            {sectionsData[value.name].title}
          </Link>
        )})}
    </div>
  );
};

export default Nav;