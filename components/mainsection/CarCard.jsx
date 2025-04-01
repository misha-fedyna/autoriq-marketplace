import Image from "next/image";

import { Fuel, MapPin } from "lucide-react";
import { Gauge } from "lucide-react";
import gearbox from "../../assets/images/gearbox.png";
import { Bookmark } from "lucide-react";
import BMW from "../../assets/images/bmw.jpg";

const CarCard = () => {
  return (
    <div className="flex border-2 border-gray-400 shadow-xl rounded-[8px] flex-col w-[400px] h-[500px] mx-3 max-sm:h-[450px]">
      <div className="max-h-[250px]">
        <Image
          src={BMW}
          alt="car image"
          className="rounded-[5px] h-full w-[400px]"
        />
      </div>
      {/* Information */}
      <div className="ml-[20px] pt-[10px] max-sm:pt-[20px]">
        {/* Марка */}
        <div className="flex items-center gap-x-[90px]">
          <h1 className="text-[30px] font-bold max-sm:text-[25px]">
            BMW X5 2022
          </h1>
          <Bookmark className=" ml-[20px] w-9 h-9 max-sm:ml-[50px] max-sm:w-7 max-sm:h-7" />
        </div>
        {/* Ціна */}
        <div className="flex gap-[20px] items-center mt-[15px] max-sm:mt-[5px]">
          <p className="font-bold text-[25px] max-sm:text-[20px]">47 924 $</p>
          <p className="font-normal text-[20px] max-sm:text-[15px]">
            1 742 160 грн
          </p>
        </div>
        {/* Характеристики */}
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-[60px] mt-[40px] max-sm:mt-[20px]">
          {/* Пробіг */}
          <div className="flex gap-[10px] items-center">
            <Gauge className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[15px]">16 тис. км</span>
          </div>
          {/* Коробка передач */}
          <div className="flex gap-[10px] items-center">
            <Image
              src={gearbox}
              alt="gearbox img"
              className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]"
            />
            <span className="max-sm:text-[15px]">Автоматична</span>
          </div>
          {/* Паливо */}
          <div className="flex gap-[10px] items-center">
            <Fuel className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[15px]">Бензин, 5.7 л</span>
          </div>
          {/* Локація */}
          <div className="flex gap-[10px] items-center">
            <MapPin className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
            <span className="max-sm:text-[15px]">Львів</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
