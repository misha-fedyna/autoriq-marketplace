"use client";

import Image from "next/image";
import { Suspense } from "react";
import { Bookmark, Gauge, Fuel, MapPin } from "lucide-react";
import gearboxSrc from "../../assets/images/gearbox.png";

const CarCard = ({ advertisement }) => {
  console.log("CarCard advertisement:", advertisement);

  return (
    <div className="flex max-[900px]:flex-col w-full max-w-[800px] mx-auto border-2 border-gray-400 shadow-xl rounded-[8px] overflow-hidden">
      <div className="w-full max-[900px]:h-auto">
        <Image
          src={advertisement.mainPhoto}
          alt={`${advertisement.brand} ${advertisement.model}`}
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Information */}
      <div className="flex flex-col justify-between p-4 w-full max-[900px]:p-3 max-[768px]:p-4 max-[425px]:p-3">
        {/* Марка */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold max-[768px]:text-xl max-[425px]:text-xl">
            {`${advertisement.title} ${advertisement.year}`}
          </h1>
        </div>

        {/* Ціна */}
        <div className="flex gap-4 items-center mt-2">
          <p className="font-bold text-lg md:text-xl max-[768px]:text-lg max-[425px]:text-lg">{advertisement.price} $</p>
          {/* Removed UAH price as it's not provided in the API response */}
        </div>

        {/* Характеристики */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
          <div className="flex gap-2 items-center">
            <Suspense fallback={<div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />}>
              <Gauge className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
            </Suspense>
            <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">{advertisement.mileage} тис. км</span>
          </div>
          <div className="flex gap-2 items-center">
            <Suspense fallback={<div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />}>
              <Image
                src={gearboxSrc}
                alt="gearbox img"
                className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5"
                priority={false}
              />
            </Suspense>
            <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">{advertisement.gearbox}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Suspense fallback={<div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />}>
              <Fuel className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
            </Suspense>
            <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">{`${advertisement.fuelType}, ${advertisement.engineCapacity} л`}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Suspense fallback={<div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />}>
              <MapPin className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
            </Suspense>
            <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">{advertisement.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
