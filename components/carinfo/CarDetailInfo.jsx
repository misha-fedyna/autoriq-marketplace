"use client";

import { Dot, FuelIcon, MapPin, Bookmark } from "lucide-react";
import Image from "next/image";
import gearbox from "../../assets/images/gearbox.png";
import drive from "../../assets/images/drive.png";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/AuthContext";

const CarDetailInfo = ({ carInfo }) => {
  const { isAuthenticated } = useAuth();

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast.warning("Будь ласка, увійдіть в систему, щоб додати автомобіль у обране", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    // Add favorite logic here when authenticated
  };

  return (
    <div className="mt-[20px]">
      <h1 className="font-semibold text-[50px] max-sm:text-[35px] max-sm:ml-[10px] max-[375px]:ml-1 max-[375px]:mt-[-10px] max-[320px]:text-[30px]">
        {carInfo.title} {carInfo.year}
      </h1>

      {/* Price */}
      <div className="flex flex-row mt-0 items-center max-sm:ml-[10px] max-[375px]:ml-1">
        <p className="font-medium text-[30px] max-[320px]:text-[20px]">{carInfo.price} $</p>
        <Dot />
        <p className="font-normal text-[20px] max-[320px]:text-[15px]">{carInfo.price * 41} грн</p>
        <Dot />
        <p className="font-normal text-[20px] max-[320px]:text-[15px]">{carInfo.price * 0.88} €</p>
      </div>

      {/* Short info */}
      <div className="grid grid-cols-2 gap-[20px] mt-[20px] max-sm:ml-[10px] max-[375px]:ml-1 max-[375px]:mt-[10px]">
        <div className="flex gap-[10px] items-center">
          <Image src={drive} alt="drive image" className="w-[30px] h-[30px]" loading="lazy" />
          {carInfo.drive_type_display} привід
        </div>
        <div className="flex gap-[10px] items-center">
          <Image src={gearbox} alt="gearbox" className="w-[30px] h-[30px]" loading="lazy" />
          {carInfo.transmission_display}
        </div>
        <div className="flex gap-[10px] items-center">
          <FuelIcon className="w-[30px] h-[30px]" /> {carInfo.fuel_type_display}, {carInfo.engine_capacity} л
        </div>
        <div className="flex gap-[10px] items-center">
          <MapPin className="w-[30px] h-[30px]" /> {carInfo.city}
        </div>
      </div>

      <Button onClick={handleFavoriteClick} className="hidden max-sm:bg-blue-500 max-sm:hover:bg-blue-300 max-sm:rounded-[8px] max-sm:mt-[20px] max-sm:w-[350px] max-sm:h-[60px] max-sm:text-white max-sm:font-semibold max-sm:flex max-sm:items-center max-sm:ml-[10px] max-sm:text-[25px] max-[375px]:items-center max-[320px]:w-[300px]">
        <Bookmark className="!w-[30px] !h-[30px]" />
        Додати в обране
      </Button>
      <ToastContainer />

      {/* Characteristics */}
      <div className="!w-[500px] max-sm:!w-[400px] max-sm:mx-auto bg-white shadow-lg h-auto border-2 border-black rounded-[8px] mt-[40px] flex flex-col max-sm:mt-[20px] max-[375px]:!w-[360px] max-[320px]:!w-[300px]">
        <p className="font-medium text-[25px] mt-[10px] ml-[20px] max-sm:ml-[10px] max-[320px]:mt-[5px]">
          Характеристики
        </p>
        <div className="grid grid-cols-2 mt-[10px] ml-[20px] mb-[20px] max-sm:ml-[10px] max-[320px]:mt-[5px]">
          <div className="flex flex-col gap-[10px] max-sm:w-[150px] max-[375px]:w-[130px] max-[320px]:gap-[5px]">
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Потужність</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Коробка передач</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Тип приводу</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Колір</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Кількість дверей</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">Участь у ДТП</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">VIN-код</p>
          </div>
          <div className="flex flex-col gap-[10px] max-[320px]:gap-[5px]">
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">{carInfo.power} к.с.</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">{carInfo.transmission_display}</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">{carInfo.drive_type_display}</p>
            <p className="bg-gray-600 border-2 border-black rounded-full w-[30px] h-[30px] max-[375px]:w-[25px] max-[375px]:h-[25px] max-[320px]:w-[20px] max-[320px]:h-[20px]"></p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">{carInfo.door_count}</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]"> {carInfo.had_accidents ? "Присутня" : "Відсутня"}</p>
            <p className="font-normal text-[20px] max-sm:text-[18px] max-[375px]:text-[15px] max-[320px]:text-[12px]">{carInfo.vin_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailInfo;
