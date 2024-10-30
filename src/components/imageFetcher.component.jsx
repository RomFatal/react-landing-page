import React, { useEffect, useState } from 'react';

const ImageFetcher = ({ imgData, className }) => {
  const [smallImageUrl, setSmallImageUrl] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { smallImageUrl: smallUrl, largeImageUrl: largeUrl } = imgData;

      // Check if image URLs are provided
      if (!smallUrl || !largeUrl) {
        setError('No image URLs provided.');
        setLoading(false);
        return;
      }

      try {
        // Fetching small image
        const smallResponse = await fetch(smallUrl);
        if (!smallResponse.ok) {
          throw new Error('Network response was not ok for small image');
        }
        const smallBlob = await smallResponse.blob();
        const smallImage = URL.createObjectURL(smallBlob);
        setSmallImageUrl(smallImage);

        // Fetching large image
        const largeResponse = await fetch(largeUrl);
        if (!largeResponse.ok) {
          throw new Error('Network response was not ok for large image');
        }
        const largeBlob = await largeResponse.blob();
        const largeImage = URL.createObjectURL(largeBlob);
        setLargeImageUrl(largeImage);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imgData]); // Dependency array to refetch if section data changes

  return (
    <div>
      {loading && <p>Loading image...</p>}
      {error && <p>Error fetching image: {error}</p>}
      {largeImageUrl && ( // Render only if largeImageUrl is available
        <img
          src={smallImageUrl} // Fallback for browsers that don't support srcSet
          srcSet={`${smallImageUrl} 1000w, ${largeImageUrl} 1200w`}
          className={className}
          // sizes="(max-width: 600px) 500px, 800px" // Specify the display sizes based on device width
          alt={`${imgData.title} `}
        />
      )}
    </div>
  );
};

export default ImageFetcher;
