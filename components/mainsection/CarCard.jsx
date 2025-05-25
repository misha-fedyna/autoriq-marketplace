import Image from "next/image";
import { Fuel, MapPin, Gauge, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";
import { getAllAdvertisements } from "@/app/actions/adverticment";
import gearbox from "../../assets/images/gearbox.png";
import BMW from "../../assets/images/bmw.jpg";

const CarCard = ({ car }) => {
  return (
    <div className="border-2 border-gray-400 shadow-xl rounded-[8px] flex flex-col w-full max-w-[400px] h-[500px] mx-3 max-sm:h-[450px] max-sm:mx-auto">
      <div className="max-h-[250px] relative w-full h-full">
        <Image
          src={car?.main_photo}
          alt="car image"
          className="rounded-[5px] object-cover"
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
          priority={false}
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>

      {/* Information */}
      <div className="ml-[20px] pt-[10px] max-sm:pt-[20px] max-sm:ml-[10px]">
        {/* Марка */}
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-bold max-sm:text-[22px]">
            {car?.title}
          </h1>
        </div>

        {/* Ціна */}
        <div className="flex gap-[20px] items-center mt-[15px] max-sm:mt-[5px]">
          <p className="font-bold text-[25px] max-sm:text-[18px]">
            {car.price} $
          </p>
          <p className="font-normal text-[20px] max-sm:text-[14px]">
            {car.price * 41} грн
          </p>
        </div>

        {/* Характеристики */}
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-[30px] mt-[40px] max-sm:mt-[20px] max-sm:gap-x-[30px]">
          <div className="flex gap-[10px] items-center">
            <Gauge className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[14px]">
              {car?.mileage} тис. км
            </span>
          </div>
          <div className="flex gap-[10px] items-center relative w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
            <Image
              src={gearbox}
              alt="gearbox img"
              loading="lazy"
              priority={false}
              fill
              style={{ objectFit: "contain" }}
            />
            <span className="max-sm:text-[14px] ml-[30px]">
              {car?.car_product?.gearbox}
            </span>
          </div>
          <div className="flex gap-[10px] items-center">
            <Fuel className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[14px]">
              {car?.fuel_type_display}, {car?.engine_capacity} л
            </span>
          </div>
          <div className="flex gap-[10px] items-center">
            <MapPin className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[14px]">
              {car?.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
