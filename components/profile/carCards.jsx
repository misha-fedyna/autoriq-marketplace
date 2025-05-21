import Image from "next/image";
import { MapPin, Fuel, Gauge } from "lucide-react";
import carCardImg from "../../assets/images/DefaultCarImg.png";
import { Button } from "../ui/button";
import gearbox from "../../assets/images/gearbox.png";

const CarCard = () => {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div className="border-2 border-gray-400 shadow-xl rounded-lg w-full">
        <Image
          src={carCardImg}
          alt="car img"
          width={340}
          height={200}
          className="object-cover rounded-md w-full h-auto"
        />

        <div className="p-2">
          <h3 className="text-[25px] font-bold max-sm:text-[20px]">Nissan Qashqai 2018</h3>

          <p className="text-lg md:text-xl font-bold">
            12 200 $
            <span className="text-gray-500 text-[15px] ml-[10px]">4 461 124 ₴</span>
          </p>

          <div className="flex flex-wrap gap-[20px] text-gray-700 text-sm md:text-lg mt-6">
            <p className="flex items-center">
              <Gauge className="pr-2" />
              20 000 км
            </p>
            <p className="flex items-center">
              <Fuel className="w-5 h-5 mr-1" /> Дизель, 1.6 л
            </p>
          </div>

          <div className="flex flex-wrap gap-[20px] text-gray-700 text-sm md:text-lg mt-2">
            <p className="flex items-center">
              <MapPin className="w-5 h-5 mr-1 text-black" /> Львів
            </p>
            <p className="flex items-center">
              <Image src={gearbox} alt="gearbox img" className="w-5 h-5" /> Механічна
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-start sm:gap-x-[20px] gap-y-2 mt-4 max-sm:items-center">
        <Button className="px-4 py-2 bg-blue-500 text-white rounded-md md:w-auto max-sm:w-full hover:bg-blue-300">
          Редагувати
        </Button>
        <Button className="px-4 py-2 bg-red-500 text-white rounded-md md:w-auto max-sm:w-full hover:bg-red-600">
          Видалити
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
