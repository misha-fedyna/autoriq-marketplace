"use client";

import dynamic from "next/dynamic";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const X = dynamic(() => import("lucide-react").then(mod => mod.X), { ssr: false });
const User = dynamic(() => import("lucide-react").then(mod => mod.User), { ssr: false });

const PhoneButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex rounded-[8px] bg-blue-500 m-0 text-white text-[25px] h-12 w-[300px] hover:bg-blue-300 justify-center items-center max-[320px]:w-[250px]">
        (063) XXX XX XX
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex items-center">
          <AlertDialogTitle className="w-auto font-bold text-[20px] text-blue-500 ml-[100px] max-sm:ml-[55px] max-[375px]:ml-[50px] max-[375px]:text-[17px] max-[320px]:ml-[-10px] max-[320px]:!text-[18px]">
            Номер телефону продавця
          </AlertDialogTitle>

          <AlertDialogCancel className="px-3 rounded-full hover:bg-gray-200 transition ml-auto mr-2 max-sm:mr-[-20px] max-[320px]:mr-0">
            <X className="w-5 h-5" />
          </AlertDialogCancel>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center max-[320px]:w-[300px] max-[320px]:ml-[-15px]">
          <p className="text-[25px] font-semibold">Dodge Challenger 2023</p>
          <div className="flex items-center mb-[10px] mt-[40px] gap-[10px]">
            <div className="rounded-full w-[40px] h-[40px] bg-white border-2 border-gray-500 flex items-center justify-center">
              <User className="text-gray-500" />
            </div>
            <h1 className="text-[30px] font-normal">Андрій</h1>
          </div>
          {/* Number */}
          <div className="flex justify-center items-center h-[50px] bg-blue-500 text-white w-[300px] rounded-[8px] text-[25px] font-semibold mt-[20px] mb-[20px] mx-auto">
            (063) 587 34 29
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PhoneButton;
