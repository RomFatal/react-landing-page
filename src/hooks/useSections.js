import React, { useEffect, useState } from 'react';

function useSections(items) {
  const [sections, setSections] = useState({});

  useEffect(() => {
    (items || []).forEach(section => {
      fetch(`/data/${section.name}.json`)
        .then(response => response.json())
        .then(data => {
          setSections(prevSections => ({
            ...prevSections,
            [section.name]: data
          }));
        })
        .catch(error => console.error('Error fetching section data:', error));
    });
  }, [items]);

  // Display loading message if `sections` is empty
  if (Object.keys(sections).length === 0) {
    return <p>Loading...</p>;
  }

  return sections;
}

export default useSections;