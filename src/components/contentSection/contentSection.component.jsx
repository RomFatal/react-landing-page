import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import ImageFetcher from '../imageFetcher.component';
import DynamicIcon from '../dynamicIcon.component';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import './contentSection.style.scss'

const ContentSection = ({ data, item }) => {
  const { title, description, colorHue, icon, label } = data ?? {};
  const { name, linkLabel, layout, additionalLinks } = item ?? {};

  const colorHsl = `hsl(${colorHue}, 95%, 45%)`;
  const backgroundcolor = `hsl(${colorHue}, 50%, 90%)`;

  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = description ? DOMPurify.sanitize(description) : '';
  const imgPath = `/img/${name.replace(/\s+/g, '-').toLowerCase()}`
  const imgData = {
    title,
    smallImageUrl: imgPath + '-small.jpg',
    largeImageUrl: imgPath + '-large.jpg',
  };

  return (
    <section className={`section ${layout}`}>
      <div className="section-content inline-block">
        <div className='icon-container inline-block' style={{ backgroundColor: `${backgroundcolor}` }}>
          {<DynamicIcon iconName={icon} className={`w-[50] p-2 inline ${icon}`} />}
        </div>
        <div className="inline-block ml-3">
          {label && <p className="section-label">{label}</p>}
          <h2 style={{ color: `${colorHsl}` }}>{title}</h2>
        </div>
        {sanitizedDescription && (
          <p className="section-description mt-2" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        )}
        <div>
          {linkLabel && (
            <div>
              <Link to="/" className="link-label pr-2" style={{ color: `${colorHsl}` }}>{linkLabel}</Link>
              <ArrowRight fill={`${colorHsl}`} className='inline' />
            </div>
          )}
          {/* Render additional links if they exist */}
          {additionalLinks && additionalLinks.length > 0 && (
            <ul className="additional-links">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className={link.icon ? `link-icon ${link.icon}` : ''}>
                    {<DynamicIcon iconName={link.icon} className={`${link.icon}`} />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='img-container inline'>
        <ImageFetcher imgData={imgData} className="circle-img" />
        <div className='icon-container inline-block' style={{ backgroundColor: `${backgroundcolor}` }}>
        {<DynamicIcon iconName={icon} className={`section-icon w-[64px] ${icon}`} />}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;