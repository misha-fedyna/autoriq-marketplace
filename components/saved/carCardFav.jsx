import Image from "next/image";
import Link from "next/link";
import { MapPin, Fuel, Gauge } from "lucide-react";
import carCardImg from "../../assets/images/DefaultCarImg.png";
import gearbox from "../../assets/images/gearbox.png";

const CarCardFav = () => {
  return (
    <Link href="/car/slug" className="block">
      <div className="border-2 border-gray-400 shadow-xl rounded-lg md:[w-[15rem]] xl:w-[21rem]">
        <Image
          src={carCardImg}
          alt="car img"
          className="w-full h-auto object-cover rounded-md"
          loading="lazy"
        />

        <div className="p-2">
          <h3 className="xl:text-[25px] text-[1rem] font-bold">
            Nissan Qashqai 2018
          </h3>

          <p className="text-lg md:text-xl font-bold">
            12 200 $
            <span className="text-gray-500 xl:text-[1rem] text-[0.725rem] ml-[10px]">
              4 461 124 ₴
            </span>
          </p>

          <div className="flex gap-[60px] text-gray-700 xl:text-[1rem] text-[0.725rem] mt-6">
            <p className="flex items-center">
              <Gauge className="pr-2" />
              20 000 км
            </p>
            <p className="flex items-center">
              <Fuel className="w-5 h-5 mr-1" /> Дизель, 1.6 л
            </p>
          </div>

          <div className="flex gap-[4.75rem] sm:gap-[2rem] md:gap-[4.25rem] lg:gap-[4.25rem] xl:gap-[95px] text-gray-700 text-sm md:text-lg mt-2">
            <p className="flex items-center">
              <MapPin className="w-5 h-5 mr-1 text-black xl:text-[1rem] text-[0.725rem]" />{" "}
              Львів
              <span className="font-semibold"></span>
            </p>
            <p className="flex items-center xl:text-[1rem] text-[0.725rem]">
              <Image
                src={gearbox}
                alt="gearbox img"
                className="w-5 h-5"
                loading="lazy"
              />{" "}
              Механічна
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCardFav;
