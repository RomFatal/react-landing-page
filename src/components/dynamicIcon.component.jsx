import React, { useState, useEffect } from 'react';

const DynamicIcon = ({ color, iconName, className, ...props }) => {
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icon = await import(`../assets/${iconName}.svg`);
        setIconSrc(icon.default);
      } catch (error) {
        console.error(`Icon "${iconName}" could not be loaded.`, error);
      }
    };

    if (iconName) {
      loadIcon();
    }
  }, [iconName]);

  if (!iconSrc) return null;

  return <img src={iconSrc} className={className} alt={`${iconName} icon`}  />;
};

export default DynamicIcon;