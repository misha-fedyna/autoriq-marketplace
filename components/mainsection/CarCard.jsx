import Image from "next/image";
import { Fuel, MapPin, Gauge, Bookmark } from "lucide-react";
import gearbox from "../../assets/images/gearbox.png";
import BMW from "../../assets/images/bmw.jpg";

const CarCard = () => {
  return (
      <div className="border-2 border-gray-400 shadow-xl rounded-[8px] flex flex-col w-full max-w-[400px] h-[500px] mx-3 max-sm:h-[450px] max-sm:mx-auto">
        <div className="max-h-[250px]">
          <Image
              src={BMW}
              alt="car image"
              className="rounded-[5px] h-full w-full object-cover max-w-[400px]"
          />
        </div>

        {/* Information */}
        <div className="ml-[20px] pt-[10px] max-sm:pt-[20px] max-sm:ml-[10px]">
          {/* Марка */}
          <div className="flex items-center justify-between">
            <h1 className="text-[30px] font-bold max-sm:text-[22px]">BMW X5 2022</h1>
            <Bookmark className="w-9 h-9 max-sm:w-7 max-sm:h-7" />
          </div>

          {/* Ціна */}
          <div className="flex gap-[20px] items-center mt-[15px] max-sm:mt-[5px]">
            <p className="font-bold text-[25px] max-sm:text-[18px]">47 924 $</p>
            <p className="font-normal text-[20px] max-sm:text-[14px]">1 742 160 грн</p>
          </div>

          {/* Характеристики */}
          <div className="grid grid-cols-2 gap-y-[10px] gap-x-[60px] mt-[40px] max-sm:mt-[20px] max-sm:gap-x-[30px]">
            <div className="flex gap-[10px] items-center">
              <Gauge className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
              <span className="max-sm:text-[14px]">16 тис. км</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image
                  src={gearbox}
                  alt="gearbox img"
                  className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]"
              />
              <span className="max-sm:text-[14px]">Автоматична</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <Fuel className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
              <span className="max-sm:text-[14px]">Бензин, 5.7 л</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <MapPin className="h-[30px] w-[30px] max-sm:h-[20px] max-sm:w-[20px]" />
              <span className="max-sm:text-[14px]">Львів</span>
            </div>
          </div>
        </div>
      </div>
  );
};



export default CarCard;