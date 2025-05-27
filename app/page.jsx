"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllAdvertisements } from "@/app/actions/adverticment";

const Hero = dynamic(() => import("@/components/header/Hero"), {
  loading: () => <div>Завантаження...</div>,
});
const CarCard = dynamic(() => import("@/components/mainsection/CarCard"), {
  loading: () => <div>Завантаження...</div>,
});
const SearchCar = dynamic(() => import("@/components/mainsection/SearchCar"), {
  loading: () => <div>Завантаження...</div>,
});

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllAdvertisements();
        let carsArr = data.results ? data.results.slice(0, 6) : [];
        // For each car, fetch gearbox if missing
        const carsWithGearbox = await Promise.all(
          carsArr.map(async (car) => {
            if (!car.car_product?.gearbox) {
              try {
                const detail = await import("@/app/actions/adverticment");
                const carDetail = await detail.getAdvertisementById(car.id);
                return { ...car, car_product: { ...car.car_product, gearbox: carDetail.car_product?.gearbox || "Автоматична" } };
              } catch {
                return { ...car, car_product: { ...car.car_product, gearbox: "Автоматична" } };
              }
            }
            return car;
          })
        );
        setCars(carsWithGearbox);
      } catch (error) {
        setCars([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <Hero />
      <div className="w-full flex items-center justify-center flex-col">
        <SearchCar />
        <div className="grid grid-cols-1 max-[1240px]:grid-cols-1 xl:grid-cols-3 mt-4 gap-x-[30px] gap-y-[50px]">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse h-[500px] w-full max-w-[400px] bg-gray-200 rounded-[8px] mx-3"
              />
            ))
          ) : (
            cars.map((car) => (
              <Link href={`/cars/${car.id}`} key={car.id}>
                <CarCard car={car} />
              </Link>
            ))
          )}
        </div>
        <Link href="/cars">
          <Button className="mt-[50px] mb-[50px] bg-blue-500 w-[25rem] max-sm:w-[90%] text-[1.875rem] max-sm:text-[1.25rem] h-auto py-4 px-6 hover:bg-blue-300">
            Дивитись всі автомобілі
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
