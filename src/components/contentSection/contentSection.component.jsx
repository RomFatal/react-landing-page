import React from 'react';

const ContentSection = ({ data }) => {
  const { title, text, colorHue, icon, label } = data ?? "";

  // Convert color hue to HSL for background color styling
  const backgroundColor = colorHue ? `hsl(${colorHue}, 60%, 90%)` : '#f9f9f9';

  return (
    <section className="content-section" style={{ backgroundColor }}>
      <div className="content-section-header">
        {icon && <i className={`section-icon ${icon}`}></i>}
        <h2>{title}</h2>
        {label && <p className="section-label">{label}</p>}
      </div>
      
      <div
        className="content-section-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </section>
  );
};

export default ContentSection;