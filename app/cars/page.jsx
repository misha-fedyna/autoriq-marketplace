"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { getAllAdvertisements } from '../actions/adverticment';
import { useEffect, useState } from "react";

const CarCard = dynamic(() => import("@/components/cars/CarCard"), {
  loading: () => <div>Завантаження...</div>,
});
const SearchCar = dynamic(() => import("@/components/cars/SearchCar"), {
  loading: () => <div>Завантаження...</div>,
});
const CarFilter = dynamic(() => import("@/components/cars/CarFilter"), {
  loading: () => <div>Завантаження...</div>,
});
const Pagination = dynamic(() => import("@/components/cars/Pagination"), {
  loading: () => <div>Завантаження...</div>,
});

function CarsPage() {
  const [advertisements, setAdvertisements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (searchResults) => {
    setAdvertisements(searchResults);
  };

  const handleFilter = async (filters) => {
    setIsLoading(true);
    setError(null);
    try {
      // Формуємо query string
      const params = new URLSearchParams();
      if (filters.body?.length) params.append("body_type", filters.body.join(","));
      if (filters.drive?.length) params.append("drive_type", filters.drive.join(","));
      if (filters.transmission?.length) params.append("gearbox", filters.transmission.join(","));
      if (filters.color?.length) params.append("color", filters.color.join(","));
      if (filters.fuel?.length) params.append("fuel_type", filters.fuel.join(","));
      if (filters.min_price) params.append("min_price", filters.min_price);
      if (filters.max_price) params.append("max_price", filters.max_price);
      if (filters.mark) params.append("brand", filters.mark);
      if (filters.region) params.append("city", filters.region);
      // TODO: додати марку, регіон якщо потрібно
      const url = `http://127.0.0.1:8008/api/cars/advertisements/?${params.toString()}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Filter fetch failed");
      const data = await response.json();
      setAdvertisements(data.results || []);
    } catch (e) {
      setError("Не вдалося завантажити авто за фільтром");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const response = await getAllAdvertisements();
        let adsArr = response?.results || [];
        // For each ad, fetch gearbox if missing
        const adsWithGearbox = await Promise.all(
          adsArr.map(async (ad) => {
            if (!ad.gearbox) {
              try {
                const detail = await import("../actions/adverticment");
                const adDetail = await detail.getAdvertisementById(ad.id);
                return { ...ad, gearbox: adDetail.gearbox || "Автоматична" };
              } catch {
                return { ...ad, gearbox: "Автоматична" };
              }
            }
            return ad;
          })
        );
        setAdvertisements(adsWithGearbox);
      } catch (error) {
        console.error('Error loading initial data:', error);
        setError('Failed to load advertisements');
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center py-4">Завантаження...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden px-4">
      <SearchCar onSearch={handleSearch} />
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full max-w-[1280px] gap-10 mt-[65px] mb-[50px] max-md:flex-col max-md:mt-[20px]">
          <CarFilter onFilter={handleFilter} />
          <div className="flex flex-col gap-y-[20px] flex-1">
            {advertisements.length > 0 ? (
              advertisements.map((ad) => (
                <Link key={ad.id} href={`/cars/${ad.id}`} className="w-full">
                  <CarCard
                    advertisement={{
                      id: ad.id,
                      title: ad.title,
                      brand: ad.brand,
                      model: ad.model_name,
                      year: ad.year,
                      price: ad.price,
                      mileage: ad.mileage,
                      city: ad.city,
                      mainPhoto: ad.main_photo,
                      fuelType: ad.fuel_type_display,
                      engineCapacity: ad.engine_capacity,
                      createdAt: ad.created_at,
                      gearbox: ad.gearbox
                    }}
                  />
                </Link>
              ))
            ) : (
              <div className="text-center py-4">Оголошень не знайдено</div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default CarsPage;