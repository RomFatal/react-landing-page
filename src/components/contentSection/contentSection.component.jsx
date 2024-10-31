import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import ImageFetcher from '../imageFetcher.component';
import DynamicIcon from '../dynamicIcon.component';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import Button from '../button/button.component';
import './contentSection.style.scss'

const ContentSection = ({ data, item }) => {
  const { title, description, colorHue, icon, label } = data ?? {};
  const { name, linkLabel, layout, additionalLinks } = item ?? {};

  const colorHsl = `hsl(${colorHue}, 95%, 45%)`;
  const backgroundColor = `hsl(${colorHue}, 50%, 90%)`;
  const fullColor = `hsl(${colorHue}, 100%, 20%)`;


  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = description ? DOMPurify.sanitize(description) : '';
  const imgPath = `/img/${name.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <section className={`section ${layout}`} style={{ backgroundColor: layout === 'fullColor' ? `${fullColor}` : '' }}>
      <div className="section-content inline-block">
        {layout === 'fullColor' ? <div className='icon-container inline-block' style={{ backgroundColor: `${colorHsl}` }}>
          {<DynamicIcon iconName={`${icon}-w`} className={`w-[50] p-3 inline ${icon}`} />}
        </div> :
          <div className='icon-container inline-block' style={{ backgroundColor: `${backgroundColor}` }}>
            {<DynamicIcon iconName={icon} className={`w-[50] p-2 inline ${icon}`} />}
          </div>}
        <div className="section-title inline-block ml-3">
          {label && <p className="section-label">{label}</p>}
          <h2 style={{ color: `${colorHsl}` }}>{title}</h2>
        </div>
        {sanitizedDescription && (
          <p className="section-description mt-2" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        )}
        {layout === 'fullColor' ?

          <div className='links mt-10 pb-10'>
            <hr class="solid opacity-20"></hr>
            <div className=' mt-10 '>
              {/* Render additional links if they exist */}
              {additionalLinks && additionalLinks.length > 0 && (
                <ul className="additional-links inline">
                  <li className="additional-links inline-block">
                    {linkLabel && (
                      <Button label={linkLabel} href="/" className="hero-link primary" color={`${colorHsl}`} hoverColor='#0eb6ff' />
                    )}</li>
                  {additionalLinks.map((link, index) => (
                    <li key={index} className="additional-links inline-block">
                      <Button label={link.label} href={link.href} className="link-icon secondary" icon={link.icon} color={`${colorHsl}`} hoverColor='#0eb6ff' />
                    </li>
                  ))}
                </ul>
              )}
            </div></div> : <div>
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
          </div>}

      </div>

      <div className='img-container inline'>
        <ImageFetcher imgUrl={`${imgPath}-small.jpg`} className="circle-img" />
        {layout === 'fullColor' ? <div></div> :
          <div className='icon-container inline-block' style={{ backgroundColor: `${backgroundColor}` }}>
            {<DynamicIcon iconName={icon} className={`section-icon w-[64px] ${icon}`} />}
          </div>}
      </div>
    </section>
  );
};

export default ContentSection;