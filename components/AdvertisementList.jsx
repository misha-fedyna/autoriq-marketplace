'use client';
import { useState, useEffect } from 'react';
import { getAllAdvertisements, createAdvertisement } from '../app/actions/adverticment';

export default function AdvertisementList() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await getAllAdvertisements();
        setAds(data);
      } catch (error) {
        console.error('Failed to fetch ads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const handleCreateAd = async (newAdData) => {
    try {
      const createdAd = await createAdvertisement(newAdData);
      setAds(prevAds => [...prevAds, createdAd]);
    } catch (error) {
      console.error('Failed to create ad:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Advertisements</h1>
      <ul>
        {ads.results && ads.results.map((ad) => (
          <li key={ad.id}>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p>Price: {ad.car_product?.price}</p>
            <p>Model: {ad.car_product?.model}</p>
            <p>Body Type: {ad.car_product?.body_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
