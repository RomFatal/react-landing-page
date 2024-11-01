import React, { useEffect, useState } from 'react';

function useHome() {
  const [homeContent, setHomeContent] = useState();
  useEffect(() => {
    // Fetch content data
    fetch('/data/home.json')
      .then(response => response.json())
      .then(data => setHomeContent(data.content))
      .catch(error => console.error('Error fetching hero data:', error));

  }, []);

  if (!homeContent) {
    return <p>Loading...</p>;
  }

  return (homeContent)
}

export default useHome;