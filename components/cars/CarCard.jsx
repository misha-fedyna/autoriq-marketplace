import Image from "next/image";
import CarImg from "../../public/carusel/img-1.webp";
import { Bookmark, Gauge, Fuel, MapPin } from "lucide-react";
import gearbox from "../../assets/images/gearbox.png";

const CarCard = () => {
  return (
      <div className="flex max-[900px]:flex-col w-full max-w-[800px] mx-auto border-2 border-gray-400 shadow-xl rounded-[8px] overflow-hidden">
        <div className="w-full max-[900px]:h-auto">
          <Image
              src={CarImg}
              alt="car image"
              className="w-full h-auto"
          />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-between p-4 w-full max-[900px]:p-3 max-[768px]:p-4 max-[425px]:p-3">
          {/* Марка */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold max-[768px]:text-xl max-[425px]:text-xl">
              Dodge Challenger 2023
            </h1>
            <Bookmark className="w-6 h-6 md:w-8 md:h-8 text-gray-700 max-[768px]:w-6 max-[768px]:h-6 max-[425px]:w-6 max-[425px]:h-6" />
          </div>

          {/* Ціна */}
          <div className="flex gap-4 items-center mt-2">
            <p className="font-bold text-lg md:text-xl max-[768px]:text-lg max-[425px]:text-lg">47 924 $</p>
            <p className="text-gray-600 text-md md:text-lg max-[768px]:text-md max-[425px]:text-md">1 742 160 грн</p>
          </div>

          {/* Характеристики */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
            <div className="flex gap-2 items-center">
              <Gauge className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
              <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">16 тис. км</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                  src={gearbox}
                  alt="gearbox img"
                  className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5"
              />
              <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">Автоматична</span>
            </div>
            <div className="flex gap-2 items-center">
              <Fuel className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
              <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">Бензин, 5.7 л</span>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 max-[768px]:w-5 max-[768px]:h-5 max-[425px]:w-5 max-[425px]:h-5" />
              <span className="text-sm md:text-base max-[768px]:text-sm max-[425px]:text-sm">Львів</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CarCard;
