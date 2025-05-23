"use client";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

const Bookmark = dynamic(() => import("lucide-react").then(mod => mod.Bookmark), { ssr: false });
const User = dynamic(() => import("lucide-react").then(mod => mod.User), { ssr: false });
const PhoneButton = dynamic(() => import("./PhoneButton"), { ssr: false });

const RightSideInfo = () => {
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
    <div className="flex flex-col">
      <h1 className="text-[55px] font-normal max-sm:hidden">
        Dodge Challenger
      </h1>
      <p className="text-[40px] font-normal max-sm:hidden">47 924 $</p>
      <Button onClick={handleFavoriteClick} className="bg-blue-500 hover:bg-blue-300 rounded-[8px] mt-[20px] w-[350px] h-[60px] text-white font-semibold flex items-center justify-center text-[25px] max-sm:hidden">
        <Bookmark className="!w-[30px] !h-[30px]" />
        Додати в обране
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
          <h1 className="text-[30px] font-normal">Андрій</h1>
        </div>
        <Suspense fallback={<div>Завантаження...</div>}>
          <PhoneButton />
        </Suspense>
        {/* User description about car */}
        <p className="text-[30px] mt-[30px] mb-2 max-sm:mt-[10px] max-[320px]:text-[25px] max-[320px]:font-semibold">
          Опис від продавця
        </p>
        <p className="text-[20px] font-normal">
          Автомобіль Dodge Challenger 2023 року - це потужний і стильний
          спортивний автомобіль, який поєднує в собі класичний дизайн і сучасні
          технології. Він оснащений потужним двигуном, що забезпечує вражаючу
          продуктивність на дорозі. Інтер'єр автомобіля пропонує комфортні
          сидіння та сучасну інформаційно-розважальну систему, що робить його
          ідеальним вибором для тих, хто цінує швидкість і комфорт.
        </p>
      </div>
    </div>
  );
};

export default RightSideInfo;
