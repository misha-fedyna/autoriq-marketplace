import { Dot } from "lucide-react";
import { FuelIcon, MapPin } from "lucide-react";
import gearbox from "../../assets/images/gearbox.png";
import Image from "next/image";
import drive from "../../assets/images/drive.png";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

const CarDetailInfo = () => {
  return (
    <div className="mt-[20px]">
      <h1 className="font-semibold text-[50px] max-sm:text-[35px] max-sm:ml-[10px]">
        Dodge Chalenger 2023
      </h1>
      {/* Price */}
      <div className="flex flex-row mt-0 items-center max-sm:ml-[10px]">
        <p className="font-medium text-[30px]">47 924 $</p>
        <Dot />
        <p className="font-normal text-[20px]">1 742 160 грн</p>
        <Dot />
        <p className="font-normal text-[20px]">38 374 €</p>
      </div>
      {/* Short info */}
      <div className="grid grid-cols-2 gap-[20px] mt-[20px] max-sm:ml-[10px]">
        <div className="flex gap-[10px] items-center">
          <Image src={drive} alt="drive image" className="w-[30px] h-[30px]" />{" "}
          Задній привід
        </div>
        <div className="flex gap-[10px] items-center">
          <Image src={gearbox} alt="gearbox" className="w-[30px] h-[30px]" />{" "}
          Автоматична
        </div>
        <div className="flex gap-[10px] items-center">
          <FuelIcon className="w-[30px] h-[30px]" /> Бензин, 5.7 л
        </div>
        <div className="flex gap-[10px] items-center">
          <MapPin className="w-[30px] h-[30px]" /> Львів
        </div>
      </div>
      <Button className="hidden max-sm:bg-blue-500 max-sm:hover:bg-blue-300 max-sm:rounded-[8px] max-sm:mt-[20px] max-sm:w-[350px] max-sm:h-[60px] max-sm:text-white max-sm:font-semibold max-sm:flex max-sm:items-center max-sm:ml-[10px] max-sm:text-[25px]">
        <Bookmark className="!w-[30px] !h-[30px]" />
        Додати в обране
      </Button>
      {/* Characteristics */}
      <div className="w-[570px] bg-white shadow-lg h-auto border-2 border-black rounded-[8px] mt-[40px] flex flex-col max-sm:w-full max-sm:mt-[20px]">
        <p className="font-medium text-[25px] mt-[10px] ml-[20px] max-sm:ml-[10px]">
          Характеристики
        </p>
        <div className="grid grid-cols-2 mt-[10px] ml-[20px] mb-[20px] max-sm:ml-[10px]">
          <div className="flex flex-col gap-[10px]">
            <p className="font-normal text-[20px]">Потужність</p>
            <p className="font-normal text-[20px]">Коробка передач</p>
            <p className="font-normal text-[20px]">Тип приводу</p>
            <p className="font-normal text-[20px]">Колір</p>
            <p className="font-normal text-[20px]">Кількість дверей</p>
            <p className="font-normal text-[20px]">Участь у ДТП</p>
            <p className="font-normal text-[20px]">VIN-код</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="font-normal text-[20px]">375 к.с.</p>
            <p className="font-normal text-[20px]">Автоматична</p>
            <p className="font-normal text-[20px]">Задній</p>
            <p className="bg-gray-600 border-2 border-black rounded-full w-[30px] h-[30px]"></p>
            <p className="font-normal text-[20px]">2</p>
            <p className="font-normal text-[20px]">Відсутня</p>
            <p className="font-normal text-[20px]">1HGCM82633A004352</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailInfo;
