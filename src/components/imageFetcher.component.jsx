import React, { useEffect, useState } from 'react';

const ImageFetcher = ({ imgUrl, className }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      // Check if an image URL is provided
      if (!imgUrl) {
        setError('No image URL provided.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(imgUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok for the image');
        }
        const blob = await response.blob();
        const image = URL.createObjectURL(blob);
        setImageUrl(image);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imgUrl]); // Refetch if imgUrl changes

  return (
    <div>
      {loading && <p>Loading image...</p>}
      {error && <p>Error fetching image: {error}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          className={className}
          alt="Fetched content"
        />
      )}
    </div>
  );
};

export default ImageFetcher;