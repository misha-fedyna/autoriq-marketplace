"use client";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, useEffect, useState } from "react";
import { User, Bookmark } from "lucide-react";

const PhoneButton = dynamic(() => import("./PhoneButton"), { ssr: false });

const RightSideInfo = ({ carInfo }) => {
  const { isAuthenticated } = useAuth();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // Перевіряємо чи авто вже в обраному
    const favs = JSON.parse(localStorage.getItem("favoriteCars") || "[]");
    setFavorite(favs.some((fav) => fav.id === carInfo.id));
  }, [carInfo.id]);

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
    let favs = JSON.parse(localStorage.getItem("favoriteCars") || "[]");
    if (favorite) {
      favs = favs.filter((fav) => fav.id !== carInfo.id);
      toast.error("Автомобіль видалено з обраного", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      favs.push(carInfo);
      toast.success("Автомобіль додано в обране", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    localStorage.setItem("favoriteCars", JSON.stringify(favs));
    setFavorite(!favorite);
    // Диспатчимо кастомну подію для оновлення списку збережених авто
    window.dispatchEvent(new Event("favoriteChanged"));
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[55px] font-normal max-sm:hidden">
        {carInfo.title}
      </h1>
      <p className="text-[40px] font-normal max-sm:hidden">{carInfo.price} $</p>
      <Button onClick={handleFavoriteClick} className={`bg-blue-500 hover:bg-blue-300 rounded-[8px] mt-[20px] w-[350px] h-[60px] text-white font-semibold flex items-center justify-center text-[25px] max-sm:hidden ${favorite ? "opacity-70" : ""}`}>
        <Bookmark className={`!w-[30px] !h-[30px] ${favorite ? "fill-white" : ""}`} />
        {favorite ? "В обраному" : "Додати в обране"}
      </Button>
      <ToastContainer />
      <div className="flex flex-col bg-white rounded-[8px] mt-[40px] max-w-[600px] h-auto shadow-lg p-5 max-sm:mt-[-20px] max-sm:mb-[50px] max-sm:mx-3 max-[375px]:mt-[-30px]">
        {/* User info */}
        <div className="flex items-center mb-[10px] gap-[10px]">
          <div className="rounded-full w-[40px] h-[40px] bg-white border-2 border-gray-500 flex items-center justify-center">
            <Suspense fallback={<div className="w-[40px] h-[40px] bg-gray-200 rounded-full" />}>
              <User className="text-gray-500" />
            </Suspense>
          </div>
          <h1 className="text-[30px] font-normal">{carInfo.user.username}</h1>
        </div>
        <Suspense fallback={<div>Завантаження...</div>}>
          <PhoneButton userInfo={carInfo.user} carData={carInfo} />
        </Suspense>
        {/* User description about car */}
        <p className="text-[30px] mt-[30px] mb-2 max-sm:mt-[10px] max-[320px]:text-[25px] max-[320px]:font-semibold">
          Опис від продавця
        </p>
        <p className="text-[20px] font-normal">
          {carInfo.description || "Опис відсутній"}
        </p>
      </div>
    </div>
  );
};

export default RightSideInfo;
