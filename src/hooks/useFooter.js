import React, { useEffect, useState } from 'react';

function useFooter() {
  const [footer, setFooter] = useState();
  useEffect(() => {
    // Fetch footer data
    fetch('/data/footer.json')
      .then(response => response.json())
      .then(data => setFooter(data))
      .catch(error => console.error('Error fetching footer data:', error));
  }, []);

  if (!footer) {
    return <p>Loading...</p>;
  }

  return (footer)
}

export default useFooter;