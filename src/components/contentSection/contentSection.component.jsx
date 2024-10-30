import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import ImageFetcher from '../imageFetcher.component';
import DynamicIcon from '../dynamicIcon.component';

const ContentSection = ({ data, item }) => {
  const { title, description, colorHue, icon, label } = data ?? {};
  const { name, linkLabel, additionalLinks } = item ?? {};

  // Convert color hue to HSL for background color styling
  const backgroundColor = colorHue ? `hsl(${colorHue}, 60%, 90%)` : '#f9f9f9';

  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = description ? DOMPurify.sanitize(description) : '';
  const imgPath = `/img/${name.replace(/\s+/g, '-').toLowerCase()}`
  const imgData = {
    title,
    smallImageUrl: imgPath + '-small.jpg',
    largeImageUrl: imgPath + '-large.jpg',
  };

  return (
    <section className="content-section" style={{ backgroundColor }}>
      <div className="content-section-header">
        {<DynamicIcon iconName={icon} className={`section-icon ${icon}`} />}
        {icon && <i className={`section-icon ${icon}`}></i>}
        <h2>{title}</h2>
        {label && <p className="section-label">{label}</p>}
        {sanitizedDescription && (
          <p className="section-description" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        )}
      </div>
      <div className='img-container'>
        <ImageFetcher imgData={imgData} />
        {<DynamicIcon iconName={icon} className={`section-icon ${icon}`} />}
      </div>
      {linkLabel && (
        <Link to="/" className="link-label-text">{linkLabel}</Link>
      )}

      {/* Render additional links if they exist */}
      {additionalLinks && additionalLinks.length > 0 && (
        <ul className="additional-links">
          {additionalLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className={link.icon ? `link-icon ${link.icon}` : ''}>
              {<DynamicIcon iconName={link.icon} className={`section-icon ${link.icon}`} />}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ContentSection;