import Image from "next/image";
import CarImg from "../../assets/images/car.webp";
import { Bookmark } from "lucide-react";
import { Gauge, Fuel, MapPin } from "lucide-react";
import gearbox from "../../assets/images/gearbox.png";

const CarCard = () => {
  return (
    <div className="flex border-2 border-gray-400 shadow-xl w-[800px] h-[250px] rounded-[8px]">
      <div className="h-[250px]">
        <Image
          src={CarImg}
          alt="car image"
          height={247}
          className="rounded-[5px] h-auto"
        />
      </div>
      {/* Information */}
      <div className="ml-[20px] pt-[10px]">
        {/* Марка */}
        <div className="flex items-center">
          <h1 className="text-[30px] font-bold">Dodge Challenger 2023</h1>
          <Bookmark className=" ml-[20px] w-9 h-9" />
        </div>
        {/* Ціна */}
        <div className="flex gap-[20px] items-center mt-[15px]">
          <p className="font-bold text-[25px]">47 924 $</p>
          <p className="font-normal text-[20px]">1 742 160 грн</p>
        </div>
        {/* Характеристики */}
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-[60px] mt-[40px]">
          {/* Пробіг */}
          <div className="flex gap-[10px] items-center">
            <Gauge className="h-[30px] w-[30px]" />
            <span>16 тис. км</span>
          </div>
          {/* Коробка передач */}
          <div className="flex gap-[10px] items-center">
            <Image
              src={gearbox}
              alt="gearbox img"
              className="h-[30px] w-[30px]"
            />
            <span>Автоматична</span>
          </div>
          {/* Паливо */}
          <div className="flex gap-[10px] items-center">
            <Fuel className="h-[30px] w-[30px]" />
            <span>Бензин, 5.7 л</span>
          </div>
          {/* Локація */}
          <div className="flex gap-[10px] items-center">
            <MapPin className="h-[30px] w-[30px]" />
            <span>Львів</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
